import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}

export function searchMeal({ commit }, keyword) {
  axiosClient.get(`lookup.php?i=${keyword}`).then(({ data }) => {
    commit("setSearchedMeal", data.meals[0] || {});
  });
}

export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    // debugger;
    commit("setMealsByLetter", data.meals);
  });
}

export function searchMealsByIngredient({ commit }, ingredient) {
  axiosClient
    .get(`list.php?i=${"list"}`)
    // .get(`list.php?i=${ingredient}`)
    .then(({ data }) => {
      debugger;
      commit("setMealsByLetter", data.meals);
    });
}
