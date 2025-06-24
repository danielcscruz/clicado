<template>
    <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
            <div class="col">
                <div class="section-title text-center mb-4 pb-2">
                    <h4 class="title mb-4">Our Team</h4>
                    <p class="text-muted para-desc mb-0 mx-auto">We are a huge marketplace dedicated to connecting great
                        artists of all Superex with their fans and unique token collectors!</p>
                </div>
            </div><!--end col-->
        </div><!--end row-->

        <div class="row">
            <div v-for="item in datas" :key="item" class="col-lg-3 col-md-4 col-12 mt-4 pt-2">
                <div class="card team team-primary text-center">
                    <div
                        class="card-img team-image d-inline-block mx-auto rounded-pill shadow avatar avatar-ex-large overflow-hidden">
                        <img :src="item.image" class="img-fluid" alt="">
                        <div class="card-overlay avatar avatar-ex-large rounded-pill"></div>

                        <ul class="list-unstyled team-social mb-0">
                            <li v-for="social in item.social" :key="social" class="list-inline-item me-1"><a href="" class="btn btn-sm btn-pills btn-icon"><i
                                        :data-feather="social" class="fea icon-sm fea-social"></i></a></li>
                        </ul><!--end icon-->
                    </div>

                    <div class="content mt-3">
                        <a href="" class="text-dark h6 mb-0 title d-block">{{item.name}}</a>
                        <small class="text-muted mb-0 fw-normal">{{item.position}}</small>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import {ref} from 'vue';

const datas = ref([
    {
        image: require('../assets/images/client/01.jpg'),
        name: 'Calvin Carlo',
        position: 'Designer',
        social: ['facebook', 'instagram', 'twitter']
    },
    {
        image: require('../assets/images/client/02.jpg'),
        name: 'Aliana Rosy',
        position: 'Designer',
        social: ['facebook', 'instagram', 'twitter']
    },
    {
        image: require('../assets/images/client/08.jpg'),
        name: 'Micheal Carlo',
        position: 'Designer',
        social: ['facebook', 'instagram', 'twitter']
    },
    {
        image: require('../assets/images/client/03.jpg'),
        name: 'Sofia Razaq',
        position: 'Designer',
        social: ['facebook', 'instagram', 'twitter']
    },
    {
        image: require('../assets/images/client/04.jpg'),
        name: 'Jack John',
        position: 'Designer',
        social: ['facebook', 'instagram', 'twitter']
    },
    {
        image: require('../assets/images/client/05.jpg'),
        name: 'Krista John',
        position: 'Designer',
        social: ['facebook', 'instagram', 'twitter']
    },
    {
        image: require('../assets/images/client/06.jpg'),
        name: 'Roger Jackson',
        position: 'Designer',
        social: ['facebook', 'instagram', 'twitter']
    },
    {
        image: require('../assets/images/client/07.jpg'),
        name: 'Johnny English',
        position: 'Designer',
        social: ['facebook', 'instagram', 'twitter']
    },
])

</script>

<style lang="scss" scoped></style>