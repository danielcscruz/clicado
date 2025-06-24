<template>
    <!-- Footer Start -->
    <footer class="bg-footer">
        <div class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-7 col-md-6">
                        <h5 class="text-light fw-normal title-dark">Download the Superex app to explore any NFTs</h5>

                        <div class="mt-4">
                            <a href=""><img src="../../assets/images/app.png" height="40" class="rounded shadow"
                                    alt=""></a>
                            <a href="" class="ms-2"><img src="../../assets/images/playstore.png" height="40"
                                    class="rounded shadow" alt=""></a>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-5 col-md-6 mt-4 mt-sm-0">
                        <h5 class="text-light fw-normal title-dark">Join Superex community</h5>

                        <ul class="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                            <li v-for="item in icons" :key="item" class="list-inline-item lh-1"><a href=""
                                    class="rounded me-1"><i :class="item"></i></a></li>
                        </ul>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </div><!--end div-->

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="footer-py-60 footer-border">
                        <div class="row">
                            <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                <a href="#" class="logo-footer">
                                    <img src="../../assets/images/icon-logo-64.png" alt="">
                                </a>
                                <p class="para-desc mb-0 mt-4">Buy, sell and discover exclusive digital assets by the
                                    top artists of NFTs world.</p>


                            </div><!--end col-->

                            <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 class="footer-head">Superex</h5>
                                <ul class="list-unstyled footer-list mt-4">
                                    <li v-for="item in superex" :key="item"><router-link :to="item.link"
                                            class="text-foot"><i class="uil uil-angle-right-b me-1"></i>
                                            {{ item.name }}</router-link></li>
                                </ul>
                            </div><!--end col-->

                            <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 class="footer-head">Community</h5>
                                <ul class="list-unstyled footer-list mt-4">
                                    <li v-for="item in community" :key="item"><router-link :to="item.link" class="text-foot"><i
                                                class="uil uil-angle-right-b me-1"></i> {{item.name}}</router-link></li>
                                </ul>
                            </div><!--end col-->

                            <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 class="footer-head">Newsletter</h5>
                                <p class="mt-4">Sign up and receive the latest tips via email.</p>
                                <form>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="foot-subscribe mb-3">
                                                <label class="form-label">Write your email <span
                                                        class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <i data-feather="mail" class="fea icon-sm icons"></i>
                                                    <input type="email" name="email" id="emailsubscribe"
                                                        class="form-control ps-5 rounded" placeholder="Your email : "
                                                        required>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="d-grid">
                                                <input type="submit" id="submitsubscribe" name="send"
                                                    class="btn btn-soft-primary" value="Subscribe">
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div><!--end col-->
                        </div><!--end row-->
                    </div>
                </div><!--end slide-->
            </div><!--end row-->
        </div><!--end container-->

        <div class="footer-py-30 footer-bar">
            <div class="container text-center">
                <div class="row align-items-center">
                    <div class="col-sm-6">
                        <div class="text-sm-start">
                            <p class="mb-0">©
                                {{ date }} Superex. Design & Develop with <i class="mdi mdi-heart text-danger"></i> by <a
                                    href="https://shreethemes.in/" target="_blank" class="text-reset">Shreethemes</a>.
                            </p>
                        </div>
                    </div><!--end col-->

                    <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <ul class="list-unstyled footer-list text-sm-end mb-0">
                            <li class="list-inline-item mb-0"><router-link to="/privacy" class="text-foot me-2">Privacy</router-link>
                            </li>
                            <li class="list-inline-item mb-0"><router-link to="/terms" class="text-foot me-2">Terms</router-link></li>
                            <li class="list-inline-item mb-0"><router-link to="/helpcenter-overview"
                                    class="text-foot me-2">Help Center</router-link></li>
                            <li class="list-inline-item mb-0"><router-link to="/contact" class="text-foot">Contact</router-link></li>
                        </ul>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </div>
    </footer><!--end footer-->
    <!-- Footer End -->
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().getFullYear())

const icons = ref(['uil uil-facebook-f', 'uil uil-instagram', 'uil uil-linkedin', 'uil uil-dribbble', 'uil uil-twitter', 'uil uil-skype', 'uil uil-telegram', 'uil uil-tumblr', 'uil uil-whatsapp'])

const superex = ref([
    {
        name: 'Explore',
        link: '/explore-two'
    },
    {
        name: 'Live Auction',
        link: '/auction'
    },
    {
        name: 'Activities',
        link: '/activity'
    },
    {
        name: 'Wallet',
        link: '/wallet'
    },
    {
        name: 'Creators',
        link: '/creators'
    },
])

const community = ref([
    {
        link: '/aboutus',
        name: 'About Us'
    },
    {
        link: '/blogs',
        name: 'Blog'
    },
    {
        link: '/terms',
        name: 'Terms & Conditions'
    },
    {
        link: '/privacy',
        name: 'Privacy Policy'
    },
    {
        link: '/login',
        name: 'Login'
    },
    {
        link: '',
        name: 'Subscribe'
    },
    {
        link: '/contact',
        name: 'Contact'
    },
])
</script>

<style lang="scss" scoped></style>