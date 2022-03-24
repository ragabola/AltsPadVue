<template>
  <header>
    <h1 class="logo">
      <router-link to="/"
        ><img :src="require('@/assets/images/logo.png')" alt="" /><span
          >Alts</span
        ><span>Pad</span></router-link
      >
    </h1>
    <ul>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/pools">Pools</router-link></li>
      <li><router-link to="/stack">Stack</router-link></li>
      <li><router-link to="/farm">Farm</router-link></li>
      <BtnComp
        id="btn-1"
        text="Apply As Project"
        style="background-color: var(--compl-2)"
      />
      <div class="wallet">
        <button
          @click.prevent="toggle($event)"
          id="btn-1"
          style="
            background-color: var(--compl-2);
            font-weight: bold;
            color: var(--dominant-wmode-color);
          "
        >
          Wallet Connect
          <font-awesome-icon :icon = '["fas","fa-angle-down"]' v-show="!active" />
          <font-awesome-icon :icon = '["fas","fa-angle-up"]' v-show="active" />
        </button>
        <div class="walletBtns" :class="active == true ? 'active' : ''">
          <BtnComp
            :class="active == true ? 'active' : ''"
            link="#"
            id="btn-1"
            text="Install MetaMask"
            style="background-color: var(--compl-2)"
          />
          <BtnComp
            :class="active == true ? 'active' : ''"
            link="#"
            id="btn-1"
            text="Wallet Connect"
            style="background-color: var(--compl-2)"
          />
          <BtnComp
            :class="active == true ? 'active' : ''"
            link="#"
            id="btn-1"
            text="Alts Wallet"
            style="background-color: var(--compl-2)"
          />
        </div>
      </div>
    </ul>
  </header>
</template>

<script>
import BtnComp from "@/components/BtnComp.vue";
export default {
  name: "HeaderComp",
  data() {
    return {
      active: false,
    };
  },
  components: {
    BtnComp,
  },
  methods: {
    toggle: function (event) {
      this.active = !this.active;
    },
  },
};
</script>
