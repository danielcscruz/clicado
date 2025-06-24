<template>

    <!-- Navbar STart -->
    <header id="topnav" class="defaultscroll sticky" :class="bgclass">
        <div class="container">
            <!-- Logo Start-->
            <router-link v-if="logoLight" class="logo" to="/">
                <img src="../../assets/images/logo-dark.png" height="26" class="logo-light-mode" alt="">
                <img src="../../assets/images/logo-light.png" height="26" class="logo-dark-mode" alt="">
            </router-link>

            <router-link v-else-if="lightLogo" class="logo" to="/">
                <span class="logo-light-mode">
                    <img src="../../assets/images/logo-dark.png" height="26" class="l-dark" alt="">
                    <img src="../../assets/images/logo-light.png" height="26" class="l-light" alt="">
                </span>
                <img src="../../assets/images/logo-light.png" height="26" class="logo-dark-mode" alt="">
            </router-link>

            <router-link v-else class="logo" to="/">
                <span class="logo-light-mode">
                    <img src="../../assets/images/logo-dark.png" height="26" class="l-dark" alt="">
                    <img src="../../assets/images/logo-white.png" height="26" class="l-light" alt="">
                </span>
                <img src="../../assets/images/logo-light.png" height="26" class="logo-dark-mode" alt="">

            </router-link>
            <!-- Logo end-->

            <!-- Mobile -->
            <div class="menu-extras" @click="handler">
                <div class="menu-item">
                    <!-- Mobile menu toggle-->
                    <a class="navbar-toggle" id="isToggle" :class="toggle === false ? '' : 'open'">
                        <div class="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </a>
                    <!-- End mobile menu toggle-->
                </div>
            </div>
            <!-- Mobile -->


            <!--Login button Start-->
            <ul class="buy-button list-inline mb-0">
                <li v-if="search" class="list-inline-item mb-0 me-1">
                    <div class="dropdown">
                        <button type="button" class="btn dropdown-toggle p-0" data-bs-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i class="uil uil-search text-dark fs-5 align-middle"></i>
                        </button>
                        <div class="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 p-0"
                            style="width: 300px;">
                            <div class="search-bar">
                                <div id="itemSearch" class="menu-search mb-0">
                                    <form role="search" method="get" id="searchItemform" class="searchform">
                                        <input type="text" class="form-control border rounded" name="s" id="searchItem"
                                            placeholder="Search...">
                                        <input type="submit" id="searchItemsubmit" value="Search">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>


                <li v-else class="list-inline-item mb-0 me-1">
                    <div class="dropdown">
                        <button type="button" class="btn dropdown-toggle p-0" data-bs-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i class="uil uil-search text-white title-dark btn-icon-light fs-5 align-middle"></i>
                            <i class="uil uil-search text-dark btn-icon-dark fs-5 align-middle"></i>
                        </button>
                        <div class="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 p-0"
                            style="width: 300px;">
                            <div class="search-bar">
                                <div id="itemSearch" class="menu-search mb-0">
                                    <form role="search" method="get" id="searchItemform" class="searchform">
                                        <input type="text" class="form-control border rounded shadow" name="s" id="s"
                                            placeholder="Search...">
                                        <input type="submit" id="searchItemsubmit" value="Search">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li v-if="wallet" class="list-inline-item mb-0 me-1">
                    <a @click="connect" id="connectWallet" class="btn btn-icon btn-pills btn-primary"><i
                            class="uil uil-wallet fs-6"></i></a>
                </li>


                <li v-else class="list-inline-item mb-0 me-1">
                    <a @click="connect" id="connectWallet">
                        <span class="btn-icon-dark"><span class="btn btn-icon btn-pills btn-primary"><i
                                    class="uil uil-wallet fs-6"></i></span></span>
                        <span class="btn-icon-light"><span class="btn btn-icon btn-pills btn-light"><i
                                    class="uil uil-wallet fs-6"></i></span></span>
                    </a>
                </li>

                <li class="list-inline-item mb-0">
                    <div class="dropdown dropdown-primary">
                        <button type="button" class="btn btn-pills dropdown-toggle p-0" data-bs-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false"><img src="../../assets/images/client/01.jpg"
                                class="rounded-pill avatar avatar-sm-sm" alt=""></button>
                        <div class="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 pb-3 pt-0 overflow-hidden rounded"
                            style="min-width: 200px;">
                            <div class="position-relative">
                                <div class="pt-5 pb-3 bg-gradient-primary"></div>
                                <div class="px-3">
                                    <div class="d-flex align-items-end mt-n4">
                                        <img src="../../assets/images/client/01.jpg"
                                            class="rounded-pill avatar avatar-md-sm img-thumbnail shadow-md" alt="">
                                        <h6 class="text-dark fw-bold mb-0 ms-1">Calvin Carlo</h6>
                                    </div>
                                    <div class="mt-2">
                                        <small class="text-start text-dark d-block fw-bold">Wallet:</small>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <small id="myPublicAddress" class="text-muted">qhut0...hfteh45</small>
                                            <a href="" class="text-primary"><span class="uil uil-copy"></span></a>
                                        </div>
                                    </div>

                                    <div class="mt-2">
                                        <small class="text-dark">Balance: <span
                                                class="text-primary fw-bold">0.00045ETH</span></small>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-2">
                                <router-link class="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                                    to="/creator-profile"><span class="mb-0 d-inline-block me-1"><i
                                            class="uil uil-user align-middle h6 mb-0 me-1"></i></span>
                                    Profile</router-link>
                                <router-link class="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                                    to="/creator-profile-edit"><span class="mb-0 d-inline-block me-1"><i
                                            class="uil uil-cog align-middle h6 mb-0 me-1"></i></span>
                                    Settings</router-link>
                                <div class="dropdown-divider border-top"></div>
                                <router-link class="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                                    to="/lock-screen"><span class="mb-0 d-inline-block me-1"><i
                                            class="uil uil-sign-out-alt align-middle h6 mb-0 me-1"></i></span>
                                    Logout</router-link>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <!--Login button End-->

            <div id="navigation" :class="toggle === false ? 'd-none' : 'd-block'">
                <!-- Navigation Menu-->
                <ul class="navigation-menu nav-left" :class="navLight">
                    <li class="has-submenu parent-parent-menu-item"
                        :class="['/home', '/', '/index-two', '/index-three', '/index-four', '/index-five'].includes(activeIndex) ? 'active' : ''">
                        <router-link to="" @click="submenu(openMenu === '/home' ? '' : '/home')">Home</router-link><span
                            class="menu-arrow"></span>
                        <ul class="submenu"
                            :class="['/home', '/', '/index-two', '/index-three', '/index-four', '/index-five'].includes(openMenu) ? 'open' : ''">
                            <li :class="activeIndex === '/' ? 'active' : ''"><router-link to="/"
                                    class="sub-menu-item">Home One</router-link></li>
                            <li :class="activeIndex === '/index-two' ? 'active' : ''"><router-link to="/index-two"
                                    class="sub-menu-item">Home Two</router-link></li>
                            <li :class="activeIndex === '/index-three' ? 'active' : ''"><router-link to="/index-three"
                                    class="sub-menu-item">Home Three</router-link></li>
                            <li :class="activeIndex === '/index-four' ? 'active' : ''"><router-link to="/index-four"
                                    class="sub-menu-item">Home Four</router-link></li>
                            <li :class="activeIndex === '/index-five' ? 'active' : ''"><router-link to="/index-five"
                                    class="sub-menu-item">Home Five</router-link></li>
                        </ul>
                    </li>

                    <li class="has-submenu parent-parent-menu-item"
                        :class="['/explore', '/explore-one', '/explore-two', '/explore-three', '/explore-four', '/auction', '/item-detail-one', '/item-detail-two'].includes(activeIndex) ? 'active' : ''">
                        <router-link to=""
                            @click="submenu(openMenu === '/explore' ? '' : '/explore')">Explore</router-link><span
                            class="menu-arrow"></span>
                        <ul class="submenu"
                            :class="['/explore', '/explore-one', '/explore-two', '/explore-three', '/explore-four', '/auction', '/item-detail-one', '/item-detail-two'].includes(openMenu) ? 'open' : ''">
                            <li :class="activeIndex === '/explore-one' ? 'active' : ''"><router-link to="/explore-one"
                                    class="sub-menu-item"> Explore One</router-link></li>
                            <li :class="activeIndex === '/explore-two' ? 'active' : ''"><router-link to="/explore-two"
                                    class="sub-menu-item"> Explore Two</router-link></li>
                            <li :class="activeIndex === '/explore-three' ? 'active' : ''"><router-link
                                    to="/explore-three" class="sub-menu-item"> Explore Three</router-link></li>
                            <li :class="activeIndex === '/explore-four' ? 'active' : ''"><router-link to="/explore-four"
                                    class="sub-menu-item"> Explore Four</router-link></li>
                            <li :class="activeIndex === '/auction' ? 'active' : ''"><router-link to="/auction"
                                    class="sub-menu-item">Live Auction</router-link></li>
                            <li :class="activeIndex === '/item-detail-one' ? 'active' : ''"><router-link
                                    to="/item-detail-one" class="sub-menu-item"> Item Detail One</router-link></li>
                            <li :class="activeIndex === '/item-detail-two' ? 'active' : ''"><router-link
                                    to="/item-detail-two" class="sub-menu-item"> Item Detail Two</router-link></li>
                        </ul>
                    </li>

                    <li :class="activeIndex === '/activity' ? 'active' : ''"><router-link to="/activity"
                            class="sub-menu-item"> Activity</router-link></li>

                    <li :class="activeIndex === '/wallet' ? 'active' : ''"><router-link to="/wallet"
                            class="sub-menu-item">Wallet</router-link></li>

                    <li class="has-submenu parent-parent-menu-item"
                        :class="['/pages', '/aboutus', '/creator', '/creators', '/creator-profile', '/creator-profile-edit', '/become-creator', '/collections', '/blog', '/blogs', '/blog-sidebar', '/blog-detail', '/authpages', '/login', '/signup', '/reset-password', '/lock-screen', '/special', '/comingsoon', '/maintenance', '/error', '/helpcenter', '/helpcenter-overview', '/helpcenter-faqs', '/helpcenter-guides', '/helpcenter-support-request', '/upload-work', '/terms', '/privacy'].includes(activeIndex) ? 'active' : ''">
                        <router-link to=""
                            @click="submenu(openMenu === '/pages' ? '' : '/pages')">Pages</router-link><span
                            class="menu-arrow"></span>
                        <ul class="submenu"
                            :class="['/pages', '/aboutus', '/creator', '/blog', '/authpages', '/special', '/helpcenter'].includes(openMenu) ? 'open' : ''">
                            <li :class="activeIndex === '/aboutus' ? 'active' : ''"><router-link to="/aboutus"
                                    class="sub-menu-item">About Us</router-link></li>
                            <li class="has-submenu parent-menu-item"
                                :class="['/creator', '/creators', '/creator-profile', '/creator-profile-edit', '/become-creator'].includes(activeIndex) ? 'active' : ''">
                                <router-link to="" @click="submenu(openMenu === '/creator' ? '' : '/creator')"> Creator
                                </router-link><span class="submenu-arrow"></span>
                                <ul class="submenu"
                                    :class="['/creator', '/creators', '/creator-profile', '/creator-profile-edit', '/become-creator'].includes(openMenu) ? 'open' : ''">
                                    <li :class="activeIndex === '/creators' ? 'active' : ''"><router-link to="/creators"
                                            class="sub-menu-item"> Creators</router-link></li>
                                    <li :class="activeIndex === '/creator-profile' ? 'active' : ''"><router-link
                                            to="/creator-profile" class="sub-menu-item"> Creator Profile</router-link>
                                    </li>
                                    <li :class="activeIndex === '/creator-profile-edit' ? 'active' : ''"><router-link
                                            to="/creator-profile-edit" class="sub-menu-item"> Profile Edit</router-link>
                                    </li>
                                    <li :class="activeIndex === '/become-creator' ? 'active' : ''"><router-link
                                            to="/become-creator" class="sub-menu-item"> Become Creator</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li :class="activeIndex === '/collections' ? 'active' : ''"><router-link to="/collections"
                                    class="sub-menu-item">Collections</router-link></li>
                            <li class="has-submenu parent-menu-item"
                                :class="['/blog', '/blogs', '/blog-sidebar', '/blog-detail'].includes(activeIndex) ? 'active' : ''">
                                <router-link to="" @click="submenu(openMenu === '/blog' ? '' : '/blog')"> Blog
                                </router-link><span class="submenu-arrow"></span>
                                <ul class="submenu"
                                    :class="['/blog', '/blogs', '/blog-sidebar', '/blog-detail'].includes(openMenu) ? 'open' : ''">
                                    <li :class="activeIndex === '/blogs' ? 'active' : ''"><router-link to="/blogs"
                                            class="sub-menu-item"> Blogs</router-link></li>
                                    <li :class="activeIndex === '/blog-sidebar' ? 'active' : ''"><router-link
                                            to="/blog-sidebar" class="sub-menu-item"> Blog with sidebar</router-link>
                                    </li>
                                    <li :class="activeIndex === '/blog-detail' ? 'active' : ''"><router-link
                                            to="/blog-detail" class="sub-menu-item"> Blog Detail</router-link></li>
                                </ul>
                            </li>
                            <li class="has-submenu parent-menu-item"
                                :class="['/authpages', '/login', '/signup', '/reset-password', '/lock-screen'].includes(activeIndex) ? 'active' : ''">
                                <router-link to="" @click="submenu(openMenu === '/authpages' ? '' : '/authpages')"> Auth
                                    Pages </router-link><span class="submenu-arrow"></span>
                                <ul class="submenu"
                                    :class="['/authpages', '/login', '/signup', '/reset-password', '/lock-screen'].includes(openMenu) ? 'open' : ''">
                                    <li :class="activeIndex === '/login' ? 'active' : ''"><router-link to="/login"
                                            class="sub-menu-item"> Login</router-link></li>
                                    <li :class="activeIndex === '/signup' ? 'active' : ''"><router-link to="/signup"
                                            class="sub-menu-item"> Signup</router-link></li>
                                    <li :class="activeIndex === '/reset-password' ? 'active' : ''"><router-link
                                            to="/reset-password" class="sub-menu-item"> Forgot Password</router-link>
                                    </li>
                                    <li :class="activeIndex === '/lock-screen' ? 'active' : ''"><router-link
                                            to="/lock-screen" class="sub-menu-item"> Lock Screen</router-link></li>
                                </ul>
                            </li>
                            <li class="has-submenu parent-menu-item"
                                :class="['/special', '/comingsoon', '/maintenance', '/error'].includes(activeIndex) ? 'active' : ''">
                                <router-link to="" @click="submenu(openMenu === '/special' ? '' : '/special')">
                                    Special</router-link><span class="submenu-arrow"></span>
                                <ul class="submenu"
                                    :class="['/special', '/comingsoon', '/maintenance', '/error'].includes(openMenu) ? 'open' : ''">
                                    <li :class="activeIndex === '/comingsoon' ? 'active' : ''"><router-link
                                            to="/comingsoon" class="sub-menu-item"> Coming Soon</router-link></li>
                                    <li :class="activeIndex === '/maintenance' ? 'active' : ''"><router-link
                                            to="/maintenance" class="sub-menu-item"> Maintenance</router-link></li>
                                    <li :class="activeIndex === '/error' ? 'active' : ''"><router-link to="/error"
                                            class="sub-menu-item"> 404!</router-link></li>
                                </ul>
                            </li>
                            <li class="has-submenu parent-menu-item"
                                :class="['/helpcenter', '/helpcenter-overview', '/helpcenter-faqs', '/helpcenter-guides', '/helpcenter-support-request'].includes(activeIndex) ? 'active' : ''">
                                <router-link to="" @click="submenu(openMenu === '/helpcenter' ? '' : '/helpcenter')">
                                    Help Center</router-link><span class="submenu-arrow"></span>
                                <ul class="submenu"
                                    :class="['/helpcenter', '/helpcenter-overview', '/helpcenter-faqs', '/helpcenter-guides', '/helpcenter-support-request'].includes(openMenu) ? 'open' : ''">
                                    <li :class="activeIndex === '/helpcenter-overview' ? 'active' : ''"><router-link
                                            to="/helpcenter-overview" class="sub-menu-item"> Overview</router-link></li>
                                    <li :class="activeIndex === '/helpcenter-faqs' ? 'active' : ''"><router-link
                                            to="/helpcenter-faqs" class="sub-menu-item"> FAQs</router-link></li>
                                    <li :class="activeIndex === '/helpcenter-guides' ? 'active' : ''"><router-link
                                            to="/helpcenter-guides" class="sub-menu-item"> Guides</router-link></li>
                                    <li :class="activeIndex === '/helpcenter-support-request' ? 'active' : ''">
                                        <router-link to="/helpcenter-support-request" class="sub-menu-item">
                                            Support</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li :class="activeIndex === '/upload-work' ? 'active' : ''"><router-link to="/upload-work"
                                    class="sub-menu-item">Upload Works</router-link></li>
                            <li :class="activeIndex === '/terms' ? 'active' : ''"><router-link to="/terms"
                                    class="sub-menu-item">Terms Policy</router-link></li>
                            <li :class="activeIndex === '/privacy' ? 'active' : ''"><router-link to="/privacy"
                                    class="sub-menu-item">Privacy Policy</router-link></li>
                        </ul>
                    </li>

                    <li :class="activeIndex === '/contact' ? 'active' : ''"><router-link to="/contact"
                            class="sub-menu-item">Contact</router-link></li>
                </ul><!--end navigation menu-->
            </div><!--end navigation-->
        </div><!--end container-->
    </header><!--end header-->
    <!-- Navbar End -->

    <!-- Wallet Modal -->
    <div :class="isActive ? 'd-block show' : ''" class="modal fade" id="modal-metamask" tabindex="-1"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content justify-content-center border-0 shadow-md rounded-md position-relative">
                <div class="position-absolute top-0 start-100 translate-middle z-index-1">
                    <button type="button" class="btn btn-icon btn-pills btn-sm btn-light btn-close opacity-10"
                        data-bs-dismiss="modal" id="close-modal"><i @click="toggles"
                            class="uil uil-times fs-4"></i></button>
                </div>

                <div class="modal-body p-4 text-center">
                    <img src="../../assets/images/wallet/MetaMask_Fox.svg"
                        class="avatar avatar-md-md rounded-circle shadow-sm " alt="">

                    <div class="content mt-4">
                        <h5 class="text-danger mb-4">Error!</h5>

                        <p class="text-muted">Please Download MetaMask and create your profile and wallet in
                            MetaMask. Please click and check the details,</p>

                        <a href="https://metamask.io/" class="btn btn-link primary text-primary fw-bold"
                            target="_blank">MetaMask</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Wallet Modal -->

