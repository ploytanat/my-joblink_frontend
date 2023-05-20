import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../views/HomePage.vue') // set home as path '/'
  },
  {
    path: '/signup',
    name: 'signUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/signin',
    name: 'signIn',
     
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/applicantProfile',
    name: 'applicantProfile',
    meta: { login: true },
    component: () => import('../views/applicant/ApplicantProfilePage.vue')
  },
  {
    path: '/MyJobs',
    name: 'MyJobs',
    meta: { login: true },
    component: () => import('../views/applicant/MyJobsPage.vue')
  },
  {
    path: '/recruiterProfile',
    name: 'recruiterProfile',
    meta: { login: true },
    component: () => import('../views/recruiter/RecruiterProfilePage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem("token");

  if (to.meta.login && !isLoggedIn) {
    alert("Please login first!");
    next({ path: "/signin" });
  }

  if (to.meta.guess && isLoggedIn) {
    alert("You've already logged in");
    next({ path: "/" });
  }

  next();
});


export default router