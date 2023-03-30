<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
import BaseCardTitle from "@/components/BaseCardTitle.vue";
import BaseCardBody from "@/components/BaseCardBody.vue";

defineProps({
  to: {
    type: Object,
    default: undefined,
  },
});
</script>

<template>
  <RouterLink
    v-if="to"
    :to="to"
    class="block bg-white shadow p-4 rounded select-none"
  >
    <BaseCardTitle v-if="!!$slots.title">
      <slot name="title" />
    </BaseCardTitle>

    <BaseCardBody>
      <slot />
    </BaseCardBody>
  </RouterLink>

  <div v-else class="block bg-white shadow p-4 rounded select-none">
    <BaseCardTitle v-if="!!$slots.title">
      <slot name="title" />
    </BaseCardTitle>

    <BaseCardBody>
      <slot />
    </BaseCardBody>
  </div>
</template>