</template>

<script setup>
import feather from 'feather-icons';
import { ref, onMounted, onUnmounted, computed, defineProps } from 'vue';



const toggle = ref(false);
const menu = ref(true);
// const current = ref(''); // Define current as a ref
const isActive = ref(false)
const activeIndex = computed(() => window.location.pathname);
const openMenu = ref('');

defineProps({
    logoLight: {
        type: Boolean,
        requires: true
    },
    navLight: {
        type: String,
        requires: true
    },
    wallet: {
        type: Boolean,
        requires: true
    },
    search: {
        type: Boolean,
        requires: true
    },
    lightLogo: {
        type: Boolean,
        requires: true
    },
    bgclass: {
        type: String,
        requires: true
    },
})

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    feather.replace();
    scrollToTop()

});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

function connect() {
    if (window.ethereum) {
        window.ethereum.enable().then(() => {
        }).catch((error) => {
            console.error(error);
        });
    } else {
        toggles();
        // const metaMaskInstallLink = "https://metamask.io/download/";
        // window.open(metaMaskInstallLink, "_blank");
    }
}

function toggles() {
    isActive.value = !isActive.value;
}

function handler() {
    toggle.value = !toggle.value;
}

function submenu(item) {
    menu.value = !menu.value;
    openMenu.value = item;
}

function handleScroll() {
    const navbar = document.getElementById("topnav");
    if (window.scrollY >= 50) {
        navbar.classList.add("nav-sticky");
    } else {
        navbar.classList.remove("nav-sticky");
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}


</script>

<style lang="scss" scoped></style>