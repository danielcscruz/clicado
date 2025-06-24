<template>
   <section class="position-relative" :style="{backgroundImage: 'url('+ image +')', backgroundPosition: 'bottom'}">
            <div class="bg-overlay"></div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 p-0">
                        <div class="d-flex flex-column min-vh-100 p-4">
                            <!-- Start Logo -->
                            <div class="text-center">
                                <router-link to="/"><img src="../../assets/images/logo-light.png" alt=""></router-link>
                            </div>
                            <!-- End Logo -->

                           <!-- Start Content -->
                            <div class="title-heading text-center my-auto">
                                <h4 class="text-white title-dark display-5 fw-bold mb-4">Site is under maintenance</h4>
                                <p class="text-white-50 para-desc mx-auto mb-4">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
            
                                <span id="maintenance" class="timer h1 text-white title-dark"></span><span class="d-block h6 text-uppercase text-white-50">Minutes</span>
            
                            </div>
                            <!-- End Content -->

                           <footers />
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->
        <back :back=true />
</template>

<script setup>
import {ref, onMounted} from 'vue';
import image from '../../assets/images/bg/04.jpg';
import back  from '@/components/back-to-top.vue';
import footers from '@/components/footer/footer-mini.vue'

let timer = ref(60 * 60) // 1 hour in seconds
let minutes = ref('')
let seconds = ref('')

onMounted(() => {
    const display = document.querySelector('#maintenance')
    setInterval(() => {
        minutes.value = String(Math.floor(timer.value / 60)).padStart(2, '0')
        seconds.value = String(timer.value % 60).padStart(2, '0')
        display.textContent = `${minutes.value}:${seconds.value}`
        timer.value--
        if (timer.value < 0) {
            timer.value = 60 * 60
        }
    }, 1000)
}) 
</script>

<style lang="scss" scoped>

</style>