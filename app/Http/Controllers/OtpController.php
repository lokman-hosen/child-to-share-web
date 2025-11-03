<?php

namespace App\Http\Controllers;

use App\Models\Otp;
use App\Models\User;
use App\Notifications\AssignmentNotification;
use App\Notifications\OtpVerify;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Str;

class OtpController extends Controller
{
    public function __construct(
        protected Otp $otp,
        protected User $user,

    ){}
    public function sendOtp(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'type' => 'required|in:email,phone'
        ]);

        $checkExist = $this->user->where('email', $request->email)->first();
        if ($checkExist){
            return response()->json([
                'success' => false,
                'message' => 'This email already taken. Try by another one.'
            ]);
        }

        // Generate 4-digit OTP
        $otpCode = str_pad(rand(0, 9999), 4, '0', STR_PAD_LEFT);

        // Delete any existing OTP for this email
        $this->otp->where('email', $request->email)->delete();

        // Create new OTP record
        $this->otp->create([
            'type' => $request->type,
            'email' => $request->email,
            'otp' => $otpCode,
            'is_verified' => false
        ]);

        // Send OTP via email
        try {
            Notification::route('mail', [
                $request->email => 'ThreeWish',
            ])->notify(new OtpVerify($otpCode));

            return response()->json([
                'success' => true,
                'message' => 'OTP sent successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to send OTP'
            ], 500);
        }
    }

    public function verifyOtp(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'otp' => 'required|digits:4',
            'type' => 'required|in:email,phone'
        ]);

        $otp = Otp::where('email', $request->email)
            ->where('otp', $request->otp)
            ->where('type', $request->type)
            ->where('created_at', '>=', now()->subMinutes(10)) // OTP valid for 10 minutes
            ->first();

        if ($otp) {
            // Mark OTP as verified
            $otp->update(['is_verified' => true]);

            return response()->json([
                'success' => true,
                'message' => 'OTP verified successfully'
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'Invalid or expired OTP'
        ], 400);
    }
}
