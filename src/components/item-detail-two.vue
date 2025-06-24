<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-9">
                <div class="features-absolute rounded-md bg-white p-4 pt-5">
                    <div class="row">
                        <div class="col">
                            <div class="title-heading text-center">
                                <h4 class="h3 fw-bold mb-0">Wolf with Skull <span
                                        class="text-gradient-primary">Orange</span> <br> <span
                                        class="text-gradient-primary">Illustration</span> T-shirt Tattoo</h4>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-md-6 mt-4 pt-2">
                                    <div class="text-center">
                                        <h6>Current Bid</h6>
                                        <h4 class="mb-0">4.85 ETH</h4>
                                        <small class="mb-0 text-muted">$450.48USD</small>
                                    </div>
                                </div>

                                <div class="col-md-6 mt-4 pt-2">
                                    <div class="text-center">
                                        <h6>Auction Ending In</h6>
                                        <h4 id="auction-item-8" class="fw-bold mb-0">{{ days + " : " + hours + " : " + minutes + " : " +
                            seconds }}</h4>
                                    </div>
                                </div>

                                <div class="col-12 text-center mt-4 pt-2">
                                    <a href="#" @click="toggle" class="btn btn-l btn-pills btn-primary m-1" 
                                        data-bs-target="#NftBid"><i class="mdi mdi-gavel fs-5 me-2"></i> Place a Bid</a>
                                    <a href="#" @click="activemenu" class="btn btn-l btn-pills btn-primary m-1"><i class="mdi mdi-cart fs-5 me-2"></i> Buy Now</a>
                                </div>
                            </div>

                            <div class="row mt-5">
                                <div class="col-12">
                                    <ul class="nav nav-tabs border-bottom justify-content-center" id="myTab"
                                        role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="detail-tab" data-bs-toggle="tab"
                                                data-bs-target="#detailItem" type="button" role="tab"
                                                aria-controls="detailItem" aria-selected="true">Details</button>
                                        </li>

                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="bids-tab" data-bs-toggle="tab"
                                                data-bs-target="#bids" type="button" role="tab" aria-controls="bids"
                                                aria-selected="false">Bids</button>
                                        </li>

                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="activity-tab" data-bs-toggle="tab"
                                                data-bs-target="#activity" type="button" role="tab"
                                                aria-controls="activity" aria-selected="false">Activity</button>
                                        </li>
                                    </ul>

                                    <div class="tab-content mt-4 pt-2" id="myTabContent">
                                        <div class="tab-pane fade show active" id="detailItem" role="tabpanel"
                                            aria-labelledby="detail-tab">
                                            <p class="text-muted">Hey guys! New exploration about NFT Marketplace Web
                                                Design, this time I'm inspired by one of my favorite NFT website called
                                                Superex (with crypto payment)! What do you think?</p>
                                            <p class="text-muted">What does it mean? Biomechanics is the study of the
                                                structure, function and motion of the mechanical aspects of biological
                                                systems, at any level from whole organisms to organs, cells and cell
                                                organelles, using the methods of mechanics. Biomechanics is a branch of
                                                biophysics.</p>
                                            <h6>Owner</h6>

                                            <div class="creators creator-primary d-flex align-items-center">
                                                <div class="position-relative">
                                                    <img src="../assets/images/client/09.jpg"
                                                        class="avatar avatar-md-sm shadow-md rounded-pill" alt="">
                                                    <span class="verified text-primary">
                                                        <i class="mdi mdi-check-decagram"></i>
                                                    </span>
                                                </div>

                                                <div class="ms-3">
                                                    <h6 class="mb-0"><router-link to="/creators"
                                                            class="text-dark name">PandaOne</router-link></h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="tab-pane fade" id="bids" role="tabpanel" aria-labelledby="bids-tab">
                                            <div class="creators creator-primary d-flex align-items-center">
                                                <div class="position-relative">
                                                    <img src="../assets/images/client/01.jpg"
                                                        class="avatar avatar-md-sm shadow-md rounded-pill" alt="">
                                                </div>

                                                <div class="ms-3">
                                                    <h6 class="mb-0">2 WETH <span class="text-muted">by</span> <router-link
                                                            to="/creator-profile"
                                                            class="text-dark name">0xe849fa28a...ea14</router-link></h6>
                                                    <small class="text-muted">6 hours ago</small>
                                                </div>
                                            </div>

                                            <div class="creators creator-primary d-flex align-items-center mt-4">
                                                <div class="position-relative">
                                                    <img src="../assets/images/client/08.jpg"
                                                        class="avatar avatar-md-sm shadow-md rounded-pill" alt="">
                                                </div>

                                                <div class="ms-3">
                                                    <h6 class="mb-0">0.001 WETH <span class="text-muted">by</span> <router-link
                                                            to="/creator-profile"
                                                            class="text-dark name">VOTwear</router-link></h6>
                                                    <small class="text-muted">6 hours ago</small>
                                                </div>
                                            </div>

                                            <div class="creators creator-primary d-flex align-items-center mt-4">
                                                <div class="position-relative">
                                                    <img src="../assets/images/client/10.jpg"
                                                        class="avatar avatar-md-sm shadow-md rounded-pill" alt="">
                                                </div>

                                                <div class="ms-3">
                                                    <h6 class="mb-0">1.225 WETH <span class="text-muted">by</span> <router-link
                                                            to="/creator-profile"
                                                            class="text-dark name">PandaOne</router-link></h6>
                                                    <small class="text-muted">6 hours ago</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="tab-pane fade" id="activity" role="tabpanel"
                                            aria-labelledby="activity-tab">
                                            <div class="row g-4">
                                                <div v-for="item in activity" :key="item" class="col-12">
                                                    <div class="card activity activity-primary rounded-md shadow p-4">
                                                        <div class="d-flex align-items-center">
                                                            <div class="position-relative">
                                                                <img :src="item.image"
                                                                    class="avatar avatar-md-md rounded-md shadow-md"
                                                                    alt="">

                                                                <div
                                                                    class="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white">
                                                                    <i
                                                                        :class="item.icon"></i>
                                                                </div>
                                                            </div>

                                                            <span class="content ms-3">
                                                                <a href="javascript:void(0)"
                                                                    class="text-dark title mb-0 h6 d-block">{{item.name}}</a>
                                                                <small class="text-muted d-block mt-1">{{item.subname}}
                                                                    <a href="javascript:void(0)"
                                                                        class="link fw-bold">{{item.by}}</a></small>

                                                                <small class="text-muted d-block mt-1">{{item.time}}</small>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div><!--end col-->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><!--end col-->
                    </div><!--end row-->
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->


      <!-- Place Bid Modal -->
      <div :class="isActive ? 'd-block show' : ''"  class="modal fade">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content border-0 shadow-md rounded-md">
                    <div class="modal-header">
                        <h5 class="modal-title" id="bidtitle">Place a Bid</h5>
                        <button @click="toggle" type="button" class="btn btn-close" data-bs-dismiss="modal" id="close-modal"><i class="uil uil-times fs-4 text-muted"></i></button>
                    </div>
                    <div class="modal-body p-4">
                        <form>
                            <div class="row">
                                <div class="col-12">
                                    <div class="mb-4">
                                        <label class="form-label fw-bold">Your Bid Price <span class="text-danger">*</span></label>
                                        <input name="name" id="name" type="text" class="form-control" placeholder="00.00 ETH">
                                        <small class="text-muted"><span class="text-dark">Note:</span> Bid price at least 1 ETH</small>
                                    </div>
                                </div><!--end col-->
                                <div class="col-12">
                                    <div class="mb-4">
                                        <label class="form-label fw-bold">Enter Your QTY <span class="text-danger">*</span></label>
                                        <input name="email" id="email" type="email" class="form-control" placeholder="0">
                                        <small class="text-muted"><span class="text-dark">Note:</span> Max. Qty 5</small>
                                    </div> 
                                </div><!--end col-->
                            </div>
                        </form>

                        <div class="pt-3 border-top">
                            <div class="d-flex justify-content-between">
                                <p class="fw-bold small"> You must bid at least:</p>
                                <p class="text-primary"> 1.22 ETH </p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p class="fw-bold small"> Service free:</p>
                                <p class="text-primary"> 0.05 ETH </p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p class="fw-bold small"> Total bid amount:</p>
                                <p class="text-primary mb-0"> 1.27 ETH </p>
                            </div>
                        </div>
                    </div>
                    <div @click="toggle2" class="modal-footer">
                        <button class="btn btn-pills btn-primary"><i class="mdi mdi-gavel fs-5 me-2"></i> Place a Bid</button>
                    </div>
                </div>
            </div>
        </div>
        <div :class="isActive2 ? 'd-block show' : ''" class="modal fade" id="placebid" aria-hidden="true" aria-labelledby="bidsuccess" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content border-0 shadow-md rounded-md">
                    <div class="modal-header">
                        <h5 class="modal-title" id="bidsuccess">Bidding Successful</h5>
                        <button @click="toggle2" type="button" class="btn btn-close" ><i class="uil uil-times fs-4 text-muted"></i></button>
                    </div>
                    <div class="modal-body p-4">
                        your bid (1.27ETH) has been listing to our database
                    </div>
                    <div class="modal-footer">
                        <router-link to="/activity" class="btn btn-pills btn-primary"><i class="mdi mdi-basket-plus fs-5 me-2"></i> View Your Bid</router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- Place Bid Modal -->

        <!-- Buy Now NFt Modal -->
        <div :class="active ? 'd-block show' : ''"  class="modal fade">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content border-0 shadow-md rounded-md">
                    <div class="modal-header">
                        <h5 class="modal-title" id="buyNft">Checkout</h5>
                        <button @click="activemenu" type="button" class="btn btn-close"><i class="uil uil-times fs-4 text-muted"></i></button>
                    </div>
                    <div class="modal-body p-4">
                        <form>
                            <div class="row">
                                <div class="col-12">
                                    <div class="mb-4">
                                        <label class="form-label fw-bold">Your Price <span class="text-danger">*</span></label>
                                        <input name="name" id="name" type="text" class="form-control" value="1.5ETH">
                                    </div>
                                </div><!--end col-->
                            </div>
                        </form>

                        <div class="py-3 border-top">
                            <div class="d-flex justify-content-between">
                                <p class="fw-bold small"> You must bid at least:</p>
                                <p class="text-primary"> 1.22 ETH </p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p class="fw-bold small"> Service free:</p>
                                <p class="text-primary"> 0.05 ETH </p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p class="fw-bold small"> Total bid amount:</p>
                                <p class="text-primary mb-0"> 1.27 ETH </p>
                            </div>
                        </div>

                        <div class="bg-soft-danger p-3 rounded shadow">
                            <div class="d-flex align-items-center">
                                <i class="uil uil-exclamation-circle h2 mb-0 me-2"></i>
                                <div class="flex-1">
                                    <h6 class="mb-0">This creator is not verified</h6>
                                    <small class="mb-0">Purchase this item at your own risk</small>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-4">
                            <button @click="activemenu2" class="btn btn-pills btn-primary w-100"><i class="mdi mdi-cart fs-5 me-2"></i> Continue</button>
                            <form>
                                <div class="form-check align-items-center d-flex mt-2">
                                    <input class="form-check-input mt-0" type="checkbox" value="" id="AcceptT&C">
                                    <label class="form-check-label text-muted ms-2" for="AcceptT&C">I Accept <a href="javascript:void(0)" class="text-primary">Terms And Condition</a></label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="active2 ? 'd-block show' : ''"  class="modal fade">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content border-0 shadow-md rounded-md">
                    <div class="position-absolute top-0 start-100 translate-middle z-index-1">
                        <button @click="activemenu2" type="button" class="btn btn-icon btn-pills btn-sm btn-light btn-close opacity-10"><i class="uil uil-times fs-4 text-muted"></i></button>
                    </div>
                    <div class="modal-body text-center p-4">
                        <h3>Yahhhoooo! 🎉</h3>
                        <h6 class="text-muted mb-0">You successfully purchased <a href="" class="text-reset"><u>XYZ nft</u></a> from Superex</h6>

                        <ul class="rounded-md shadow p-4 border list-unstyled mt-4">
                            <li class="d-flex justify-content-between">
                                <span class="fw-bold me-5">Status:</span>
                                <span class="text-warning">Processing</span>
                            </li>

                            <li class="d-flex justify-content-between mt-2">
                                <span class="fw-bold me-5">Transaction ID:</span>
                                <span class="text-muted">qhut0...hfteh45</span>
                            </li>
                        </ul>

                        <ul class="list-unstyled social-icon mb-0 mt-4">
                            <li class="list-inline-item lh-1 me-1"><a href="" class="rounded"><i class="uil uil-facebook-f"></i></a></li>
                            <li class="list-inline-item lh-1 me-1"><a href="" class="rounded"><i class="uil uil-instagram"></i></a></li>
                            <li class="list-inline-item lh-1 me-1"><a href="" class="rounded"><i class="uil uil-linkedin"></i></a></li>
                            <li class="list-inline-item lh-1 me-1"><a href="" class="rounded"><i class="uil uil-dribbble"></i></a></li>
                            <li class="list-inline-item lh-1"><a href="" class="rounded"><i class="uil uil-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- Buy Now NFt Modal -->
        
</template>

<script setup>
import {ref, computed, watch} from 'vue';
const now = ref(new Date().getTime())
const targetTime = ref(new Date("Sep 26, 2025 00:00:00").getTime())
const difference = ref(0)


const days = computed(() => Math.floor(difference.value / (1000 * 60 * 60 * 24)))
const hours = computed(() => 23 - new Date(now.value).getHours())
const minutes = computed(() => 60 - new Date(now.value).getMinutes())
const seconds = computed(() => 60 - new Date(now.value).getSeconds())

watch(now, () => {
    difference.value = targetTime.value - now.value
})
const isActive = ref(false)
const isActive2 = ref(false)

const active = ref(false)
const active2 = ref(false)

const activity =ref([
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
    }
]) 

function updateNow() {
    now.value = new Date().getTime()
}

updateNow()
setInterval(updateNow, 1000)


const toggle = () =>{
    isActive.value = !isActive.value
}

const toggle2 = () =>{
    isActive.value = false
    isActive2.value = !isActive2.value
}

const activemenu = () =>{
    active.value = !active.value
}

const activemenu2 = () =>{
    active.value = false
    active2.value = !active2.value
}

</script>

<style lang="scss" scoped></style>