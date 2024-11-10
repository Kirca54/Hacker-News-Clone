<template>
  <div class="post-detail-container">
    <!-- Back Button -->
    <button class="back-button" @click="$router.go(-1)">
      <span class="arrow-icon">←</span> Back to Posts
    </button>

    <!-- Post Title -->
    <h2 class="post-title">{{ post.title }}</h2>

    <!-- Link to the original post -->
    <div v-if="post.url" class="post-link">
      <a :href="post.url" target="_blank" rel="noopener noreferrer">View Original Post</a>
    </div>

    <!-- Post text/content, if available -->
    <div v-if="post.text" class="post-content" v-html="post.text"></div>

    <!-- Comments section, if there are comments -->
    <div v-if="post.kids && post.kids.length" class="comments-section">
      <h3>Comments</h3>
      <Comment :comment="comment" v-for="comment in post.comments" :key="comment.id" />
    </div>
  </div>
</template>

<script>
// Import the Comment component
import Comment from './Comment.vue';

export default {
  components: {
    Comment, // Register the Comment component here
  },
  data() {
    return {
      post: {},
      loading: true,
    };
  },
  async created() {
    const postId = this.$route.params.id;
    try {
      const postResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${postId}.json?print=pretty`);
      const post = await postResponse.json();
      this.post = post;

      // Fetch comments if there are any
      if (post.kids && post.kids.length) {
        this.post.comments = await this.fetchComments(post.kids);
      }
    } catch (error) {
      console.error("Error fetching post details:", error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async fetchComments(commentIds) {
      const commentPromises = commentIds.map(id =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then(res => res.json())
      );
      const comments = await Promise.all(commentPromises);

      // Recursively fetch replies for each comment
      for (const comment of comments) {
        if (comment.kids && comment.kids.length) {
          comment.replies = await this.fetchComments(comment.kids);
        }
      }
      return comments;
    },
  },
};
</script>


<style>
.post-detail-container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  max-width: 800px;
  margin: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.back-button {
  display: inline-flex;
  align-items: center;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 15px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 20px;
  text-decoration: none;
}

.back-button:hover {
  background-color: #2980b9;
}

.arrow-icon {
  margin-right: 5px;
}

.post-title {
  font-size: 2rem;
  color: #2c3e50;
}

.post-link a {
  color: #3498db;
  font-size: 1.1rem;
  text-decoration: none;
}

.post-link a:hover {
  text-decoration: underline;
}

.post-content {
  margin-top: 15px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
}

.comments-section {
  margin-top: 30px;
}

.comments-section h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.comment {
  background-color: #ffffff;
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.comment-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.username {
  font-weight: bold;
  color: #2c3e50;
}

.comment-text {
  color: #555;
  margin: 0;
}
</style>
