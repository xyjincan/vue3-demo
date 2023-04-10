
// 路由命中组件
// 详细列表

const Home = { 
    mounted() {
        console.log(`route Home.`)
    },
    template: '<div class="nav-app" >Home</div>' 
};

const Dashboard = {
    mounted() {
        console.log(`route Dashboard.`)
    },
    template: '<div class="nav-app" >Dashboard</div>' 
};

const About = {
    mounted() {
        console.log(`route About.`)
    },
    template: '<div class="nav-app" >About</div>' 
};


export  { Home,Dashboard,About }
