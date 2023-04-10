// 
export default {
    state () {
        return {
            count: 10
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
}