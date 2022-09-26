<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">

            <router-link :to="{name: 'HomeView'}">
                <img src="../assets/logo_transparent.png" width="90" alt="" class="d-inline-block align-middle mr-2">
                <a class="navbar-brand" href="#">MyEcommerce</a>
            </router-link>
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
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Account
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link v-if="!token" :to="{name: 'SignUpView'}">
                                <a class="nav-link dropdown-item text-dark"><i class="bi bi-r-square-fill text-dark mr-1"></i>Sign Up</a>
                            </router-link>
                            <router-link v-if="!token" :to="{name: 'SignInView'}">
                                <a class="nav-link dropdown-item text-dark"><i class="bi bi-door-open-fill text-dark mr-1"></i>Sign In</a>
                            </router-link>
                            <a class="nav-link dropdown-item text-dark" v-if="token" @click="signout"><i class="bi bi-door-closed-fill text-dark mr-1"></i>Sign Out</a>
                            <router-link v-if="token" :to="{name: 'WishlistView'}">
                                <a class="nav-link dropdown-item text-dark"><i class="bi bi-card-checklist text-dark mr-1"></i>Wishlist</a>
                            </router-link>
                        </div>
                    </li>
                    <li class="nav-item" v-if="token">
                        <router-link :to="{name: 'CartView'}">
                            <a class="nav-link" href="#"><i class="bi bi-cart4"></i></a>
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
            token: null
        };
    },
    methods: {
        signout() {
            localStorage.removeItem("token")
            this.token = null
        }
    },
    mounted() {
        this.token = localStorage.getItem("token")
    }
};
</script>