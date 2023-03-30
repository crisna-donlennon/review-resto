<script setup>
import { useRestoRepository } from "@/composables";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import BaseCard from "@/components/BaseCard.vue";
import BaseContainer from "../components/BaseContainer.vue";

const repository = useRestoRepository();
const route = useRoute();

const isLoading = ref(true);
const detail = ref({});
const fetchDetail = async () => {
  isLoading.value = true;

  try {
    const id = route.params.id;
    const { data } = await repository.show(id);
    detail.value = data;
  } catch (e) {
    console.log(e);
  }

  isLoading.value = false;
};
onMounted(() => fetchDetail());
</script>

<template>
  <BaseContainer>
    <RouterLink
      :to="{ name: 'restos' }"
      class="inline-block p-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-800"
    >
      Back
    </RouterLink>
    <BaseCard class="mt-4">
      <template #title>{{ detail.name }}</template>
    </BaseCard>
    <BaseCard class="mt-4">{{ detail.description }}</BaseCard>
  </BaseContainer>
</template>