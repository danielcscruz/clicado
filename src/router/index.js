import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import('@/pages/index/index.vue'),
  },
  {
    path: "/index-two",
    name: "index-two",
    component: () => import('@/pages/index/index-two.vue'),
  },
  {
    path: "/index-three",
    name: "index-three",
    component: () => import('@/pages/index/index-three.vue'),
  },
  {
    path: "/index-four",
    name: "index-four",
    component: () => import('@/pages/index/index-four.vue'),
  },
  {
    path: "/index-five",
    name: "index-five",
    component: () => import('@/pages/index/index-five.vue'),
  },
  {
    path: "/explore-one",
    name: "explore-one",
    component: () => import('@/pages/explore/explore-one.vue'),
  },
  {
    path: "/explore-two",
    name: "explore-two",
    component: () => import('@/pages/explore/explore-two.vue'),
  },
  {
    path: "/explore-three",
    name: "explore-three",
    component: () => import('@/pages/explore/explore-three.vue'),
  },
  {
    path: "/explore-four",
    name: "explore-four",
    component: () => import('@/pages/explore/explore-four.vue'),
  },
  {
    path: "/auction",
    name: "auction",
    component: () => import('@/pages/explore/auction.vue'),
  },
  {
    path: "/item-detail-one",
    name: "item-detail-ones",
    component: () => import('@/pages/explore/item-detail-one.vue'),
  },
  {
    path: "/item-detail-one/:id",
    name: "item-detail-one",
    component: () => import('@/pages/explore/item-detail-one.vue'),
  },
  {
    path: "/item-detail-two",
    name: "item-detail-two",
    component: () => import('@/pages/explore/item-detail-two.vue'),
  },
  {
    path: "/activity",
    name: "activity",
    component: () => import('@/pages/activity.vue'),
  },
  {
    path: "/wallet",
    name: "wallet",
    component: () => import('@/pages/wallet.vue'),
  },
  {
    path: "/aboutus",
    name: "aboutus",
    component: () => import('@/pages/pages/aboutus.vue'),
  },
  {
    path: "/collections",
    name: "collections",
    component: () => import('@/pages/pages/collections.vue'),
  },
  {
    path: "/upload-work",
    name: "upload-work",
    component: () => import('@/pages/pages/upload-work.vue'),
  },
  {
    path: "/terms",
    name: "terms",
    component: () => import('@/pages/pages/terms.vue'),
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () => import('@/pages/pages/privacy.vue'),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import('@/pages/contact.vue'),
  },
  {
    path: "/helpcenter-overview",
    name: "helpcenter-overview",
    component: () => import('@/pages/pages/helpcenter/helpcenter-overview.vue'),
  },
  {
    path: "/helpcenter-faqs",
    name: "helpcenter-faqs",
    component: () => import('@/pages/pages/helpcenter/helpcenter-faqs.vue'),
  },
  {
    path: "/helpcenter-guides",
    name: "helpcenter-guides",
    component: () => import('@/pages/pages/helpcenter/helpcenter-guides.vue'),
  },
  {
    path: "/helpcenter-support-request",
    name: "helpcenter-support-request",
    component: () => import('@/pages/pages/helpcenter/helpcenter-support-request.vue'),
  },
  {
    path: "/creators",
    name: "creators",
    component: () => import('@/pages/pages/creator/creators.vue'),
  },
  {
    path: "/creator-profile",
    name: "creator-profile",
    component: () => import('@/pages/pages/creator/creator-profile.vue'),
  },
  {
    path: "/creator-profile-edit",
    name: "creator-profile-edit",
    component: () => import('@/pages/pages/creator/creator-profile-edit.vue'),
  },
  {
    path: "/become-creator",
    name: "become-creator",
    component: () => import('@/pages/pages/creator/become-creator.vue'),
  },
  {
    path: "/blogs",
    name: "blogs",
    component: () => import('@/pages/pages/blog/blogs.vue'),
  },
  {
    path: "/blog-sidebar",
    name: "blog-sidebar",
    component: () => import('@/pages/pages/blog/blog-sidebar.vue'),
  },
  {
    path: "/blog-detail",
    name: "blog-details",
    component: () => import('@/pages/pages/blog/blog-detail.vue'),
  },
  {
    path: "/blog-detail/:id",
    name: "blog-detail",
    component: () => import('@/pages/pages/blog/blog-detail.vue'),
  },
  {
    path: "/login",
    name: "login",
    component: () => import('@/pages/auth-pages/login.vue'),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import('@/pages/auth-pages/signup.vue'),
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('@/pages/auth-pages/reset-password')
  },
  {
    path: '/lock-screen',
    name: 'lock-screen',
    component: () => import('@/pages/auth-pages/lock-screen.vue')
  },
  {
    path: '/comingsoon',
    name: 'comingsoon',
    component: () => import('@/pages/special-pages/comingsoon.vue')
  },
  {
    path: '/maintenance',
    name: 'maintenance',
    component: () => import('@/pages/special-pages/maintenance.vue') 
  },
  {
    path: '/:error(.*)',
    name: 'error',
    component: () => import('@/pages/special-pages/error.vue')
  }


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;