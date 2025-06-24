<template>
    <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
            <div class="col-lg-9">
                <div class="row">
                    <div class="col-md-4 col-6">
                        <div class="counter-box position-relative text-center">
                            <h4 class="mb-0 display-5 fw-bold title-dark mt-2 d-flex justify-content-center">$<count-up class="counter-value"
                                    :end-val="40">3</count-up>M</h4>
                            <span class="counter-head fw-semibold text-muted title-dark">Trading volume</span>
                        </div><!--end counter box-->
                    </div><!--end col-->

                    <div class="col-md-4 col-6">
                        <div class="counter-box position-relative text-center">
                            <h4 class="mb-0 display-5 fw-bold title-dark mt-2 d-flex justify-content-center"><count-up class="counter-value"
                                    :end-val="200">1</count-up></h4>
                            <span class="counter-head fw-semibold text-muted title-dark">NFTs created</span>
                        </div><!--end counter box-->
                    </div><!--end col-->

                    <div class="col-md-4 col-6">
                        <div class="counter-box position-relative text-center">
                            <h4 class="mb-0 display-5 fw-bold title-dark mt-2 d-flex justify-content-center"><count-up class="counter-value"
                                    :end-val="234">100</count-up>K</h4>
                            <span class="counter-head fw-semibold text-muted title-dark">Total users</span>
                        </div><!--end counter box-->
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import CountUp from 'vue-countup-v3';

</script>

<style lang="scss" scoped></style>