let subscriptions = {
    'loginUser': []
}
export default {
    events: {
        loginUser: 'loginUser'
    },
    subscribe: (event, fn) => {
        subscriptions[event].push(fn)
    },
    trigger: (event, data) => {
        subscriptions[event].forEach(fn => fn(data))
    }
}