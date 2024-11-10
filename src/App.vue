<template>
  <div id="app">
    <!-- Header -->
    <Header @search="handleSearch" />

    <!-- Main container (header and sidebar) -->
    <div class="main-container">
      <!-- Sidebar (left) -->
      <Sidebar />

      <!-- Main Content Area (right) -->
      <div class="content-area">
        <!-- PostList Component -->
        <PostList :searchQuery="searchQuery" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import PostList from './components/PostList.vue';

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    PostList,
  },
  data() {
    return {
      searchQuery: '', // Store the search query
    };
  },
  methods: {
    handleSearch(query) {
      this.searchQuery = query; // Update search query
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
