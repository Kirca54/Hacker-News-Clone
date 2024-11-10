<template>
  <div id="app">
    <!-- Header -->
    <Header @search="handleSearch" />

    <!-- Main container -->
    <div class="main-container">
      <!-- Sidebar (left) -->
      <Sidebar />

      <!-- Main Content Area -->
      <div class="content-area">
        <router-view :searchQuery="searchQuery"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    handleSearch(query) {
      this.searchQuery = query;
    },
  },
};
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
