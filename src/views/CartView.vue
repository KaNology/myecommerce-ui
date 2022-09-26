<template>
    <div class="container-fluid">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col"></th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Amount</th>
                </tr>
            </thead>
            <tbody v-if="cart">
                <tr v-for="(item, index) of cart.cartItems" :key="item.id">
                    <th>{{index + 1}}</th>
                    <td>
                        <img style="width: 100px; height: 100px" :src="item.product.imageURL">
                    </td>
                    <td>{{item.product.name}}</td>
                    <td>{{item.product.price}}</td>
                    <td>{{item.quantity}}</td>
                </tr>
            </tbody>
        </table>

        <div v-if="cart" class="row">
            <button class="btn btn-primary col-1 offset-4">Purchase</button>
            <h1 class="offset-3">Total Cost: {{cart.totalCost}}</h1>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "CartView",
    props: ["baseURL"],
    data() {
        return {
            token: null,
            cart: null
        }
    },
    mounted() {
        this.token = localStorage.getItem("token")
        axios.get(`${this.baseURL}cart/?token=${this.token}`).then((res) => {
            this.cart = res.data
        })
    }
}
</script>