<template>
  <p>
    <span
      >Pool:<span class="sp">{{ days }} Days.</span></span
    ><span
      >TVL:<span class="sp">{{ TVL }}$</span></span
    ><span
      >Participants:<span class="sp">{{ Part }}</span></span
    >
  </p>
</template>
<script>
export default {
  name: "StackStateItem",
  props: {
    days: Number,
    TVL: Number,
    Part: Number,
  },
};
</script>
