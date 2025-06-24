<template>
    <div v-if="explore" class="container">
        <div class="row justify-content-center mb-4 pb-2">
            <div class="col filters-group-wrap">
                <div class="filters-group">
                    <ul class="container-filter mb-0 categories-filter text-center list-unstyled filter-options">
                        <li class="list-inline-item categories position-relative text-dark"
                            :class="selectedCategory == null ? 'active' : ''" @click="matchCategory(null)"><i
                                class="uil uil-browser"></i> All</li>
                        <li class="list-inline-item categories position-relative text-dark"
                            :class="selectedCategory == 'games' ? 'active' : ''" @click="matchCategory('games')"><i
                                class="uil uil-volleyball"></i> Games</li>
                        <li class="list-inline-item categories position-relative text-dark"
                            :class="selectedCategory == 'art' ? 'active' : ''" @click="matchCategory('art')"><i
                                class="uil uil-chart-pie-alt"></i> Art</li>
                        <li class="list-inline-item categories position-relative text-dark"
                            :class="selectedCategory == 'music' ? 'active' : ''" @click="matchCategory('music')"><i
                                class="uil uil-music"></i> Music</li>
                        <li class="list-inline-item categories position-relative text-dark"
                            :class="selectedCategory == 'video' ? 'active' : ''" @click="matchCategory('video')"><i
                                class="uil uil-camera-plus"></i> Video</li>
                        <li class="list-inline-item categories position-relative text-dark"
                            :class="selectedCategory == 'memes' ? 'active' : ''" @click="matchCategory('memes')"><i
                                class="uil uil-rocket"></i> Memes</li>
                    </ul>
                </div>
            </div><!--end col-->
        </div><!--end row-->

        <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4" id="grid">
            <div v-for="item in filteredData" :key="item.id" class="col picture-item" data-groups='["games"]'>
                <div class="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                    <div class="nft-image position-relative overflow-hidden">
                        <img :src="item.image" class="img-fluid" alt="">
                        <div class="position-absolute top-0 end-0 m-2">
                            <span class="like-icon shadow-sm"><a href="javascript:void(0)" class="text-muted icon"><i
                                        class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
                        </div>

                        <div class="bid-btn">
                            <router-link :to="{ name: 'item-detail-one', params: { id: item.id } }" class="btn btn-pills"><i
                                    class="mdi mdi-gavel fs-5 align-middle me-1"></i> Bid</router-link>
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
                            <router-link :to="{ name: 'item-detail-one', params: { id: item.id } }"
                                class="title text-dark h6">{{ item.name }}</router-link>

                            <div class="d-flex justify-content-between mt-2">
                                <small class="rate fw-bold">{{ item.eth }}</small>
                                <small class="text-dark fw-bold">1 out of 10</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->

        <div class="row justify-content-center mt-4">
            <div class="col">
                <div class="text-center">
                    <a href="javascript:void(0)" class="btn btn-primary rounded-md"><i
                            class="uil uil-process mdi-spin me-1"></i> Load More</a>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->


    <div v-else-if="explore2" :class="rowclass">
        <div v-for="item in datas" :key="item.id" class="col mt-4 pt-2">
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
                    <router-link :to="{ name: 'item-detail-one', params: { id: item.id } }"><img :src="item.image"
                            class="img-fluid" alt=""></router-link>
                    <div class="position-absolute top-0 start-0 m-2">
                        <a href="javascript:void(0)" class="badge badge-link bg-primary">{{ item.type }}</a>
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
                    <router-link :to="{ name: 'item-detail-one', params: { id: item.id } }" class="title text-dark h6">{{item.name}}</router-link>

                    <div class="d-flex justify-content-between mt-2">
                        <small class="rate fw-bold">{{item.eth}}</small>
                        <small class="text-dark fw-bold">1 out of 10</small>
                    </div>
                </div>
            </div>
        </div><!--end col-->
    </div><!--end row-->


    <div v-else-if="creators" :class="rowclass">
        <div v-for="item in datas.slice(0, 8)" :key="item.id" class="col mt-4 pt-2">
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
                    <router-link :to="{ name: 'item-detail-one', params: { id: item.id } }"><img :src="item.image"
                            class="img-fluid" alt=""></router-link>
                    <div class="position-absolute top-0 start-0 m-2">
                        <a href="javascript:void(0)" class="badge badge-link bg-primary">{{ item.type }}</a>
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
                    <router-link :to="{ name: 'item-detail-one', params: { id: item.id } }" class="title text-dark h6">{{item.name}}</router-link>

                    <div class="d-flex justify-content-between mt-2">
                        <small class="rate fw-bold">{{item.eth}}</small>
                        <small class="text-dark fw-bold">1 out of 10</small>
                    </div>
                </div>
            </div>
        </div><!--end col-->
    </div><!--end row-->


    <div v-else class="container mt-100 mt-60">
        <div class="row align-items-end">
            <div class="col-md-8">
                <div class="section-title mb-4 pb-2">
                    <h4 class="title mb-2">Explore Your Items</h4>
                    <p class="text-muted mb-0">Explore the latest NFTs digital product</p>
                </div>
            </div><!--end col-->

            <div class="col-md-4">
                <div class="text-end d-md-block d-none">
                    <router-link to="/explore-one" class="btn btn-link primary text-dark">See More <i
                            class="uil uil-arrow-right"></i></router-link>
                </div>
            </div><!--end col-->
        </div><!--end row-->

        <div class="row justify-content-center mb-4 pb-2">
            <div class="col filters-group-wrap">
                <div class="filters-group">
                    <ul class="container-filter mb-0 categories-filter list-unstyled filter-options">
                        <li class="list-inline-item categories position-relative text-dark"
                            :class="selectedCategory == null ? 'active' : ''" @click="matchCategory(null)"><i
                                class="uil uil-browser"></i> All</li>
                        <li class="list-inline-item categories position-relative text-dark"
                            :class="selectedCategory == 'games' ? 'active' : ''" @click="matchCategory('games')"><i
                                class="uil uil-volleyball"></i> Games</li>
                        <li class="list-inline-item categories position-relative text-dark"
                            :class="selectedCategory === 'art' ? 'active' : ''" @click="matchCategory('art')"><i
                                class="uil uil-chart-pie-alt"></i> Art</li>
                        <li class="list-inline-item categories position-relative text-dark"
                            :class="selectedCategory === 'music' ? 'active' : ''" @click="matchCategory('music')"><i
                                class="uil uil-music"></i> Music</li>
                        <li class="list-inline-item categories position-relative text-dark"
                            :class="selectedCategory === 'video' ? 'active' : ''" @click="matchCategory('video')"><i
                                class="uil uil-camera-plus"></i> Video</li>
                        <li class="list-inline-item categories position-relative text-dark"
                            :class="selectedCategory === 'memes' ? 'active' : ''" @click="matchCategory('memes')"><i
                                class="uil uil-rocket"></i> Memes</li>
                    </ul>
                </div>
            </div><!--end col-->
        </div><!--end row-->

        <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4" id="grid">
            <div v-for="item in filteredData.slice(0, 8)" :key="item.id" class="col picture-item"
                data-groups='["games"]'>
                <div class="card bg-white nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                    <div class="nft-image position-relative overflow-hidden">
                        <img :src="item.image" class="img-fluid" alt="">
                        <div class="position-absolute top-0 end-0 m-2">
                            <span class="like-icon shadow-sm"><a href="javascript:void(0)" class="text-muted icon"><i
                                        class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
                        </div>

                        <div class="bid-btn">
                            <router-link :to="{ name: 'item-detail-one', params: { id: item.id } }" class="btn btn-pills"><i
                                    class="mdi mdi-gavel fs-5 align-middle me-1"></i> Bid</router-link>
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
                            <router-link :to="{ name: 'item-detail-one', params: { id: item.id } }"
                                class="title text-dark h6">{{ item.name }}</router-link>

                            <div class="d-flex justify-content-between mt-2">
                                <small class="rate fw-bold">{{ item.eth }}</small>
                                <small class="text-dark fw-bold">1 out of 10</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--end col-->

        </div><!--end row-->

        <div class="row justify-content-center">
            <div class="col">
                <div class="text-center d-block d-md-none mt-4">
                    <router-link to="/explore-one" class="btn btn-link primary text-dark">See More <i
                            class="uil uil-arrow-right"></i></router-link>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue'

