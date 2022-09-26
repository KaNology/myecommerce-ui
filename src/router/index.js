import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView'
import SignUpView from '../views/SignUpView'
import SignInView from '../views/SignInView'
import AddCategory from '../views/Category/AddCategory'
import AllCategory from '../views/Category/AllCategory'
import EditCategory from '../views/Category/EditCategory'
import AllProduct from '../views/Product/AllProduct'
import AddProduct from '../views/Product/AddProduct'
import EditProduct from '../views/Product/EditProduct'
import DetailProduct from '../views/Product/DetailProduct'
import CartView from '../views/CartView'
import WishlistView from '../views/WishlistView'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'AdminView',
    component: AdminView
  },
  {
    path: '/signup',
    name: 'SignUpView',
    component: SignUpView
  },
  {
    path: '/signin',
    name: 'SignInView',
    component: SignInView
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'AllCategory',
    component: AllCategory
  },
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory
  },
  {
    path: '/admin/product',
    name: 'AllProduct',
    component: AllProduct
  },
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/product/:id',
    name: 'DetailProduct',
    component: DetailProduct
  },
  {
    path: '/cart',
    name: 'CartView',
    component: CartView
  },
  {
    path: '/wishlist',
    name: 'WishlistView',
    component: WishlistView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
