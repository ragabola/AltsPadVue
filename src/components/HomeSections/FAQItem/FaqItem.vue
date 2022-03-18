<template>
  <div class="s-question">
    <div :class="activeQ" @click="toggle($event)">
      <font-awesome-icon :icon = '["fas","fa-angle-down"]' v-show="down" />
      <font-awesome-icon :icon = '["fas","fa-angle-up"]' v-show="up" />
      {{ question }}
    </div>
    <div :class="activeA">
      {{ answer }}
    </div>
  </div>
</template>
<script>
export default {
  name: "FaqItem",
  data() {
    return {
      down: true,
      up : false,
    };
  },
  props: {
    question: String,
    answer: String,
    activeQ: String,
    activeA: String,
  },
  methods: {
    toggle: function (event) {
      event.target.classList.toggle("active");
      event.target.nextElementSibling.classList.toggle("active");
      this.up = !this.up;
      this.down = !this.down;
    },
  },
};
</script>
