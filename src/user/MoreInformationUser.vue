<template>
    <div v-if="user">
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Password: {{ user.password }}</p> <!-- Consider not displaying sensitive info like passwords -->
    </div>
  </template>
  
  <script>

  import serviceUser from '../services/serviceUser';
  export default {
    name: 'MoreInformationUser',
    data() {
      return {
        user: null // Correct return syntax for reactive data
      };
    },
    mounted() {
      // Fetch user data using the route parameter
      serviceUser.getUserById(this.$route.params.id)
      .then(response => {
        this.user = response.data;
      })
      .catch(err => alert("Problem fetching user data: " + err.message));
    },
    methods: {
      // Additional methods (if needed) can go here
    }
  }
  </script>
  
  <style>
  /* Add any styles here */
  </style>
  