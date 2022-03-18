<template>
  <div id="app">
    <HeaderComp />
    <router-view />
    <FooterComp />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from "@/components/HeaderComp.vue";
import FooterComp from "@/components/FooterComp.vue";
export default {
  components: {
    HeaderComp,
    FooterComp,
  },
};

</script>