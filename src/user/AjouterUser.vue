<template>
    <div>
      <h2>Ajouter un utilisateur</h2>
      <form @submit.prevent="submitForm">
        <label for="name">Nom:</label>
        <input type="text" v-model="newUser.name" id="name" required />
  
        <label for="email">Email:</label>
        <input type="email" v-model="newUser.email" id="email" required />
  
        <label for="password">Mot de passe:</label>
        <input type="password" v-model="newUser.password" id="password" required />
  
        <button type="submit">Ajouter</button>
      </form>
      <p v-if="message">{{ message }}</p>
    </div>
  </template>
  
  <script>
import serviceUser from '../services/serviceUser';
  export default {
    name: 'AjouterUser',
    data() {
      return {
        newUser: {
          name: '',
          email: '',
          password: ''
        },
        message: ''
      };
    },
    methods: {
      // Méthode pour soumettre le formulaire
      submitForm() {
        // Appeler la méthode addUser du service
        serviceUser.addUser(this.newUser)
          .then(response => {
            // Si l'utilisateur est ajouté avec succès
            this.message = 'Utilisateur ajouté avec succès!';
            this.newUser = { name: '', email: '', password: '' }; // Réinitialiser le formulaire
          })
          .catch(err => {
            // En cas d'erreur
            this.message = 'Erreur lors de l\'ajout de l\'utilisateur : ' + err.message;
          });
      }
    }
  };
  </script>
  
  <style>
  /* Style du formulaire d'ajout */
  form {
    display: flex;
    flex-direction: column;
  }
  
  input {
    margin-bottom: 10px;
    padding: 5px;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  p {
    color: green;
    margin-top: 10px;
  }
  </style>
  