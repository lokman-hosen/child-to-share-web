import axios from 'axios'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

window.Pusher = Pusher

// Axios setup (still needed for broadcasting auth)
window.axios = axios
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// 🔑 CSRF token (VERY IMPORTANT for presence channels)
const token = document
    .querySelector('meta[name="csrf-token"]')
    ?.getAttribute('content')

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token
}

// ✅ Echo + Pusher configuration
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true,

    // 🔥 REQUIRED for presence channels
    authEndpoint: '/broadcasting/auth',
    auth: {
        headers: {
            'X-CSRF-TOKEN': token,
        },
    },
})
