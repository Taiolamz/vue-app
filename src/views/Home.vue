<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient";

const meals = computed(() => store.state.meals);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
//   console.log(response, "respone");
  ingredients.value = response.data;
});
</script>

<template>
  <!-- <pre>{{ meals }}</pre> -->
  <div class="flex flex-col p-8 ">
    <div>
      <!-- <input
        type="text"
        placeholder="Search for meals"
        class="rounded border-2 border-gray-200 w-full"
      /> -->
    </div>
 
    <!-- <pre>{{ ingredients }}</pre> -->
  </div>
</template>
