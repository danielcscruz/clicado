<template>
    <div class="container">
        <div class="profile-banner">
            <input id="pro-banner" name="profile-banner" type="file" class="d-none" @change="loadFile" />
            <div class="position-relative d-inline-block">
                <img :src="imageSrc" class="rounded-md shadow-sm img-fluid" id="profile-banner" alt="">
                <label class="icons position-absolute bottom-0 end-0" for="pro-banner"><span
                        class="btn btn-icon btn-sm btn-pills btn-primary"><i data-feather="camera"
                            class="icons"></i></span></label>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col">
                <div class="text-center mt-n80">
                    <div class="profile-pic">
                        <input id="pro-img" name="profile-image" type="file" class="d-none" @change="loadFile2" />
                        <div class="position-relative d-inline-block">
                            <img :src="imageSrc2" class="avatar avatar-medium img-thumbnail rounded-pill shadow-sm"
                                id="profile-image" alt="">
                            <label class="icons position-absolute bottom-0 end-0" for="pro-img"><span
                                    class="btn btn-icon btn-sm btn-pills btn-primary"><i data-feather="camera"
                                        class="icons"></i></span></label>
                        </div>
                    </div>

                    <div class="content mt-3">
                        <h5 class="mb-3">streetboyyy</h5>
                        <small class="text-muted px-2 py-1 rounded-lg shadow">bhcedeh5sdijuj-husac4saiu <a
                                href="javascript:void(0)" class="text-primary h5 ms-1"><i
                                    class="uil uil-copy"></i></a></small>

                        <h6 class="mt-3 mb-0">Artist, UX / UI designer, and Entrepreneur</h6>

                        <div class="mt-4">
                            <router-link to="/creator-profile-edit" class="btn btn-pills btn-outline-primary mx-1">Edit
                                Profile</router-link>
                            <router-link to="/upload-work" class="btn btn-pills btn-icon btn-outline-primary mx-1"><i
                                    class="uil uil-folder-upload"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-100 mt-60">
        <div class="row">
            <div class="col-12">
                <ul class="nav nav-tabs border-bottom" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="Create-tab" data-bs-toggle="tab"
                            data-bs-target="#CreateItem" type="button" role="tab" aria-controls="CreateItem"
                            aria-selected="true">Created</button>
                    </li>

                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="Liked-tab" data-bs-toggle="tab" data-bs-target="#Liked"
                            type="button" role="tab" aria-controls="Liked" aria-selected="false">Liked</button>
                    </li>

                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="Sale-tab" data-bs-toggle="tab" data-bs-target="#Sale" type="button"
                            role="tab" aria-controls="Sale" aria-selected="false">On Sale</button>
                    </li>

                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="Collection-tab" data-bs-toggle="tab" data-bs-target="#Collection"
                            type="button" role="tab" aria-controls="Collection"
                            aria-selected="false">Collection</button>
                    </li>

                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="Activites-tab" data-bs-toggle="tab" data-bs-target="#Activites"
                            type="button" role="tab" aria-controls="Activites" aria-selected="false">Activites</button>
                    </li>

                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="Followers-tab" data-bs-toggle="tab" data-bs-target="#Followers"
                            type="button" role="tab" aria-controls="Followers" aria-selected="false">Followers</button>
                    </li>

                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="About-tab" data-bs-toggle="tab" data-bs-target="#About"
                            type="button" role="tab" aria-controls="About" aria-selected="false">About</button>
                    </li>
                </ul>

                <div class="tab-content mt-4 pt-2" id="myTabContent">
                    <div class="tab-pane fade show active" id="CreateItem" role="tabpanel" aria-labelledby="Create-tab">
                        <explore :creators=true
                            :rowclass="'row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4'" />
                    </div>

                    <div class="tab-pane fade" id="Liked" role="tabpanel" aria-labelledby="Liked-tab">
                        <div class="row justify-content-center">
                            <div class="col-lg-5 col-md-8 text-center">
                                <img src="../../assets/images/svg/office-desk.svg" class="img-fluid" alt="">

                                <div class="content">
                                    <h5 class="mb-4">No Items</h5>
                                    <p class="text-muted">Show your appreciation for other's work by liking the shots
                                        you love. We'll collect all of your likes here for you to revisit anytime.</p>
                                </div>
                            </div><!--end col-->
                        </div><!--end row-->
                    </div>

                    <div class="tab-pane fade" id="Sale" role="tabpanel" aria-labelledby="Sale-tab">
                        <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
                            <div v-for="item in sales" :key="item" class="col">
                                <div
                                    class="card nft-items nft-primary nft-auction rounded-md shadow overflow-hidden mb-1 p-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <img :src="item.image" alt="user"
                                                class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
                                            <a href="javascript:void(0)"
                                                class="text-dark small creator-name h6 mb-0 ms-2">{{ item.by }}</a>
                                        </div>
                                    </div>

                                    <div class="nft-image rounded-md mt-3 position-relative overflow-hidden">
                                        <router-link :to="{ name: 'item-detail-one', params: { id: item.id } }"><img
                                                :src="item.mainimage" class="img-fluid" alt=""></router-link>
                                        <div class="position-absolute top-0 start-0 m-2">
                                            <a href="javascript:void(0)" class="badge badge-link bg-primary">{{
                item.type }}</a>
                                        </div>
                                        <div class="position-absolute top-0 end-0 m-2">
                                            <span class="like-icon shadow-sm"><a href="javascript:void(0)"
                                                    class="text-muted icon"><i
                                                        class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
                                        </div>
                                    </div>

                                    <div class="card-body content position-relative p-0 mt-3">
                                        <router-link :to="{ name: 'item-detail-one', params: { id: item.id } }"
                                            class="title text-dark h6">{{ item.name }}</router-link>

                                        <div class="d-flex align-items-center justify-content-between mt-3">
                                            <div class="">
                                                <small class="mb-0 d-block fw-semibold">Current Bid:</small>
                                                <small class="rate fw-bold">{{ item.eth }}</small>
                                            </div>
                                            <router-link to="/item-detail-one"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-shopping-bag"></i></router-link>
                                        </div>
                                    </div>
                                </div>
                            </div><!--end col-->

                        </div><!--end row-->
                    </div>

                    <div class="tab-pane fade" id="Collection" role="tabpanel" aria-labelledby="Collection-tab">
                        <div class="row justify-content-center">
                            <div class="col-lg-5 col-md-8 text-center">
                                <img src="../../assets/images/svg/products-to-cart-or-basket.svg" class="img-fluid"
                                    alt="">

                                <div class="content mt-4">
                                    <h5 class="mb-4">No Collection</h5>
                                    <p class="text-muted">Save interesting shots into personalized collections, and
                                        discover new and interesting recommendations along the way.</p>
                                </div>
                            </div><!--end col-->
                        </div><!--end row-->
                    </div>

                    <div class="tab-pane fade" id="Activites" role="tabpanel" aria-labelledby="Activites-tab">

                        <activity :activity=true />

                        <div class="row">
                            <div class="col-12 text-center mt-4">
                                <a href="javascript:void(0)" class="btn btn-link primary text-dark">Load More <i
                                        class="uil uil-arrow-right"></i></a>
                            </div><!--end col-->
                        </div><!--end row-->
                    </div>

                    <div class="tab-pane fade" id="Followers" role="tabpanel" aria-labelledby="Followers-tab">
                        <h5 class="mb-4">6 Followers</h5>
                        <div class="row g-4">
                            <div v-for="item in followers" :key="item" class="col-md-6">
                                <div class="p-4 rounded-md shadow users user-primary">
                                    <div class="d-flex align-items-center">
                                        <div class="position-relative">
                                            <img :src="item.mainimage"
                                                class="avatar avatar-md-md rounded-pill shadow-sm img-thumbnail" alt="">
                                            <div class="position-absolute bottom-0 end-0">
                                                <a href="javascript:void(0)"
                                                    class="btn btn-icon btn-pills btn-sm btn-primary"><i
                                                        class="uil uil-plus"></i></a>
                                            </div>
                                        </div>

                                        <div class="content ms-3">
                                            <h6 class="mb-0"><router-link to="/creator-profile"
                                                    class="text-dark name">{{ item.name }}</router-link></h6>
                                            <small class="text-muted d-flex align-items-center"><i
                                                    class="uil uil-map-marker fs-5 me-1"></i> {{ item.location
                                                }}</small>
                                        </div>
                                    </div>

                                    <div class="border-top my-4"></div>
                                    <div class="row row-cols-xl-6 g-3">
                                        <div v-for="images in item.images" :key="images" class="col">
                                            <router-link to="/item-detail-one" class="user-item"><img :src="images"
                                                    class="img-fluid rounded-md shadow-sm" alt=""></router-link>
                                        </div><!--end col-->
                                    </div><!--end row-->
                                </div>
                            </div><!--end col-->
                        </div><!--end row-->
                    </div>

                    <div class="tab-pane fade" id="About" role="tabpanel" aria-labelledby="About-tab">
                        <h5 class="mb-4">Calvin Carlo</h5>

                        <p class="text-muted mb-0">I have started my career as a trainee and prove my self and achieve
                            all the milestone with good guidance and reach up to the project manager. In this journey, I
                            understand all the procedure which make me a good developer, team leader, and a project
                            manager.</p>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import feather from 'feather-icons'
