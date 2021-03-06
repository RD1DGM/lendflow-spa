<template>
  <DetailCard :orgDetail="orgDetail" />
</template>

<script>
import { computed, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import DetailCard from "../components/DetailCard";

export default {
  components: { DetailCard },
  setup() {
    const route = useRoute();
    const store = useStore();

    onBeforeMount(() => store.dispatch("getOrgDetail", route.params.login));

    const orgDetail = computed(() => store.state.orgDetail);

    return { orgDetail };
  },
};
</script>
