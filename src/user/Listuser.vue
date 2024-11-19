<template>

<table>
  <tr>
    <th>name</th>
    <th>email</th>
    <th>password</th>
    <th>Delete</th>
    <th>More</th>
    <th>Update</th>
  </tr>
  <tr v-for="(user, index) in users" :key="index">
  <td>{{ user.name }}</td>
  <td>{{ user.email }}</td>
  <td>{{ user.password }}</td>
  <td><button @click="deleteUser(user._id)">Delete</button></td>
    <td><button @click="moreInformation(user._id)" >More</button></td>
    <td><button>Update</button></td>
</tr>
</table>
</template>
<script>
import axios from 'axios';  
export default
{

    name: 'Listuser',
    data () {
    return {
      users: []
    }
    },
    mounted() {
    // This code runs after the component has been mounted to the DOM
    this.getData()
    console.log('Component is mounted!');  
    },
    methods :
    {
    getData()
        {
        axios.get("http://localhost:3012/api/users").then(response => {
       this.users = response.data
    }).catch(err => alert("problemme"))
        },
    deleteUser(id) {
            axios.delete("http://localhost:3012/api/users/"+id).then(response => {
       this.getData()
    }).catch(err => alert("problemme"))
        },
    moreInformation(iduser)
    {
        this.$router.push({ 
            name: 'MoreInformation', // Make sure this matches the name of your route
            params: { id: iduser}
            });
    }
    }

}
</script>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>