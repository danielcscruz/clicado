<template>
       <!-- Hero Start -->
       <section class="position-relative">
            <div class="bg-video-wrapper">
                <iframe src="https://player.vimeo.com/video/502163294?background=1&autoplay=1&loop=1&byline=0&title=0"></iframe>
                <!--Note: Vimeo Embed Background Video-->

                <!-- <iframe src="https://www.youtube.com/embed/yba7hPeTSjk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"></iframe> -->
                <!--Note: Youtube Embed Background Video-->
            </div>
            <div class="bg-overlay bg-linear-gradient-2"></div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 p-0">
                        <div class="d-flex flex-column min-vh-100 p-4">
                            <!-- Start Logo -->
                            <div class="text-center">
                                <router-link to="/"><img src="../../assets/images/logo-white.png" alt=""></router-link>
                            </div>
                            <!-- End Logo -->

                            <!-- Start Content -->
                            <div class="title-heading text-center my-auto">
                                <div class="form-signin px-4 py-5 bg-white rounded-md shadow-sm">
                                    <form>
                                        <h5 class="mb-4">Login</h5>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-floating mb-2">
                                                    <input type="email" class="form-control" id="LoginEmail" placeholder="name@example.com">
                                                    <label for="LoginEmail">Email Address:</label>
                                                </div>
                                            </div><!--end col-->

                                            <div class="col-lg-12">
                                                <div class="form-floating mb-3">
                                                    <input type="password" class="form-control" id="LoginPassword" placeholder="Password">
                                                    <label for="LoginPassword">Password:</label>
                                                </div>
                                            </div><!--end col-->
                                    
                                            <div class="col-lg-12">
                                                <div class="d-flex justify-content-between">
                                                    <div class="mb-3">
                                                        <div class="form-check align-items-center d-flex mb-0">
                                                            <input class="form-check-input mt-0" type="checkbox" value="" id="RememberMe">
                                                            <label class="form-check-label text-muted ms-2" for="RememberMe">Remember me</label>
                                                        </div>
                                                    </div>
                                                    <small class="text-muted mb-0"><router-link to="/reset-password" class="text-muted fw-semibold">Forgot password ?</router-link></small>
                                                </div>
                                            </div><!--end col-->
                        
                                            <div class="col-lg-12">
                                                <button class="btn btn-primary rounded-md w-100" type="submit">Sign in</button>
                                            </div><!--end col-->
        
                                            <div class="col-12 text-center mt-4">
                                                <small><span class="text-muted me-2">Don't have an account ?</span> <router-link to="/signup" class="text-dark fw-bold">Sign Up</router-link></small>
                                            </div><!--end col-->
                                        </div><!--end row-->
                                    </form>
                                </div>
                            </div>
                            <!-- End Content -->

                            <footers />
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- Hero End -->
        <back :back=true />
</template>

<script setup>
import back from '@/components/back-to-top.vue';
import footers from '@/components/footer/footer-mini.vue'

</script>

<style lang="scss" scoped>

</style>