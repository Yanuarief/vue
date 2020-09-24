<template>
    <div class="page-content d-flex align-items-center justify-content-center">
        <div class="row w-100 mx-0 auth-page">
            <div class="col-md-8 col-xl-4 mx-auto">
                <div class="card">
                    <div class="row">
                        <div class="col-md-12 pl-md-0">
                            <div class="auth-form-wrapper px-4 py-4">
                                <span class="noble-ui-logo logo-light d-block mb-1">Admin<span>istrator</span></span>
                                <h5 class="text-muted font-weight-normal mb-4">Welcome back! Log in to your account.</h5>
                                <form method="post" class="forms-sample" id="form-login" enctype="multipart/form-data">
                                    <div id="loc-alert" v-bind:style="`display: ${(valert?`none`:`block`)};`">
                                        <div class="alert alert-icon-danger" role="alert">
                                            <i data-feather="alert-circle"></i>
                                            {{vmsg}}
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="username">Username</label>
                                        <input name="username" type="text" class="form-control" id="username" placeholder="Username">
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input name="password" type="password" class="form-control" id="password" autocomplete="current-password" placeholder="Password">
                                    </div>
                                    <div class="mt-3">
                                        <button id="submit-login" type="submit" v-on:click="fetchSomething($event)" class="btn btn-primary mr-2 mb-2 mb-md-0" v-bind:style="`display: ${(vsubmit?`none`:`block`)};`">Login</button>
                                        <div class="progress" id="progress-login" v-bind:style="`display: ${(vprogress?`none`:`block`)};`">
                                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Please Wait...</div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import rest from './rest'
// import axios from 'axios';

export default {
    data(){
        return {
            vsubmit: false,
            vprogress: true,
            valert: true,
            vmsg: ``
        }
    },
    methods:{
        fetchSomething: async function(e) {
            e.preventDefault();
            var url = rest["loginsu"];
            this.vsubmit = true
            this.vprogress = false
            
            let myForm = document.getElementById('form-login');
            let formData = new FormData(myForm);
            const response = await axios.post(url, formData);
            const data = response.data;
            if (data.token != null) {
                localStorage.setItem("token", data.token)
                location.reload();
            } else {
                document.getElementById('form-login').reset();
                document.getElementById('username').focus();

                this.vmsg = `Sorry, username and password not valid.`
                this.vsubmit = false
                this.vprogress = true
                this.valert = false
            }
        },
    },
    mounted(){
        this.$nextTick();
        feather.replace();
    }
}
</script>