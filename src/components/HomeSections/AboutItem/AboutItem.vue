<template>
    <div class="item">
        <img :src="src" alt="" />
        <p>
            {{ paragraph }}
        </p>
    </div>
</template>

<script>
export default {
  name: "AboutItem",
  props: {
    src: String,
    paragraph: String,
  },
};
</script>