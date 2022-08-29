import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        name:'Main',
        component:()=>import("../views/ManMain.vue"),
        children:[
            {
                path:'/home',
                name:'home',
                component:()=>import("../views/Home/HomeIndex.vue")
            },
            {
                path:'/user',
                name:'user',
                component:()=>import("../views/User/UserIndex.vue")
            }
        ]

    },
   
]


const router=new VueRouter({
    mode:'history',
    routes
})

export default router