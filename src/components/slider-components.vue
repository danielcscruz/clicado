<template>
    <div class="row">
                    <div class="col-12">
                        <div class="slider">
                            <div class="slide-track">
                                <div v-for="image in images" :key="image" class="slide mx-2">
                                    <div class="card bg-white nft-items nft-margin-minus nft-primary rounded-md shadow overflow-hidden mb-3">
                                        <div class="nft-image position-relative overflow-hidden">
                                            <img :src="image" class="img-fluid" alt="">
                                            <div class="bid-btn">
                                                <router-link to="/item-detail-one" class="btn btn-pills"><i class="mdi mdi-gavel fs-5 align-middle me-1"></i> Bid</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12">
                        <div class="slider2">
                            <div class="slide-track">
                                <div v-for="image in images2" :key="image" class="slide mx-2">
                                    <div class="card bg-white nft-items nft-margin-minus nft-primary rounded-md shadow overflow-hidden mb-3">
                                        <div class="nft-image position-relative overflow-hidden">
                                            <img :src="image" class="img-fluid" alt="">
                                            <div class="bid-btn">
                                                <router-link to="/item-detail-one" class="btn btn-pills"><i class="mdi mdi-gavel fs-5 align-middle me-1"></i> Bid</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
</template>

<script setup>
import image from '../assets/images/items/16.jpg'
import image2 from '../assets/images/items/18.jpg'
import image3 from '../assets/images/items/20.jpg'
import image4 from '../assets/images/items/22.jpg'
import image5 from '../assets/images/items/24.jpg'
import image6 from '../assets/images/items/26.jpg'
import image7 from '../assets/images/items/28.jpg'
import image8 from '../assets/images/items/16.jpg'
import image9 from '../assets/images/items/18.jpg'
import image10 from '../assets/images/items/20.jpg'
import image11 from '../assets/images/items/22.jpg'
import image12 from '../assets/images/items/24.jpg'
import image13 from '../assets/images/items/26.jpg'
import image14 from '../assets/images/items/28.jpg'
import image15 from '../assets/images/items/17.jpg'
import image16 from '../assets/images/items/19.jpg'
import image17 from '../assets/images/items/21.jpg'
import image18 from '../assets/images/items/23.jpg'
import image19 from '../assets/images/items/25.jpg'
import image20 from '../assets/images/items/27.jpg'
import image21 from '../assets/images/items/29.jpg'
import image22 from '../assets/images/items/17.jpg'
import image23 from '../assets/images/items/19.jpg'
import image24 from '../assets/images/items/21.jpg'
import image25 from '../assets/images/items/23.jpg'
import image26 from '../assets/images/items/25.jpg'
import image27 from '../assets/images/items/27.jpg'
import image28 from '../assets/images/items/29.jpg'

const images = [image, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14]
const images2 = [image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27, image28]
</script>

<style lang="scss" scoped>

</style>