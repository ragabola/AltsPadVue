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
      <li>
        <router-link to="/calendar">
          <font-awesome-icon :icon="['fas', 'fa-calendar']" />
        </router-link>
      </li>

      <BtnComp link="#" id="btn-1" text="Buy APad" style="background-color: var(--compl-2)" />

      <BtnComp link="#" id="btn-1" text="Wallet Connect" style="background-color: var(--compl-2)" />

    </ul>
  </header>
</template>

<script>
import BtnComp from "@/components/BtnComp.vue";
export default {
  name: "HeaderComp",
  components: {
    BtnComp,
  },
};
</script>
