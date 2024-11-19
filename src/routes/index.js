// src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import Listuser from '../user/Listuser.vue';
import MoreInformationUser from '../user/MoreInformationUser.vue'
import AjouterUser from '../user/AjouterUser.vue';
import UpdateUser from '../user/UpdateUser.vue';
// Use Vue Router
Vue.use(Router);

// Define routes
const routes = [
  {
    path: '/listUsers',
    component: Listuser,
  },
  {
    path:'/MoreInformation/:id',
    name:'MoreInformation',
    component: MoreInformationUser,
  },
  {
    path:'/AddUser',
    name:'AddUser',
    component: AjouterUser,
  },
  {
    path:'/updateUser',
    name:'UpdateUser',
    component: UpdateUser,
  }
];

// Create and export the router instance
export default new Router({
  mode: 'history', // Removes the hash (#) from the URL
  routes,
});
