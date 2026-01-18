<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => [
        'api/*',
        'sanctum/csrf-cookie',
        'broadcasting/auth',
        'login',
        'logout',
        'register',
        'forgot-password',
        'reset-password',
        'email/verification-notification',
        'user/profile-information',
        'user/password',
        'user/confirm-password',
        'user/two-factor-authentication',
        'two-factor-challenge',
    ],

    'allowed_methods' => ['*'],

    'allowed_origins' => [
        'http://localhost:5173',
        'http://localhost:3000',
        'http://localhost:8000',
        'http://127.0.0.1:5173',
        'http://127.0.0.1:3000',
        'http://127.0.0.1:8000',
        'https://threewish.org',
        'https://www.threewish.org',
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => [
        '*',
        'X-CSRF-TOKEN',
        'X-Requested-With',
        'Content-Type',
        'X-Auth-Token',
        'Origin',
        'Authorization',
        'Accept',
        'X-XSRF-TOKEN',
        'X-Socket-ID',
    ],

    'exposed_headers' => [
        'XSRF-TOKEN',
        'laravel-session',
    ],

    'max_age' => 60 * 60 * 24, // 24 hours

    'supports_credentials' => true,

];
