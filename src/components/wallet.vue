<template>
    <div class="container">
        <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
            <div v-for="item in datas" :key="item" class="col">
                <div class="card wallet wallet-primary rounded-md shadow">
                    <div v-if="item.type === 'Popular'" class="ribbon ribbon-right ribbon-primary overflow-hidden"><span
                            class="text-center d-block shadow small fw-bold">{{ item.type }}</span></div>
                    <div :class="item.class"></div>
                    <div class="position-relative">
                        <div class="position-absolute top-0 start-50 translate-middle">
                            <img :src="item.image" class="avatar avatar-md-md rounded-pill shadow-sm p-3 bg-light"
                                alt="">
                        </div>

                        <div class="content text-center p-4">
                            <h5 class="mt-4 pt-2 mb-0">{{ item.name }}</h5>
                            <p class="text-muted mt-3 mb-0">{{ item.title }} <a href="javascript:void(0)" @click="toggle"
                                   class="link fw-semibold">here <i
                                        class="uil uil-arrow-right"></i></a></p>
                        </div>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->

    <!-- Modal Login Start -->
    <div :class="isActive ? 'd-block show' : ''" class="modal fade" id="LoginForm" tabindex="-1" role="dialog"
        aria-hidden="true">
        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div class="modal-content rounded shadow border-0">
                <div class="modal-header border-bottom">
                    <h5 class="modal-title"><img src="../assets/images/logo-dark.png" alt=""></h5>
                    <button @click="toggle" type="button" class="btn-close d-flex align-items-center text-dark"><i
                            class="uil uil-times fs-4 text-muted"></i></button>
                </div>
                <div class="modal-body p-4">
                    <form>
                        <div class="form-floating mb-2">
                            <input type="email" class="form-control" id="LoginEmail" placeholder="name@example.com">
                            <label for="LoginEmail">Email Address:</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="LoginPassword" placeholder="Password">
                            <label for="LoginPassword">Password:</label>
                        </div>

                        <div class="d-flex justify-content-between">
                            <div class="mb-3">
                                <div class="form-check align-items-center d-flex mb-0">
                                    <input class="form-check-input mt-0" type="checkbox" value="" id="RememberMe">
                                    <label class="form-check-label text-muted ms-2" for="RememberMe">Remember me</label>
                                </div>
                            </div>
                            <small class="text-muted mb-0"><router-link to="/reset-password"
                                    class="text-muted fw-semibold">Forgot password ?</router-link></small>
                        </div>

                        <button class="btn btn-primary rounded-md w-100" type="submit">Sign in</button>

                        <div class="col-12 text-center mt-4">
                            <small><span class="text-muted me-2">Don't have an account ?</span> <router-link to="/signup"
                                    class="text-dark fw-bold">Sign Up</router-link></small>
                        </div><!--end col-->
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Login End -->
    
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(false)

const datas = ref([
    {
        type: 'Popular',
        class: 'bg-gradient-primary p-5 rounded-md',
        image: require('../assets/images/wallet/MetaMask_Fox.svg'),
        name: 'MetaMask',
        title: 'Learn about how to get the wallet and much more clicking'
    },
    {
        type: '',
        class: 'bg-gradient-primary p-5 rounded-md',
        image: require('../assets/images/wallet/aave.svg'),
        name: 'Aave',
        title: 'Learn about how to get the wallet and much more clicking'
    },
    {
        type: '',
        class: 'bg-gradient-warning p-5 rounded-md',
        image: require('../assets/images/wallet/Airswap.svg'),
        name: 'Airswap',
        title: 'Learn about how to get the wallet and much more clicking'
    },
    {
        type: '',
        class: 'bg-gradient-danger p-5 rounded-md',
        image: require('../assets/images/wallet/Compound.svg'),
        name: 'Compound',
        title: 'Learn about how to get the wallet and much more clicking'
    },
    {
        type: '',
        class: 'bg-gradient-info p-5 rounded-md',
        image: require('../assets/images/wallet/ddexsvg.svg'),
        name: 'DDEX',
        title: 'Learn about how to get the wallet and much more clicking'
    },
    {
        type: '',
        class: 'bg-gradient-primary p-5 rounded-md',
        image: require('../assets/images/wallet/defi-saver.svg'),
        name: 'Defi Saver',
        title: 'Learn about how to get the wallet and much more clicking'
    },
    {
        type: '',
        class: 'bg-gradient-primary p-5 rounded-md',
        image: require('../assets/images/wallet/dYdX.svg'),
        name: 'DYDX',
        title: 'Learn about how to get the wallet and much more clicking'
    },
    {
        type: '',
        class: 'bg-gradient-warning p-5 rounded-md',
        image: require('../assets/images/wallet/idex.svg'),
        name: 'IDEX',
        title: 'Learn about how to get the wallet and much more clicking'
    },
    {
        type: '',
        class: 'bg-gradient-danger p-5 rounded-md',
        image: require('../assets/images/wallet/kyber.svg'),
        name: 'Kyber',
        title: 'Learn about how to get the wallet and much more clicking'
    },
    {
        type: '',
        class: 'bg-gradient-info p-5 rounded-md',
        image: require('../assets/images/wallet/maker.svg'),
        name: 'Maker',
        title: 'Learn about how to get the wallet and much more clicking'
    },
    {
        type: '',
        class: 'bg-gradient-primary p-5 rounded-md',
        image: require('../assets/images/wallet/nuo.svg'),
        name: 'NUO',
        title: 'Learn about how to get the wallet and much more clicking'
    },
    {
        type: '',
        class: 'bg-gradient-primary p-5 rounded-md',
        image: require('../assets/images/wallet/PoolTogether.svg'),
        name: 'PoolTogether',
        title: 'Learn about how to get the wallet and much more clicking'
    },
    {
        type: '',
        class: 'bg-gradient-warning p-5 rounded-md',
        image: require('../assets/images/wallet/sablier.svg'),
        name: 'Sablier',
        title: 'Learn about how to get the wallet and much more clicking'
    },
    {
        type: '',
        class: 'bg-gradient-danger p-5 rounded-md',
        image: require('../assets/images/wallet/set.svg'),
        name: 'Set',
        title: 'Learn about how to get the wallet and much more clicking'
    },
    {
        type: '',
        class: 'bg-gradient-info p-5 rounded-md',
        image: require('../assets/images/wallet/uniswap.svg'),
        name: 'Uniswap',
        title: 'Learn about how to get the wallet and much more clicking'
    },
    {
        type: '',
        class: 'bg-gradient-secondary p-5 rounded-md',
        image: require('../assets/images/wallet/zerion.svg'),
        name: 'Zerion',
        title: 'Learn about how to get the wallet and much more clicking'
    },
])

const toggle = () => {
    isActive.value = !isActive.value
}



</script>

<style lang="scss" scoped></style>