import axios from 'axios';

export default {
    namespaced: true,
    state: () => ({
        title: '',
        loading: false,
        movies: []
    }),
    getters: {},
    mutations: {
        updateState (state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
        pushIntoMovies (state, movies) {
            //아이템 단위로 저장시키지 위해서 전개연산자씀
            state.movies.push(...movies)
        } 
    },
    actions: {
        async searchMovies ({state, commit}) {
            //state.loading = true
            commit('updateState', {
                loading: true
            })
            const res = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=2e62104&s=${state.title}&page=1`)
            const pageLength = Math.ceil(res.data.totalResults /10)

            commit('updateState', {
                movies: res.data.Search
            })

            if (pageLength > 1) {
                for(let i=2; i <= pageLength; i++) {
                    if(i > 4) break
                    const resMore = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=2e62104&s=${state.title}&page=${i}`)
                    commit('pushIntoMovies', resMore.data.Search)
                }
            }
            commit('updateState', {
                loading: false
            })
        }
    }
}