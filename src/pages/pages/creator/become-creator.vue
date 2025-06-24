<template>
    <navbar :logoLight=true :search=true :wallet=true />
    <!-- Start Home -->
    <section class="bg-half-170 d-table w-100 bg-light">
        <div class="container">
            <div class="row mt-5 align-items-center">
                <div class="col-lg-4 col-md-6">
                    <img src="../../../assets/images/client/creator.png" class="img-fluid" alt="">
                </div><!--end col-->

                <div class="col-lg-8 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div class="title-heading">
                        <h6>Join with Superex!</h6>
                        <h5 class="heading fw-bold title-dark mb-4">Start Your <br><span
                                class="text-gradient-primary">Journey</span></h5>
                        <p class="text-muted mb-0 para-desc">We are a huge marketplace dedicated to connecting great
                            artists of all Superex with their fans and unique token collectors!</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
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
        <becomecreator />
    </section>
    <backtotop />
    <footers />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import becomecreator from '@/components/creator/become-creator.vue';
import backtotop from '@/components/back-to-top.vue';
import footers from '@/components/footer/footer.vue'

</script>

<style lang="scss" scoped></style>