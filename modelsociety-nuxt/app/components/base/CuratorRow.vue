<script setup lang="ts">
import type { MemberBrief } from '~/types'

defineProps<{
  curator: MemberBrief
  linkable?: boolean
}>()
</script>

<template>
  <div class="curator-row">
    <BaseAvatar
      :src="curator.avatarUrl"
      :name="curator.publicName"
      size="sm"
      variant="portrait"
    />
    <div class="curator-row__text">
      <span class="text-caption text-tertiary">Curated by</span>
      <NuxtLink
        v-if="linkable"
        :to="`/members/${curator.slug}`"
        class="curator-row__link link-primary"
      >
        {{ curator.publicName }}
      </NuxtLink>
      <span v-else class="text-caption text-secondary">{{ curator.publicName }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.curator-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &__text {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.25rem;
    line-height: 1;
  }

  &__link {
    font-size: 0.875rem;
  }
}
</style>
