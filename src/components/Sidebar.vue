<template>
  <div class="sidebar">
    <ul class="menu-list">
      <!-- All posts route -->
      <li><router-link to="/"><img src="/img/icons/grid.png" alt="All Icon" class="sidebar-icon" /> All</router-link></li>
      <!-- Hot posts route -->
      <li><router-link to="/hot"><img src="/img/icons/hot-deal.png" alt="Hot Icon" class="sidebar-icon" /> Hot</router-link></li>
      <!-- Show HN -->
      <li><router-link to="/show"><img src="/img/icons/megaphone.png" alt="Show HN Icon" class="sidebar-icon" /> Show HN</router-link></li>
      <!-- Ask HN -->
      <li><router-link to="/ask"><img src="/img/icons/speech-bubble.png" alt="Ask HN Icon" class="sidebar-icon" /> Ask HN</router-link></li>
      <!-- Polls -->
      <li><router-link to="/polls"><img src="/img/icons/bulb.png" alt="Polls Icon" class="sidebar-icon" /> Polls</router-link></li>
      <!-- Jobs -->
      <li><router-link to="/jobs"><img src="/img/icons/portfolio.png" alt="Jobs Icon" class="sidebar-icon" /> Jobs</router-link></li>

      <!-- Horizontal line -->
      <li class="separator"></li>

      <!-- New section -->
      <li><a href="/shipow"><img src="/img/icons/people.png" alt="Shipow Icon" class="sidebar-icon" /> Shipow</a></li>
      <li><a href="/starred"><img src="/img/icons/star.png" alt="Starred Icon" class="sidebar-icon" /> Starred</a></li>
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
  width: 250px; /* Adjust width of the sidebar */
  box-sizing: border-box;
}

.menu-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menu-list li {
  margin: 15px 0; /* Increase vertical spacing between menu items */
}

.menu-list a {
  display: flex;
  align-items: center; /* Align the icon and text horizontally */
  justify-content: center; /* Center the icon and text horizontally */
  padding: 10px;
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 4px;
  width: 100%; /* Ensure the link takes the full width of the list item */
  box-sizing: border-box;
}

.menu-list a:hover {
  background-color: #ddd;
  color: #000;
}

.sidebar-icon {
  width: 20px; /* Icon size */
  height: 20px;
  margin-right: 10px; /* Space between icon and text */
}

/* Separator line */
.separator {
  width: 100%;
  border-top: 1px solid #ccc;
  margin: 20px 0;
}
</style>
