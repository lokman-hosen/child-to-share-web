<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Wish Fulfil Request</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f4f7;
            padding: 30px;
        }
        .email-wrapper {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 0 5px rgba(0,0,0,0.1);
        }
        .header {
            background: #4F46E5;
            padding: 20px;
            color: #ffffff;
            font-size: 22px;
            font-weight: bold;
            text-align: center;
        }
        .content {
            padding: 25px 30px;
            color: #333333;
            font-size: 15px;
            line-height: 1.6;
        }
        .label {
            font-weight: bold;
        }
        .footer {
            background: #f4f4f7;
            color: #777;
            font-size: 12px;
            padding: 15px;
            text-align: center;
        }
        .content a {
            background-color: #555555;
            border: none;
            color: #FFFFFF;
            padding: 10px 20px;
            text-align: center;
            transition-duration: 0.4s;
            margin: 5px 0;
            text-decoration: none;
            font-size: 14px;
            cursor: pointer;
            border-right: 5px;
            font-weight: 600;
        }
    </style>
</head>
<body>

<div class="email-wrapper">

    <div class="header">
        New Wish Fulfillment Request
    </div>

    <div class="content">

        <p>Dear Wisher/Guardian,</p>

        <p>We’re happy to inform you that a donor has expressed interest in fulfilling the following wish:</p>

        <p><strong>{{ $wishTitle }}</strong></p>

        <p><strong>Donor Name:</strong> {{ $donorName }}</p>

        <p>Please visit your dashboard to review the request and take the next steps.</p>

        <a target="_blank" href="{{ route('wish.fulfill.status.change', ['fulfilment_id' => $fulfillment->id]) }}">
            View Fulfillment Details
        </a>
    </div>

    <div class="footer">
        This is an automated message from
        <a target="_blank" href="https://threewish.org">ThreeWish</a>.
    </div>

</div>


</body>
</html>
