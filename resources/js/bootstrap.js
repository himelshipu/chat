/*require('./bootstrap');

Vue.component('chat-messages', require('./components/ChatMessages.vue'));
Vue.component('chat-form', require('./components/ChatForm.vue'));

const app = new Vue({
    el: '#app',

    data: {
        messages: []
    },

    created() {
        this.fetchMessages();
    },

    methods: {
        fetchMessages() {
            axios.get('/messages').then(response => {
                this.messages = response.data;
            });
        },

        addMessage(message) {
            this.messages.push(message);

            axios.post('/messages', message).then(response => {
                console.log(response.data);
            });
        }
    }
});*/


try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');
    require('axios');
} catch (e) {
}

/** * We'll load the axios HTTP library which allows us to easily issue requests * to our Laravel back-end. This library automatically handles sending the * CSRF token as a header based on the value of the "XSRF" token cookie. */
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/** * Echo exposes an expressive API for subscribing to channels and listening * for events that are broadcast by Laravel. Echo and event broadcasting * allows your team to easily build robust real-time web applications. */
/*import Echo from 'laravel-echo';
window.Pusher = require('pusher-js');
window.Echo = new Echo({   broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    encrypted: true });*/

import Echo from "laravel-echo"
window.Pusher = require('pusher-js');
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '4dc725e04a4f449253c2',
    cluster: 'ap2',
   /* encrypted: false*/
});

/*window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    wsHost: window.location.hostname,
    wsPort: 6001,
    disableStats: true,
    enabledTransports: ['ws', 'wss'] // <- added this param
});*/


