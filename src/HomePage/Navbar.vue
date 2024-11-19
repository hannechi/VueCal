<template>
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="/listUsers">Users</b-nav-item>
          <b-nav-item href="/AddUser">Ajouter</b-nav-item>
          <b-nav-item href="/updateUser">Update</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
</template>
<script>
export default {
  name: 'Navbar',
  data () {
    return {
    
    }
  }
}
</script>