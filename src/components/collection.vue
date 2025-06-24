<template>
    <div class="row g-4">
        <div v-for="item in datas" :key="item" class="col-lg-4 col-md-6">
            <div class="card collections collection-primary rounded-md shadow p-2 pb-0">
                <div class="row g-2">
                    <div class="col-12">
                        <img :src="item.mainimage" class="img-fluid shadow-sm rounded-md" alt="">
                    </div><!--end col-->

                    <div v-for="images in item.images" :key="images" class="col-4">
                        <img :src="images" class="img-fluid shadow-sm rounded-md" alt="">
                    </div><!--end col-->
                </div><!--end row-->

                <div class="content text-center p-4 mt-n5">
                    <div class="position-relative d-inline-flex">
                        <img :src="item.clinet" class="avatar avatar-small rounded-pill img-thumbnail shadow-md"
                            alt="">
                        <span class="verified text-primary">
                            <i class="mdi mdi-check-decagram"></i>
                        </span>
                    </div>

                    <div class="mt-2">
                        <router-link to="/explore-four" class="text-dark title h5">{{item.name}}</router-link>

                        <p class="text-muted mb-0 small">{{item.item}}</p>
                    </div>
                </div>
            </div>
        </div><!--end col-->
    </div>
</template>

<script setup>
import { ref } from 'vue';
import image from '../assets/images/collection/01.jpg';
import image2 from '../assets/images/collection/04.jpg';
import image3 from '../assets/images/collection/10.jpg';
import image4 from '../assets/images/collection/05.jpg';
import image5 from '../assets/images/collection/06.jpg';
import image6 from '../assets/images/collection/07.jpg';
import image7 from '../assets/images/collection/09.jpg';
import image8 from '../assets/images/collection/11.jpg';
import image9 from '../assets/images/collection/12.jpg';
import image10 from '../assets/images/collection/01.jpg';
import image11 from '../assets/images/collection/10.jpg';
import image12 from '../assets/images/collection/03.jpg';
import image13 from '../assets/images/collection/06.jpg';
import image14 from '../assets/images/collection/02.jpg';
import image15 from '../assets/images/collection/07.jpg';
import image16 from '../assets/images/collection/09.jpg';
import image17 from '../assets/images/collection/08.jpg';
import image18 from '../assets/images/collection/12.jpg';

const datas = ref([
    {
        mainimage: require('../assets/images/collection/03.jpg'),
        images: [image, image2, image3],
        clinet: require('../assets/images/client/01.jpg'),
        name: 'Digital Arts',
        item: '27 Items'
    },
    {
        mainimage: require('../assets/images/collection/02.jpg'),
        images: [image4, image5, image6],
        clinet: require('../assets/images/client/10.jpg'),
        name: 'Sports',
        item: '27 Items'
    },
    {
        mainimage: require('../assets/images/collection/08.jpg'),
        images: [image7, image8, image9],
        clinet: require('../assets/images/client/01.jpg'),
        name: 'Photography',
        item: '27 Items'
    },
    {
        mainimage: require('../assets/images/collection/04.jpg'),
        images: [image10, image11, image12],
        clinet: require('../assets/images/client/01.jpg'),
        name: 'Illustrations',
        item: '27 Items'
    },
    {
        mainimage: require('../assets/images/collection/05.jpg'),
        images: [image13, image14, image15],
        clinet: require('../assets/images/client/10.jpg'),
        name: 'Animations',
        item: '27 Items'
    },
    {
        mainimage: require('../assets/images/collection/11.jpg'),
        images: [image16, image17, image18],
        clinet: require('../assets/images/client/12.jpg'),
        name: 'Virtual Reality',
        item: '27 Items'
    },
    {
        mainimage: require('../assets/images/collection/12.jpg'),
        images: [image, image2, image3],
        clinet: require('../assets/images/client/03.jpg'),
        name: 'Digital Arts',
        item: '27 Items'
    },
    {
        mainimage: require('../assets/images/collection/13.jpg'),
        images: [image4, image5, image6],
        clinet: require('../assets/images/client/04.jpg'),
        name: 'Sports',
        item: '27 Items'
    },
    {
        mainimage: require('../assets/images/collection/14.jpg'),
        images: [image7, image8, image9],
        clinet: require('../assets/images/client/05.jpg'),
        name: 'Photography',
        item: '27 Items'
    },
    {
        mainimage: require('../assets/images/collection/15.jpg'),
        images: [image10, image11, image12],
        clinet: require('../assets/images/client/01.jpg'),
        name: 'Illustrations',
        item: '27 Items'
    },
    {
        mainimage: require('../assets/images/collection/07.jpg'),
        images: [image13, image14, image15],
        clinet: require('../assets/images/client/06.jpg'),
        name: 'Animations',
        item: '27 Items'
    },
    {
        mainimage: require('../assets/images/collection/09.jpg'),
        images: [image16, image17, image18],
        clinet: require('../assets/images/client/13.jpg'),
        name: 'Virtual Reality',
        item: '27 Items'
    },
])
</script>

<style lang="scss" scoped></style>