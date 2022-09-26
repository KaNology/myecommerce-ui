<template>
    <section class="vh-100" style="background-color: #eee;">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card text-black" style="border-radius: 25px;">
                        <div class="card-body p-md-5">
                            <div class="row justify-content-center">
                                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>

                                    <form @submit="signin" class="mx-1 mx-md-4">

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <div>
                                                <input type="email" id="form3Example1c" class="form-control text-left"
                                                    placeholder="Email" v-model="email" required />
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <div>
                                                <input type="password" id="form3Example1c"
                                                    class="form-control text-left" placeholder="Password"
                                                    v-model="password" required />
                                            </div>
                                        </div>

                                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button class="btn btn-primary btn-lg">Login</button>
                                        </div>

                                    </form>

                                </div>
                                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                        class="img-fluid" alt="Sample image">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
const axios = require("axios");
const sweetalert = require("sweetalert");
export default {
    name: "SignUpView",
    props: ["baseURL"],
    data() {
        return {
            email: null,
            password: null,
        }
    },
    methods: {
        async signin(e) {
            e.preventDefault();
            const account = {
                email: this.email,
                password: this.password
            }
            await axios.post(`${this.baseURL}user/signin`, account)
                .then((res) => {
                    localStorage.setItem("token", res.data.token);
                    this.$router.push({ name: 'HomeView' });
                    sweetalert({
                        text: 'Welcome',
                        icon: 'success'
                    })
                })
                .catch(err => console.log(err));
        }
    }
}
</script>