<template>
  <header>
    <h1>Restaurant App</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/add">Add Restaurant</RouterLink>
      <button @click="logout">Log out</button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout() {
        console.log('Logging out...');
       localStorage.clear();
       console.log('User logged out', localStorage.getItem('userLogin'));
         this.$router.replace({ name: 'Login' });
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background: linear-gradient(135deg, #4a3f3f, #d06b5b);
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
}

nav {
  display: flex;
  gap: 20px;
  align-items: center;
}

nav a,
nav button {
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

nav a:hover,
nav button:hover {
  font-weight: bold;
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.05);
  text-shadow: 1px 1px 5px rgba(255, 255, 255, 0.6);
}
</style>
