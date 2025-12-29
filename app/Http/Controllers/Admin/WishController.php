<?php

namespace App\Http\Controllers\Admin;

use App\Events\MessageSent;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreWishRequest;
use App\Http\Requests\UpdateWishRequest;
use App\Models\Fulfillment;
use App\Models\Message;
use App\Models\Wish;
use App\Notifications\NewMessageNotification;
use App\Services\CategoryService;
use App\Services\DonationService;
use App\Services\UserService;
use App\Services\WishService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class WishController extends Controller
{
    const moduleDirectory = 'Admin/Wish/';
    const moduleName = 'Wish';

    public function __construct(
        protected WishService $wishService,
        protected CategoryService $categoryService,
        protected UserService $userService,
        protected DonationService $donationService,

    ){}
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        Gate::authorize('viewAny', Wish::class);
        $wishes = $this->wishService->getListWithFilter($request);
        return Inertia::render(self::moduleDirectory.'List', [
            'module' => self::moduleName,
            'wishes' => $wishes,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        Gate::authorize('create', Wish::class);
        $categories = $this->categoryService->listByStatus();
        $wishers = collect();
        if (Auth::user()->user_type == 'organization'){
            $wishers = $this->userService->getOrganizationWisherList();
        }
        return Inertia::render(self::moduleDirectory.'Create', [
            'module' => self::moduleName,
            'categories' => $categories,
            'ageRanges' => ageRanges(),
            'wishers' => $wishers,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreWishRequest $request): RedirectResponse
    {
        Gate::authorize('create', Wish::class);
        $wish = $this->wishService->createWish($request);
        if ($wish){
            return redirect()->route('wishes.index')->with('success', 'Wish created successfully!');
        }
        return redirect()->route('wishes.index')->with('error', 'Error to created wish');
    }

    /**
     * Display the specified resource.
     */
    public function show(Wish $wish): Response
    {
        Gate::authorize('view', $wish);
        $wish->load([
            'user',
            'organization',
            'category',
            'files', // Make sure this matches your relationship name
            'createBy'
        ]);
        return Inertia::render(self::moduleDirectory.'Show', [
            'module' => self::moduleName,
            'wish' => $wish,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Wish $wish): Response
    {
        Gate::authorize('update', $wish);
        $wish->load([
            'user',
            'organization',
            'category',
            'files' // Make sure this matches your relationship name
        ]);
        $categories = $this->categoryService->listByStatus();
        $statuses = wishStatus();
        $wishers = collect();
        if (Auth::user()->user_type == 'organization'){
            $wishers = $this->userService->getOrganizationWisherList();
        }
        return Inertia::render(self::moduleDirectory.'Edit', [
            'module' => self::moduleName,
            'categories' => $categories,
            'ageRanges' => ageRanges(),
            'wish' => $wish,
            'statuses' => $statuses,
            'wishers' => $wishers,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateWishRequest $request, Wish $wish): RedirectResponse
    {
        Gate::authorize('update', $wish);
        $updateWish = $this->wishService->updateWish($request, $wish);
        if ($updateWish){
            return redirect()->route('wishes.index')->with('success', 'Wish updated successfully!');
        }
        return redirect()->route('wishes.index')->with('error', 'Error to updated wish');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Wish $wish): RedirectResponse
    {
        Gate::authorize('delete', $wish);
        $deleteWishItem = $this->wishService->deleteWish($wish);
        if ($deleteWishItem){
            return redirect()->route('wishes.index')->with('success', 'Wish item deleted successfully.');
        }
        return redirect()->route('wishes.index')->with('error', 'Opps... Failed to delete wish item.');
    }

    public function deleteWishFile(string $fileId): RedirectResponse
    {
        $wishFile = $this->wishService->deleteSingleFile($fileId);
        if ($wishFile){
            return redirect()->back()->with('success', 'Wish file deleted successfully!');
        }
        return redirect()->back()->with('error', 'Error to delete wish file');
    }

    public function makeFeatureFile(string $fileId): RedirectResponse
    {
        $wishFile = $this->wishService->makeFeatureFile($fileId);
        if ($wishFile){
            return redirect()->back()->with('success', 'Make file featured successfully!');
        }
        return redirect()->back()->with('error', 'Error to make feature file');
    }

    public function wishList(Request $request)
    {
        $categoryIds = [];
        if (checkDonor() or checkDonorWisher()){
            $categoryIds = Auth::user()->donations()->pluck('category_id');
        }
        $request->merge(['categoryIds' => $categoryIds]);

        $wishes = $this->wishService->getListByStatus($request, 'approved');
        return Inertia::render(self::moduleDirectory.'FullFillWish', [
            'module' => "Wishes Near You",
            'wishes' => $wishes,
        ]);
    }

    public function wishDetail(string $id): Response
    {
        $wish = $this->wishService->find($id);
        $donations = $this->donationService->getDonationsByCategoryAndStatus($wish->category_id, 'available');
        return Inertia::render(self::moduleDirectory.'Detail', [
            'module' => self::moduleName,
            'wish' => $wish,
            'donations' => $donations,
        ]);

    }

    public function storeWishFulfilInfo(Request $request): RedirectResponse
    {
       $wishFulfill = $this->wishService->wishFulfilRequestByDonor($request);
        if ($wishFulfill){
            return redirect()->back()->with('success', 'Wish fulfilment request send to wisher successfully!');
        }
        return redirect()->back()->with('error', 'Something went wrong! Try again later');
    }

    public function updateWishFulfilStatus(Request $request): Response
    {
        $fulfilment = $this->wishService->changeFulfilmentStatus($request);
        if ($request->filled('status')){
            if ($fulfilment){
                $request->session()->flash('success', 'Wish fulfilment request send to wisher successfully!');
            }else{
                $request->session()->flash('error', 'Something went wrong! Try again later');
            }
        }
        return Inertia::render(self::moduleDirectory.'ConfirmationReceiptPage', [
            'fulfillment' => $fulfilment,
            'wisher' => $fulfilment->wish->user,
            'donor' => $fulfilment->donation->user,
            'wish' => $fulfilment->wish->load('latestFulfillment', 'latestFulfillment.donation.user'),
            'donation' => $fulfilment->donation,
            'userType' => Auth::user()->role,
            'initialMessages' => $fulfilment->messages,
            'latestMessage' => Message::latest()->first()
        ]);
    }

    public function storeWishFulfilMessage(Request $request)
    {
        $fulfilment = Fulfillment::find($request->fulfillment_id);
        $validated = $request->validate([
            'message' => 'required|string',
            'file' => 'nullable|file|max:10240',
        ]);

        $filePath = null;
        $fileName = null;

        if ($request->hasFile('file')) {
            $filePath = $request->file('file')->store('chat', 'public');
            $fileName = $request->file('file')->getClientOriginalName();
        }

        $fulfilMessage = $fulfilment->messages()->create([
            'sender_id' => auth()->id(),
            'receiver_id' => auth()->id() === $fulfilment->wish->user_id
                ? $fulfilment->donation->user_id
                : $fulfilment->wish->user_id,
            'message' => $request->message,
            //'file_path' => $filePath,
            //'file_name' => $fileName,
        ]);

        $fulfilMessage->load(['sender:id,name', 'receiver:id,name']);

        broadcast(new MessageSent($fulfilMessage))->toOthers();

        // 🔔 Notify other user
//        $receiver = auth()->id() === $fulfilment->wish->user_id
//            ? $fulfilment->donation->user
//            : $fulfilment->wish->user;
//
//        $receiver->notify(new NewMessageNotification($fulfilMessage));
//        return redirect()
//            ->back()
//            ->with([
//                'latestMessage' => $fulfilMessage
//            ]);

        return to_route('wish.fulfill.status.change', ['fulfilment_id' => $request->fulfillment_id]);
    }
}
