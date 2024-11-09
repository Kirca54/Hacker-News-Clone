<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="'/post/' + post.id">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
      const postIds = await response.json();
      const posts = [];
      for (let i = 0; i < 10; i++) {
        const post = await fetch(`https://hacker-news.firebaseio.com/v0/item/${postIds[i]}.json?print=pretty`);
        posts.push(await post.json());
      }
      this.posts = posts;
    },
  },
};
</script>
