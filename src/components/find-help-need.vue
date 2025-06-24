<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="section-title text-center mb-4 pb-2">
                    <h4 class="mb-4 title">Find the help you need</h4>
                    <p class="para-desc mx-auto text-muted">We are a huge marketplace dedicated to connecting great
                        artists of all Superex with their fans and unique token collectors!</p>
                </div>
            </div><!--end col-->
        </div><!--end row-->

        <div class="row justify-content-center">
            <div v-for="item in datas" :key="item" class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div class="card border-0 text-center features feature-primary feature-clean px-md-4">
                    <div class="icons text-center mx-auto">
                        <i :class="item.icon"></i>
                    </div>
                    <div class="content mt-4">
                        <router-link :to="item.link" class="title h5 text-dark">{{item.name}}</router-link>
                        <p class="text-muted mt-3 mb-0">{{item.title}}</p>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import {ref} from 'vue';

const datas = ref([
    {
        icon: 'uil uil-question-circle d-block rounded-md h3 mb-0',
        link: '/helpcenter-faqs',
        name: 'FAQs',
        title: 'Due to its widespread use as filler text for layouts, non-readability is of great importance.'
    },
    {
        icon: 'uil uil-file-bookmark-alt d-block rounded-md h3 mb-0',
        link: '/helpcenter-guides',
        name: 'Guides / Support',
        title: 'Due to its widespread use as filler text for layouts, non-readability is of great importance.'
    },
    {
        icon: 'uil uil-cog d-block rounded-md h3 mb-0',
        link: '/helpcenter-support-request',
        name: 'Support Request',
        title: 'Due to its widespread use as filler text for layouts, non-readability is of great importance.'
    },
])
</script>

<style lang="scss" scoped></style>