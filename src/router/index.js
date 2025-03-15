import { createRouter, createWebHistory } from 'vue-router';
import Tasks from '@/views/Tasks.vue';
import NewTask from '@/views/New.vue';
import Task from '@/views/Task.vue';

export default createRouter({
  history: createWebHistory(),

  routes: [
    { path: '/', component: Tasks },
    { path: '/new', component: NewTask },
    { path: '/todo/:id', component: Task, props: true },
  ],

  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});
