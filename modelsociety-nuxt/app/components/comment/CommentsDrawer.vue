<script setup lang="ts">
import type { Comment, MemberBrief } from '~/types'

const modelValue = defineModel<boolean>({ default: false })

defineProps<{
  comments: Comment[]
  totalCount: number
  currentUser?: MemberBrief | null
  isLoggedIn?: boolean
}>()
</script>

<template>
  <v-bottom-sheet v-model="modelValue" max-width="100%">
    <v-card class="comments-drawer">
      <div class="comments-drawer__header">
        <span class="text-eyebrow">{{ totalCount }} Comments</span>
        <button class="btn btn--icon comments-drawer__close" @click="modelValue = false" aria-label="Close comments">
          <v-icon size="24">mdi-close</v-icon>
        </button>
      </div>

      <div class="comments-drawer__content">
        <CommentsSection
          :comments="comments"
          :total-count="totalCount"
          :current-user="currentUser"
          :is-logged-in="isLoggedIn"
        />
      </div>
    </v-card>
  </v-bottom-sheet>
</template>

<style scoped lang="scss">
.comments-drawer {
  background-color: var(--color-surface) !important;
  border-radius: 16px 16px 0 0 !important;
  max-height: 80vh;
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
    border-bottom: 1px solid var(--color-border);
    flex-shrink: 0;
  }

  &__close {
    width: 2.5rem;
    height: 2.5rem;
    background-color: transparent;
  }

  &__content {
    flex: 1;
    overflow-y: auto;
    padding: 1.25rem;
  }
}
</style>
