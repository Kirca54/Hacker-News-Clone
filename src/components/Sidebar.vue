<template>
  <div class="sidebar">
    <ul class="menu-list">
      <!-- All posts route -->
      <li><router-link to="/">All</router-link></li>
      <!-- Hot posts route -->
      <li><router-link to="/hot">Hot</router-link></li>
      <!-- Show HN -->
      <li><router-link to="/show">Show HN</router-link></li>
      <!-- Ask HN -->
      <li><router-link to="/ask">Ask HN</router-link></li>
      <!-- Polls -->
      <li><router-link to="/polls">Polls</router-link></li>
      <!-- Jobs -->
      <li><router-link to="/jobs">Jobs</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.sidebar {
  padding: 20px;
  background-color: #f4f4f4;
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
</style>
