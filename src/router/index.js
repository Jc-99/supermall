import Vue from 'vue'
import VueRouter from "vue-router";

const Index = () => import('../view/Index/Index')
const Category = () => import('../view/Category/Category')
const Cart = () => import('../view/Cart/Cart')
const User = () => import('../view/User/User')
const Detail = () => import('../view/Detail/Detail')
const Search = () => import('../view/Search/Search')
const Login = () => import('../view/Login/Login')
const Register = () => import('../view/Login/Register')
Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/index'
    },
    {
        path: '/index',
        component: Index,
        meta: {
            showTab: true
        }
    },
    {
        path: '/category',
        component: Category,
        meta: {
            showTab: true
        }
    },
    {
        path: '/cart',
        component: Cart,
        meta: {
            showTab: true
        }
    },
    {
        path: '/user',
        component: User,
        meta: {
            showTab: true
        }
    },
    {
        path: '/detail/:goods_id',
        component: Detail,
        meta: {
            showTab: false
        }
    },
    {
        path: '/search',
        component: Search,
        meta: {
            showTab: false
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },

]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router