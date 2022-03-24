<template>
  <section class="intro">
    <img
      class="overlay"
      :src="require('@/assets/images/landing-1.jpg')"
      alt=""
    />
    <img
      class="overlay-1"
      :src="require('@/assets/images/landing-2.svg')"
      alt=""
    />
    <img
      class="overlay-2"
      :src="require('@/assets/images/landing-2.svg')"
      alt=""
    />
    <img
      class="overlay-3"
      :src="require('@/assets/images/landing-2.svg')"
      alt=""
    />
    <img
      class="overlay-4"
      :src="require('@/assets/images/landing-3.svg')"
      alt=""
    />
    <img
      class="overlay-4"
      :src="require('@/assets/images/landing-5.svg')"
      alt=""
    />
    <div class="intro-text">
      <h3>safest launchpad. multi-chain.</h3>
      <h2>Launching hand-picked high-quality projects on the Blockchain.</h2>
      <p>Stake TrustPad tokens to get early-access to promising projects.</p>
      <div>
        <router-link
          to="/pools"
          id="btn-2"
          style="background-color: var(--compl-1)"
          >Launch App</router-link
        >

        <BtnComp
          link="#"
          id="btn-2"
          text="Announcements"
          style="background-color: var(--compl-1)"
        />

        <div class="extra">
          <BtnComp link="#" id="btn-1" text="Live Chart" />
          <BtnComp link="#" id="btn-1" text="Buy APad" />
        </div>
        <div class="extra-2">
          <p
            class="copy"
            @click="toggle($event)"
            :style="{ display: copy ? 'flex' : 'none' }"
          >
            {{ text }}
            <font-awesome-icon :icon="['fas', 'fa-copy']" />
          </p>
          <p class="copied" :style="{ display: copy ? 'none' : 'flex' }">
            Copied<font-awesome-icon :icon="['fas', 'fa-copy']" />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BtnComp from "@/components/BtnComp.vue";
export default {
  name: "LandingSec1",
  data() {
    return {
      copy: true,
      text: "0xADCFC6bf853a0a8ad7f9Ff4244140D10cf01363C",
    };
  },
  methods: {
    toggle: function (event) {
      this.copy = !this.copy;
      var inp = document.createElement("input");
      document.body.appendChild(inp);
      inp.value = this.text;
      inp.select();
      document.execCommand("copy", false);
      inp.remove();
    },
  },
  components: {
    BtnComp,
  },
};
</script>
