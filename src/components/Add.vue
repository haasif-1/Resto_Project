<template>
<Header />

  <h2>Welcome to Add Page</h2>

<form >
<label for="Resto Name">Resto Name</label>
<input type="text" placeholder="Enter REsto Name" v-model="Resto.name" />
<br>
<label for="Resto Location">Resto Location</label>
<input type="text" placeholder="Enter REsto Location" v-model="Resto.location" />
<br>
<label for="Resto Cuisine">Resto Cuisine</label>
<input type="text" placeholder="Enter REsto Cuisine" v-model="Resto.cuisine" />
<br>
<button type="button" @click="addResto">Add Resto</button>

</form>


</template>

<script>
import Header from '@/components/Header.vue';
import axios from 'axios';

export default {
  name: 'Add',
data(){
    return{
        Resto:{
            name: '',
            location: '',
            cuisine: ''
        }
    }
},

  components: {
    Header
  },
  created() {
    const userLogin = localStorage.getItem('user-login');
    if (!userLogin) {
      this.$router.push({ name: 'SignUp' });
    }
  },
methods:{
    async addResto() {
        let result = await axios.post('http://localhost:3000/Restaurants',{
            name:this.Resto.name,
            location:this.Resto.location,
            cuisine:this.Resto.cuisine
        });
        if(result.status == 201){
            alert("Restaurant added successfully!");
            this.$router.push({ name: 'Home' });
        }
    }
}

};
</script>

<style >
/* General Page Styling */
body {
  font-family: 'Segoe UI', Tahoma, sans-serif;
  margin: 0;
  background-color: #f7f6f2;
  color: #333;
}

/* Header Component Styling */
header {
  background-color: #ff7043;
  color: white;
  padding: 15px 20px;
  font-size: 1.4rem;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
}

/* Page Title */
h2 {
  text-align: center;
  margin-top: 20px;
  font-size: 2rem;
  color: #ff7043;
}

/* Form Styling */
form {
  max-width: 500px;
  background: white;
  padding: 25px;
  margin: 20px auto;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

/* Labels */
form label {
  display: block;
  font-weight: bold;
  margin-bottom: 6px;
  margin-top: 15px;
  color: #444;
}

/* Inputs */
form input[type="text"] {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

form input[type="text"]:focus {
  border-color: #ff7043;
  outline: none;
  box-shadow: 0 0 4px rgba(255, 112, 67, 0.3);
}

/* Button */
form button {
  margin-top: 20px;
  background-color: #ff7043;
  color: white;
  padding: 12px 18px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

form button:hover {
  background-color: #e35d32;
}
</style>
