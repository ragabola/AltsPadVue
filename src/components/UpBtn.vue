<template>
  <span @click="moveUp" id="up-btn" v-show="windowTop"
    ><font-awesome-icon :icon="['fas', 'fa-angle-up']"
  /></span>
</template>

<script>
export default {
  name: "UpBtn",
  data() {
    return {
      windowTop: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    moveUp() {
      this.$store.commit("moveUp");
    },
    onScroll(e) {
      window.top.scrollY;
      if (window.top.scrollY > 600) {
        this.windowTop = true;
      }else{
          this.windowTop = false;
      }
    },
  },
};
</script>
<style scoped>
span {
  position: fixed;
  bottom: 25px;
  right: 25px;
  font-size: 35px;
  color: var(--compl-2);
  background-color: var(--dominant-bmode-color);
  padding: 0 10px;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0px 0px 10px var(--compl-2);
}
</style>
