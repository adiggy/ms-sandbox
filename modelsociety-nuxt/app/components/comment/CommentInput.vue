<script setup lang="ts">
import type { MemberBrief } from '~/types'

defineProps<{
  user?: MemberBrief | null
}>()

const comment = ref('')

function handleSubmit() {
  if (comment.value.trim()) {
    // TODO: Implement comment submission
    comment.value = ''
  }
}
</script>

<template>
  <div class="comment-input">
    <BaseAvatar
      :src="user?.avatarUrl ?? null"
      :name="user?.publicName ?? 'Guest'"
      size="sm"
    />
    <div class="comment-input__form">
      <textarea
        v-model="comment"
        placeholder="Your comment here"
        class="comment-input__textarea"
        rows="3"
      />
      <div class="comment-input__actions">
        <button class="btn btn--primary btn--small" @click="handleSubmit">
          <span class="btn__text">Post Comment</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.comment-input {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;

  &__form {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--color-border);
    border-radius: 4px;
    font-family: var(--font-sans);
    font-size: 0.875rem;
    resize: vertical;
    min-height: 4rem;
    background-color: var(--color-surface);
    color: var(--color-text-primary);

    &::placeholder {
      color: var(--color-text-tertiary);
    }

    &:focus {
      outline: none;
      border-color: var(--color-text-secondary);
    }
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
