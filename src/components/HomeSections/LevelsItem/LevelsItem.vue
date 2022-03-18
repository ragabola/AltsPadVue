<template>
  <div class="card">
    <h4>{{ title }}</h4>
    <div class="price">
      <p>{{ p1 }}</p>
      <p>{{ price }}<span>{{ currency }}</span></p>
    </div>
    <div class="row">
      <div class="weight">
        <p>{{ weight }}</p>
        <p>{{ xweight }}</p>
      </div>
      <div class="lot">
        <p>{{ lot }}</p>
        <p>{{ xlot }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LevelsItem",
  props: {
    title: String,
    p1: String,
    price: String,
    currency: String,
    weight : String,
    xweight : String,
    lot : String,
    xlot : String,
  },
};
</script>