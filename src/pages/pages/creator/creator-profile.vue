<template>
    <navbar :logoLight=true :search=true :wallet=true />
    <section class="bg-creator-profile">
        <profile />
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import profile from '@/components/creator/creator-profile.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>