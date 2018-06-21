export const state = () => ({
    posts:[],
    latest:[],
    searchResults:[],
    isLoading:false
})

export const mutations = {
    'LOAD_POSTS'(state,posts){
        for(let post of posts){
            state.posts.push(post)
        }
    },
    'LOAD_LATEST'(state,lastPost){
        if(!state.latest.find(post => post.id === lastPost.id)){
            state.latest.push(lastPost)
        }
        
    },

    'RESET_POSTS'(state){
        state.posts = []
    },
    'IS_LOADING'(state){
        state.isLoading = true
    },
    'IS_NOT_LOADING'(state){
        state.isLoading = false
    },
    'SET_SEARCH_RESULTS'(state,posts){
        for(let post of posts){
            state.searchResults.push(post)
        }
    },
    'RESET_SEARCH_RESULTS'(state){
        state.searchResults = []
    }
}


export const getters = {
    getPosts(state){
        return state.posts
    },
    getLatest(state){
        return state.latest
    },
    getIsLoading(state){
        return state.isLoading
    },
    getSearchResults(state){
        return state.searchResults
    }
}


export const actions = {
    loadPosts({commit,getters},category){
        commit('IS_LOADING')
        return this.$axios.$get('/posts',{
            params:{
                categories: category === 'all' ? null : category,
                offset: getters.getPosts.length
            }
        }).then(data => {
            if(data.length){
                commit('LOAD_POSTS',data)
            }else{
                commit('IS_NOT_LOADING')
                setTimeout(()=>{
                    const button = document.getElementById('load')
                    button.textContent = "no more post"
                    button.disabled = true
                },0)
                
            }
        }).then(()=> commit('IS_NOT_LOADING'))
        .catch(err => console.log(err))    
    },

    loadLatest({commit,rootGetters}){
        for (let cat of rootGetters['categories/getCategories'] ){
            this.$axios.$get('/posts',{
                params:{
                    categories:cat.id
                }
            }).then(data => {
                if(data.length){
                    commit('LOAD_LATEST',data[0])
                }
            }).catch(err => console.log(err))
        }
    },
    searchPosts({commit,getters},term){
        commit('IS_LOADING')
        this.$axios.$get(`/posts?search=${term}`,{
            params:{
                offset: getters.getSearchResults.length
            }
        })
        .then(data => {
            if(data.length){
                commit('SET_SEARCH_RESULTS',data)
            }else{
                commit('IS_NOT_LOADING')
                setTimeout(()=>{
                    const button = document.getElementById('load')
                    button.textContent = "no more post"
                    button.disabled = true
                },0)
            }
        }).then(() => commit('IS_NOT_LOADING') )

    }
}