<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import store from "../store";
import YouTubeButton from "../components/YouTubeButton.vue";

// const meal = ref({});
const route = useRoute();

const meal = computed(() => store.state.searchedMeal);

function searchMeal() {
  store.dispatch("searchMeal", route.params.id);
}

onMounted(() => {
  searchMeal();
});
</script>

<template>
  <div class="max-w-[800px] m-auto p-8">
    <!-- <pre>{{ meal }}</pre> -->
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />

    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category: </strong> {{ meal.strCategory }}
      </div>
      <div><strong class="font-bold"> Area:</strong> {{ meal.strArea }}</div>
      <div><strong class="font-bold"> Tags:</strong>{{ meal.strTags }}</div>
    </div>

    <div class="my-3">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold-mb-3">Ingredients</h2>
        <ul>
          <template v-for="(el, idx) of new Array(20)">
            <li v-if="meal[`strIngredient${idx + 1}`]">
              {{ idx + 1 }} {{ meal[`strIngredient${idx + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold-mb-3">Measures</h2>
        <ul>
          <template v-for="(el, idx) of new Array(20)">
            <li v-if="meal[`strMeasure${idx + 1}`]">
              {{ idx + 1 }} {{ meal[`strMeasure${idx + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-4 flex justify-between">
        <YouTubeButton :href="meal.strYoutube">Go to YouTube</YouTubeButton>
        <a
          :href="meal.strSource"
          target="_blank"
          class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
        >
          View Original Source
        </a>
      </div>
    </div>
  </div>
</template>
