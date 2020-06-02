import axios from 'axios';

export default {
    namespaced: true,
    state: ()=>({
        title : '',
        movies: [],
        totalNum: 0,
        koTotalNum: 0,
        otherTotalNum: 0,
        totalMovies: [],
        koList: [],
        otherList: []
    }), 
    mutations: {
        //어떤 state값이 와도 저장하도록 해주는 메서드
        updateState (state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
        pushIntoMovies (state, totalMovies) {
            //아이템 단위로 저장시키지 위해서 전개연산자씀
            state.totalMovies.push(...totalMovies)
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

            //검색한 movie 데이터값
            commit('updateState', {
                totalMovies: result.movieList
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
            //검색 전체 갯수
            commit('updateState', {
                totalNum: result.movieList.length,
                movies: state.totalMovies
            })

             //국가 리스트
            result.movieList.map(list => {
               if(list.nationAlt === "한국"){
                   commit('updateState', {
                       koTotalNum: state.koTotalNum+1
                   })
               }else{
                   commit('updateState', {
                    otherTotalNum: state.otherTotalNum+1
                   })
               }

            })

            // const koList1 =  result.movieList.map(list => {
            //     return list.nationAlt === "한국"         
            // })
            commit('updateState', {
                koList: result.movieList.filter(list => {
                    if(list.nationAlt === "한국"){
                            return list
                        }
                    })
             })

             commit('updateState', {
                otherList: result.movieList.filter(list => {
                    if(list.nationAlt !== "한국"){
                            return list
                        }
                    })
             })

        },
        movieListShow ({state, commit}) {
            commit('updateState', {
                movies: state.totalMovies
            })
        },
        movieKoShow ({state, commit}) {
            commit('updateState', {
                movies: state.koList
            })
        },
        movieOtherShow ({state, commit}) {
            commit('updateState', {
                movies: state.otherList
            })
        },
    }
}