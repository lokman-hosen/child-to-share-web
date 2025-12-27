<?php

namespace App\Http\Controllers\Admin;

use App\Events\MessageSent;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMessageRequest;
use App\Http\Requests\UpdateMessageRequest;
use App\Models\Fulfillment;
use App\Models\Message;
use App\Notifications\NewMessageNotification;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MessageController extends Controller
{
    const moduleDirectory = 'Admin/Message/';
    const moduleName = 'Chatting';

    /**
     * Display a listing of the resource.
     */
//    public function index(): Response
//    {
//        if (checkAdmin()){
//            return Inertia::render(self::moduleDirectory.'List', [
//                'module' => self::moduleName,
//            ]);
//        }else{
//            return Inertia::render(self::moduleDirectory.'Index', [
//                'module' => self::moduleName,
//            ]);
//        }
//    }

    public function index(Fulfillment $fulfilment)
    {
        return response()->json(
            $fulfilment->messages()
                ->with('sender:id,name')
                ->oldest()
                ->get()
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Fulfillment $fulfilment)
    {
        $validated = $request->validate([
            'message' => 'nullable|string',
            'file' => 'nullable|file|max:10240',
        ]);

        $filePath = null;
        $fileName = null;

        if ($request->hasFile('file')) {
            $filePath = $request->file('file')->store('chat', 'public');
            $fileName = $request->file('file')->getClientOriginalName();
        }

        $message = $fulfilment->messages()->create([
            'sender_id' => auth()->id(),
            'message' => $validated['message'] ?? null,
            'file_path' => $filePath,
            'file_name' => $fileName,
        ]);

        $message->load('sender:id,name');

        broadcast(new MessageSent($message))->toOthers();

        // 🔔 Notify other user
        $receiver = auth()->id() === $fulfilment->wish->user_id
            ? $fulfilment->donation->user
            : $fulfilment->wish->user;

        $receiver->notify(new NewMessageNotification($message));

        return response()->json($message);
    }

    /**
     * Display the specified resource.
     */
    public function show(Message $message)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Message $message)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMessageRequest $request, Message $message)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Message $message)
    {
        //
    }
}
