<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3>Edit Product</h3>
            </div>
        </div>

        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form v-if="product">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Categories</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01" v-model="product.categoryId">
                            <option selected>Choose...</option>
                            <option v-for="category of categories" :key="category.id" :value="category.id">
                                {{category.categoryName}}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="product.name">
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea type="text" class="form-control" v-model="product.description" />
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input type="number" class="form-control" v-model="product.price">
                    </div>
                    <div class="form-group">
                        <label>Image</label>
                        <input type="text" class="form-control" v-model="product.imageURL">
                    </div>
                    <label>Image Review</label>
                    <div class="embed-responsive embed-responsive-16by9">
                        <img class="card-img-top embed-responsive-item" :src="product.imageURl" alt="Card image cap" />
                    </div>
                    <button type="button" class="btn btn-primary mt-2" @click="editProduct">Submit</button>
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
    data() {
        return {
            product: null,
            id: null,
        }
    },
    props: ["baseURL", "products", "categories"],
    methods: {
        async editProduct() {
            await axios({
                method: 'post',
                url: `${this.baseURL}/product/update/${this.id}`,
                data: this.product,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                this.$emit("fetchData"); // Fetch the data again
                this.$router.push({ name: 'AllProduct' });
                sweetalert({
                    text: 'Product successfully edited',
                    icon: 'success'
                })
            }).catch(err => {
                console.log(err);
            })
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.product = this.products.find(product => product.id == this.id);
    }
};
</script>
<style scoped>

</style>