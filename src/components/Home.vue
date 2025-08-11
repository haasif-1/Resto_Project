<template>
<Header />

  <h2>Welcome to Home Page</h2>
  <p>Hello, <strong>{{ name }}!</strong> Welcome back to the Restaurant App.</p>

<table border="1">
  <thead>
      <tr>
        <td>Name</td>
        <td>Location</td>
        <td>Cuisine</td>
        <td>Actions</td>
      </tr>
  </thead>
  <tbody>
    <tr v-for="restaurant in RestaurantList" :key="restaurant.id">
      <td>{{ restaurant.name }}</td>
      <td>{{ restaurant.location }}</td>
      <td>{{ restaurant.cuisine }}</td>
      <td><RouterLink :to="/Update/+ restaurant.id">Update</RouterLink>
      <button type="button" @click="Del_Resto(restaurant.id)">Delete</button></td>
    </tr>
  </tbody>
</table>

</template>

<script>
import Header from '@/components/Header.vue';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Header
  },
  data(){
    return{
      name:'',
      RestaurantList: []
    }
  },
  methods:{
    async Del_Resto(id){
                  let result = await axios.delete('http://localhost:3000/Restaurants/' + id);
                  if(result.status == 200){
                      this.RestaurantList = this.RestaurantList.filter(restaurant => restaurant.id !== id);
                  }
     }
  }, 
async created() {
  const userLogin = localStorage.getItem('user-login');

  if (!userLogin) {

    this.$router.push({ name: 'SignUp' });
    return;
  }

  this.name = JSON.parse(userLogin).name;

  let result = await axios.get('http://localhost:3000/Restaurants');
  this.RestaurantList = result.data;
}


};
</script>


<style scoped>
/* General Page Styling */
body {
  font-family: 'Segoe UI', Tahoma, sans-serif;
  margin: 0;
  background-color: #f7f6f2;
  color: #333;
}

/* Header Component Wrapper */
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

/* Welcome Text */
p {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 20px;
}

/* Table Container */
table {
  border-collapse: collapse;
  margin: 20px auto;
  width: 80%;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

/* Table Headers */
thead tr {
  background-color: #ff7043;
  color: white;
  text-align: left;
}

/* Table Header Cells */
thead td {
  padding: 12px 15px;
  font-weight: bold;
  letter-spacing: 0.5px;
}

/* Table Body Cells */
tbody td {
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
}

/* Alternate Row Coloring */
tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

/* Hover Effect on Rows */
tbody tr:hover {
  background-color: #ffe0d6;
  transition: background 0.3s ease;
}
</style>