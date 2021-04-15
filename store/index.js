export const state = () => ({
    list: [],
})
export const mutations = {
    addList(state, text) {
        state.list.push(text)
    },
}