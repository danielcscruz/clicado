<template>

    <div v-if="auction" class="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
        <div v-for="item in datas" :key="item.id" class="col">
            <div class="card nft-items nft-primary nft-auction rounded-md shadow overflow-hidden mb-1 p-3">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                        <img :src="item.image" alt="user"
                            class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
                        <a href="javascript:void(0)" class="text-dark small creator-name h6 mb-0 ms-2">{{item.by}}</a>
                    </div>
                </div>

                <div class="nft-image rounded-md mt-3 position-relative overflow-hidden">
                    <router-link :to="{name: 'item-detail-one', params: {id: item.id}}"><img :src="item.mainimage" class="img-fluid" alt=""></router-link>
                    <div class="position-absolute top-0 start-0 m-2">
                        <a href="javascript:void(0)" class="badge badge-link bg-primary">{{item.type}}</a>
                    </div>
                    <div class="position-absolute top-0 end-0 m-2">
                        <span class="like-icon shadow-sm"><a href="javascript:void(0)" class="text-muted icon"><i
                                    class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
                    </div>

                    <div
                        class="position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3">
                        <i class="uil uil-clock"></i> {{
        item.remaining?.days + " : " + item.remaining?.hours + " : " +
        item.remaining?.minutes + " : " + item.remaining?.seconds }} <small id="auction-item-1" class="fw-bold"></small>
                    </div>
                </div>

                <div class="card-body content position-relative p-0 mt-3">
                    <router-link :to="{name: 'item-detail-one', params: {id: item.id}}" class="title text-dark h6">{{item.title}}</router-link>

                    <div class="d-flex align-items-center justify-content-between mt-3">
                        <div class="">
                            <small class="mb-0 d-block fw-semibold">{{ item.bid }}</small>
                            <small class="rate fw-bold">{{ item.eth}}</small>
                        </div>
                        <router-link :to="{name: 'item-detail-one', params: {id: item.id}}" class="btn btn-icon btn-pills btn-primary"><i
                                class="uil uil-shopping-bag"></i></router-link>
                    </div>
                </div>
            </div>
        </div><!--end col-->

    </div><!--end row-->

    <div v-else-if="auction2"  class="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
        <div v-for="item in datas.slice(0, 4)" :key="item.id" class="col">
            <div class="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                        <img :src="item.image" alt="user"
                            class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
                        <a href="javascript:void(0)" class="text-dark small creator-name h6 mb-0 ms-2">{{ item.by }}</a>
                    </div>
                </div>

                <div class="nft-image rounded-md mt-3 position-relative overflow-hidden">
                    <router-link :to="{name: 'item-detail-one', params: {id: item.id}}"><img :src="item.mainimage" class="img-fluid"
                            alt=""></router-link>
                    <div class="position-absolute top-0 start-0 m-2">
                        <span class="badge badge-link bg-primary">{{ item.type }}</span>
                    </div>
                    <div class="position-absolute top-0 end-0 m-2">
                        <span class="like-icon shadow-sm"><a href="javascript:void(0)" class="text-muted icon"><i
                                    class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
                    </div>

                    <div
                        class="position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3">
                        <i class="uil uil-clock me-1"></i>{{
        item.remaining?.days + " : " + item.remaining?.hours + " : " +
        item.remaining?.minutes + " : " + item.remaining?.seconds }} <small id="auction-item-5"
                            class="fw-bold"></small>
                    </div>
                </div>

                <div class="card-body content position-relative p-0 mt-3">
                    <router-link :to="{name: 'item-detail-one', params: {id: item.id}}" class="title text-dark h6">{{ item.title }}</router-link>

                    <div class="d-flex align-items-center justify-content-between mt-3">
                        <div class="">
                            <small class="mb-0 d-block fw-semibold">{{ item.bid }}</small>
                            <small class="rate fw-bold">{{ item.eth}}</small>
                        </div>
                        <router-link :to="{name: 'item-detail-one', params: {id: item.id}}" class="btn btn-icon btn-pills btn-primary"><i
                                class="uil uil-shopping-bag"></i></router-link>
                    </div>
                </div>
            </div>
        </div><!--end col-->
    </div><!--end row-->


    <div v-else class="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
        <div v-for="item in datas.slice(4, 8)" :key="item.id" class="col">
            <div class="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                        <img :src="item.image" alt="user"
                            class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
                        <a href="javascript:void(0)" class="text-dark small creator-name h6 mb-0 ms-2">{{ item.by }}</a>
                    </div>
                </div>

                <div class="nft-image rounded-md mt-3 position-relative overflow-hidden">
                    <router-link :to="{name: 'item-detail-one', params: {id: item.id}}"><img :src="item.mainimage" class="img-fluid"
                            alt=""></router-link>
                    <div class="position-absolute top-0 start-0 m-2">
                        <span class="badge badge-link bg-primary">{{ item.type }}</span>
                    </div>
                    <div class="position-absolute top-0 end-0 m-2">
                        <span class="like-icon shadow-sm"><a href="javascript:void(0)" class="text-muted icon"><i
                                    class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
                    </div>

                    <div
                        class="position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3">
                        <i class="uil uil-clock me-1"></i>{{
        item.remaining?.days + " : " + item.remaining?.hours + " : " +
        item.remaining?.minutes + " : " + item.remaining?.seconds }} <small id="auction-item-5"
                            class="fw-bold"></small>
                    </div>
                </div>

                <div class="card-body content position-relative p-0 mt-3">
                    <router-link :to="{name: 'item-detail-one', params: {id: item.id}}" class="title text-dark h6">{{ item.title }}</router-link>

                    <div class="d-flex align-items-center justify-content-between mt-3">
                        <div class="">
                            <small class="mb-0 d-block fw-semibold">{{ item.bid }}</small>
                            <small class="rate fw-bold">{{ item.eth}}</small>
                        </div>
                        <router-link :to="{name: 'item-detail-one', params: {id: item.id} }" class="btn btn-icon btn-pills btn-primary"><i
                                class="uil uil-shopping-bag"></i></router-link>
                    </div>
                </div>
            </div>
        </div><!--end col-->
    </div><!--end row-->
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';

