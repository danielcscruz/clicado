<template>
    <div class="container">
        <div class="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 justify-content-center">
            <div v-for="item in datas" :key="item" class="col">
                <div class="card creators creators-two creator-primary rounded-md shadow overflow-hidden">
                    <div class="py-5" style="background: url('images/work/1.jpg');"
                        :style="{ backgroundImage: 'url(' + item.mainimage + ')' }"></div>
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
            </div><!--end col-->
        </div><!--end row-->
        <pagination />
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';
import pagination from '@/components/pagination.vue';

const datas = ref([
    {
        mainimage: require('../../assets/images/work/1.jpg'),
        image: require('../../assets/images/client/01.jpg'),
        name: 'Steven Townsend',
        by: '@StreetBoy',
    },
    {
        mainimage: require('../../assets/images/work/2.jpg'),
        image: require('../../assets/images/client/02.jpg'),
        name: 'Tiffany Betancourt',
        by: '@CutieGirl',
    },
    {
        mainimage: require('../../assets/images/work/3.jpg'),
        image: require('../../assets/images/client/03.jpg'),
        name: 'Mari Harrington',
        by: '@NorseQueen',
    },
    {
        mainimage: require('../../assets/images/work/4.jpg'),
        image: require('../../assets/images/client/04.jpg'),
        name: 'Floyd Glasgow',
        by: '@BigBull',
    },
    {
        mainimage: require('../../assets/images/work/5.jpg'),
        image: require('../../assets/images/client/05.jpg'),
        name: 'Donna Schultz',
        by: '@Angel',
    },
    {
        mainimage: require('../../assets/images/work/6.jpg'),
        image: require('../../assets/images/client/06.jpg'),
        name: 'Joshua Morris',
        by: '@CrazyAnyone',
    },
    {
        mainimage: require('../../assets/images/work/7.jpg'),
        image: require('../../assets/images/client/07.jpg'),
        name: 'Carl Williams',
        by: '@LooserBad',
    },
    {
        mainimage: require('../../assets/images/work/8.jpg'),
        image: require('../../assets/images/client/08.jpg'),
        name: 'Eugene Green',
        by: '@KristyHoney',
    },
    {
        mainimage: require('../../assets/images/work/9.jpg'),
        image: require('../../assets/images/client/09.jpg'),
        name: 'Julius Canale',
        by: '@PandaOne',
    },
    {
        mainimage: require('../../assets/images/work/10.jpg'),
        image: require('../../assets/images/client/10.jpg'),
        name: 'Michael Williams',
        by: '@FunnyGuy',
    },
    {
        mainimage: require('../../assets/images/work/11.jpg'),
        image: require('../../assets/images/client/11.jpg'),
        name: 'Jacqueline Burns',
        by: '@ButterFly',
    },
    {
        mainimage: require('../../assets/images/work/12.jpg'),
        image: require('../../assets/images/client/12.jpg'),
        name: 'Rosaria Vargas',
        by: '@Princess',
    },
])

</script>

<style lang="scss" scoped></style>