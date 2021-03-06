<template>
  <div v-if="organizations.length" class="grid grid-cols-3 gap-y-5">
    <HomeCards :organizations="organizations" />
    <div class="col-start-2 text-center bg-gray-200 cursor-pointer mb-5">
      <div v-if="hasSearched" @click.prevent="reRouteHome">Return</div>
      <div v-else @click.prevent="addMorePage">Add More</div>
    </div>
  </div>
  <div v-else-if="error">
    <div>{{ error }}</div>
  </div>
  <div v-else>
    <div>Loading...</div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import HomeCards from "../components/HomeCards";

export default {
  components: { HomeCards },
  setup() {
    const store = useStore();

    const organizations = computed(() => store.state.organizations);
    const error = computed(() => store.state.error);
    const hasSearched = computed(() => store.state.hasSearched);

    const addMorePage = () => {
      store.commit("setPerPage", 5);
      store.dispatch("getOrgs", store.state.perPage);
    };

    const reRouteHome = () => {
      store.commit("setHasSearched");
      store.dispatch("getOrgs", store.state.perPage);
    };

    return { organizations, error, hasSearched, reRouteHome, addMorePage };
  },
};
</script>