import images from '../../assets/images/blog/single.jpg';
import images2 from '../../assets/images/client/01.jpg';
import explore from '@/components/explore-item.vue';
import activity from '@/components/activity.vue';
import image1 from '../../assets/images/items/1.jpg'
import img2 from '../../assets/images/items/2.jpg'
import image3 from '../../assets/images/gif/3.gif'
import image4 from '../../assets/images/items/4.jpg'
import image5 from '../../assets/images/items/5.jpg'
import image6 from '../../assets/images/gif/4.gif'
import image7 from '../../assets/images/items/3.jpg'
import image8 from '../../assets/images/gif/1.gif'
import image9 from '../../assets/images/items/9.jpg'
import image10 from '../../assets/images/items/6.jpg'
import image11 from '../../assets/images/gif/2.gif'
import image12 from '../../assets/images/gif/5.gif'
import image13 from '../../assets/images/gif/6.gif'
import image14 from '../../assets/images/items/7.jpg'
import image15 from '../../assets/images/items/8.jpg'
import image16 from '../../assets/images/items/10.jpg'

const imageSrc = ref(images)
const imageSrc2 = ref(images2)
const image = ref('')
const image2 = ref('')

const sales = ref([
    {
        id: 16,
        image: require('../../assets/images/client/01.jpg'),
        mainimage: require('../../assets/images/gif/4.gif'),
        name: 'Contemporary Abstract',
        eth: '20.5 ETH',
        type: 'GIFs',
        by: '@StreetBoyyy'
    },
    {
        id: 9,
        image: require('../../assets/images/client/01.jpg'),
        mainimage: require('../../assets/images/items/5.jpg'),
        name: 'Valkyrie Abstract Art',
        eth: '20.5 ETH',
        type: 'Arts',
        by: '@StreetBoyyy'
    },
    {
        id: 15,
        image: require('../../assets/images/client/01.jpg'),
        mainimage: require('../../assets/images/gif/3.gif'),
        name: 'Spider Eyes Modern Art',
        eth: '20.5 ETH',
        type: 'GIFs',
        by: '@StreetBoyyy'
    },
])

