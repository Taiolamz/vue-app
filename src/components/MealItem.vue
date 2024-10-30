<script setup>
import YouTubeButton from "../components/YouTubeButton.vue";

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>

<template>
  <div class="bg-white shadow rounded-xl p-3">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        class="rounded-t-2xl h-48 w-full object-cover cursor-pointer"
        :src="meal.strMealThumb"
        alt=""
      />
    </router-link>
    <p class="p-3 mb-4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis aliquid
      quibusdam nisi optio. Quisquam qui, debitis officia, id iure sint amet
      pariatur delectus dolorum repellat a incidunt iste adipisci odit?
    </p>
    <!-- <h3 class="p-3 font-bold">{{ meal.strMeal }}</h3> -->
    <div class="flex items-center justify-between">
      <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
    </div>
  </div>
</template>
