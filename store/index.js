export const state = () => ({
    list: [],
})
export const mutations = {
    equateList(state, text) {
        state.list = text
    },
}