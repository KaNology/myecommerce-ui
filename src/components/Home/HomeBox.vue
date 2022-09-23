<template>
    <div class="card p-3 col-12 col-md-6 col-lg-4">
        <div class="card-wrapper">
            <div class="card-img">
                <img style="height: 300px; width: 100%; object-fit: cover;" :src="require(`@/assets/${this.image_name}`)" alt="Mobirise" title="" media-simple="true">
            </div>
            <div class="card-box">
                <h4 class="card-title pb-3 mbr-fonts-style display-7">Lorem lorem</h4>
                <p class="mbr-text mbr-fonts-style display-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur possimus voluptas expedita asperiores odit? Qui, officiis veniam cumque at eum voluptates illo rem ut facilis possimus voluptas ipsum quam velit.</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "HomeBox",
    props: ["image_name"]
}
</script>