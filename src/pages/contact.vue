<template>
    <navbar :lightLogo=true :navLight="'nav-light'" />

    <!-- Start Home -->
    <section class="bg-half-170 d-table w-100"
        :style="{ backgroundImage: 'url(' + image + ')', backgroundPosition: 'bottom' }">
        <div class="bg-overlay bg-gradient-overlay-2"></div>
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-12">
                    <div class="title-heading text-center">
                        <h5 class="heading fw-semibold sub-heading text-white title-dark">Contact Us</h5>
                        <p class="text-white-50 para-desc mx-auto mb-0">Get in Touch !</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="position-middle-bottom">
                <nav aria-label="breadcrumb" class="d-block">
                    <ul class="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li class="breadcrumb-item"><router-link to="/">Superex</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">About us</li>
                    </ul>
                </nav>
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <div class="position-relative">
        <div class="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <!-- End Home -->

    <section class="section">
        <contact />
        <getintouch />
    </section>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 p-0">
                <div class="card map border-0">
                    <div class="card-body p-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                            style="border:0" allowfullscreen></iframe>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import image from '../assets/images/bg/01.jpg';
import contact from '@/components/contact.vue';
import getintouch from '@/components/get-in-touch.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>