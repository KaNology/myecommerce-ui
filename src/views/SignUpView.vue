<template>
    <section class="vh-100" style="background-color: #eee;">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card text-black" style="border-radius: 25px;">
                        <div class="card-body p-md-5">
                            <div class="row justify-content-center">
                                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                    <form @submit="signup" class="mx-1 mx-md-4">

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <div>
                                                <input type="text" id="form3Example1c" class="form-control text-left"
                                                    placeholder="First Name" v-model="fName" required />
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <div>
                                                <input type="text" id="form3Example1c" class="form-control text-left"
                                                    placeholder="Last Name" v-model="lName" required />
                                            </div>
                                        </div>

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

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <div class="form-outline d-flex">
                                                <input type="password" id="form3Example1c"
                                                    class="form-control text-left" placeholder="Re-Password"
                                                    v-model="passwordRe" required />
                                            </div>
                                        </div>

                                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button class="btn btn-primary btn-lg">Register</button>
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
            fName: null,
            lName: null,
            password: null,
            passwordRe: null
        }
    },
    methods: {
        async signup(e) {
            e.preventDefault();
            if (this.password === this.passwordRe) {
                const newAccount = {
                    email: this.email,
                    firstName: this.fName,
                    lastName: this.lName,
                    password: this.password
                }
                await axios.post(`${this.baseURL}user/signup`, newAccount)
                    .then(() => {
                        this.$router.push({ name: 'HomeView' });
                        sweetalert({
                            text: 'Registration Success',
                            icon: 'success'
                        })
                    })
                    .catch(err => console.log(err));
            }
            else {
                sweetalert({
                    text: 'Passwords do not match',
                    icon: 'error'
                })
            }
        }
    }
}
</script>