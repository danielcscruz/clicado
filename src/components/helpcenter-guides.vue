<template>
    <div class="container">
        <div class="row">
            <div v-for="item in datas" :key="item" :class="item.class" >
                <h5>{{ item.title }}</h5>
                <ul class="list-unstyled mt-4 mb-0">
                    <li v-for="list in item.list" :key="list" class="mt-2"><a href="javascript:void(0)"
                            class="text-muted"><i class="mdi mdi-arrow-right text-primary me-2"></i>{{ list }}</a></li>
                </ul>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';

const datas = ref([
    {
        title: 'Getting started',
        list: ['Deciding to purchase', 'List your space', 'Landing an experience or adventure', 'Top uses questions'],
        class: 'col-lg-4 col-md-6 col-12'
    },
    {
        title: 'Your calendar',
        list: ['Pricing & availability', 'Booking settings', 'Responding to enquiries & requests', 'Snoozing or deactivating your listing'],
        class: 'col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0'
    },
    {
        title: 'Your listings',
        list: ['Updating your listing', 'Neighbourhoods', 'Listing photos & photographys', 'Superex Plus', 'API-connected software'],
        class: 'col-lg-4 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0 pt-2'
    },
    {
        title: 'How payouts work',
        list: ['Getting paid', 'Adding payout info', 'Your payout status', 'Donations', 'Taxes'],
        class: 'col-lg-4 col-md-6 col-12 mt-4 pt-2'
    },
    {
        title: 'Your reservations',
        list: ['Superex safelyy', 'Superex Experiences and Adventures', 'Changing a reservation', 'Cancelling a reservation', 'Long-term reservations'],
        class: 'col-lg-4 col-md-6 col-12 mt-4 pt-2'
    },
    {
        title: 'Reservation help',
        list: ['Help with a reservation or guest', 'Guest cancellations'],
        class: 'col-lg-4 col-md-6 col-12 mt-4 pt-2'
    },
    {
        title: 'Your account',
        list: ['Your profile', 'Account security', 'Identification & verifications', 'Reviews', 'Superhost status'],
        class: 'col-lg-4 col-md-6 col-12 mt-4 pt-2'
    },
])

</script>

<style lang="scss" scoped></style>