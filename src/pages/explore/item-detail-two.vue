<template>
    <navbar :lightLogo=true :navLight="'nav-light'" />
    <!-- Start Home -->
    <section class="bg-half-260 d-table w-100" style="background: url('images/items/item-detail.jpg') center;"
        :style="{ backgroundImage: 'url(' + image + ')', backgroundPosition: 'center' }">
        <div class="container">
            <div class="row mt-5">
                <div class="col py-5 py-sm-0 my-5 my-sm-0">
                    <div class="play-icon">
                        <a @click="showSingle" class="play-btn lightbox">
                            <i class="uil uil-camera text-primary rounded-circle bg-white shadow-lg"></i>
                        </a>
                        <!-- <img :src="images" alt=""> -->
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End Home -->
    <section class="section">
        <detailtwo />
        <div class="container mt-100 mt-60">
            <div class="row justify-content-center">
                <div class="col">
                    <div class="section-title text-center mb-4 pb-2">
                        <h4 class="title mb-4">Related Auction Items</h4>
                        <p class="text-muted para-desc mb-0 mx-auto">We are a huge marketplace dedicated to connecting
                            great artists of all Superex with their fans and unique token collectors!</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
            <auction :auction2=true />
        </div>
    </section>
    <footers />
    <backtotop />
    <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
</template>

<script setup>
import VueEasyLightbox from 'vue-easy-lightbox';
import { ref } from 'vue'
import navbar from '@/components/navbar/navbar.vue';
import image from '../../assets/images/items/item-detail.jpg';
import detailtwo from '@/components/item-detail-two.vue';
import auction from '@/components/live-auctions.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

const visibleRef = ref(false)
const imgsRef = ref([])
const indexRef = ref(0)


const onShow = () => {
    visibleRef.value = true
}

const showSingle = () => {
    imgsRef.value = require('../../assets/images/items/item-detail-1.jpg')
    onShow()
}

const onHide = () => (visibleRef.value = false)
</script>

<style lang="scss" scoped></style>