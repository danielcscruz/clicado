<template>
    <section class="position-relative zoom-image">
            <div class="bg-overlay image-wrap" :style="{backgroundImage : 'url('+ image +')', backgroundPosition: 'center'}"></div>
            <div class="bg-overlay"></div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 p-0">
                        <div class="d-flex flex-column min-vh-100 p-4">
                            <!-- Start Logo -->
                            <div class="text-center">
                                <router-link to="/"><img src="../../assets/images/logo-light.png" alt=""></router-link>
                            </div>
                            <!-- End Logo -->

                            <!-- Start Content -->
                            <div class="title-heading text-center my-auto">
                                <h4 class="coming-soon fw-bold display-5 text-white title-dark text-uppercase">Coming Soon</h4>
                                <p class="text-white title-dark para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
            
                                <div class="subcribe-form mt-4 pt-2">
                                    <form action="/page-comingsoon">
                                        <input type="email" id="email" class="bg-white opacity-6 rounded shadow" required placeholder="Type your Email..">
                                        <button type="submit" class="btn btn-primary" style="top: 2.5px;">Notify Me</button>
                                    </form>
                                </div>
            
                                <p class="text-white title-dark mt-2"><span class="text-danger fw-bold">*</span>Notify me when website is launched</p>
                            </div>
                            <!-- End Content -->

                           <footers />
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->
        <back :back=true />
</template>

<script setup>
import footers from '@/components/footer/footer-mini.vue'
import image from '../../assets/images/bg/03.jpg';
import back from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped>

</style>