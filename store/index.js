export const actions = {
    async nuxtServerInit({ dispatch }) {
        await dispatch('categories/setCategories')
        await dispatch('posts/loadLatest')
        await dispatch('posts/loadPosts','all')
        await dispatch('authors/setAuthors')
      }
}