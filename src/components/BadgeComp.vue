<template>
  <span id="badge" :style="style">{{ text }}</span>
</template>

<script>
export default {
  name: "BadgeComp",
  props: {
    text: String,
    style:String,
  },
};
</script>