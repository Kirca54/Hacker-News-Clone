<template>
  <div id="app">
    <!-- Header -->
    <Header />

    <!-- Main container (header and sidebar) -->
    <div class="main-container">
      <!-- Sidebar (left) -->
      <Sidebar />

      <!-- Main Content Area (right) -->
      <div class="content-area">
        <!-- Add your content here -->
        <router-view /> <!-- Vue 3 way of rendering routed components -->
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    //HelloWorld
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column; /* Stack header on top */
  height: 100vh; /* Full viewport height */
}

.main-container {
  display: flex; /* Sidebar and content area in a row */
  height: 100%; /* Full height of the container */
}

.sidebar {
  width: 250px; /* Sidebar width */
  background-color: #f4f4f4;
  padding: 20px;
  border-right: 1px solid #ddd;
  height: 100%; /* Sidebar takes full height */
}

.menu-list {
  list-style: none;
  padding: 0;
}

.menu-list li {
  margin: 10px 0;
}

.menu-list a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 4px;
}

.menu-list a:hover {
  background-color: #ddd;
  color: #000;
}

.content-area {
  flex-grow: 1; /* Content area takes remaining space */
  padding: 20px;
  background-color: #fff;
}
</style>
