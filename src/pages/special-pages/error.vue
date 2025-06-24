<template>
    <section class="position-relative bg-soft-primary">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 p-0">
                    <div class="d-flex flex-column min-vh-100 p-4">
                        <!-- Start Logo -->
                        <div class="text-center">
                            <router-link to="/"><img src="../../assets/images/logo-dark.png" alt=""></router-link>
                        </div>
                        <!-- End Logo -->

                        <!-- Start Content -->
                        <div class="title-heading text-center my-auto">
                            <img src="../../assets/images/error.png" class="img-fluid" alt="">
                            <h1 class="heading sub-heading mb-3 mt-5 text-dark">Page Not Found?</h1>
                            <p class="text-muted">Whoops, this is embarassing. <br> Looks like the page you were looking
                                for wasn't found.</p>

                            <div class="mt-4">
                                <router-link to="/" class="back-button btn btn-primary">Back to Home</router-link>
                            </div>
                        </div>
                        <!-- End Content -->

                        <!-- Start Footer -->
                        <div class="text-center">
                            <small class="mb-0 text-muted">©
                               {{date}} Superex. Design & Develop with <i
                                    class="mdi mdi-heart text-danger"></i> by <a href="https://shreethemes.in/"
                                    target="_blank" class="text-reset">Shreethemes</a>.
                            </small>
                        </div>
                        <!-- End Footer -->
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
    <back :back=true />
</template>

<script setup>
import {ref} from 'vue'
import back from '@/components/back-to-top.vue';

const date =ref(new Date().getFullYear())

</script>

<style lang="scss" scoped></style>