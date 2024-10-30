<script setup>
import store from "../store";
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";
import { onMounted, watch } from "vue";
import MealItem from "../components/MealItem.vue";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);
const route = useRoute();
// const letter = ;

watch(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
<template>
  <div class="flex justify-center gap-2 mt-2">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      to="/"
      v-for="letter of letters"
    >
      {{ letter }}
    </router-link>
  </div>
  <!-- <pre>{{ meals }}</pre> -->
  <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
</template>
