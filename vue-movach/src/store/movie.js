import axios from 'axios';

export default {
    namespaced: true,
    state: () => ({
        title: '',
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
            const key = '1f23d9ce4e683611b73fb9600216d051'
            const res = await axios.get(`https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&movieNm=${state.title}&curPage=1`)
            const pageLength = Math.ceil(res.data.movieListResult.totCnt /10)
            commit('updateState', {
                movies: res.data.movieListResult.movieList
            })

            if (pageLength > 1) {
                for(let i=2; i <= pageLength; i++) {
                    if(i > 4) break
                    const resMore = await axios.get(`https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&movieNm=${state.title}&curPage=${i}`)
                    commit('pushIntoMovies', resMore.data.movieListResult.movieList)
                }
            }
        }
    }
}