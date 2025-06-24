<template>
    <navbar :lightLogo=true :navLight="'nav-light'" />
    <!-- Start Home -->
    <section class="bg-half-170 d-table w-100"
        :style="{ backgroundImage: 'url(' + image + ')', backgroundPosition: 'bottom' }">
        <div class="bg-overlay bg-gradient-overlay-2"></div>
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-12">
                    <div class="title-heading text-center">
                        <h5 class="heading fw-semibold sub-heading text-white title-dark">Marketplace</h5>
                        <p class="text-white-50 para-desc mx-auto mb-0">Explore the latest NFTs digital product</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="position-middle-bottom">
                <nav aria-label="breadcrumb" class="d-block">
                    <ul class="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li class="breadcrumb-item"><router-link to="/">Superex</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Explore</li>
                    </ul>
                </nav>
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <div class="position-relative">
        <div class="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <!-- End Home -->

    <!-- Start -->
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="sticky-bar">
                        <h5 class="mb-0">NFT Filters</h5>
                        <div class="p-4 rounded-md shadow mt-4">
                            <div>
                                <h6>Orders By:</h6>
                                <form>
                                    <div class="form-check align-items-center d-flex mb-0">
                                        <input class="form-check-input" type="checkbox" value="" id="NewOrder">
                                        <label class="form-check-label fw-bold ms-2" for="NewOrder">Newest</label>
                                    </div>
                                    <div class="form-check align-items-center d-flex mb-0">
                                        <input class="form-check-input" type="checkbox" value="" id="TrendOrder">
                                        <label class="form-check-label fw-bold ms-2" for="TrendOrder">Trending</label>
                                    </div>
                                    <div class="form-check align-items-center d-flex mb-0">
                                        <input class="form-check-input" type="checkbox" value="" id="OldOrder">
                                        <label class="form-check-label fw-bold ms-2" for="OldOrder">Oldest</label>
                                    </div>
                                </form>
                            </div>

                            <div class="mt-4">
                                <h6>Catagories By:</h6>
                                <form>
                                    <div class="form-check align-items-center d-flex mb-0">
                                        <input class="form-check-input" type="checkbox" value="" id="GamesCatagory">
                                        <label class="form-check-label fw-bold ms-2" for="GamesCatagory">Games</label>
                                    </div>
                                    <div class="form-check align-items-center d-flex mb-0">
                                        <input class="form-check-input" type="checkbox" value="" id="ArtCatagory">
                                        <label class="form-check-label fw-bold ms-2" for="ArtCatagory">Art</label>
                                    </div>
                                    <div class="form-check align-items-center d-flex mb-0">
                                        <input class="form-check-input" type="checkbox" value="" id="MusicCatagory">
                                        <label class="form-check-label fw-bold ms-2" for="MusicCatagory">Music</label>
                                    </div>
                                    <div class="form-check align-items-center d-flex mb-0">
                                        <input class="form-check-input" type="checkbox" value="" id="VideoCatagory">
                                        <label class="form-check-label fw-bold ms-2" for="VideoCatagory">Video</label>
                                    </div>
                                    <div class="form-check align-items-center d-flex mb-0">
                                        <input class="form-check-input" type="checkbox" value="" id="MemesCatagory">
                                        <label class="form-check-label fw-bold ms-2" for="MemesCatagory">Memes</label>
                                    </div>
                                    <div class="form-check align-items-center d-flex mb-0">
                                        <input class="form-check-input" type="checkbox" value=""
                                            id="IllustrationCatagory">
                                        <label class="form-check-label fw-bold ms-2"
                                            for="IllustrationCatagory">Illustration</label>
                                    </div>
                                    <div class="form-check align-items-center d-flex mb-0">
                                        <input class="form-check-input" type="checkbox" value="" id="GIFsCatagory">
                                        <label class="form-check-label fw-bold ms-2" for="GIFsCatagory">GIFs</label>
                                    </div>
                                </form>
                            </div>

                            <div class="mt-4">
                                <h6>Creators By:</h6>
                                <form>
                                    <div class="form-check align-items-center d-flex mb-0">
                                        <input class="form-check-input" type="checkbox" value="" id="AllCreators">
                                        <label class="form-check-label fw-bold ms-2" for="AllCreators">All
                                            Creators</label>
                                    </div>
                                    <div class="form-check align-items-center d-flex mb-0">
                                        <input class="form-check-input" type="checkbox" value="" id="VerifyCreators">
                                        <label class="form-check-label fw-bold ms-2" for="VerifyCreators">Verified
                                            Creators</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-9 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <explore :explore2=true :rowclass="'row row-cols-xl-3 row-cols-lg-2 row-cols-1'" />

                    <div class="row justify-content-center mt-4">
                        <div class="col">
                            <div class="text-center">
                                <a href="javascript:void(0)" class="btn btn-primary rounded-md"><i
                                        class="uil uil-process mdi-spin me-1"></i> Load More</a>
                            </div>
                        </div><!--end col-->
                    </div><!--end row-->
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
    <section class="section pt-0 pt-sm-5 mt-0 mt-sm-5">
        <collection />
    </section>
    <backtotop />
    <footers />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue'
import image from '../../assets/images/bg/01.jpg';
import explore from '@/components/explore-item.vue';
import collection from '@/components/free-collection.vue';
import backtotop from '@/components/back-to-top.vue';
import footers from '@/components/footer/footer.vue'
</script>

<style lang="scss" scoped></style>