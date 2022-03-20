<template>
  <div id="bannercont">
    <p class="s-header">FEATURED</p>
    <div class="photobanner">
      <BannerItem
        v-for="pool in pools"
        v-bind:key="pool.id"
        :link="pool.id"
        :src="pool.image"
        :name="pool.name"
        :number="pool.xNumber"
      />
    </div>
  </div>
</template>
<script>
import BannerItem from "@/components/poolsSections/Banner/BannerItem.vue";
export default {
  name: "BannerComp",
  data() {
    return {
      pools: this.$store.state.pools,
    };
  },
  components: {
    BannerItem,
  },
};
</script>
