<template>
    <navbar :logoLight=true :search=true :wallet=true />

    <!-- Start Home -->
    <section class="bg-half-100 d-table w-100 pb-0">
        <div class="container position-relative" style="z-index: 1;">
            <div class="bg-half-100 rounded-md shadow-sm position-relative overflow-hidden">
                <div class="bg-video-wrapper">
                    <iframe
                        src="https://player.vimeo.com/video/502163294?background=1&autoplay=1&loop=1&byline=0&title=0"></iframe>
                    <!--Note: Vimeo Embed Background Video-->

                    <!-- <iframe src="https://www.youtube.com/embed/yba7hPeTSjk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"></iframe> -->
                    <!--Note: Youtube Embed Background Video-->
                </div>
                <div class="bg-overlay bg-linear-gradient-2"></div>
                <div class="row justify-content-center my-5">
                    <div class="col-12">
                        <div class="title-heading text-center px-4">
                            <h4 class="display-6 text-white title-dark fw-medium mb-3">The way to Find <br> any <span
                                    class="text-gradient-primary">Digital</span> Content</h4>
                            <p class="text-white title-dark mb-0">Discover limited-edition digital arts. Create, Sell
                                and Buy now.</p>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <!-- End Home -->
    <section class="section">
        <div class="container">
            <search />
        </div>
        <div class="container mt-4 pt-2 mt-lg-0 pt-lg-0">
            <explore />
        </div>
        <div class="container mt-100 mt-60">
            <bestcreators />
        </div>
        <collection />
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import search from '@/components/search-bar.vue';
import explore from '@/components/explore-products.vue'
import bestcreators  from '@/components/best-creators.vue';
import collection from '@/components/popular-collection.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>