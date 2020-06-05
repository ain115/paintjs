export default {
    namespaced: true,
    state: ()=>({
        users: [],
        id: '',
        password: '',
        confirmPwd: '',
        email: ''
    }),
    mutations: {
        //어떤 state값이 와도 저장하도록 해주는 메서드
        updateState (state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        }
    }
}