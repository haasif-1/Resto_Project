<template>
  <div class="main">
    <div class="header">
      <img src="/resto.jpg" alt="">
      <h2>Sign Up Yourself</h2>
    </div>

    <div class="container">
      <div class="Sign-upform">
        <form>
          <label>Name</label>
          <input ref="nameInput" type="text" v-model="form.name" placeholder="Enter Your Name" />

          <label>Email</label>
          <input type="email" v-model="form.email" placeholder="Enter Your Email" />

          <label>Password</label>
          <input type="password" v-model="form.password" placeholder="Enter Your Password" />

          <button type="button" @click="SignUP">Sign Up</button>
        </form>
      </div>

      <div class="sidebar">
        <h3>Already Have an Account</h3>
        <RouterLink to="/login">Login Here</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "SignUp",
  mounted() {
    this.$refs.nameInput.focus();
  },
  data() {
    return {
      form: { name: '', email: '', password: '' }
    };
  },
  methods: {
    async SignUP() {
      let signUp = await axios.post('http://localhost:3000/users', {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password
      });

      if (signUp.status === 201) {
        alert("User signed up successfully");
        localStorage.setItem('user', JSON.stringify(signUp.data));
        this.$router.push({ name: 'Login' });
      } else {
        console.error("Error signing up");
      }
    }
  },
  created() {
    const userLogin = localStorage.getItem('user-login');
    if (userLogin) {
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>
