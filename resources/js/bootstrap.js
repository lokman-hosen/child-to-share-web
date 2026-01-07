// bootstrap.js - Updated version
import axios from 'axios';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const token = document
    .querySelector('meta[name="csrf-token"]')
    ?.getAttribute('content');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
}

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true,
    // Add CSRF token to all auth requests
    authEndpoint: '/broadcasting/auth',
    auth: {
        headers: {
            'X-CSRF-TOKEN': token,
            'X-Requested-With': 'XMLHttpRequest',
        }
    },
    // Add for better connection handling
    // wsHost: import.meta.env.VITE_PUSHER_HOST || window.location.hostname,
    // wsPort: import.meta.env.VITE_PUSHER_PORT || 6001,
    // wssPort: import.meta.env.VITE_PUSHER_PORT || 6001,
    // enabledTransports: ['ws', 'wss'],
});
