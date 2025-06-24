<template>
    <div class="row">
        <div class="col-12">
            <div class="tiny-five-item">
                <div v-for="item in datas" :key="item" class="tiny-slide">
                    <div class="card bg-white nft-items nft-primary rounded-md shadow-md overflow-hidden mx-2 my-3">
                        <div class="nft-image position-relative overflow-hidden">
                            <router-link :to="{ name: 'item-detail-one', params: { id: item.id } }"><img :src="item.image"
                                    class="img-fluid" alt=""></router-link>
                            <div class="position-absolute top-0 start-0 m-3">
                                <a href="javascript:void(0)" class="badge badge-link bg-primary">{{ item.type }}</a>
                            </div>
                            <div class="position-absolute top-0 end-0 m-3">
                                <span class="like-icon shadow-sm"><a href="javascript:void(0)"
                                        class="text-muted icon"><i class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
                            </div>
                        </div>

                        <div class="card-body content position-relative">
                            <router-link :to="{ name: 'item-detail-one', params: { id: item.id } }"
                                class="title text-dark h6">{{ item.name }}</router-link>

                            <div class="d-flex align-items-center justify-content-between mt-3">
                                <div class="">
                                    <small class="mb-0 d-block fw-semibold">Current Bid:</small>
                                    <small class="rate fw-bold">{{ item.bid }}</small>
                                </div>
                                <router-link :to="{ name: 'item-detail-one', params: { id: item.id } }"
                                    class="btn btn-icon btn-pills btn-primary"><i
                                        class="uil uil-shopping-bag"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div><!--end slide-->


            </div>
        </div><!--end col-->
    </div><!--end row-->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';

const datas = ref([
    {
        id: 1,
        image: require('../assets/images/gif/7.gif'),
        type: 'GIFs',
        name: 'Deep Sea Phantasy',
        bid: '20.5 ETH'
    },
    {
        id: 21,
        image: require('../assets/images/items/11.jpg'),
        type: 'Arts',
        name: 'CyberPrimal 042 LAN',
        bid: '20.5 ETH'
    },
    {
        id: 3,
        image: require('../assets/images/gif/8.gif'),
        type: 'GIFs',
        name: 'Crypto Egg Stamp #5',
        bid: '20.5 ETH'
    },
    {
        id: 22,
        image: require('../assets/images/items/12.jpg'),
        type: 'Memes',
        name: 'Colorful Abstract Painting',
        bid: '20.5 ETH'
    },
    {
        id: 23,
        image: require('../assets/images/items/13.jpg'),
        type: 'Illustration',
        name: 'Liquid Forest Princess',
        bid: '20.5 ETH'
    },
    {
        id: 6,
        image: require('../assets/images/gif/9.gif'),
        type: 'GIFs',
        name: 'Spider Eyes Modern Art',
        bid: '20.5 ETH'
    },
    {
        id: 24,
        image: require('../assets/images/items/14.jpg'),
        type: 'Games',
        name: 'Synthwave Painting',
        bid: '20.5 ETH'
    },
    {
        id: 8,
        image: require('../assets/images/gif/10.gif'),
        type: 'GIFs',
        name: 'Contemporary Abstract',
        bid: '20.5 ETH'
    },
])

onMounted(() => {
    tns({
        container: '.tiny-five-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            1025: {
                items: 5
            },

            992: {
                items: 3
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
    });
});
</script>

<style lang="scss" scoped></style>