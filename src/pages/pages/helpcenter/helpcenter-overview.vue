<template>
    <navbar :lightLogo=true :navLight="'nav-light'" />
    <!-- Start Home -->
    <section class="bg-half-170 d-table w-100"
        :style="{ backgroundImage: 'url(' + image + ')', backgroundPosition: 'center' }">
        <div class="bg-overlay bg-gradient-overlay-2"></div>
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-lg-12 text-center">
                    <div class="title-heading text-center">
                        <h5 class="heading fw-semibold sub-heading text-white title-dark"> Hello! <br> How can we help
                            you? </h5>

                        <div class="subcribe-form mt-4 pt-2">
                            <form>
                                <div class="mb-0">
                                    <input type="text" id="help" name="name"
                                        class="border bg-white rounded-pill opacity-7" required=""
                                        placeholder="Search your questions or topic...">
                                    <button type="submit" class="btn btn-pills btn-primary">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
            <div class="position-middle-bottom">
                <nav aria-label="breadcrumb" class="d-block">
                    <ul class="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li class="breadcrumb-item"><router-link to="/">Superex</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Help Center</li>
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
    <section class="section">
        <helpneed />
        <div class="container mt-100 mt-60">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="section-title text-center mb-4 pb-2">
                        <h4 class="mb-4">Get Started</h4>
                        <p class="para-desc mx-auto text-muted">We are a huge marketplace dedicated to connecting great
                            artists of all Superex with their fans and unique token collectors!</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row justify-content-center">
                <div class="col-lg-9 mt-4 pt-2">
                    <question />
                </div>
            </div>
        </div>

        <answer />
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import image from '../../../assets/images/bg/02.jpg';
import helpneed from '@/components/find-help-need.vue';
import question from '@/components/question.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue';
import answer from '@/components/your-answer.vue'
</script>

<style lang="scss" scoped></style>