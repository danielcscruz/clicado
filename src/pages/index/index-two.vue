<template>
    <div class="round-effect">
        <div class="primary-round opacity-3"></div>
        <div class="gradient-round opacity-3"></div>
    </div>
    <navbar :logoLight=true :wallet=true :search=true />

    <section class="bg-half-174">
        <div class="container-fluid">
            <sliderproduct />
        </div>
        <explore />
        <sellers />
        <collection />
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import sliderproduct from '@/components/slider-product.vue';
import explore from '@/components/explore-item.vue';
import sellers from '@/components/best-sellers.vue';
import collection from '@/components/popular-collection.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'
</script>

<style lang="scss" scoped></style>