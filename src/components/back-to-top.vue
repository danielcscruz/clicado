<template>

<div v-if="back" class="back-to-home">
            <router-link to="/" class="back-button btn btn-pills btn-sm btn-icon btn-primary"><i data-feather="arrow-left" class="icons"></i></router-link>
        </div>

    <a v-else href="#" @click="scrollToTop" v-show="showTopButton" class="back-to-top rounded-pill fs-5"><i
            data-feather="arrow-up" class="fea icon-sm icons align-middle"></i></a>
    <!-- Back to top -->
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps } from 'vue';
import feather from 'feather-icons';

defineProps({
    back:{
        type: Boolean,
        required: true
    }
})

const showTopButton = ref(false);

onMounted(() => {
    feather.replace();
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

function scrollToTop() {
    window.scrollTo(0, 0);
}

function handleScroll() {
    if (
        document.body.scrollTop >= 400 ||
        document.documentElement.scrollTop >= 400
    ) {
        showTopButton.value = true
    } else {
        showTopButton.value = false
    }
}




</script>

<style lang="scss" scoped></style>