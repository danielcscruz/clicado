<template>
      <div class="container mt-100 mt-60">
                <div class="row align-items-end mb-5 pb-3">
                    <div class="col-lg-4">
                        <div class="section-title mb-4 mb-lg-0">
                            <h4 class="title mb-2">Newest Items</h4>
                            <p class="text-muted mb-0">Best sellers of the week's NFTs</p>
                        </div>
                    </div><!--end slide-->

                    <div class="col-lg-8 filters-group-wrap">
                        <div class="filters-group">
                            <ul class="container-filter mb-0 categories-filter text-lg-end list-unstyled filter-options">
                                <li class="list-inline-item categories position-relative text-dark" :class="selectedCategory == null ? 'active' : ''" @click="matchCategory(null)"><i class="uil uil-browser"></i> All</li>
                                <li class="list-inline-item categories position-relative text-dark" :class="selectedCategory == 'games' ? 'active' : ''" @click="matchCategory('games')"><i class="uil uil-volleyball"></i> Games</li>
                                <li class="list-inline-item categories position-relative text-dark" :class="selectedCategory == 'art' ? 'active' : ''" @click="matchCategory('art')"><i class="uil uil-chart-pie-alt"></i> Art</li>
                                <li class="list-inline-item categories position-relative text-dark" :class="selectedCategory == 'music' ? 'active' : ''" @click="matchCategory('music')"><i class="uil uil-music"></i> Music</li>
                                <li class="list-inline-item categories position-relative text-dark" :class="selectedCategory == 'video' ? 'active' : ''" @click="matchCategory('video')"><i class="uil uil-camera-plus"></i> Video</li>
                                <li class="list-inline-item categories position-relative text-dark" :class="selectedCategory == 'memes' ? 'active' : ''" @click="matchCategory('memes')"><i class="uil uil-rocket"></i> Memes</li>
                            </ul>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->

                <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4" id="grid">
                    <div v-for="item in filteredData" :key="item" class="col picture-item" data-groups='["games"]'>
                        <div class="card bg-white nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                            <div class="nft-image position-relative overflow-hidden">
                                <router-link :to="{name: 'item-detail-one', params: {id: item.id}}"><img :src="item.image" class="img-fluid" alt=""></router-link>
                                <div class="position-absolute top-0 start-0 m-3">
                                    <a href="javascript:void(0)" class="badge badge-link bg-primary">{{item.type}}</a>
                                </div>
                                <div class="position-absolute top-0 end-0 m-3">
                                    <span class="like-icon shadow-sm"><a href="javascript:void(0)" class="text-muted icon"><i class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
                                </div>                                
                            </div>

                            <div class="card-body content position-relative">
                                <router-link :to="{name: 'item-detail-one', params: {id: item.id}}" class="title text-dark h6">{{item.name}}</router-link>

                                <div class="d-flex align-items-center justify-content-between mt-3">
                                    <div class="">
                                        <small class="mb-0 d-block fw-semibold">Current Bid:</small>
                                        <small class="rate fw-bold">{{item.eth}}</small>
                                    </div>
                                    <router-link :to="{name: 'item-detail-one', params: {id: item.id}}" class="btn btn-icon btn-pills btn-primary"><i class="uil uil-shopping-bag"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                </div><!--end row-->

                <div class="row">
                    <div class="col mt-4">
                        <div class="text-center">
                            <router-link to="/explore-two" class="btn btn-primary rounded-md">View More <i class="uil uil-arrow-right"></i></router-link>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
</template>

<script setup>
import {ref} from 'vue'

let selectedCategory = ref(null)

let datas = ref([
    {
        id: 1,
        image: require('../assets/images/gif/7.gif'),
        name: 'Deep Sea Phantasy',
        eth: '20.5 ETH',
        category: 'games',
        type: 'GIFs',
    },
    {
        id: 2,
        image: require('../assets/images/items/1.jpg'),
        name: 'CyberPrimal 042 LAN',
        eth: '20.5 ETH',
        category: 'art',
        type: 'Arts',
    },
    {
        id: 3,
        image: require('../assets/images/gif/8.gif'),
        name: 'Crypto Egg Stamp #5',
        eth: '20.5 ETH',
        category: 'video',
        type: 'GIFs',
    },
    {
        id: 4,
        image: require('../assets/images/items/2.jpg'),
        name: 'Colorful Abstract Painting',
        eth: '20.5 ETH',
        category: 'memes',
    },
    {
        id: 5,
        image: require('../assets/images/items/3.jpg'),
        name: 'Liquid Forest Princess',
        eth: '20.5 ETH',
        category: 'memes',
        type: 'Illustration'
    },
    {
        id: 6,
        image: require('../assets/images/gif/9.gif'),
        name: 'Spider Eyes Modern Art',
        eth: '20.5 ETH',
        category: 'games',
        type: 'GIFs',
    },
    {
        id: 7,
        image: require('../assets/images/items/4.jpg'),
        name: 'Synthwave Painting',
        eth: '20.5 ETH',
        category: 'video',
    },
    {
        id: 8,
        image: require('../assets/images/gif/10.gif'),
        name: 'Contemporary Abstract',
        eth: '20.5 ETH',
        category: 'music',
        type: 'GIFs',
    },
])

let filteredData = ref(datas.value)

 const matchCategory = (category) => {
  selectedCategory.value = category
  filteredData.value = selectedCategory.value ? datas.value.filter((item) => item.category === selectedCategory.value) : datas.value
}
</script>

<style lang="scss" scoped>

</style>