<template>
    <div class="col-lg-4 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
        <div class="sidebar sticky-bar ms-lg-4 p-4 rounded-md shadow">
            <!-- SEARCH -->
            <div class="widget">
                <h6 class="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">Search</h6>
                <div id="search2" class="widget-search mt-4 mb-0">
                    <form role="search" method="get" id="searchform" class="searchform">
                        <div>
                            <input type="text" class="border rounded" name="s" id="s" placeholder="Search Keywords...">
                            <input type="submit" id="searchsubmit" value="Search">
                        </div>
                    </form>
                </div>
            </div>
            <!-- SEARCH -->

            <!-- RECENT POST -->
            <div class="widget mt-4 pt-2">
                <h6 class="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">Recent Post</h6>
                <div class="mt-4">
                    <div v-for="item in datas" :key="item" class="d-flex align-items-center" :class="item.class">
                        <img :src="item.image" class="avatar avatar-small rounded" style="width: auto;" alt="">
                        <div class="flex-1 ms-3">
                            <router-link :to="{name: 'blog-detail', params: {id: item.id}}" class="d-block title text-dark">{{item.name}}</router-link>
                            <small class="text-muted">{{item.date}}</small>
                        </div>
                    </div>
                </div>
            </div>
            <!-- RECENT POST -->

            <!-- TAG CLOUDS -->
            <div class="widget mt-4 pt-2 text-center">
                <h6 class="widget-title font-weight-bold pt-2 pb-2 bg-light rounded">Tags Cloud</h6>
                <div class="tagcloud mt-4">
                    <a v-for="item in social" :key="item" href="javascript:void(0)" class="rounded text-capitalize fw-normal">{{item}}</a>
                </div>
            </div>
            <!-- TAG CLOUDS -->
        </div>
    </div><!--end col-->
</template>

<script setup>
import { ref } from 'vue';

const social = ref(['Business', 'Finance', 'Marketing', 'Fashion', 'Bride', 'Lifestyle', 'Travel', 'Beauty', 'Video', 'Audio'])

const datas = ref([
    {
        id: 1,
        image: require('../../assets/images/blog/01.jpg'),
        name: 'Consultant Business',
        date: '15th January 2022'
    },
    {
        id: 2,
        image: require('../../assets/images/blog/02.jpg'),
        name: 'Grow Your Business',
        date: '15th January 2022',
        class: 'mt-3'
    },
    {
        id: 3,
        image: require('../../assets/images/blog/03.jpg'),
        name: 'Look On The Glorious Balance',
        date: '15th January 2022',
        class: 'mt-3'
    },
])

</script>

<style lang="scss" scoped></style>