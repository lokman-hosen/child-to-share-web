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
    </style>
</head>
<body>

<div class="email-wrapper">

    <div class="header">
        Wish Fulfil Request
    </div>

    <div class="content">

        <p>Dear Guardian,</p>

        <p>A donor wants to fulfill the wish: <strong>{{ $wishTitle }}</strong>.</p>

        <p>Donor: <strong>{{ $donorName }}</strong></p>

        <p>Please check your dashboard for more details.</p>
    </div>

    <div class="footer">
        This is an automated message from <a target="_blank" href="http://threewish.org/">ThreeWish</a>.
    </div>

</div>

</body>
</html>
