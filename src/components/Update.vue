<template>
<Header />

  <h2>Welcome to Update Page</h2>
<form >
<label for="Resto Name">Resto Name</label>
<input type="text" placeholder="Enter REsto Name" v-model="Resto.name" />
<br>
<label for="Resto Location">Resto Location</label>
<input type="text" placeholder="Enter REsto Location" v-model="Resto.location"/>
<br>
<label for="Resto Cuisine">Resto Cuisine</label>
<input type="text" placeholder="Enter REsto Cuisine" v-model="Resto.cuisine"/>
<br>
<button type="button" @click="UpdateResto">Update Resto</button>

</form>

</template>

<script>
import axios from 'axios';
import Header from '@/components/Header.vue';

export default {
  name: 'Update',
  components: {
    Header
  },
  methods:{
    async UpdateResto(){
         let result= await axios.put('http://localhost:3000/Restaurants/' + this.$route.params.id, {
            name: this.Resto.name,
            location: this.Resto.location,
            cuisine: this.Resto.cuisine         
    });

    if(result.status==200){
         this.$router.push({ name: 'Home' });
    }
    }  
},
  data(){
    return{
           Resto:{
              name: '',
              location: '',
              cuisine:''
           }
    }
  },
  created() {
    const userLogin = localStorage.getItem('user-login');
    if (!userLogin) {
      this.$router.push({ name: 'SignUp' });
    }

  },
async mounted(){
    let id = this.$route.params.id;
    let result = await axios.get('http://localhost:3000/Restaurants/' + id);
    this.Resto = result.data;
}
};

</script>
