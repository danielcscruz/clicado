<template>
    <navbar :bgclass="'gradient'" :navLight="'nav-light'" />
    <section class="section mt-5">
        <blogdetail />
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import blogdetail from '@/components/blog/blog-detail.vue'
import backtotop from '@/components/back-to-top.vue';
import footers from '@/components/footer/footer.vue'
</script>

<style lang="scss" scoped></style>