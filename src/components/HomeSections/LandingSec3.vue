<template>
  <section class="levels" id="levels">
    <div class="container">
      <p class="heading-1">
        VELS<span>LE</span
        ><img :src="require('@/assets/images/heading-img2.png')" alt="" />
      </p>
      <div class="launch">
        <h2>AltsPAD Levels</h2>
        <router-link
          to="/pools"
          id="btn-2"
          style="background-color: var(--compl-1)"
          >Launch App</router-link
        >
      </div>
      <main>
        <div class="cont">
          <div class="cards">
            <LevelsItem
              title="CHANCE"
              p1="Staking Requirements"
              price="3000"
              currency="TPAD"
              weight="Pool Weight"
              xweight="1x"
              lot="Allocation Type"
              xlot="Lottery (20%)"
            />

            <LevelsItem
              title="PROSPECT"
              p1="Staking Requirements"
              price="6000"
              currency="TPAD"
              weight="Pool Weight"
              xweight="5x"
              lot="Allocation Type"
              xlot="Lottery (40%)"
            />

            <LevelsItem
              title="AFFILIATE"
              p1="Staking Requirements"
              price="9099"
              currency="TPAD"
              weight="Pool Weight"
              xweight="8x"
              lot="Allocation Type"
              xlot="Lottery (60%)"
            />
          </div>
        </div>
        <div class="cont">
          <div class="cards">
            <LevelsItem
              title="ASSOCIATE"
              p1="Staking Requirements"
              price="20303"
              currency="TPAD"
              weight="Pool Weight"
              xweight="13x"
              lot="Allocation Type"
              xlot="Lottery (90%)"
            />
            <LevelsItem
              title="EXECUTIVE"
              p1="Staking Requirements"
              price="63443"
              currency="TPAD"
              weight="Pool Weight"
              xweight="23x"
              lot="Allocation Type"
              xlot="Lottery (100%)"
            />
          </div>
        </div>
      </main>
    </div>
  </section>
</template>
<script>
import LevelsItem from "@/components/HomeSections/LevelsItem/LevelsItem.vue";
import BtnComp from "@/components/BtnComp.vue";
export default {
  name: "LandingSec3",
  components: {
    LevelsItem,
    BtnComp
  },
};
</script>
