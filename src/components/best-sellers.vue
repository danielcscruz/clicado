<template>
<div v-if="creators" class="container mt-100 mt-60">
                <div class="row justify-content-center">
                    <div class="col">
                        <div class="section-title text-center mb-5 pb-3">
                            <h4 class="title mb-4">Popular Creators</h4>
                            <p class="text-muted para-desc mb-0 mx-auto">We are a huge marketplace dedicated to connecting great artists of all Superex with their fans and unique token collectors!</p>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->

                <div class="row g-4">
                    <div v-for="item in datas" :key="item" class="col-lg-3 col-md-4">
                        <div class="creators creator-primary creators-two bg-white d-flex align-items-center p-3 rounded-md shadow">
                            <div class="d-flex align-items-center">
                                <div class="position-relative d-inline-flex">
                                    <img :src="item.image" class="avatar avatar-md-sm shadow-md rounded-pill" alt="">
                                    <span v-if="item.class === 'verified text-primary'" :class="item.class">
                                        <i class="mdi mdi-check-decagram"></i>
                                    </span>
                                    <span v-if="item.class2 === 'online text-success'" :class="item.class2">
                                        <i class="mdi mdi-circle"></i>
                                    </span>
                                </div>

                                <div class="ms-3">
                                    <h6 class="mb-0"><router-link to="/creators" class="text-dark name">{{item.name}}</router-link></h6>
                                    <small class="text-muted">{{item.eth}}</small>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->


    <div v-else class="container mt-100 mt-60">
                <div class="row">
                    <div class="col-12">
                        <div class="section-title">
                            <h4 class="title mb-2">Best Creators & Sellers</h4>
                            <p class="text-muted mb-0">Best sellers of the week's NFTs</p>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->

                <div class="row">
                    <div v-for="item in datas" :key="item" class="col-lg-3 col-md-4 mt-5">
                        <div class="creators creator-primary d-flex align-items-center">
                            <span class="fw-bold text-muted">{{item.no}}</span>

                            <div class="d-flex align-items-center ms-3">
                                <div class="position-relative d-inline-flex">
                                    <img :src="item.image" class="avatar avatar-md-sm shadow-md rounded-pill" alt="">
                                    <span v-if="item.class === 'verified text-primary'" :class="item.class">
                                        <i class="mdi mdi-check-decagram"></i>
                                    </span>
                                    <span v-if="item.class2 === 'online text-success'" :class="item.class2">
                                        <i class="mdi mdi-circle"></i>
                                    </span>
                                </div>

                                <div class="ms-3">
                                    <h6 class="mb-0"><router-link to="/creators" class="text-dark name">{{item.name}}</router-link></h6>
                                    <small class="text-muted">{{item.eth}}</small>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->
                    
                </div><!--end row-->
            </div><!--end container-->

</template>

<script setup>
import {ref, defineProps} from 'vue';

defineProps({
    creators:{
        type: Boolean,
        required: true
    }
})

const datas = ref([
    {
        no: '01.',
        class: 'verified text-primary',
        class2: 'online text-success',
        image: require('../assets/images/client/01.jpg'),
        name: 'StreetBoy',
        eth: '20.5 ETH'
    },
    {
        no: '02.',
        class: '',
        class2: '',
        image: require('../assets/images/client/13.jpg'),
        name: 'FunnyGuy',
        eth: '20.5 ETH'
    },
    {
        no: '03.',
        class: '',
        class2: 'online text-success',
        image: require('../assets/images/client/02.jpg'),
        name: 'CutieGirl',
        eth: '20.5 ETH'
    },
    {
        no: '04.',
        class: '',
        class2: 'online text-success',
        image: require('../assets/images/client/09.jpg'),
        name: 'PandaOne',
        eth: '20.5 ETH'
    },
    {
        no: '05.',
        class: 'verified text-primary',
        class2: '',
        image: require('../assets/images/client/03.jpg'),
        name: 'NorseQueen',
        eth: '20.5 ETH'
    },
    {
        no: '06.',
        class: '',
        class2: '',
        image: require('../assets/images/client/04.jpg'),
        name: 'BigBull',
        eth: '20.5 ETH'
    },
    {
        no: '07.',
        class: 'verified text-primary',
        class2: 'online text-success',
        image: require('../assets/images/client/10.jpg'),
        name: 'KristyHoney',
        eth: '20.5 ETH'
    },
    {
        no: '08.',
        class: '',
        class2: '',
        image: require('../assets/images/client/05.jpg'),
        name: 'Angel',
        eth: '20.5 ETH'
    },
    {
        no: '09.',
        class: '',
        class2: 'online text-success',
        image: require('../assets/images/client/11.jpg'),
        name: 'ButterFly',
        eth: '20.5 ETH'
    },
    {
        no: '10.',
        class: '',
        class2: 'online text-success',
        image: require('../assets/images/client/06.jpg'),
        name: 'CrazyAnyone',
        eth: '20.5 ETH'
    },
    {
        no: '11.',
        class: 'verified text-primary',
        class2: '',
        image: require('../assets/images/client/07.jpg'),
        name: 'LooserBad',
        eth: '20.5 ETH'
    },
    {
        no: '12.',
        class: 'verified text-primary',
        class2: 'online text-success',
        image: require('../assets/images/client/12.jpg'),
        name: 'Princess',
        eth: '20.5 ETH'
    },
])

</script>

<style lang="scss" scoped>

</style>