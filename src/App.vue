<template>
  <nav>
    <NavbarComp></NavbarComp>
  </nav>
  <router-view 
  v-if="categories && products"
  :baseURL="baseURL" 
  :categories="categories" 
  :products="products"
  @fetchData="fetchData"
  >
  </router-view>
  <FooterComp></FooterComp>
</template>

<script>
import axios from 'axios';
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
    data() {
        return {
            baseURL: "http://localhost:8080/",
            products: null,
            categories: null,
        };
    },
    methods: {
        async fetchData() {
            await axios.get(this.baseURL + "category/list")
                .then(res => {
                this.categories = res.data;
            })
                .catch(err => { console.log(err); });
            await axios.get(this.baseURL + "product/")
                .then(res => {
                this.products = res.data;
            })
                .catch(err => { console.log(err); });
        }
    },
    mounted() {
        this.fetchData();
    },
    components: { NavbarComp, FooterComp }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
