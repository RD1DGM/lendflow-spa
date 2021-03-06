<template>
  <div class="grid grid-cols-3 grid-rows-6 h-screen">
    <div
      class="grid col-start-2 col-end-3 row-start-1 row-end-6 bg-gray-200 justify-self-center m-10 rounded-md p-5 justify-items-center ali text-gray-700"
    >
      <img
        :src="orgDetail.avatar_url"
        alt=""
        class="w-5/12 h-5/12 border-gray-400 border-4 rounded-full"
      />
      <div class="text-2xl">{{ orgDetail.name }}</div>
      <div class="text-lg">{{ orgDetail.company }}</div>
      <div class="text-lg text-blue-500">{{ orgDetail.html_url }}</div>
      <div class="text-center">{{ orgDetail.description }}</div>
    </div>
    "
    <router-link
      to="/"
      class="col-start-2 col-end-3 row-start-6 row-end-7 text-center text-gray-700 font-semibold"
      >Return to Home</router-link
    >
  </div>
</template>

<script>
export default {
  props: ["orgDetail"],
};
</script>
