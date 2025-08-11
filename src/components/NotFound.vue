<template>
  <div class="not-found">
    <!-- Home link in top right corner -->
    <RouterLink to="/" class="home-link">🏠 Home</RouterLink>

    <div class="content">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <RouterLink to="/" class="back-home-btn">Go Back Home</RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
};
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f7f6f2;
  color: #333;
  font-family: 'Segoe UI', Tahoma, sans-serif;
}

/* Home link in top right */
.home-link {
  position: absolute;
  top: 15px;
  right: 20px;
  text-decoration: none;
  color: #ff7043;
  font-weight: bold;
}

.home-link:hover {
  text-decoration: underline;
}

/* Centered 404 content */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 6rem;
  margin: 0;
  color: #ff7043;
}

p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.back-home-btn {
  padding: 10px 20px;
  background-color: #ff7043;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.back-home-btn:hover {
  background-color: #e35d32;
}
</style>
