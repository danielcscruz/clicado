<template>
    <navbar :logoLight=true :search=true :wallet=true />
    <section class="bg-half-174">
        <div class="container-fluid">
            <slider />
        </div><!--end container-->
        <div class="container mt-100 mt-60">
            <creators />
        </div>
        <div class="container mt-100 mt-60">
            <div  class="row justify-content-center">
        <div class="col">
            <div class="section-title text-center mb-5 pb-3">
                <h4 class="title mb-4">Live Auctions</h4>
                <p class="text-muted para-desc mb-0 mx-auto">We are a huge marketplace dedicated to connecting great
                    artists of all Superex with their fans and unique token collectors!</p>
            </div>
        </div><!--end col-->
    </div><!--end row-->

            <auction />
        </div>
        <blogs />
        <div class="container mt-100 mt-60">
            <div class="row justify-content-center">
                <div class="col">
                    <div class="section-title text-center mb-5 pb-3">
                        <h4 class="title mb-4">Create and sell your NFTs</h4>
                        <p class="text-muted para-desc mb-0 mx-auto">We are a huge marketplace dedicated to connecting
                            great artists of all Superex with their fans and unique token collectors!</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
            <nftsell />
        </div>
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import slider from '@/components/slider-components.vue';
import creators from '@/components/best-sellers.vue';
import auction from '@/components/live-auctions.vue';
import blogs from '@/components/blog/blogs.vue';
import nftsell from '@/components/nft-item.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>