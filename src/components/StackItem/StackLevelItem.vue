<template>
    <p>{{ count }}APAD<span>for</span>{{ x }}</p>
</template>
<script>
export default {
  name: "StackLevelItem",
  props: {
    count: String,
    x: String,
  },
};
</script>