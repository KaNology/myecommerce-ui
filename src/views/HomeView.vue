<template>
  <HomeCarousel></HomeCarousel>
  <div class="col-8 offset-2 mb-5" style="display: flex;">
    <HomeBox :image_name="'carousel1.jpeg'"></HomeBox>
    <HomeBox :image_name="'carousel2.jpeg'"></HomeBox>
    <HomeBox :image_name="'carousel3.jpeg'"></HomeBox>
  </div>
  <h1>Our Products</h1>
  <div class="row">
    <div v-for="product of products" :key="product.id" class="col-xl-3 col-md-6 col-12 pt-3 d-flex">
      <ProductBox :product="product"></ProductBox>
    </div>
  </div>
</template>

<script>
import HomeCarousel from '../components/Home/HomeCarousel.vue';
import HomeBox from '@/components/Home/HomeBox.vue';
import ProductBox from '@/components/Product/ProductBox.vue';

export default {
  name: 'HomeView',
  props: ["products"],
  components: { HomeCarousel, HomeBox, ProductBox }
}
</script>
