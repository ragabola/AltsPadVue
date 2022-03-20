<template>
  <router-link class="item" to="farm" tag="div">
    <img :src="src" alt="" />
    <div class="text">
      <p>{{ name }}</p>
      <p>{{ number }}</p>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "BannerItem",
  props: {
    src: String,
    number: String,
    name: String,
    link: String,
  },
};
</script>