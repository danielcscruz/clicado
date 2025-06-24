<template>
    <navbar :navLight="'nav-light'" />

    <!-- Start Home -->
    <section class="bg-half-170 d-table w-100"
        :style='{ backgroundImage: "url(" + image + ")", backgroundPosition: "center center" }'>
        <div class="bg-overlay bg-gradient-primary opacity-8"></div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-6">
                    <div class="title-heading">
                        <h6 class="text-light title-dark fw-normal">Explore, Create & Collect NFTs</h6>
                        <h4 class="heading text-white title-dark fw-bold mb-3">Join The New Era of <br>
                            <vue-typewriter-effect  class="typewrite" data-period="2000"
                                :strings='["Musics", "Digital Arts", "Illustrations", "Videos", "GIFs"]' />
                        </h4>
                        <p class="text-white-50 para-desc mb-0 mb-0">We are a huge marketplace dedicated to connecting
                            great artists of all Superex with their fans and unique token collectors!</p>

                        <div class="mt-4 pt-2">
                            <router-link to="/aboutus" class="btn btn-pills btn-outline-light-white">Discover
                                Now</router-link>
                        </div>
                    </div>
                </div><!--end slide-->

                <div class="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div
                        class="card bg-white nft-items nft-primary img-skewed rounded-md shadow overflow-hidden mb-1 p-3">
                        <div class="d-flex justify-content-between">
                            <div class="img-group">
                                <router-link to="/creator-profile" class="user-avatar">
                                    <img src="../../assets/images/client/08.jpg" alt="user"
                                        class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
                                </router-link>
                                <router-link to="/creator-profile" class="user-avatar ms-n3">
                                    <img src="../../assets/images/client/05.jpg" alt="user"
                                        class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
                                </router-link>
                                <router-link to="/creator-profile" class="user-avatar ms-n3">
                                    <img src="../../assets/images/client/06.jpg" alt="user"
                                        class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
                                </router-link>
                            </div>

                            <span class="like-icon shadow-sm"><a href="javascript:void(0)" class="text-muted icon"><i
                                        class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
                        </div>

                        <div class="nft-image rounded-md mt-3 position-relative overflow-hidden shadow">
                            <router-link to="/item-detail-one"><img src="../../assets/images/gif/4.gif"
                                    class="img-fluid" alt=""></router-link>
                            <div class="position-absolute top-0 start-0 m-2">
                                <a href="javascript:void(0)" class="badge badge-link bg-primary">GIFs</a>
                            </div>

                            <div class="position-absolute top-0 end-0 m-2">
                                <router-link to="/item-detail-one" class="btn btn-pills btn-icon"><i
                                        class="uil uil-shopping-cart-alt"></i></router-link>
                            </div>

                            <div
                                class="position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3 h5">
                                <i class="uil uil-clock"></i> {{ days + " : " + hours + " : " + minutes + " : " +
        seconds
                                }}<small id="auction-item-9" class="fw-bold"></small>
                            </div>
                        </div>

                        <div class="card-body content position-relative p-0 mt-3">
                            <router-link to="/item-detail-one" class="title text-dark h5">Deep Sea
                                Phantasy</router-link>

                            <div class="d-flex justify-content-between mt-2">
                                <small class="rate fw-bold">20.5 ETH</small>
                                <small class="text-dark fw-bold">1 out of 10</small>
                            </div>
                        </div>
                    </div>
                </div><!--end slide-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End Home -->
    <section class="section">
        <div class="container">
            <creators />
        </div>
        <div class="container mt-100 mt-60">
            <explore :explore=true />
        </div>
        <div class="container-fluid mt-100 mt-60">
            <ctanft />
        </div>
        <div class="container mt-100 mt-60">
            <div class="row justify-content-center">
                <div class="col">
                    <div class="section-title text-center mb-5 pb-3">
                        <h4 class="title mb-4">Live Auctions</h4>
                        <p class="text-muted para-desc mb-0 mx-auto">We are a huge marketplace dedicated to connecting
                            great
                            artists of all Superex with their fans and unique token collectors!</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <autcion />
        </div>
        <blog />
    </section>
    <footers />
    <backtotop />
</template>

<script>
import navbar from '@/components/navbar/navbar.vue';
import image from '../../assets/images/bg/bg01.png';
import VueTypewriterEffect from "vue-typewriter-effect";
import creators from '@/components/best-creators.vue';
import explore from '@/components/explore-products.vue';
import ctanft from '@/components/cta-nft.vue';
import autcion from '@/components/live-auctions.vue';
import blog from '@/components/blog/blogs.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'
export default {
    data() {
        return {
            image,
            date: '',
            now: '',
            countDownToTime: new Date("Sep 26, 2025 00:00:00").getTime(),
            targetTime: () => this.targetDate.getTime(),
            difference: '',
            days: '',
            hours: '',
            minutes: '',
            seconds: '',
        }
    },
    components: {
        navbar,
        VueTypewriterEffect,
        creators,
        explore,
        ctanft,
        autcion,
        blog,
        footers,
        backtotop
    },
    mounted() {
        this.intervalId = setInterval(() => {
            this.tickTock();
            this.difference = this.countDownToTime - this.now;
            this.difference = this.difference / (1000 * 60 * 60 * 24);
        }, 1000);

    },
    methods: {
        tickTock() {
            this.date = new Date();
            this.now = this.date.getTime();
            this.days = Math.floor(this.difference);
            this.hours = 23 - this.date.getHours();
            this.minutes = 60 - this.date.getMinutes();
            this.seconds = 60 - this.date.getSeconds();
        }
    },

}
</script>

<style scoped></style>