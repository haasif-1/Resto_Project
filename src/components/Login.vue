<template>
  <div class="main">
    <div class="header">
      <img src="/resto.jpg" alt="">
      <h2>Login Yourself</h2>
    </div>

    <div class="container">
      <div class="login-upform">
        <form>
          <label>Email</label>
          <input type="email" v-model="form.email" placeholder="Enter Your Email" />

          <label>Password</label>
          <input type="password" v-model="form.password" placeholder="Enter Your Password" />

          <button type="button" @click="login">Login</button>
        </form>
      </div>

      <div class="sidebar">
        <h3>Register Yourself</h3>
        <RouterLink to="/signup">Sign Up Here</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Login",
  data() {
    return {
      form: { email: '', password: '' }
    };
  },
  methods: {
    async login() {
      let result = await axios.get(`http://localhost:3000/users?email=${this.form.email}&password=${this.form.password}`);
      if (result.data.length > 0) {
        alert("Login successful");
        localStorage.setItem("user-login", JSON.stringify(result.data[0]));
        this.$router.push({ name: 'Home' });
      } else {
        alert("Invalid email or password");
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
