<template>
    <navbar :logoLight=true :search=true :wallet=true />
    <!-- Start -->
    <section class="bg-item-detail d-table w-100">
        <div class="container">
            <detailone />
        </div>
        <div class="container mt-100 mt-60">
            <div class="row justify-content-center">
                <div class="col">
                    <div class="section-title text-center mb-4 pb-2">
                        <h4 class="title mb-4">Related Auction Items</h4>
                        <p class="text-muted para-desc mb-0 mx-auto">We are a huge marketplace dedicated to connecting
                            great artists of all Superex with their fans and unique token collectors!</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
            <auction :auction2=true />
        </div>
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import detailone from '@/components/item-detail-one.vue';
import auction from '@/components/live-auctions.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>


<style lang="scss" scoped></style>