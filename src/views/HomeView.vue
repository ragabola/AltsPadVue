<template>
  <div class="home">
      <LandingSec1 />
      <LandingSec2 />
      <LandingSec3 />
      <LandingSec4 />
  </div>
</template>

<script>
// @ is an alias to /src
import LandingSec1 from "@/components/HomeSections/LandingSec1.vue";
import LandingSec2 from "@/components/HomeSections/LandingSec2.vue";
import LandingSec3 from "@/components/HomeSections/LandingSec3.vue";
import LandingSec4 from "@/components/HomeSections/LandingSec4.vue";

export default {
  name: "HomeView",
  components: {
    LandingSec1,
    LandingSec2,
    LandingSec3,
    LandingSec4,
  },
};
</script>
