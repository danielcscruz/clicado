<template>
    <navbar :lightLogo=true :navLight="'nav-light'" />
    <!-- Start Home -->
    <section class="bg-half-170 d-table w-100"
        :style="{ backgroundImage: 'url(' + image + ')', backgroundPosition: 'center' }">
        <div class="bg-overlay bg-gradient-overlay-2"></div>
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-12">
                    <div class="title-heading text-center">
                        <h5 class="heading fw-semibold sub-heading text-white title-dark">Frequently Asked Questions
                        </h5>
                        <p class="text-white-50 para-desc mx-auto mb-0">Please check How it works in digital arts?</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="position-middle-bottom">
                <nav aria-label="breadcrumb" class="d-block">
                    <ul class="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li class="breadcrumb-item"><router-link to="/">Superex</router-link></li>
                        <li class="breadcrumb-item"><router-link to="/helpcenter-overview">Help Center</router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">FAQs</li>
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

    <!-- Start Section -->
    <section class="section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-5 col-12 d-none d-md-block">
                    <div class="rounded shadow p-4 sticky-bar">
                        <ul class="list-unstyled sidebar-nav mb-0 py-0" id="navmenu-nav">
                            <li class="navbar-item p-0" :class="activeId === 'getstart' ? 'active' : ''"><a
                                    href="#getstart" class="h6 text-dark navbar-link">Getting started</a></li>
                            <li class="navbar-item mt-3 p-0" :class="activeId === 'policy' ? 'active' : ''"><a
                                    href="#policy" class="h6 text-dark navbar-link">Safety, Security, and Policies</a>
                            </li>
                            <li class="navbar-item mt-3 p-0" :class="activeId === 'use' ? 'active' : ''"><a href="#use"
                                    class="h6 text-dark navbar-link">Using Superex NFT</a></li>
                            <li class="navbar-item mt-3 p-0" :class="activeId === 'support' ? 'active' : ''"><a
                                    href="#support" class="h6 text-dark navbar-link">Support Questions</a></li>
                        </ul>
                    </div>
                </div><!--end col-->

                <div class="col-lg-8 col-md-7 col-12">
                    <div class="section-title scroll-div" id="getstart">
                        <h5>Getting started</h5>
                    </div>

                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item border rounded" v-for="(item, index) in accordionItem" :key="index"
                            :class="item.mt">
                            <h2 class="accordion-header" :id="item.id">
                                <button class="accordion-button border-0 bg-light" :class="{ 'collapsed': !item.show }"
                                    type="button" data-bs-toggle="collapse" :data-bs-target="'#' + item.collapseId"
                                    :aria-expanded="item.show ? 'true' : 'false'" :aria-controls="item.collapseId">
                                    {{ item.question }}
                                </button>
                            </h2>
                            <div :id="item.collapseId" class="accordion-collapse border-0 collapse"
                                :class="{ 'show': item.show }" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body text-muted">
                                    {{ item.answer }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-title mt-5 scroll-div" id="policy">
                        <h5>Safety, Security, and Policies</h5>
                    </div>

                    <div class="accordion" id="generalquestion">
                        <div class="accordion-item border rounded" v-for="(item, index) in generalquestion" :key="index"
                            :class="item.mt">
                            <h2 class="accordion-header" :id="item.id">
                                <button class="accordion-button border-0 bg-light" :class="{ 'collapsed': !item.show }"
                                    type="button" data-bs-toggle="collapse" :data-bs-target="'#' + item.collapseId"
                                    :aria-expanded="item.show ? 'true' : 'false'" :aria-controls="item.collapseId">
                                    {{ item.question }}
                                </button>
                            </h2>
                            <div :id="item.collapseId" class="accordion-collapse border-0 collapse"
                                :class="{ 'show': item.show }" aria-labelledby="headingOne"
                                data-bs-parent="#generalquestion">
                                <div class="accordion-body text-muted">
                                    {{ item.answer }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-title mt-5 scroll-div" id="use">
                        <h5>Using Superex NFT</h5>
                    </div>

                    <div class="accordion" id="paymentquestion">
                        <div class="accordion-item border rounded" v-for="(item, index) in paymentquestion" :key="index"
                            :class="item.mt">
                            <h2 class="accordion-header" :id="item.id">
                                <button class="accordion-button border-0 bg-light" :class="{ 'collapsed': !item.show }"
                                    type="button" data-bs-toggle="collapse" :data-bs-target="'#' + item.collapseId"
                                    :aria-expanded="item.show ? 'true' : 'false'" :aria-controls="item.collapseId">
                                    {{ item.question }}
                                </button>
                            </h2>
                            <div :id="item.collapseId" class="accordion-collapse border-0 collapse"
                                :class="{ 'show': item.show }" aria-labelledby="headingOne"
                                data-bs-parent="#paymentquestion">
                                <div class="accordion-body text-muted">
                                    {{ item.answer }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-title mt-5 scroll-div" id="support">
                        <h5>Support Questions</h5>
                    </div>

                    <div class="accordion" id="supportquestion">
                        <div class="accordion-item border rounded" v-for="(item, index) in supportquestion" :key="index"
                            :class="item.mt">
                            <h2 class="accordion-header" :id="item.id">
                                <button class="accordion-button border-0 bg-light" :class="{ 'collapsed': !item.show }"
                                    type="button" data-bs-toggle="collapse" :data-bs-target="'#' + item.collapseId"
                                    :aria-expanded="item.show ? 'true' : 'false'" :aria-controls="item.collapseId">
                                    {{ item.question }}
                                </button>
                            </h2>
                            <div :id="item.collapseId" class="accordion-collapse border-0 collapse"
                                :class="{ 'show': item.show }" aria-labelledby="headingOne"
                                data-bs-parent="#supportquestion">
                                <div class="accordion-body text-muted">
                                    {{ item.answer }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->

        <answer />
    </section><!--end section-->
    <footers />
    <backtotop />

</template>

<script setup>
import { ref, onMounted } from 'vue';
import navbar from '@/components/navbar/navbar.vue';
import image from '../../../assets/images/bg/02.jpg';
// import question from '@/components/question.vue'
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue';
import answer from '@/components/your-answer.vue'


const activeId = ref('');

onMounted(() => {
    window.addEventListener('scroll', checkVisibleDiv);
})

function checkVisibleDiv() {
    const windowHeight = window.innerHeight;
    const divElements = document.querySelectorAll('.scroll-div');
    divElements.forEach(div => {
        const rect = div.getBoundingClientRect();
        const isVisible = (rect.top <= 50 && rect.bottom <= windowHeight);
        if (isVisible) {
            activeId.value = div.id;
        }
    });
}

const accordionItem = ref([
    {
        id: "headingOne",
        collapseId: "collapseOne",
        question: "How does it work?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: true
    },
    {
        id: "headingTwo",
        collapseId: "collapseTwo",
        question: "Do I need a designer to use Superex?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: false,
        mt: 'mt-2'
    },
    {
        id: "headingThree",
        collapseId: "collapseThree",
        question: "What do I need to do to start selling?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: false,
        mt: 'mt-2'
    },
    {
        id: "headingFour",
        collapseId: "collapseFour",
        question: "What happens when I receive an order?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: false,
        mt: 'mt-2'
    }
])

const generalquestion = ref([
    {
        id: "headingFive",
        collapseId: "collapseFive",
        question: "How does it work?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: true
    },
    {
        id: "headingSix",
        collapseId: "collapseSix",
        question: "Do I need a designer to use Superex?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: false,
        mt: 'mt-2'
    },
    {
        id: "headingSeven",
        collapseId: "collapseSeven",
        question: "What do I need to do to start selling?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: false,
        mt: 'mt-2'
    },
    {
        id: "headingEight",
        collapseId: "collapseEight",
        question: "What happens when I receive an order?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: false,
        mt: 'mt-2'
    }
])

const paymentquestion = ref([
    {
        id: "headingNine",
        collapseId: "collapseNine",
        question: "How does it work?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: true
    },
    {
        id: "headingTen",
        collapseId: "collapseTen",
        question: "Do I need a designer to use Superex?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: false,
        mt: 'mt-2'
    },
    {
        id: "headingEleven",
        collapseId: "collapseEleven",
        question: "What do I need to do to start selling?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: false,
        mt: 'mt-2'
    },
    {
        id: "headingTwelve",
        collapseId: "collapseTwelve",
        question: "What happens when I receive an order?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: false,
        mt: 'mt-2'
    }
])

const supportquestion = ref([
    {
        id: "headingThirteen",
        collapseId: "collapseThirteen",
        question: "How does it work?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: true
    },
    {
        id: "headingFourteen",
        collapseId: "collapseFourteen",
        question: "Do I need a designer to use Superex?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: false,
        mt: 'mt-2'
    },
    {
        id: "headingFifteen",
        collapseId: "collapseFifteen",
        question: "What do I need to do to start selling?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: false,
        mt: 'mt-2'
    },
    {
        id: "headingSixteen",
        collapseId: "collapseSixteen",
        question: "What happens when I receive an order?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: false,
        mt: 'mt-2'
    }
])
</script>

<style lang="scss" scoped></style>