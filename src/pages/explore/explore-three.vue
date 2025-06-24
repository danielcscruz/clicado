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
                        <h5 class="heading fw-semibold sub-heading text-white title-dark">Marketplace</h5>
                        <p class="text-white-50 para-desc mx-auto mb-0">Explore the latest NFTs digital product</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="position-middle-bottom">
                <nav aria-label="breadcrumb" class="d-block">
                    <ul class="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li class="breadcrumb-item"><router-link to="/">Superex</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Explore</li>
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
            <market />
        </div>
    </section>
    <section class="section pt-0 pt-sm-5 mt-0 mt-sm-5">
        <collection />
    </section>
    <backtotop />
    <footers />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import image from '../../assets/images/bg/01.jpg';
import market from '@/components/market-slider.vue';
import collection from '@/components/free-collection.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue';

</script>

<style lang="scss" scoped></style>