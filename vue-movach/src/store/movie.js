import axios from 'axios';

export default {
    namespaced: true,
    state: ()=>({
        title : '',
        movies: [],
        totalN: 0,
        koTotal: 0,
        otherTotal: 0,      
        nationAlt: []
    }), 
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
        /* //검색한 영화 10개까지 보는 코드
        searchMovies ({state, commit}) {
            const key = '1f23d9ce4e683611b73fb9600216d051'
            axios.get(`https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&movieNm=${state.title}&curPage=1`)
                .then((res)=>{
                    //state.movies=res.data.movieListResult.movieList
                    commit('updateState', {
                        movies: res.data.movieListResult.movieList
                    })
                    console.log(state.movies)
                })
         }
         */
         //검색한 영화 30개까지 보는 코드
        async searchMovies ({state, commit}) {
            const key = '1f23d9ce4e683611b73fb9600216d051'
            const res = await axios.get(`https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&movieNm=${state.title}&curPage=1`)
            const result = res.data.movieListResult
            
            const pageLength = Math.ceil(result.totCnt /10)
            
            //국가 리스트
           // commit('updateState', result.movieList.nationAlt)
            result.movieList.filter(list => {
               if(list.nationAlt === "한국"){
                   commit('updateState', {
                       koTotal: state.koTotal+1
                   })
               }else{
                   commit('updateState', {
                    otherTotal: state.otherTotal+1
                   })
               }

            })

            //검색한 movie 데이터값, 전체갯수값 state에 저장
            commit('updateState', {
                movies: result.movieList,
                totalN: result.movieList.length
            })
            console.log(result.movieList)

            //첫 렌더링 갯수
            if (pageLength > 1) {
                for(let i=2; i <= pageLength; i++) {
                    if(i > 2) break
                    const resMore = await axios.get(`https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&movieNm=${state.title}&curPage=${i}`)
                    commit('pushIntoMovies', resMore.data.movieListResult.movieList)
                }
            }
        }

    }
}