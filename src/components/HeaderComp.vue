<template>
  <header>
    <h1 class="logo">
      <router-link to="/"
        ><img :src="require('@/assets/images/logo.png')" alt="" /><span
          >Alts</span
        ><span>Pad</span></router-link
      >
    </h1>
    <ul :class="open == true ? 'active' : ''">
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/pools">Pools</router-link></li>
      <li><router-link to="/stack">Stack</router-link></li>
      <li><router-link to="/farm">Farm</router-link></li>
      <div style="display: flex">
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
            <font-awesome-icon
              :icon="['fas', 'fa-angle-down']"
              v-show="!active"
            />
            <font-awesome-icon :icon="['fas', 'fa-angle-up']" v-show="active" />
          </button>
          <div class="walletBtns" :class="active == true ? 'active' : ''">
            <a
              :class="active == true ? 'active' : ''"
              id="btn-1"
              style="background-color: #f6851b; width: 100%"
              a
              >Install MetaMask
              <img :src="require('@/assets/images/metamask.svg')"
            /></a>
            <a
              :class="active == true ? 'active' : ''"
              id="btn-1"
              style="background-color: #024d9c; width: 100%"
              a
              >Wallet Connect <img :src="require('@/assets/images/wallet.svg')"
            /></a>
            <a
              :class="active == true ? 'active' : ''"
              id="btn-1"
              style="background-color: #3274bb; width: 100%"
              a
              >Trust Wallet <img :src="require('@/assets/images/trustwallet.svg')"
            /></a>
          </div>
        </div>
      </div>
    </ul>
    <div id="nav-icon1" @click.prevent="menu($event)">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
</template>

<script>
import BtnComp from "@/components/BtnComp.vue";
export default {
  name: "HeaderComp",
  data() {
    return {
      active: false,
      open: false,
    };
  },
  components: {
    BtnComp,
  },
  methods: {
    toggle: function (event) {
      this.active = !this.active;
    },
    menu: function (event) {
      event.currentTarget.classList.toggle("open");
      this.open = !this.open;
    },
  },
};
</script>
