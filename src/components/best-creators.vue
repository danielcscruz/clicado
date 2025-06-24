<template>
    <div class="row align-items-end mb-4 pb-2">
        <div class="col-md-8">
            <div class="section-title">
                <h4 class="title mb-2">Best Creators & Sellers</h4>
                <p class="text-muted mb-0">Best sellers of the week's NFTs</p>
            </div>
        </div><!--end slide-->

        <div class="col-md-4">
            <div class="text-end d-md-block d-none">
                <router-link to="/creators" class="btn btn-link primary text-dark">See More <i
                        class="uil uil-arrow-right"></i></router-link>
            </div>
        </div><!--end slide-->
    </div><!--end row-->

    <div class="row">
        <div class="col-12 mt-3">
            <div class="tiny-five-item-nav-arrow">
                <div v-for="item in datas" :key="item" class="tiny-slide">
                    <div class="card creators creators-two creator-primary rounded-md shadow overflow-hidden mx-2 my-3">
                        <div class="py-5" :style="{'background-image': 'url(' + (item.mainimage) + ')'}"></div>
                     
                        <div class="position-relative mt-n5">
                            <img :src="item.image"
                                class="avatar avatar-md-md rounded-pill shadow-sm bg-light img-thumbnail mx-auto d-block"
                                alt="">

                            <div class="content text-center pt-2 p-4">
                                <router-link to="/creator-profile" class="text-dark h6 name d-block mb-0">{{item.name}}</router-link>
                                <small class="text-muted">{{item.by}}</small>

                                <div class="mt-3">
                                    <a href="javascript:void(0)" class="btn btn-pills btn-soft-primary">Follow</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--end slide-->

            </div>
        </div><!--end col-->
    </div><!--end row-->

    <div class="row">
        <div class="col">
            <div class="text-center d-md-none d-block">
                <router-link to="/creators" class="btn btn-link primary text-dark">See More <i
                        class="uil uil-arrow-right"></i></router-link>
            </div>
        </div><!--end col-->
    </div><!--end row-->
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { tns } from 'tiny-slider/src/tiny-slider';
 
const datas = ref([
    {
        mainimage:require('../assets/images/work/1.jpg'),
        image: require('../assets/images/client/01.jpg'),
        name: 'Steven Townsend',
        by: '@StreetBoy'
    },
    {
        mainimage:require('../assets/images/work/2.jpg'),
        image: require('../assets/images/client/02.jpg'),
        name: 'Tiffany Betancourt',
        by: '@CutieGirl'
    },
    {
        mainimage:require('../assets/images/work/3.jpg'),
        image: require('../assets/images/client/03.jpg'),
        name: 'Mari Harrington',
        by: '@NorseQueen'
    },
    {
        mainimage:require('../assets/images/work/4.jpg'),
        image: require('../assets/images/client/04.jpg'),
        name: 'Floyd Glasgow',
        by: '@BigBull'
    },
    {
        mainimage:require('../assets/images/work/5.jpg'),
        image: require('../assets/images/client/05.jpg'),
        name: 'Donna Schultz',
        by: '@Angel'
    },
    {
        mainimage:require('../assets/images/work/6.jpg'),
        image: require('../assets/images/client/06.jpg'),
        name: 'Joshua Morris',
        by: '@CrazyAnyone'
    },
    {
        mainimage:require('../assets/images/work/7.jpg'),
        image: require('../assets/images/client/07.jpg'),
        name: 'Carl Williams',
        by: '@LooserBad'
    },
    {
        mainimage:require('../assets/images/work/8.jpg'),
        image: require('../assets/images/client/08.jpg'),
        name: 'Eugene Green',
        by: '@KristyHoney'
    },
    {
        mainimage:require('../assets/images/work/9.jpg'),
        image: require('../assets/images/client/09.jpg'),
        name: 'Julius Canale',
        by: '@PandaOne'
    },
    {
        mainimage:require('../assets/images/work/10.jpg'),
        image: require('../assets/images/client/10.jpg'),
        name: 'Michael Williams',
        by: '@FunnyGuy'
    },
    {
        mainimage:require('../assets/images/work/11.jpg'),
        image: require('../assets/images/client/11.jpg'),
        name: 'Jacqueline Burns',
        by: '@ButterFly'
    },
    {
        mainimage:require('../assets/images/work/12.jpg'),
        image: require('../assets/images/client/12.jpg'),
        name: 'Rosaria Vargas',
        by: '@Princess'
    },
]) 

onMounted(() => {
    tns({
        container: '.tiny-five-item-nav-arrow',
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
        gutter: 10,
        responsive: {
            992: {
                items: 5
            },

            767: {
                items: 3
            },

            320: {
                items: 1
            },
        },
    });
});

</script>

<style lang="scss" scoped></style>