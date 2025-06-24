<template>
    <div v-if="explore" class="row justify-content-center">
        <div class="col">
            <div class="section-title text-center mb-4 pb-2">
                <h4 class="title mb-4">Explore Hot Products</h4>
                <p class="text-muted para-desc mb-0 mx-auto">We are a huge marketplace dedicated to connecting great
                    artists of all Superex with their fans and unique token collectors!</p>
            </div>
        </div><!--end col-->
    </div><!--end row-->
    <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4" id="grid">
        <div v-for="item in datas" :key="item.id" class="col picture-item" data-groups='["games"]'>
            <div class="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
                <div class="d-flex justify-content-between">
                    <div class="img-group">
                        <router-link to="/creator-profile" class="user-avatar">
                            <img src="../assets/images/client/08.jpg" alt="user"
                                class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
                        </router-link>
                        <router-link to="/creator-profile" class="user-avatar ms-n3">
                            <img src="../assets/images/client/05.jpg" alt="user"
                                class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
                        </router-link>
                        <router-link to="/creator-profile" class="user-avatar ms-n3">
                            <img src="../assets/images/client/06.jpg" alt="user"
                                class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
                        </router-link>
                    </div>

                    <span class="like-icon shadow-sm"><a href="javascript:void(0)" class="text-muted icon"><i
                                class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
                </div>

                <div class="nft-image rounded-md mt-3 position-relative overflow-hidden">
                    <router-link :to="{name: 'item-detail-one', params: {id: item.id}}"><img :src="item.image" class="img-fluid" alt=""></router-link>
                    <div class="position-absolute top-0 start-0 m-2">
                        <a href="javascript:void(0)" class="badge badge-link bg-primary">{{ item.gifs }}</a>
                    </div>

                    <div class="position-absolute top-0 end-0 m-2">
                        <router-link :to="{name: 'item-detail-one', params: {id: item.id}}" class="btn btn-pills btn-icon"><i
                                class="uil uil-shopping-cart-alt"></i></router-link>
                    </div>

                    <div v-if="item.showdate === true"
                        class="position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3">
                        <i class="uil uil-clock me-1"></i>{{
        item.remaining?.days + " : " + item.remaining?.hours + " : " +
        item.remaining?.minutes + " : " + item.remaining?.seconds }} <small id="auction-item-1"
                            class="fw-bold"></small>
                    </div>

                    <div v-if="item.showdate2 === true"
                        class="position-absolute bottom-0 start-0 m-2 bg-gradient-danger text-white title-dark rounded-pill px-3">
                        <i class="uil uil-clock me-1"></i>{{
        item.remaining?.days + " : " + item.remaining?.hours + " : " +
        item.remaining?.minutes + " : " + item.remaining?.seconds }} <small id="auction-item-3"
                            class="fw-bold"></small>
                    </div>
                </div>

                <div class="card-body content position-relative p-0 mt-3">
                    <router-link :to="{name: 'item-detail-one', params: {id: item.id}}" class="title text-dark h6">{{ item.name }}</router-link>

                    <div class="d-flex justify-content-between mt-2">
                        <small class="rate fw-bold">{{ item.eth }}</small>
                        <small class="text-dark fw-bold">1 out of 10</small>
                    </div>
                </div>
            </div>
        </div><!--end col-->
    </div><!--end row-->
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue'
import image from '../assets/images/client/08.jpg';
import image2 from '../assets/images/client/05.jpg';
import image3 from '../assets/images/client/06.jpg';

defineProps({
    explore: {
        type: Boolean,
        required: true
    }
})

const datas = ref([
    {
        id: 1,
        images: [image, image2, image3],
        image: require('../assets/images/gif/7.gif'),
        name: 'Deep Sea Phantasy',
        eth: '20.5 ETH',
        gifs: 'GIFs',
        date: 'January 29, 2026 6:0:0',
        showdate: true
    },
    {
        id: 2,
        images: [image, image2, image3],
        image: require('../assets/images/items/1.jpg'),
        name: 'CyberPrimal 042 LAN',
        eth: '20.5 ETH',
        gifs: 'GIFs',
        date: 'july 29, 2026 6:0:0',
        showdate: false
    },
    {
        id: 3,
        images: [image, image2, image3],
        image: require('../assets/images/gif/8.gif'),
        name: 'Crypto Egg Stamp #5',
        eth: '20.5 ETH',
        gifs: 'GIFs',
        date: 'july 29, 2026 6:0:0',
        showdate: false
    },
    {
        id: 4,
        images: [image, image2, image3],
        image: require('../assets/images/items/2.jpg'),
        name: 'Colorful Abstract Painting',
        eth: '20.5 ETH',
        date: 'March 29, 2026 6:0:0',
        showdate: true
    },
    {
        id: 5,
        images: [image, image2, image3],
        image: require('../assets/images/items/3.jpg'),
        name: 'Liquid Forest Princess',
        eth: '20.5 ETH',
        date: 'july 29, 2026 6:0:0',
        showdate: false
    },
    {
        id: 6,
        images: [image, image2, image3],
        image: require('../assets/images/gif/9.gif'),
        name: 'Spider Eyes Modern Art',
        eth: '20.5 ETH',
        gifs: 'GIFs',
        date: 'May 29, 2026 6:0:0',
        showdate2: true
    },
    {
        id: 7,
        images: [image, image2, image3],
        image: require('../assets/images/items/4.jpg'),
        name: 'Synthwave Painting',
        eth: '20.5 ETH',
        date: 'july 29, 2026 6:0:0',
        showdate: false
    },
    {
        id: 8,
        images: [image, image2, image3],
        image: require('../assets/images/gif/10.gif'),
        name: 'Contemporary Abstract',
        eth: '20.5 ETH',
        gifs: 'GIFs',
        date: 'july 29, 2026 6:0:0',
        showdate: false
    },
    {
        id: 9,
        images: [image, image2, image3],
        image: require('../assets/images/items/5.jpg'),
        name: 'Valkyrie Abstract Art',
        eth: '20.5 ETH',
        date: 'july 29, 2026 6:0:0',
        showdate: false
    },
    {
        id: 10,
        images: [image, image2, image3],
        image: require('../assets/images/gif/5.gif'),
        name: 'The girl with the firefly',
        eth: '20.5 ETH',
        date: 'july 29, 2026 6:0:0',
        showdate: false
    },
    {
        id: 11,
        images: [image, image2, image3],
        image: require('../assets/images/items/6.jpg'),
        name: 'Dodo hide the seek',
        eth: '20.5 ETH',
        date: 'july 29, 2026 6:0:0',
        showdate: false
    },
    {
        id: 12,
        images: [image, image2, image3],
        image: require('../assets/images/gif/6.gif'),
        name: 'Pinky Ocean',
        eth: '20.5 ETH',
        date: 'july 29, 2026 6:0:0',
        showdate: true
    },
])

function tickTock(date) {
    let startDate = new Date(date);
    let currentDate = new Date();
    const diff = startDate.getTime() - currentDate.getTime();
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return { hours, minutes, seconds, days }
}

function remainingDays() {
    const formattedData = datas.value.map((item) => ({
        ...item,
        remaining: tickTock(item.date),
    }));
    datas.value = formattedData;
}

onMounted(() => {
    const interval = setInterval(() => {
        remainingDays();
    }, 100);
    return () => clearInterval(interval);
});

</script>

<style lang="scss" scoped></style>