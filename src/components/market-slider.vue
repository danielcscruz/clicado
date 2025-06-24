<template>
    <div class="row">
        <div class="col-12">
            <div class="tiny-four-item-nav-arrow">
                <div v-for="item in datas" :key="item" class="tiny-slide">
                    <div class="card nft-items nft-primary rounded-md shadow overflow-hidden m-1">
                        <div class="nft-image position-relative overflow-hidden">
                            <img :src="item.image" class="img-fluid" alt="">
                            <div class="position-absolute top-0 end-0 m-2">
                                <span class="like-icon shadow-sm"><a href="javascript:void(0)"
                                        class="text-muted icon"><i class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
                            </div>
                        </div>

                        <div class="card-body content position-relative">
                            <div class="img-group">
                                <router-link to="/creator-profile" class="user-avatar">
                                    <img src="../assets/images/client/08.jpg" alt="user"
                                        class="avatar avatar-sm-sm img-thumbnail border-0 shadow-md rounded-circle">
                                </router-link>
                                <router-link to="/creator-profile" class="user-avatar ms-n3">
                                    <img src="../assets/images/client/05.jpg" alt="user"
                                        class="avatar avatar-sm-sm img-thumbnail border-0 shadow-md rounded-circle">
                                </router-link>
                                <router-link to="/creator-profile" class="user-avatar ms-n3">
                                    <img src="../assets/images/client/06.jpg" alt="user"
                                        class="avatar avatar-sm-sm img-thumbnail border-0 shadow-md rounded-circle">
                                </router-link>
                            </div>

                            <div class="mt-2">
                                <router-link :to="{name: 'item-detail-one', params: {id: item.id}}" class="title text-dark h6">{{item.name}}</router-link>

                                <div class="d-flex justify-content-between mt-2">
                                    <small class="rate fw-bold">{{ item.eth }}</small>
                                    <small class="text-dark fw-bold">1 out of 10</small>
                                </div>

                                <div class="text-end mt-3">
                                    <router-link :to="{name: 'item-detail-one', params: {id: item.id}}" class="btn btn-sm rounded-md btn-primary">Place a
                                        bid</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

            </div>
        </div>
    </div><!--end row-->

    <div class="row justify-content-center mt-4">
        <div class="col">
            <div class="text-center">
                <a href="javascript:void(0)" class="btn btn-primary rounded-md"><i
                        class="uil uil-process mdi-spin me-1"></i> Load More</a>
            </div>
        </div><!--end col-->
    </div><!--end row-->
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { tns } from 'tiny-slider/src/tiny-slider';

const datas = ref([
    {
        id: 13,
        image: require('../assets/images/gif/1.gif'),
        name: 'Deep Sea Phantasy',
        eth: '20.5 ETH',

    },
    {
        id: 2,
        image: require('../assets/images/items/1.jpg'),
        name: 'CyberPrimal 042 LAN',
        eth: '20.5 ETH',

    },
    {
        id: 14,
        image: require('../assets/images/gif/2.gif'),
        name: 'Crypto Egg Stamp #5',
        eth: '20.5 ETH',

    },
    {
        id: 4,
        image: require('../assets/images/items/2.jpg'),
        name: 'Colorful Abstract Painting',
        eth: '20.5 ETH',

    },
    {
        id: 5,
        image: require('../assets/images/items/3.jpg'),
        name: 'Liquid Forest Princess',
        eth: '20.5 ETH',

    },
    {
        id: 15,
        image: require('../assets/images/gif/3.gif'),
        name: 'Spider Eyes Modern Art',
        eth: '20.5 ETH',

    },
    {
        id: 7,
        image: require('../assets/images/items/4.jpg'),
        name: 'Synthwave Painting',
        eth: '20.5 ETH',

    },
    {
        id: 16,
        image: require('../assets/images/gif/4.gif'),
        name: 'Contemporary Abstract',
        eth: '20.5 ETH',

    },
    {
        id: 9,
        image: require('../assets/images/items/5.jpg'),
        name: 'Valkyrie Abstract Art',
        eth: '20.5 ETH',

    },
    {
        id: 10,
        image: require('../assets/images/gif/5.gif'),
        name: 'The girl with the firefly',
        eth: '20.5 ETH',

    },
    {
        id: 11,
        image: require('../assets/images/items/6.jpg'),
        name: 'Dodo hide the seek',
        eth: '20.5 ETH',

    },
    {
        id: 12,
        image: require('../assets/images/gif/6.gif'),
        name: 'Pinky Ocean',
        eth: '20.5 ETH',

    },
    {
        id: 17,
        image: require('../assets/images/items/7.jpg'),
        name: 'Rainbow Style',
        eth: '20.5 ETH',

    },
    {
        id: 18,
        image: require('../assets/images/items/8.jpg'),
        name: 'Running Puppets',
        eth: '20.5 ETH',

    },
    {
        id: 19,
        image: require('../assets/images/items/9.jpg'),
        name: 'Loop Donut',
        eth: '20.5 ETH',

    },
    {
        id: 20,
        image: require('../assets/images/items/10.jpg'),
        name: 'This is Our Story',
        eth: '20.5 ETH',
    }
])

onMounted(() => {
    tns({
        container: '.tiny-four-item-nav-arrow',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 4
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