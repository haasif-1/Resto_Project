<template>
  <RouterView />
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Header styling */
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.header img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.header h2 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #2c3e50;
}

/* Main container */
.Sign-upform, .login-upform, .sidebar {
  flex: 1;
  padding: 40px;
}

.container {
  display: flex;
  width: 70%;
  margin: auto;
  border-radius: 10px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

/* Form section (applies to both Sign-up and Login forms) */
.Sign-upform form,
.login-upform form {
  display: flex;
  flex-direction: column;
}

.Sign-upform label,
.login-upform label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #34495e;
}

.Sign-upform input,
.login-upform input {
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
  outline: none;
}

.Sign-upform input:focus,
.login-upform input:focus {
  border-color: #2980b9;
}

.Sign-upform button,
.login-upform button {
  background-color: #2980b9;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.Sign-upform button:hover,
.login-upform button:hover {
  background-color: #21618c;
}

/* Sidebar section */
.sidebar {
  background-color: #1b2a49;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sidebar h3 {
  font-size: 1.5rem;
}

.sidebar p {
  margin-top: 10px;
  color: #cfd8dc;
  cursor: pointer;
}

.sidebar p:hover {
  text-decoration: underline;
}


</style>