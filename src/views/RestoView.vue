<script setup>
import { useRestoRepository } from "@/composables";
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

const repository = useRestoRepository();

const isLoading = ref(true);
const restos = ref([]);
const fetchRestos = async () => {
  isLoading.value = true;
  
  try {
    const { data } = await repository.index();
    restos.value = data;
  } catch (e) {
    console.error(e);
  }

  isLoading.value = false;
};
onMounted(() => fetchRestos());

const excerpt = (text, maxLenght = 10, indicator = "...") => {
  let textCopy = text;

  if (textCopy.length > maxLenght) {
    textCopy = textCopy.substring(0, maxLenght) + indicator;
  }

  return textCopy;
};
</script>

<template>
  <div class="min-h-screen container mx-auto">
    <div class="grid grid-cols-12 gap-4 py-4">
      <div v-for="resto in restos" :key="resto.id" class="col-span-4">
        <!-- Card -->
        <RouterLink
          :to="{ name: 'restos-show', params: { id: resto.id } }"
          class="block bg-white shadow p-4 rounded select-none"
        >
          <h1 class="text-lg font-bold capitalize">{{ resto.name }}</h1>
          <p class="text-gray-500">{{ excerpt(resto.description, 40) }}</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>