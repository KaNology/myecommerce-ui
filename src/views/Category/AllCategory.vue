<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3>Existing Categories</h3>
                <router-link :to="{name: 'AddCategory'}">
                    <button class="btn" style="float: right">Add Category</button>
                </router-link>
            </div>
        </div>
        <div class="row">
            <div v-for="category of categories" :key="category.id" class="col-xl-4 col-md-6 col-12 pt-3 d-flex">
                <CategoryBox :category="category"></CategoryBox>
            </div>
        </div>
    </div>
</template>
<script>
import CategoryBox from "../../components/Category/CategoryBox.vue";

export default {
    name: "AllCategory",
    props: ["categories"], // fetch the categories from the router-view in App.vue
    data() {
        return {
            baseURL: "http://localhost:8080",
        };
    },
    methods: {

    },
    components: { CategoryBox }
};
</script>
<style scoped>

</style>