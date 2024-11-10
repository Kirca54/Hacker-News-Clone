<template>
  <header class="header">
    <div class="logo-container">
      <!-- Logo -->
      <img src="../../public/img/icons/HNLogo.png" alt="Hacker News Logo" class="logo" />
      <div class="brand-name">
        <h1>Search</h1>
        <h1>Hacker News</h1>
      </div>
    </div>

    <!-- Search button on the left of the search bar -->
    <button class="search-button" @click="searchPosts">
      <img src="../../public/img/icons/search.png" alt="Search Icon" class="search-icon" />
    </button>

    <!-- Search bar, long and next to the button -->
    <input
        type="text"
        placeholder="Search..."
        class="search-bar"
        v-model="searchQuery"
        @keyup.enter="searchPosts"
    />
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    searchPosts() {
      this.$emit('search', this.searchQuery);
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  border-bottom: 1px solid #ccc;
}

.logo-container {
  display: flex;
  align-items: center;
  margin-right: 50px;
}

.logo {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}

.brand-name {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.brand-name h1 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.2;
}

.search-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin-right: 10px; /* Space between button and search bar */
}

.search-icon {
  width: 20px;
  height: 20px;
}

.search-bar {
  flex-grow: 1;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 400px; /* Keep the bar long */
}
</style>
