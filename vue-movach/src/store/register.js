
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
        },
        pushIntoUsers (state, users) {
            //아이템 단위로 저장시키지 위해서 전개연산자씀
            state.users.push(...users)
        }
    },
    actions: {
        handleRegister({state,commit}) {
            const id = state.id
            const password = state.password
            const confirmPwd = state.confirmPwd
            const email = state.email
            const emailRe = /^[A-Za-z0-9-]+@[A-Za-z0-9-]+[A-Za-z0-9-]+/
            //console.log(state.id, state.password, state.confirmPwd, state.email)

            // 각 input박스에 입력되어있나 확인하고 안되어 있으면 해당 input박스로 커서 이동
            if(!id) {
                alert('아이디를 입력해주세요');
                this.$refs.id.focus();
                return;
            }
            if(!password) {
                alert('비밀번호를 입력해주세요');
                this.$refs.password.focus();
                return;
            }
            if(!confirmPwd) {
                alert('비밀번호 확인란에 비밀번호를 입력해주세요');
                this.$refs.confirmPwd.focus();
                return;
            }
            if(!email) {
                alert('이름를 입력해주세요');
                this.$refs.email.focus();
                return;
            }
            // 비밀번호가 6자리 이상 아니면 경고창 띄움
            if(password.length<6) {
                alert('비밀번호는 최소 6자리 이상 작성해야 합니다');
                state.password='';
                this.$refs.password.focus();
                return;
            }
            // 비밀번호입력란과 확인란이 다르면 경고창 띄움
            if(password!=confirmPwd) {
                alert('비밀번호가 서로 다릅니다. 다시 입력해주세요');
                state.password='';
                state.confirmPwd='';
                this.$refs.password.focus();
                return;
            }
            
            // 이메일 형식이 아니면 경고창 띄움
            if(!emailRe.test(email)) {
                alert('이메일 형식이 아닙니다.');
                state.email='';
                this.$refs.email.focus();
                return;
            }
            //USERS 로컬스토리지에 가입정보 추가
            if(localStorage.getItem('USERS') != undefined) {
                const users = JSON.parse(localStorage.getItem('USERS'))
                commit('updateState', {
                    users: users
                })
            }
            commit('pushIntoUsers', {
                users: {
                    id,password,email
                }
            })

            localStorage.setItem('USERS', JSON.stringify(state.users))

            //home으로 이동
            this.$router.push({
                name: 'Home'
            })
        }
    }
}