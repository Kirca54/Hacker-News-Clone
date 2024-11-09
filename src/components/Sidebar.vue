<template>
  <div class="sidebar">
    <ul class="menu-list">
      <li><router-link to="/">All</router-link></li>
      <li><router-link to="/hot">Hot</router-link></li>
      <li><a href="#">New</a></li>
      <li><a href="#">Top</a></li>
      <li><a href="#">Show</a></li>
      <li><a href="#">Ask</a></li>
      <li><a href="#">Jobs</a></li>
      <li><a href="#">Submit</a></li>
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
