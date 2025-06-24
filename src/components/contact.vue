<template>
    <div class="container">
        <div class="row">
            <div v-for="item in datas" :key="item" :class="item.class">
                <div class="card border-0 text-center features feature-primary feature-clean">
                    <div class="icons text-center mx-auto">
                        <i :class="item.icon"></i>
                    </div>
                    <div class="content mt-4 px-4">
                        <h5 class="fw-bold">{{ item.name }}</h5>
                        <p class="text-muted">{{ item.title }}</p>
                        <a :href="item.link" class="text-primary">{{ item.name2 }}</a>
                    </div>
                </div>
            </div><!--end col-->

            <div class="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                <div class="card border-0 text-center features feature-primary feature-clean">
                    <div class="icons text-center mx-auto">
                        <i class="uil uil-map-marker d-block rounded-md h3 mb-0"></i>
                    </div>
                    <div class="content mt-4 px-4">
                        <h5 class="fw-bold">Location</h5>
                        <p class="text-muted">C/54 Northwest Freeway, Suite 558, <br>Houston, USA 485</p>
                        <a @click="toggle" href="#" data-type="iframe"
                            class="video-play-icon text-primary lightbox">View on
                            Google map</a>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->

    <div :class="isActive === false ? 'position-fixed ' : 'd-none'" class="modal-video" tabindex="-1" role="dialog"
        area-modal="true" aria-label="You just opened the modal video">
        <div class="modal-video-body">
            <div class="modal-video-inner">
                <div class="modal-video-movie-wrap" style="">
                    <iframe width="460" height="230"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen="" tabindex="-1">
                    </iframe>
                    <a @click="toggle" class="mdi mdi-close m-3 text-light h4 position-class title-dark"> </a>
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const isActive = ref(true)
const datas = ref([
    {
        icon: 'uil uil-phone d-block rounded-md h3 mb-0',
        name: 'Phone',
        title: 'The phrasal sequence of the is now so that many campaign and benefit',
        name2: '+152 534-468-854',
        link: 'tel:+152534-468-854',
        class: 'col-lg-4 col-md-6'
    },
    {
        icon: 'uil uil-envelope d-block rounded-md h3 mb-0',
        name: 'Email',
        title: 'The phrasal sequence of the is now so that many campaign and benefit',
        name2: 'contact@example.com',
        link: 'mailto:contact@example.com',
        class: 'col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0'
    },
])

const toggle = () => {
    isActive.value = !isActive.value
}
</script>

<style lang="scss" scoped></style>