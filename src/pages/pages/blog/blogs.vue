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
                        <h5 class="heading fw-semibold sub-heading text-white title-dark">Blog & News</h5>
                        <p class="text-white-50 para-desc mx-auto mb-0">Our Latest Blog and News in Grid Layouts</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="position-middle-bottom">
                <nav aria-label="breadcrumb" class="d-block">
                    <ul class="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li class="breadcrumb-item"><router-link to="/">Superex</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Blogs</li>
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
        <div class="container">
            <blogs :blog=true :colclass="'col-lg-4 col-md-6'" />
            <div class="row">
                <div class="col mt-4">
                    <div class="text-center">
                        <a href="javascript:void(0)" class="btn btn-primary rounded-md">Load More <i
                            class="uil uil-process mdi-spin ms-1"></i></a>
                        </div>
                    </div><!--end col -->
                </div><!--end row -->
            </div>
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import image from '../../../assets/images/bg/02.jpg';
import blogs from '@/components/blog/blogs.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>