<template>
  <div class="pools">
    <section>
        <BannerComp />
        <PoolsContainer />
    </section>
  </div>
</template>
<script>
import BannerComp from "@/components/poolsSections/Banner/BannerComp.vue";
import PoolsContainer from "@/components/poolsSections/Pool/PoolsContainer.vue";
export default {
  name: "PoolsView",
  components: {
    BannerComp,
    PoolsContainer,
  },
};
</script>