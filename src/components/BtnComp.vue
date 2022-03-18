<template>
  <a :href="link" :id="id" :style="style">{{ text }}</a>
</template>

<script>
export default {
  name: "BtnComp",
  props: {
    text: String,
    style:String,
    link: String,
    id: String,
  },

};
</script>
