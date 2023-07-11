import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/home-view.vue';
import PhLevelView from '@/views/ph-level.vue';
import DontClickView from '@/views/dont-click.vue';
import AboutView from '@/views/about-view.vue';
import TeamView from '@/views/team-view.vue';
import ContactView from '@/views/contact-view.vue';
import SettingsView from '@/views/settings-view.vue';
import { RouteNames } from '@/contants/rout-names';
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteNames.HOME,
      component: HomeView,
    },
    {
      path: '/ph',
      name: RouteNames.PH,
      component: PhLevelView,
    },
    {
      path: '/dont',
      name: RouteNames.DONT,
      component: DontClickView,
    },
    {
      path: '/about',
      name: RouteNames.ABOUT,
      component: AboutView,
    },
    {
      path: '/team',
      name: RouteNames.TEAM,
      component: TeamView,
    },
    {
      path: '/contact',
      name: RouteNames.CONTACT,
      component: ContactView,
    },
    {
      path: '/settings',
      name: RouteNames.SETTINGS,
      component: SettingsView,
    },
  ],
});

export default router;