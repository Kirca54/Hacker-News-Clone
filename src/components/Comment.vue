<template>
  <div class="comment-container" :style="{ marginLeft: `${level * 20}px` }">
    <div class="comment">
      <div class="comment-header">
        <span class="username">{{ comment.by || 'Anonymous' }}</span>
      </div>
      <p v-html="comment.text" class="comment-text"></p>
    </div>

    <!-- Display replies if there are any -->
    <div v-if="comment.replies && comment.replies.length">
      <Comment v-for="reply in comment.replies" :key="reply.id" :comment="reply" :level="level + 1" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: Object,
    level: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style>
.comment-container {
  margin-top: 10px;
}

.comment {
  background-color: #ffffff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.comment-header {
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 5px;
}

.comment-text {
  color: #555;
  margin: 0;
}
</style>
