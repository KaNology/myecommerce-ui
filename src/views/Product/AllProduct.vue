<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3>Existing Products</h3>
                <router-link :to="{name: 'AddProduct'}">
                    <button class="btn" style="float: right">Add Product</button>
                </router-link>
            </div>
        </div>
        <div class="row">
            <div v-for="product of products" :key="product.id" class="col-xl-4 col-md-6 col-12 pt-3 d-flex">
                <ProductBox :product="product"></ProductBox>
            </div>
        </div>
    </div>
</template>
<script>
import ProductBox from "../../components/Product/ProductBox.vue";

export default {
    name: "AllCategory",
    props: ["products"], // fetch the products from the router-view in App.vue
    data() {
        return {
            baseURL: "http://localhost:8080",
        };
    },
    methods: {

    },
    components: { ProductBox }
};
</script>
<style scoped>

</style>