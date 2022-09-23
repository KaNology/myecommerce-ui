<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">

            <img src="../assets/logo_transparent.png" width="90" alt="" class="d-inline-block align-middle mr-2">
            <a class="navbar-brand" href="#">MyEcommerce</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link :to="{name: 'HomeView'}">
                            <a class="nav-link" href="#">Home</a>
                        </router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link :to="{name: 'AllProduct'}">
                            <a class="nav-link" href="#">Product</a>
                        </router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link :to="{name: 'AllCategory'}">
                            <a class="nav-link" href="#">Category</a>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: "NavbarComp",
    data() {
        return {
            baseURL: "http://localhost:8080",
        };
    },
    methods: {

    }
};
</script>