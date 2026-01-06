import axios from 'axios';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.Pusher = Pusher;

const token = document
    .querySelector('meta[name="csrf-token"]')
    ?.getAttribute('content')

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token
}

window.Echo = new Echo({
    // broadcaster: 'reverb',
    // key: 'local',
    // wsHost: '127.0.0.1',
    // wsPort: 8080,
    // forceTLS: false,
    // encrypted: false,
    // disableStats: true,
    // enabledTransports: ['ws'],

    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true,

    authEndpoint: '/broadcasting/auth',
    auth: {
        headers: {
            'X-CSRF-TOKEN': token,
        },
    },
});
