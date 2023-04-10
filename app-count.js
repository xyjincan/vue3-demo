export default {
    template: `
        <div>{{ count }}</div>
        <button @click="increment">点击</button>
        <p>
        <router-link   class="nav"  to="/">Go to Home</router-link>
        <router-link   class="nav"  to="/dashboard">Go to Dashboard</router-link>
        <router-link   class="nav"  to="/about">Go to About</router-link>
        </p>

        <div><AppTest></AppTest></div>
        
        <router-view></router-view>
    `,
    methods: {
        increment() {
            this.$store.commit('increment')
            console.log(this.$store.state.count)
        }
    },
    computed: {
        count () {
            return this.$store.state.count
        }
    }
};