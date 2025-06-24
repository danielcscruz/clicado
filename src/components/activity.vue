<template>
    <div v-if="activity" class="row g-4">
        <div v-for="item in datas" :key="item" class="col-12">
            <div class="card activity activity-primary rounded-md shadow p-4">
                <div class="d-flex align-items-center">
                    <div class="position-relative">
                        <img :src="item.image" class="avatar avatar-md-md rounded-md shadow-md" alt="">

                        <div
                            class="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white">
                            <i :class="item.icon"></i>
                        </div>
                    </div>

                    <span class="content ms-3">
                        <a href="javascript:void(0)" class="text-dark title mb-0 h6 d-block">{{ item.name }}</a>
                        <small class="text-muted d-block mt-1">{{ item.subname }} <a href="javascript:void(0)"
                                class="link fw-bold">{{ item.by }}</a></small>

                        <small class="text-muted d-block mt-1">{{ item.time }}</small>
                    </span>
                </div>
            </div>
        </div><!--end col-->
    </div><!--end row-->


    <div v-else class="container">
        <div class="row">
            <div class="col-lg-7 col-md-7">
                <div class="me-lg-4">
                    <div class="row g-4">
                        <div v-for="item in datas" :key="item" class="col-12">
                            <div class="card activity activity-primary rounded-md shadow p-4">
                                <div class="d-flex align-items-center">
                                    <div class="position-relative">
                                        <img :src="item.image" class="avatar avatar-md-md rounded-md shadow-md" alt="">

                                        <div
                                            class="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white">
                                            <i :class="item.icon"></i>
                                        </div>
                                    </div>

                                    <span class="content ms-3">
                                        <a href="javascript:void(0)" class="text-dark title mb-0 h6 d-block">{{
                                            item.name }}</a>
                                        <small class="text-muted d-block mt-1">{{ item.subname }} <a
                                                href="javascript:void(0)" class="link fw-bold">{{ item.by }}</a></small>

                                        <small class="text-muted d-block mt-1">{{ item.time }}</small>
                                    </span>
                                </div>
                            </div>
                        </div><!--end col-->
                    </div><!--end row-->

                    <div class="row">
                        <div class="col-12 text-center mt-4">
                            <a href="javascript:void(0)" class="btn btn-link primary text-dark">Load More <i
                                    class="uil uil-arrow-right"></i></a>
                        </div><!--end col-->
                    </div><!--end row-->
                </div>
            </div><!--end col-->

            <div class="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div class="sticky-bar">
                    <h5 class="mb-0">Filters</h5>
                    <div class="p-4 rounded-md shadow mt-4">
                        <div class="tagcloud">
                            <a v-for="item in filters" :key="item" href="jvascript:void(0)"
                                class="d-inline-flex align-items-center rounded-md text-capitalize"><i
                                    :class="item.icon"></i> {{ item.name }}</a>
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
    activity: {
        type: Boolean,
        required: true
    }
})

const filters = ref([
    {
        icon: 'uil uil-wallet fs-6 me-1',
        name: 'Purchased'
    },
    {
        icon: 'uil uil-tag-alt fs-6 me-1',
        name: 'Sales'
    },
    {
        icon: 'uil uil-fire fs-6 me-1',
        name: 'Burns'
    },
    {
        icon: 'uil uil-heart fs-6 me-1',
        name: 'Likes'
    },
    {
        icon: 'uil uil-browser fs-6 me-1',
        name: 'Bids'
    },
    {
        icon: 'uil uil-users-alt fs-6 me-1',
        name: 'Following'
    },
    {
        icon: 'uil uil-list-ui-alt fs-6 me-1',
        name: 'Listing'
    },
    {
        icon: 'uil uil-music fs-6 me-1',
        name: 'Music'
    },
    {
        icon: 'uil uil-camera fs-6 me-1',
        name: 'Video'
    },
    {
        icon: 'uil uil-illustration fs-6 me-1',
        name: 'Illustration'
    },
])

const datas = ref([
    {
        image: require('../assets/images/items/1.jpg'),
        icon: 'mdi mdi-account-check mdi-18px text-success',
        name: 'Digital Art Collection',
        subname: 'Started Following',
        by: '@Panda',
        time: '1 hours ago'
    },
    {
        image: require('../assets/images/gif/1.gif'),
        icon: 'mdi mdi-heart mdi-18px text-danger',
        name: 'Skrrt Cobain Official',
        subname: 'Liked by',
        by: '@ButterFly',
        time: '2 hours ago'
    },
    {
        image: require('../assets/images/items/2.jpg'),
        icon: 'mdi mdi-heart mdi-18px text-danger',
        name: 'Wow! That Brain Is Floating',
        subname: 'Liked by',
        by: '@ButterFly',
        time: '2 hours ago'
    },
    {
        image: require('../assets/images/items/3.jpg'),
        icon: 'mdi mdi-format-list-bulleted mdi-18px text-warning',
        name: 'Our Journey Start',
        subname: 'Listed by',
        by: '@CalvinCarlo',
        time: '5 hours ago'
    },
    {
        image: require('../assets/images/gif/2.gif'),
        icon: 'mdi mdi-heart mdi-18px text-danger',
        name: 'BitBears',
        subname: 'Liked by',
        by: '@ButterFly',
        time: '8 hours ago'
    },
    {
        image: require('../assets/images/items/4.jpg'),
        icon: 'mdi mdi-heart mdi-18px text-danger',
        name: 'Little Kokeshi #13',
        subname: 'Liked by',
        by: '@ButterFly',
        time: '1 hours ago'
    },
    {
        image: require('../assets/images/gif/3.gif'),
        icon: 'mdi mdi-account-check mdi-18px text-success',
        name: 'EVOL Floater',
        subname: 'Started Following',
        by: '@CutieGirl',
        time: '13 hours ago'
    },
    {
        image: require('../assets/images/gif/4.gif'),
        icon: 'mdi mdi-format-list-bulleted mdi-18px text-warning',
        name: 'Smart Ape Club (SAC) - Limited Edition',
        subname: 'Listed by',
        by: '@CalvinCarlo',
        time: '18 hours ago'
    },
    {
        image: require('../assets/images/gif/5.gif'),
        icon: 'mdi mdi-format-list-bulleted mdi-18px text-warning',
        name: 'THE SECRET SOCIETY XX #775',
        subname: 'Listed by',
        by: '@CalvinCarlo',
        time: '23 hours ago'
    },
    {
        image: require('../assets/images/items/5.jpg'),
        icon: 'mdi mdi-heart mdi-18px text-danger',
        name: 'Create Your Own World',
        subname: 'Liked by',
        by: '@ButterFly',
        time: '24 hours ago'
    },
])

</script>

<style lang="scss" scoped></style>