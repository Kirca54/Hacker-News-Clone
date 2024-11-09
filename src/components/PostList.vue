<template>
  <div class="post-list-container">
    <!-- Loading state -->
    <div v-if="loading" class="loading">
      <p>Loading posts...</p>
    </div>

    <!-- Posts list -->
    <ul v-else>
      <li v-for="post in posts" :key="post.id" class="post-item">
        <router-link :to="'/post/' + post.id" class="post-link">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      loading: true, // Loading state
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
        const postIds = await response.json();
        const posts = [];
        for (let i = 0; i < 30; i++) {
          const post = await fetch(`https://hacker-news.firebaseio.com/v0/item/${postIds[i]}.json?print=pretty`);
          posts.push(await post.json());
        }
        this.posts = posts;
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        this.loading = false; // Turn off loading after data is fetched
      }
    },
  },
};
</script>

<style scoped>
.post-list-container {
  padding: 20px;
}

.loading {
  text-align: center;
  font-size: 1.5rem;
  color: #888;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.post-item {
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.post-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.post-link {
  text-decoration: none;
  color: #2c3e50;
  font-size: 1.25rem;
  font-weight: bold;
}

.post-link:hover {
  color: #3498db;
}
</style>
