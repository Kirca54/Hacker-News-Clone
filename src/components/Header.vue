<template>
  <header class="header">
    <div class="logo-container">
      <!-- Logo -->
      <img src="../../public/img/icons/HNLogo.png" alt="Hacker News Logo" class="logo" />
      <!-- Text split into two lines -->
      <div class="brand-name">
        <h1>Search</h1>
        <h1>Hacker News</h1>
      </div>
    </div>
    <!-- Big Search Bar -->
    <input type="text" placeholder="Search..." class="search-bar" />
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: white; /* White background */
  border-bottom: 1px solid #ccc; /* Optional: add a bottom border to separate the header */
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 60px; /* Logo size */
  height: 60px;
  margin-right: 10px; /* Space between logo and text */
}

.brand-name {
  display: flex;
  flex-direction: column; /* Stack the text vertically */
  align-items: flex-start; /* Align text to the left */
}

.brand-name h1 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.2;
}

.search-bar {
  flex-grow: 1;
  margin-left: 20px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
