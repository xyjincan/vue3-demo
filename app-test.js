// 
export default {
    data() {
      return { isAuthenticated: true }
    },
    computed: {
      username() {
        // TODO
        // 我们很快就会看到 `params` 是什么
        return this.$route.params.username
      },
    },
    methods: {
      goToDashboard() {
        // 
        console.log(this.$store.state.count)
        if (this.isAuthenticated) {
          this.$router.push(`/dashboard`)
        } else {
          this.$router.push('/login')
        }
      },
    },
    template: `
      <div>Route Test</div>
      <button class="logo" @click="goToDashboard">go</button>
      {{ username }}
    `
}