const followers = ref([
    {
        mainimage: require('../../assets/images/client/02.jpg'),
        name: 'CutieGirl',
        location: 'Brookfield, WI',
        images: [image1, img2, image3, image4, image5, image6]
    },
    {
        mainimage: require('../../assets/images/client/13.jpg'),
        name: 'FunnyGuy',
        location: 'Brookfield, WI',
        images: [image7, image8, image9, image10, image1, image11]
    },
    {
        mainimage: require('../../assets/images/client/03.jpg'),
        name: 'NorseQueen',
        location: 'Brookfield, WI',
        images: [image12, img2, image13, image4, image5,]
    },
    {
        mainimage: require('../../assets/images/client/04.jpg'),
        name: 'BigBull',
        location: 'Brookfield, WI',
        images: [image14, image15, image9, image16]
    },
    {
        mainimage: require('../../assets/images/client/10.jpg'),
        name: 'KristyHoney',
        location: 'Brookfield, WI',
        images: [image1, img2, image7, image4, image5, image10]
    },
    {
        mainimage: require('../../assets/images/client/12.jpg'),
        name: 'Princess',
        location: 'Brookfield, WI',
        images: [image5, image15, image4, image14, image5, image16]
    },
])

onMounted(() =>{
    feather.replace()
})

const loadFile = (event) => {
    image.value = document.getElementById(event.target.name)
    imageSrc.value = URL.createObjectURL(event.target.files[0])
}

const loadFile2 = (event) => {
    image2.value = document.getElementById(event.target.name)
    imageSrc2.value = URL.createObjectURL(event.target.files[0])
}
</script>

<style lang="scss" scoped></style>