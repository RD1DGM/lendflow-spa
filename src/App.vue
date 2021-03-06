<template>
  <div class="grid grid-cols-4 grid-rows-5 bg-gray-700 min-w-full h-12 gap-x-3">
    <input
      type="text"
      v-model="searchInput"
      placeholder="Search for Organization..."
      class="col-start-2 col-end-3 row-start-2 row-end-4 h-6 rounded-sm px-2"
    />
    <input
      type="button"
      value="Search"
      @click.prevent="getOrg"
      class="col-start-3 col-end-4 row-start-2 row-end-4 h-6 rounded-sm"
    />
  </div>
  <router-view />
</template>

<script>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const searchInput = ref("");

    onMounted(() => store.dispatch("getOrgs", store.state.perPage));

    const getOrg = () => {
      store.dispatch("getOrg", searchInput.value);
      searchInput.value = "";
      store.commit("setHasSearched");
    };

    return { searchInput, getOrg };
  },
};
</script>
<style src="./assets/tailwind.css"></style>
