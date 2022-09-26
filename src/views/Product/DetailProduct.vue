<template>
    <div class="row mt-5" v-if="product">
        <div class="col-2"></div>
        <div class="embed-responsive embed-responsive-16by9 col-3">
            <img class="card-img-top embed-responsive-item" :src="product.imageURL" alt="Card image cap" />
        </div>
        <div class="col-6">
            <h1 class="card-title">{{product.name}}</h1>
            <p class="card-text text-left" style="height: 350px">
                {{product.description}}
            </p>
            <div class="row">
                <div class="input-group col-2">
                    <span class="input-group-btn">
                        <button class="plusminus btn btn-danger" @click="handleMinus">-</button>
                    </span>
                    <input type="number" class="form-control input-number" :value="quantity" />
                    <span class="input-group-btn">
                        <button class="plusminus btn btn-success" @click="handlePlus">+</button>
                    </span>
                </div>
                <div class="offset-3 col-2">
                    <button class="cart-button btn btn-primary" @click="addToWishlist">Add Wishlist <i class="bi bi-card-checklist ml-1"></i></button>
                </div>
                <div class="offset-3 col-2">
                    <button class="cart-button btn btn-warning" @click="addToCart">Add To Cart <i class="bi bi-cart4 text-dark ml-1"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
const axios = require("axios");
const sweetalert = require("sweetalert");

export default {
    name: "DetailProduct",
    props: ["products", "baseURL"],
    methods: {
        handleMinus() {
            if (this.quantity > 0) this.quantity--;
        },
        handlePlus() {
            this.quantity++;
        },
        addToWishlist() {
            if (!this.token) {
                sweetalert({
                    text: "Please login",
                    icon: "error"
                })
                return;
            }

            axios({
                method: 'post',
                url: `${this.baseURL}/wishlist/add?token=${this.token}`,
                data: this.product,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                sweetalert({
                    text: 'Product added to wishlist',
                    icon: 'success'
                })
            }).catch(err => {
                console.log(err);
            })
        },
        addToCart() {
            if (!this.token) {
                sweetalert({
                    text: "Please login",
                    icon: "error"
                })
                return;
            }

            if (this.quantity < 1){
                sweetalert({
                    text: "Please specify the right amount",
                    icon: "error"
                })
                return;
            }

            axios({
                method: 'post',
                url: `${this.baseURL}/cart/add?token=${this.token}`,
                data: {
                    productId: this.product.id,
                    quantity: this.quantity
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                sweetalert({
                    text: 'Product added to cart',
                    icon: 'success'
                })
            }).catch(err => {
                console.log(err);
            })
        }
    },
    data() {
        return {
            token: null,
            product: null,
            id: null,
            quantity: 0,
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.product = this.products.find(product => product.id == this.id);
        this.token = localStorage.getItem("token")
    }
}
</script>
<style>
.cart-button {}

img {
    object-fit: contain;
}

input {
    text-align: center;
    border: 1px solid #6C757D;
}

input[type="number"] {
    -webkit-appearance: textfield !important;
    -moz-appearance: textfield !important;
    appearance: textfield !important;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
}
</style>