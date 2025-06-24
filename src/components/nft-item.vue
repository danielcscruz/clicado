<template>
    <div class="row">
                    <div v-for="item in datas" :key="item" class="col-lg-3 col-md-6 col-12">
                        <div class="card border-0 text-center features feature-primary feature-clean">
                            <div class="icons text-center mx-auto">
                                <i :class="item.icon"></i>
                            </div>

                            <div class="content mt-4 pt-2">
                                <h5 class="mb-3">{{item.name}}</h5>
                                <p class="text-muted mb-0">{{item.title}}</p>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
</template>

<script setup>
import { ref } from 'vue';

let datas = ref([
    {
        icon: 'uil uil-card-atm d-block rounded-md h3 mb-0',
        name: 'Set up your wallet',
        title: 'Start working with Superex NFTs that can provide everything'
    },
    {
        icon: 'uil uil-bitcoin-circle d-block rounded-md h3 mb-0',
        name: 'Buy your collection',
        title: 'Start working with Superex NFTs that can provide everything'
    },
    {
        icon: 'uil uil-wallet d-block rounded-md h3 mb-0',
        name: "Add your NFT's",
        title: 'Start working with Superex NFTs that can provide everything'
    },
    {
        icon: 'uil uil-layers d-block rounded-md h3 mb-0',
        name: "Sell Your NFT's",
        title: 'Start working with Superex NFTs that can provide everything'
    },
])

</script>

<style lang="scss" scoped>

</style>