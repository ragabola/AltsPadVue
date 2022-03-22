<template>
  <div class="s-question">
    <div :class="activeQ" @click="toggle($event)">
      <img :src="icon" alt="" />
      {{ question }}
    </div>
    <div :class="activeA">
      <div class="para">
        <p>Lock period:<span>{{ answerOne }}</span></p>
        <p>Extends lock on registration:<span>{{ answerTwo }}</span></p>
        <p>Status:<span>{{ answerThree }}</span></p>
      </div>
      <span class="apy">{{ apy }}<span>APY</span></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "StackItem",
  data() {
    return {
      down: true,
      up : false,
    };
  },
  props: {
    question: String,
    answerOne: String,
    answerTwo: String,
    answerThree: String,
    icon: String,
    apy: String,
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