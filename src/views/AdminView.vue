<template>
    <div class="container">
        <router-link :to="{name: 'AllCategory'}">
            <button class="btn btn-primary btn-lg">Admin Category</button>
        </router-link>

        <router-link :to="{name: 'AllProduct'}">
            <button class="btn btn-primary btn-lg">Admin Product</button>
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>