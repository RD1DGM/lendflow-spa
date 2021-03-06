<template>
  <div
    v-for="orgs in organizations"
    :key="orgs.id"
    class="grid grid-cols-6 grid-rows-3 col-start-2 bg-gray-200 mt-10 mb-10 rounded-md py-3 px-4"
  >
    <img
      :src="orgs.avatar_url"
      alt=""
      class="col-start-1 w-8/12 h-8/12 border-gray-400 border-2 rounded-full self-center"
    />
    <div v-if="orgs.message">
      {{ orgs.message }}
    </div>
    <div v-else class="text-blue-500 col-start-2 col-end-7 text-xl self-center">
      <router-link :to="`/org/${orgs.login}/details`">
        {{ orgs.login }}
      </router-link>
    </div>
    <div
      class="col-start-1 col-end-7 row-start-2 row-end-4 justify-self-center self-center text-gray-700"
    >
      {{ orgs.description || "No Description" }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["organizations"],
};
</script>
