<template>
    <!-- Start Blog Detail -->

    <div class="container">
        <div class="row mt-5 mt-lg-0 justify-content-center">
            <div class="col-lg-8">
                <div class="title-heading">
                    <h4 class="heading sub-heading fw-bold mb-3">{{data?.title ? data?.title : "Here's a quick guide about how to make money selling your artworks with Superex!"}}</h4>
                    <p class="text-muted fs-5 mb-0">The NFT space has made unprecedented progress since we first
                        launched Superex in late 2021, as it hit several major milestones in the past…</p>

                    <div class="d-flex align-items-center mt-4">
                        <img src="../../assets/images/icon-logo-48.png" class="rounded-pill shadow-md" alt="">

                        <div class="content ms-2">
                            <a href="javascript:void(0)" class="h6 text-dark d-block mb-0">{{data?.category ? data?.category : "Superex NFT"}}</a>
                            <small class="text-muted mb-0">{{data?.date ? data?.date : "20th January 2022"}}, {{data?.time ? data?.time : "8 min read"}}</small>
                        </div>
                    </div>
                </div>
            </div><!--end col-->

            <div class="col-12 mt-5">
                <div class="position-relative">
                    <img :src="data?.image ? data?.image : image" class="img-fluid rounded-md shadow-md w-100" alt="">
                    <div class="play-icon">
                        <a @click="toggle" data-type="youtube" data-id="yba7hPeTSjk" class="play-btn lightbox">
                            <i class="mdi mdi-play text-primary rounded-circle bg-white shadow-lg icons"></i>
                        </a>
                    </div>
                </div>
            </div><!--end col-->

            <div class="col-lg-8 mt-5">
                <p class="text-muted">However, as the space keeps expanding and people proceed to mint thousands of NFTs
                    every day, an important question arises - how do we make sure that all that creative work remains
                    accessible over time?</p>

                <p class="text-muted">Earlier this year, as NFTs began hitting the mainstream, the industry faced a
                    major technical problem. As highlighted by some analysts, most of the JPEGs (or other file formats)
                    that serve as the media basis for their respective NFTs weren't stored on the chain itself. Instead,
                    NFTs often simply redirected to a URL where the corresponding media was hosted - in most cases, that
                    was a separate domain that belonged to either the creator or the platform where that NFT was minted.
                </p>

                <p class="text-muted">But what happens when those domains go down? With that discovery, it became
                    apparent that some NFTs have a single point of failure, which, in turn, could significantly impact
                    their longevity and value.</p>

                <p class="text-muted mb-0">In light of that, numerous projects and organisations have begun working on a
                    potential fix. In a recent Clubhouse session, we brought those pioneering protocols and projects -
                    Protocol Labs (an open-source lab that is working on Filecoin, IPFS and libp2p), Async.art, Fleek
                    and Arweave - together to have a constructive discussion about the future of NFT metadata. Here's a
                    concise recap of the main ideas that were discussed there.</p>

                <div class="px-4 py-5 rounded-md bg-soft-primary text-center mt-4">
                    <h4 class="mb-0">" Thinking about giving the gift of an NFT? What to know about digital tokens "
                    </h4>
                </div>

                <div class="mt-4">
                    <img src="../../assets/images/blog/10.jpg" class="img-fluid rounded-md shadow" alt="">
                </div>

                <h5 class="mt-4 mb-0">What's an NFT?</h5>
                <p class="text-muted mt-4">This is the part that takes a bit of open-mindedness. An NFT is a unique
                    digital token, with most using the ethereum blockchain to digitally record transactions. It's not a
                    cryptocurrency like bitcoin or ether, because those are fungible -- exchangeable for another bitcoin
                    or cash. NFTs are recorded in a digital ledger in the same way as cryptocurrency, so there's a
                    listing of who owns each one.</p>

                <p class="text-muted mb-0">What makes an NFT unique is the digital asset tied to the token. This can be
                    an image, video, tweet or piece of music that's uploaded to a marketplace, which creates the NFT to
                    be sold.</p>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
    <!-- End Blog Detail -->

    <div :class="isActive === false ? 'position-fixed ' : 'd-none'" class="modal-video" tabindex="-1" role="dialog"
        area-modal="true" aria-label="You just opened the modal video">
        <div class="modal-video-body">
            <div class="modal-video-inner">
                <div class="modal-video-movie-wrap" style="">
                    <iframe width="460" height="230" src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed"
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen="" tabindex="-1">
                    </iframe>
                    <a @click="toggle" class="mdi mdi-close m-3 text-light h4 position-class title-dark"> </a>
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import image from '../../assets/images/blog/single.jpg'
const isActive = ref(true)
const route = useRoute();
const id = ref('');
const data = ref('')

const datas = ref([
    {
        id: 1,
        image: require('../../assets/images/blog/01.jpg'),
        category: 'Arts',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'Mindfulness Activities for Kids & Toddlers with NFT',
        by: '@callyjoe'
    },
    {
        id: 2,
        image: require('../../assets/images/blog/02.jpg'),
        category: 'Illustration',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'Save Thousands Of Lives Through This NFT',
        by: '@kristyhoney'
    },
    {
        id: 3,
        image: require('../../assets/images/blog/03.jpg'),
        category: 'Music',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'A place where technology meets craftsmanship',
        by: '@pandaone'
    },
    {
        id: 4,
        image: require('../../assets/images/blog/04.jpg'),
        category: 'Video',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'NFT Market - A Compact Trike with the Big Benefits',
        by: '@NorseQueen'
    },
    {
        id: 5,
        image: require('../../assets/images/blog/05.jpg'),
        category: 'Games',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'Honoring Black History Month with Toddlers',
        by: '@BigBull'
    },
    {
        id: 6,
        image: require('../../assets/images/blog/06.jpg'),
        category: 'Memes',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'Setting Intentions Instead of Resolutions for 2021',
        by: '@Angel'
    },
    {
        id: 7,
        image: require('../../assets/images/blog/07.jpg'),
        category: 'GIFs',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'Clever Ways to Purchase Extraordinart Items',
        by: '@CrazyAnyone'
    },
    {
        id: 8,
        image: require('../../assets/images/blog/08.jpg'),
        category: 'Video',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'How to Save Money on Baby Essentials for NFT',
        by: '@Princess'
    },
    {
        id: 9,
        image: require('../../assets/images/blog/09.jpg'),
        category: 'Music',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'Liki Trike - A Compact Trike with the Big Benefits',
        by: '@LooserBad'
    },
    {
        id: 10,
        image: require('../../assets/images/blog/10.jpg'),
        category: 'Tech',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'NFT Market - A Compact the Big Benefits',
        by: '@Princess'
    },
    {
        id: 11,
        image: require('../../assets/images/blog/11.jpg'),
        category: 'Arts',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'Behind the Scenes of the creabik App',
        by: '@PandaOne'
    },
    {
        id: 12,
        image: require('../../assets/images/blog/12.jpg'),
        category: 'GIFs',
        date: '20th October, 2022',
        time: '5 min read',
        title: 'Meet fennouni, Product Designer at GitHub',
        by: '@FunnyGuy'
    },
])



onMounted(() => {
    id.value = route.params.id
    data.value = datas.value.find((item) => item.id === parseInt(id.value))
})
const toggle = () => {
    isActive.value = !isActive.value
}

</script>

<style lang="scss" scoped></style>