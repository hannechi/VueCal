import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3012/api', // Base URL for your API
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  // Method to fetch a user by ID
  getUserById(id) {
    return apiClient.get(`/users/${id}`);
  },

  // Example: Method to fetch all users
  getAllUsers() {
    return apiClient.get('/users');
  },

  // Example: Method to create a new user
  createUser(userData) {
    return apiClient.post('/users', userData);
  },
  
  addUser(userData) {
    return apiClient.post('/users', userData); // Envoie des données à l'API pour créer un utilisateur
  }
};
