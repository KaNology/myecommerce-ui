<template>
    <div class="container-fluid">
        <h1>Your Wishlist</h1>
        <div class="row">
            <div v-for="item of wishlistItems" :key="item.id" class="col-xl-4 col-md-6 col-12 pt-3 d-flex">
                <ProductBox :product="item"></ProductBox>
            </div>
        </div>
    </div>
</template>
<script>
import ProductBox from '@/components/Product/ProductBox.vue';
import axios from 'axios';
export default {
    name: "WishlistView",
    components: { ProductBox },
    props: ["baseURL"],
    data() {
        return {
            token: null,
            wishlistItems: null
        }
    },
    mounted() {
        this.token = localStorage.getItem("token")
        axios.get(`${this.baseURL}wishlist/?token=${this.token}`).then((res) => {
            this.wishlistItems = res.data
        })
    }
}
</script>