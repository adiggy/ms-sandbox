<script setup lang="ts">
import type { Comment } from '~/types'

defineProps<{
  comment: Comment
  isReply?: boolean
}>()

const showReplyInput = ref(false)
</script>

<template>
  <div :class="['comment-thread', { 'comment-thread--reply': isReply }]">
    <div v-if="isReply" class="comment-thread__reply-indicator">
      <v-icon size="16" color="var(--color-text-tertiary)">mdi-subdirectory-arrow-right</v-icon>
    </div>

    <div class="comment-thread__main">
      <div class="comment-thread__comment">
        <BaseAvatar
          :src="comment.author.avatarUrl"
          :name="comment.author.publicName"
          size="sm"
        />
        <div class="comment-thread__content">
          <NuxtLink
            :to="`/members/${comment.author.slug}`"
            class="comment-thread__author link-primary text-eyebrow"
          >
            {{ comment.author.publicName }}
          </NuxtLink>
          <p class="comment-thread__text">{{ comment.text }}</p>
          <button
            class="btn btn--tertiary btn--small"
            @click="showReplyInput = !showReplyInput"
          >
            <span class="btn__text">Reply</span>
          </button>
        </div>
      </div>

      <div v-if="showReplyInput" class="comment-thread__reply-input">
        <CommentInput />
      </div>

      <div v-if="comment.replies?.length" class="comment-thread__replies">
        <CommentThread
          v-for="reply in comment.replies"
          :key="reply.commentId"
          :comment="reply"
          :is-reply="true"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.comment-thread {
  display: flex;
  gap: 0.5rem;

  &--reply {
    margin-top: 0.75rem;
  }

  &__reply-indicator {
    flex-shrink: 0;
    padding-top: 0.25rem;
  }

  &__main {
    flex: 1;
    min-width: 0;
  }

  &__comment {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
  }

  &__content {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__author {
    font-size: 0.7rem;
  }

  &__text {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.5;
    color: var(--color-text-primary);
  }

  &__reply-input {
    margin-top: 0.75rem;
    margin-left: 2.5rem;
  }

  &__replies {
    margin-left: 0.5rem;
  }
}
</style>
