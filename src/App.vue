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
  flex-direction: column;
  height: 100vh;
}

.main-container {
  display: flex;
  height: 100%;
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
  flex-grow: 1;
  padding: 20px;
  background-color: #fff;
}
</style>
