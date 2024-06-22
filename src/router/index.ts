import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import ViewAllJobs from `@/views/ViewAllJobs.vue`
import ViewCategoryJobs from `@/views/ViewCategoryJobs.vue`
import PostJob from `@/views/PostJob.vue`
import About from '@/views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Welcome
    },
    {
      path: '/w',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: `/pj`,
      name: "pj",
      component: PostJob,
    },
    {
      path: `/vjs`,
      name: "vjs",
      component: ViewAllJobs,
    },
    {
      path: `/vcjs`,
      name: "vcjs",
      component: ViewCategoryJobs,
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
]})

export default router
