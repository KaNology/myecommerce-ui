<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3>Add Product</h3>
            </div>
        </div>

        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form action="">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Categories</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01" v-model="categoryId">
                            <option selected>Choose...</option>
                            <option v-for="category of categories" :key="category.id" :value="category.id">
                                {{category.categoryName}}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Product Name</label>
                        <input type="text" class="form-control" v-model="name">
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea type="text" class="form-control" v-model="description" />
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input type="number" class="form-control" v-model="price">
                    </div>
                    <div class="form-group">
                        <label>Image</label>
                        <input type="text" class="form-control" v-model="imageURL">
                    </div>
                    <button type="button" class="btn btn-primary" @click="addProduct">Submit</button>
                </form>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>
<script>
const axios = require("axios");
const sweetalert = require("sweetalert");
export default {
    name: "AddProduct",
    props: ["categories"],
    data() {
        return {
            categoryId: "",
            name: "",
            description: "",
            imageURL: "",
            price: ""
        }
    },
    methods: {
        addProduct() {
            const newProduct = {
                categoryId: this.categoryId,
                name: this.name,
                description: this.description,
                imageURL: this.imageURL,
                price: this.price
            };

            const baseURL = "http://localhost:8080";

            axios({
                method: 'post',
                url: `${baseURL}/product/create`,
                data: JSON.stringify(newProduct),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                sweetalert({
                    text: 'Product successfully added',
                    icon: 'success'
                })
            }).catch(err => {
                console.log(err);
            })
        }
    }
};
</script>
<style scoped>

</style>