defineProps({
    auction: {
        type: Boolean,
        required: true
    },
    auction2: {
        type: Boolean,
        required: true
    },
})
const datas = ref([
    {
        id: 13,
        image: require('../assets/images/client/01.jpg'),
        by: '@StreetBoy',
        type: 'GIFs',
        mainimage: require('../assets/images/gif/1.gif'),
        title: 'Deep Sea Phantasy',
        bid: 'Current Bid:',
        eth: '20.5 ETH',
        date: 'August 02, 2025 6:0:0'
    },
    {
        id: 2,
        image: require('../assets/images/client/09.jpg'),
        by: '@PandaOne',
        mainimage: require('../assets/images/items/1.jpg'),
        type: 'Arts',
        title: 'CyberPrimal 042 LAN',
        bid: 'Current Bid:',
        eth: '20.5 ETH',
        date: 'January 29, 2026 6:0:0',
    },
    {
        id: 14,
        image: require('../assets/images/client/02.jpg'),
        by: '@CutieGirl',
        mainimage: require('../assets/images/gif/2.gif'),
        type: 'GIFs',
        title: 'Crypto Egg Stamp #5',
        bid: 'Current Bid:',
        eth: '20.5 ETH',
        date: 'August 29, 2026 6:0:0',
    },
    {
        id: 4,
        image: require('../assets/images/client/03.jpg'),
        by: '@NorseQueen',
        mainimage: require('../assets/images/items/2.jpg'),
        type: 'Memes',
        title: 'Colorful Abstract Painting',
        bid: 'Current Bid:',
        eth: '20.5 ETH',
        date: 'March 29, 2026 6:0:0',
    },
    {
        id: 5,
        image: require('../assets/images/client/11.jpg'),
        by: '@Butterfly',
        mainimage: require('../assets/images/items/3.jpg'),
        type: 'Illustration',
        title: 'Liquid Forest Princess',
        bid: 'Current Bid:',
        eth: '20.5 ETH',
        date: 'March 29, 2025 6:0:0',
    },
    {
        id: 15,
        image: require('../assets/images/client/04.jpg'),
        by: '@BigBull',
        mainimage: require('../assets/images/gif/3.gif'),
        type: 'GIFs',
        title: 'Spider Eyes Modern Art',
        bid: 'Current Bid:',
        eth: '20.5 ETH',
        date: 'January 29, 2026 6:0:0',
    },
    {
        id: 7,
        image: require('../assets/images/client/12.jpg'),
        by: '@Princess',
        mainimage: require('../assets/images/items/4.jpg'),
        type: 'Games',
        title: 'Synthwave Painting',
        bid: 'Current Bid:',
        eth: '20.5 ETH',
        date: 'Decembar 29, 2025 6:0:0',
    },
    {
        id: 16,
        image: require('../assets/images/client/13.jpg'),
        by: '@KristyHoney',
        mainimage: require('../assets/images/gif/4.gif'),
        type: 'GIFs',
        title: 'Contemporary Abstract',
        bid: 'Current Bid:',
        eth: '20.5 ETH',
        date: 'March 29, 2026 6:0:0',
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