defineProps({
    explore: {
        type: Boolean,
        required: true
    },
    explore2: {
        type: Boolean,
        required: true
    },
    rowclass: {
        type: String,
        required: true
    },
    creators: {
        type: Boolean,
        required: true
    },
})
let selectedCategory = ref(null)
let datas = ref([
    {
        id: 13,
        image: require('../assets/images/gif/1.gif'),
        name: 'Deep Sea Phantasy',
        eth: '20.5 ETH',
        category: 'games',
        date: 'January 29, 2026 6:0:0',
        showdate: true,
        type: "GIFs"
    },
    {
        id: 2,
        image: require('../assets/images/items/1.jpg'),
        name: 'CyberPrimal 042 LAN',
        eth: '20.5 ETH',
        category: 'art',
        date: 'july 29, 2026 6:0:0',
        showdate: false,
        type: 'Arts'
    },
    {
        id: 14,
        image: require('../assets/images/gif/2.gif'),
        name: 'Crypto Egg Stamp #5',
        eth: '20.5 ETH',
        category: 'music',
        date: 'july 29, 2026 6:0:0',
        showdate: false,
        type: 'Games'
    },
    {
        id: 4,
        image: require('../assets/images/items/2.jpg'),
        name: 'Colorful Abstract Painting',
        eth: '20.5 ETH',
        category: 'video',
        date: 'March 29, 2026 6:0:0',
        showdate: true,
        type: ''
    },
    {
        id: 5,
        image: require('../assets/images/items/3.jpg'),
        name: 'Liquid Forest Princess',
        eth: '20.5 ETH',
        category: 'memes',
        date: 'july 29, 2026 6:0:0',
        showdate: false,
        type: ''
    },
    {
        id: 15,
        image: require('../assets/images/gif/3.gif'),
        name: 'Spider Eyes Modern Art',
        eth: '20.5 ETH',
        category: 'games',
        date: 'May 29, 2026 6:0:0',
        showdate2: true,
        type: 'GIFs'
    },
    {
        id: 7,
        image: require('../assets/images/items/4.jpg'),
        name: 'Synthwave Painting',
        eth: '20.5 ETH',
        category: 'art',
        date: 'july 29, 2026 6:0:0',
        showdate: false,
        type: ''
    },
    {
        id: 16,
        image: require('../assets/images/gif/4.gif'),
        name: 'Contemporary Abstract',
        eth: '20.5 ETH',
        category: 'music',
        date: 'july 29, 2026 6:0:0',
        showdate: false,
        type: 'GIFs'
    },
    {
        id: 9,
        image: require('../assets/images/items/5.jpg'),
        name: 'Valkyrie Abstract Art',
        eth: '20.5 ETH',
        category: 'memes',
        date: 'july 29, 2026 6:0:0',
        showdate: false,
        type: ''
    },
    {
        id: 10,
        image: require('../assets/images/gif/5.gif'),
        name: 'The girl with the firefly',
        eth: '20.5 ETH',
        category: 'art',
        date: 'july 29, 2026 6:0:0',
        showdate: false,
        type: ''
    },
    {
        id: 11,
        image: require('../assets/images/items/6.jpg'),
        name: 'Dodo hide the seek',
        eth: '20.5 ETH',
        category: 'games',
        date: 'july 29, 2026 6:0:0',
        showdate: false,
        type: ''
    },
    {
        id: 12,
        image: require('../assets/images/gif/6.gif'),
        name: 'Pinky Ocean',
        eth: '20.5 ETH',
        category: 'music',
        date: 'july 29, 2026 6:0:0',
        showdate: true,
        type: ''
    },
    {
        id: 17,
        image: require('../assets/images/items/7.jpg'),
        name: 'Rainbow Style',
        eth: '20.5 ETH',
        category: 'video',
        date: 'july 29, 2026 6:0:0',
        showdate: true,
        type: 'Music'
    },
    {
        id: 18,
        image: require('../assets/images/items/8.jpg'),
        name: 'Running Puppets',
        eth: '20.5 ETH',
        category: 'art',
        date: 'july 29, 2026 6:0:0',
        showdate: false,
        type: 'Gallery'
    },
    {
        id: 19,
        image: require('../assets/images/items/9.jpg'),
        name: 'Loop Donut',
        eth: '20.5 ETH',
        category: 'games',
        date: 'july 29, 2026 6:0:0',
        showdate2: true,
        type: 'Video'
    },
    {
        id: 20,
        image: require('../assets/images/items/10.jpg'),
        name: 'This is Our Story',
        eth: '20.5 ETH',
        category: 'music',
        date: 'july 29, 2026 6:0:0',
        showdate: true
    },
])
let filteredData = ref(datas.value)

const matchCategory = (category) => {
    selectedCategory.value = category
    filteredData.value = selectedCategory.value ? datas.value.filter((item) => item.category === selectedCategory.value) : datas.value
}

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