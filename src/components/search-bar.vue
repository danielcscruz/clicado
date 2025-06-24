<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="features-absolute">
                <div class="row justify-content-center" id="reserve-form">
                    <div class="col-xl-10 mt-lg-5">
                        <div class="card bg-white feature-top border-0 shadow rounded p-3">
                            <form action="#">
                                <div class="registration-form text-dark text-start">
                                    <div class="row g-lg-0">
                                        <div class="col-lg-3 col-md-6">
                                            <div class="filter-search-form position-relative filter-border">
                                                <i class="uil uil-search icons z-3"></i>
                                                <input name="name" type="text" id="search-keyword"
                                                    class="form-control filter-input-box bg-light border-0"
                                                    placeholder="Search your keaywords">
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-lg-3 col-md-6 mt-3 mt-md-0">
                                            <div class="filter-search-form position-relative filter-border bg-light">
                                                <i class="uil uil-usd-circle icons"></i>
                                                <i class="uil uil-angle-down vs_select-arrow"></i>
                                                <v-select :options="options" v-model="selected"
                                                    class="filter-input"></v-select>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-lg-3 col-md-6 mt-3 mt-lg-0">
                                            <div class="filter-search-form position-relative filter-border bg-light">
                                                <i class="uil uil-window icons"></i>
                                                <i class="uil uil-angle-down vs_select-arrow"></i>
                                                <v-select :options="options2" v-model="selected2"
                                                    class="filter-input"></v-select>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-lg-3 col-md-6 mt-3 mt-lg-0">
                                            <input type="submit" id="search" name="search" style="height: 60px;"
                                                class="btn btn-primary rounded-md searchbtn submit-btn w-100"
                                                value="Search">
                                        </div><!--end col-->
                                    </div><!--end row-->
                                </div><!--end container-->
                            </form>
                        </div>
                    </div><!--ed col-->
                </div><!--end row-->
            </div>
        </div><!--end col-->
    </div><!--end row-->

</template>

<script setup>
import { ref } from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

const options = ref(['Auction Product', 'On Sale', 'Offers'])
const selected = ref('Auction Product')

const options2 = ref(['Art', 'Games', 'Music', 'Videos', 'Memes'])
const selected2 = ref('Art')

</script>

<style lang="scss" scoped></style>