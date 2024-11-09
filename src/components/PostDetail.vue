<template>
  <div>
    <h2>{{ post.title }}</h2>
    <div v-if="post.url">
      <a :href="post.url" target="_blank">View Link</a>
    </div>
    <div v-if="post.text">
      <h3>Comments</h3>
      <div v-for="comment in post.comments" :key="comment.id">
        <p>{{ comment.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
    };
  },
  async created() {
    const postId = this.$route.params.id; // Get the post ID from the URL
    const postResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${postId}.json?print=pretty`);
    this.post = await postResponse.json();
  },
};
</script>
