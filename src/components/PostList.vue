<template>
  <div class="post-list-container">
    <!-- Loading state -->
    <div v-if="loading" class="loading">
      <p>Loading posts...</p>
    </div>

    <!-- Posts list -->
    <ul v-else>
      <li v-for="post in posts" :key="post.id" class="post-item">
        <!-- Post Title -->
        <router-link :to="'/post/' + post.id" class="post-link">{{ post.title }}</router-link>

        <!-- Post Metadata (Points, User, and Time) under the title -->
        <div class="post-metadata">
          <div class="post-points">
            <img src="@/assets/hearth.png" alt="Points Icon" class="icon" />
            {{ post.score }} points
          </div>
          <div class="post-user">
            <img src="@/assets/user.png" alt="User Icon" class="icon" />
            by {{ post.by }}
          </div>
          <div class="post-time">
            <img src="@/assets/clock.png" alt="Time Icon" class="icon" />
            {{ formatTime(post.time) }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatTime } from '@/utils'; // Assuming you already have a formatTime function

export default {
  data() {
    return {
      posts: [],
      loading: true,
    };
  },
  created() {
    this.fetchPosts(); // Initial fetch when the component is created
  },
  watch: {
    // Watch for changes in the route path and re-fetch posts
    '$route.path'() {
      this.loading = true; // Show loading message when route changes
      this.fetchPosts(); // Fetch posts based on the new route
    },
  },
  methods: {
    async fetchPosts() {
      try {
        let url = '';
        switch (this.$route.path) {
          case '/hot':
            url = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'; // Hot posts
            break;
          case '/show':
            url = 'https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty'; // Show posts
            break;
          case '/ask':
            url = 'https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty'; // Ask posts
            break;
          case '/polls':
            url = 'https://hacker-news.firebaseio.com/v0/pollstories.json?print=pretty'; // Polls posts
            break;
          case '/jobs':
            url = 'https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty'; // Jobs posts
            break;
          default:
            url = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty'; // Default to New posts
            break;
        }
        const response = await fetch(url);
        const postIds = await response.json();
        const posts = [];
        for (let i = 0; i < 10; i++) {
          const post = await fetch(`https://hacker-news.firebaseio.com/v0/item/${postIds[i]}.json?print=pretty`);
          posts.push(await post.json());
        }
        this.posts = posts;
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        this.loading = false; // Hide loading text when posts are fetched
      }
    },
    formatTime,
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

/* Metadata Styles */
.post-metadata {
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  font-size: 1rem;
  color: #7f8c8d;
}

.post-points,
.post-user,
.post-time {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.icon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
</style>
