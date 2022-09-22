<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3>Edit Category</h3>
            </div>
        </div>

        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form v-if="category">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="category.categoryName">
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea type="text" class="form-control" v-model="category.description" />
                    </div>
                    <div class="form-group">
                        <label>Image</label>
                        <input type="text" class="form-control" v-model="category.imageUrl">
                    </div>
                    <label>Image Review</label>
                    <div class="embed-responsive embed-responsive-16by9">
                        <img class="card-img-top embed-responsive-item" :src="category.imageUrl" alt="Card image cap" />
                    </div>
                    <button type="button" class="btn btn-primary mt-2" @click="editCategory">Submit</button>
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
            category: null,
            id: null,
        }
    },
    props: ["baseURL", "categories"],
    methods: {
        async editCategory() {

            await axios({
                method: 'post',
                url: `${this.baseURL}/category/update/${this.id}`,
                data: this.category,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                this.$emit("fetchData"); // Fetch the data again
                this.$router.push({ name: 'AllCategory' });
                sweetalert({
                    text: 'Category successfully edited',
                    icon: 'success'
                })
            }).catch(err => {
                console.log(err);
            })
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.category = this.categories.find(category => category.id == this.id);
    }
};
</script>
<style scoped>

</style>