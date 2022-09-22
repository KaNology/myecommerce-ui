<template>
    <div class="card w-100 h-100" style="margin-top: 10px">
        <div class="embed-responsive embed-responsive-16by9">
            <img class="card-img-top embed-responsive-item" :src="product.imageURL" alt="Card image cap" />
        </div>

        <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">
                {{product.description}}
            </p>
            <router-link :to="{name: 'EditProduct', params: {id: product.id}}">
                <button href="#" class="btn btn-outline-primary">Edit</button>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "ProductBox",
    props: ["product"],
    methods: {},
}
</script>

<style scoped>
    .card-img-top {
        object-fit: cover;
    }
</style>