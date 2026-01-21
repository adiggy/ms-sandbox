<script setup lang="ts">
import type { Comment, MemberBrief } from '~/types'

defineProps<{
  comments: Comment[]
  totalCount: number
  currentUser?: MemberBrief | null
  isLoggedIn?: boolean
}>()
</script>

<template>
  <div class="comments-section">
    <div v-if="!isLoggedIn" class="comments-section__login-prompt">
      <p class="comments-section__login-text">
        <em>You must be logged in to see and post comments.</em>
      </p>
      <div class="comments-section__login-actions">
        <NuxtLink to="/login" class="btn btn--tertiary btn--small">
          <span class="btn__text">Login</span>
        </NuxtLink>
        <span class="text-eyebrow comments-section__or">or</span>
        <NuxtLink to="/join" class="btn btn--primary btn--small">
          <span class="btn__text">Join</span>
        </NuxtLink>
      </div>
    </div>

    <CommentInput v-if="isLoggedIn" :user="currentUser" />

    <div class="comments-section__header">
      <span class="icon-box">
        <v-icon size="16">mdi-comment</v-icon>
      </span>
      <span class="text-eyebrow">{{ totalCount }} comments</span>
    </div>

    <div class="comments-section__threads">
      <CommentThread
        v-for="comment in comments"
        :key="comment.commentId"
        :comment="comment"
      />
    </div>

    <button v-if="comments.length < totalCount" class="btn btn--tertiary btn--small">
      <span class="btn__text">Load More</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.comments-section {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  &__login-prompt {
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__login-text {
    margin: 0;
    font-size: 0.875rem;
    color: var(--color-text-secondary);
  }

  &__login-actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  &__or {
    font-size: 0.65rem;
    color: var(--color-text-tertiary);
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__threads {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
}
</style>
