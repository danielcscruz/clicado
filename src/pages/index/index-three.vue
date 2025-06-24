<template>
    <navbar :navLight="'nav-light'" :lightLogo=true />
    <!-- Start Home -->
    <section class="bg-half-260 d-flex align-items-center bg-dark"
        :style="{ backgroundImage: 'url(' + image + ')', backgroundPosition: 'top center' }">
        <div class="container z-index-1">
            <div class="background-lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="title-heading text-center">
                        <h4 class="heading text-white mb-4 title-dark fw-bold">The Biggest <br> Collections of NFTs</h4>
                        <p class="text-white title-dark mb-0 para-desc mx-auto">We are a huge marketplace dedicated to
                            connecting great artists of all Superex with their fans and unique token collectors!</p>

                        <div class="mt-4 pt-2">
                            <router-link to="/aboutus" class="btn btn-primary rounded-md">Discover Now</router-link>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End Home -->
    <section class="section">
        <div class="container">
          <nftitem />
        </div>
        <creators :creators=true />
        <newestitem />
        <community />
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
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import image from '../../assets/images/bg/bg02.png';
import nftitem from '@/components/nft-item.vue';
import creators from '@/components/best-sellers.vue';
import newestitem from '@/components/newest-items.vue';
import community from '@/components/superex-community.vue';
import auction from '@/components/live-auctions.vue';
import blogs from '@/components/blog/blogs.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>