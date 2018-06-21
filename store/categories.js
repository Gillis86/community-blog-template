export const state = () => ({
    categories:[],
    colors:['#00d1ff','#ba78cd','#08c299','#645c84','#ef7b7b','#c06c84'],
    current: null,
})

export const mutations = {
    'SET_CATEGORIES'(state,categories){
        let counter = 0
        for(let category of categories){
                let obj = {
                    id: category.id,
                    name: category.name,
                    color:state.colors[counter],
                }
                state.categories.push(obj)
                counter++
        }
    },
    'SET_CURRENT'(state,id){
        state.current = id

    }
}


export const getters = {
    getCategories(state){
        return state.categories
    },
    getCurrent(state){
        return state.current
    },
}


export const actions = {
    setCategories({commit}){
        return this.$axios.$get('/categories')
        .then(data => {
            commit('SET_CATEGORIES',data.filter(cat => cat.name !== 'Uncategorized'))        
        })
        .catch(err => console.log(err))         
    }
}