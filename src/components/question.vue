<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item border rounded" v-for="(item, index) in accordionItems" :key="index"
            :class="item.mt">
            <h2 class="accordion-header" :id="item.id">
                <button class="accordion-button border-0 bg-light" :class="{ 'collapsed': !item.show }" type="button"
                    data-bs-toggle="collapse" :data-bs-target="'#' + item.collapseId"
                    :aria-expanded="item.show ? 'true' : 'false'" :aria-controls="item.collapseId">
                    {{ item.question }}
                </button>
            </h2>
            <div :id="item.collapseId" class="accordion-collapse border-0 collapse" :class="{ 'show': item.show }"
                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body text-muted">
                    {{ item.answer }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'


const accordionItems = ref([
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
</script>

<style lang="scss" scoped></style>