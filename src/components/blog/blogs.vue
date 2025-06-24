<template>

    <div v-if="blog" class="row g-4">
        <div v-for="item in datas" :key="item" :class="colclass">
            <div class="card blog blog-primary shadow rounded-md overflow-hidden">
                <div class="position-relative">
                    <img :src="item.image" class="img-fluid rounded-md" alt="">
                    <div class="position-absolute top-0 end-0 m-3">
                        <span class="like-icon shadow-sm"><a href="javascript:void(0)" class="text-muted icon"><i
                                    class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
                    </div>
                </div>
                <div class="card-body position-relative p-4">
                    <a href="" class="badge tag gradient rounded-md fw-bold">{{ item.category }}</a>

                    <ul class="list-unstyled mt-2">
                        <li class="list-inline-item text-muted small me-3"><i
                                class="uil uil-calendar-alt text-dark h6 me-1"></i>{{ item.date }}</li>
                        <li class="list-inline-item text-muted small"><i class="uil uil-clock text-dark h6 me-1"></i>{{
                            item.time }}</li>
                    </ul>
                    <router-link :to="{ name: 'blog-detail', params: { id: item.id } }" class="text-dark title h5 mt-3">{{
                        item.title }}</router-link>

                    <div class="mt-3 d-flex justify-content-between align-items-center">
                        <router-link :to="{ name: 'blog-detail', params: { id: item.id } }"
                            class="btn btn-link text-muted">Read more <i data-feather="arrow-right"
                                class="fea icon-sm"></i></router-link>
                        <span class="text-muted fs-6">by <router-link to="/creator-profile" class="link">{{ item.by
                                }}</router-link></span>
                    </div>
                </div>
            </div>
        </div><!--end col-->
    </div>



    <div v-else class="container mt-100 mt-60">
        <div class="row justify-content-center">
            <div class="col">
                <div class="section-title text-center mb-5 pb-3">
                    <h4 class="title mb-4">Latest Blogs</h4>
                    <p class="text-muted para-desc mb-0 mx-auto">We are a huge marketplace dedicated to
                        connecting great
                        artists of all Superex with their fans and unique token collectors!</p>
                </div>
            </div><!--end col-->
        </div><!--end row-->

        <div class="row g-4">
            <div v-for="item in datas.slice(0, 3)" :key="item" class="col-lg-4 col-md-6">
                <div class="card blog blog-primary shadow rounded-md overflow-hidden">
                    <div class="position-relative">
                        <img :src="item.image" class="img-fluid rounded-md" alt="">
                        <div class="position-absolute top-0 end-0 m-3">
                            <span class="like-icon shadow-sm"><a href="javascript:void(0)" class="text-muted icon"><i
                                        class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
                        </div>
                    </div>
                    <div class="card-body position-relative p-4">
                        <a href="" class="badge tag gradient rounded-md fw-bold">{{ item.category }}</a>

                        <ul class="list-unstyled mt-2">
                            <li class="list-inline-item text-muted small me-3"><i
                                    class="uil uil-calendar-alt text-dark h6 me-1"></i>{{ item.date }}</li>
                            <li class="list-inline-item text-muted small"><i
                                    class="uil uil-clock text-dark h6 me-1"></i>{{ item.time }}</li>
                        </ul>
                        <router-link :to="{ name: 'blog-detail', params: { id: item.id } }"
                            class="text-dark title h5 mt-3">{{ item.title
                            }}</router-link>

                        <div class="mt-3 d-flex justify-content-between align-items-center">
                            <router-link :to="{ name: 'blog-detail', params: { id: item.id } }"
                                class="btn btn-link text-muted">Read more <i data-feather="arrow-right"
                                    class="fea icon-sm"></i></router-link>
                            <span class="text-muted fs-6">by <router-link to="/creator-profile" class="link">{{
                                item.by }}</router-link></span>
                        </div>
                    </div>
                </div>
            </div><!--end col-->

        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref, defineProps } from 'vue';

defineProps({
    blog: {
        type: Boolean,
        required: true
    },
    colclass: {
        type: String,
        required: true
    },
})

const datas = ref([
    {
        id: 1,
        image: require('../../assets/images/blog/01.jpg'),
        category: 'Arts',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'Mindfulness Activities for Kids & Toddlers with NFT',
        by: '@callyjoe'
    },
    {
        id: 2,
        image: require('../../assets/images/blog/02.jpg'),
        category: 'Illustration',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'Save Thousands Of Lives Through This NFT',
        by: '@kristyhoney'
    },
    {
        id: 3,
        image: require('../../assets/images/blog/03.jpg'),
        category: 'Music',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'A place where technology meets craftsmanship',
        by: '@pandaone'
    },
    {
        id: 4,
        image: require('../../assets/images/blog/04.jpg'),
        category: 'Video',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'NFT Market - A Compact Trike with the Big Benefits',
        by: '@NorseQueen'
    },
    {
        id: 5,
        image: require('../../assets/images/blog/05.jpg'),
        category: 'Games',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'Honoring Black History Month with Toddlers',
        by: '@BigBull'
    },
    {
        id: 6,
        image: require('../../assets/images/blog/06.jpg'),
        category: 'Memes',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'Setting Intentions Instead of Resolutions for 2021',
        by: '@Angel'
    },
    {
        id: 7,
        image: require('../../assets/images/blog/07.jpg'),
        category: 'GIFs',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'Clever Ways to Purchase Extraordinart Items',
        by: '@CrazyAnyone'
    },
    {
        id: 8,
        image: require('../../assets/images/blog/08.jpg'),
        category: 'Video',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'How to Save Money on Baby Essentials for NFT',
        by: '@Princess'
    },
    {
        id: 9,
        image: require('../../assets/images/blog/09.jpg'),
        category: 'Music',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'Liki Trike - A Compact Trike with the Big Benefits',
        by: '@LooserBad'
    },
    {
        id: 10,
        image: require('../../assets/images/blog/10.jpg'),
        category: 'Tech',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'NFT Market - A Compact the Big Benefits',
        by: '@Princess'
    },
    {
        id: 11,
        image: require('../../assets/images/blog/11.jpg'),
        category: 'Arts',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'Behind the Scenes of the creabik App',
        by: '@PandaOne'
    },
    {
        id: 12,
        image: require('../../assets/images/blog/12.jpg'),
        category: 'GIFs',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'Meet fennouni, Product Designer at GitHub',
        by: '@FunnyGuy'
    },
])

</script>

<style lang="scss" scoped></style>