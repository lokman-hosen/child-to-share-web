import axios from 'axios';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// 👇 REQUIRED for Reverb
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'reverb',
    key: 'local', // required but unused by Reverb
    wsHost: window.location.hostname,
    wsPort: 8080,
    wssPort: 8080,
    forceTLS: false,
    enabledTransports: ['ws', 'wss'],
});
