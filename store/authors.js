export const state = () => ({
    authorPosts:[],
    authorsImg:['/img/hemingway.jpg','/img/terry.png','/img/ursula.jpg','/img/woolf.jpg'],
    authors:[],
    currentAuthor:{}
})

export const mutations = {
    'SET_AUTHORS'(state,authors){
        let counter = 0;
        for(let author of authors){
            author.img = state.authorsImg[counter]
            state.authors.push(author)
            counter++
        }
    },
    'SET_AUTHOR'(state,author){
        if (Object.keys(state.currentAuthor).length){
            state.currentAuthor = {}
            state.currentAuthor = author
        }
        state.currentAuthor = author
    },
    'SET_AUTHOR_POSTS'(state,posts){
        for (let post of posts){
            state.authorPosts.push(post)
        }
    },
    'RESET_AUTHOR_POSTS'(state){
        state.authorPosts = []
    }
}


export const getters = {
    getAuthors(state){
        return state.authors
    },
    getCurrentAuthor(state){
        return state.currentAuthor
    },
    getAuthorPosts(state){
        return state.authorPosts
    }
}


export const actions = {
    setAuthors({commit}){
        return this.$axios.$get('/users')
        .then(data => commit('SET_AUTHORS',data.filter(author => author.name !== 'user')));
    },
    loadAuthorPosts({commit,getters},id){
        this.$axios.$get('/posts',{
            params:{
                author:id,
                offset: getters.getAuthorPosts.length
            }
        }).then(data => commit('SET_AUTHOR_POSTS',data))
    },
    setAuthor({commit,dispatch},author){
        commit('SET_AUTHOR',author)
        dispatch('loadAuthorPosts',author.id)
    }
}