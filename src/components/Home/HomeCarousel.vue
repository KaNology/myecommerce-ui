<template>
    <div style="position: relative;">
        <div class="img-container" style="width: 100%; height: 500px">
            <img src="@/assets/carousel1.jpeg" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div class="img-label">
            <h3>Lorem lerom lemro lemro</h3>
            <h1>My Ecommerce</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eum harum modi nisi tempora explicabo consequatur incidunt est, provident laudantium expedita id iste molestias tempore consequuntur. Mollitia placeat maxime necessitatibus.</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeCarousel"
}
</script>
<style>
.img-container {
    filter: brightness(20%);
}

.img-label {
    color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>