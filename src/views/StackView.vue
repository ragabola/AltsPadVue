<template>
  <div class="stack">
    <div class="container">
      <h2>Stack</h2>
      <div class="upper">
        <h3>Stake for IDO Participation</h3>
        <StackItem
          activeQ="q active"
          activeA="a active"
          question="IDO Participation for 7 Days."
          answerOne="7 Days."
          answerTwo="Yes, for 7 Days."
          answerThree="Unlocked"
          apy="0%"
          :icon="require('@/assets/images/item-5.svg')"
        />
        <StackItem
          activeQ="q"
          activeA="a"
          question="IDO Participation for 14 Days."
          answerOne="14 Days."
          answerTwo="Yes, for 14 Days."
          answerThree="Unlocked"
          apy="2%"
          :icon="require('@/assets/images/item-1.svg')"
        />
        <StackItem
          activeQ="q"
          activeA="a"
          question="IDO Participation for 30 Days."
          answerOne="30 Days."
          answerTwo="Yes, for 21 Days. if left less than that"
          answerThree="Unlocked"
          apy="3.5%"
          :icon="require('@/assets/images/item-2.svg')"
        />
        <StackItem
          activeQ="q"
          activeA="a"
          question="IDO Participation for 60 Days."
          answerOne="60 Days."
          answerTwo="Yes, for 21 Days. if left less than that"
          answerThree="Unlocked"
          apy="8.4%"
          :icon="require('@/assets/images/item-3.svg')"
        />
        <StackItem
          activeQ="q"
          activeA="a"
          question="IDO Participation for 90 Days."
          answerOne="90 Days."
          answerTwo="No (only once unlocked)"
          answerThree="Unlocked"
          apy="12.6%"
          :icon="require('@/assets/images/item-4.svg')"
        />
        <StackItem
          activeQ="q"
          activeA="a"
          question="IDO Participation for 180 Days."
          answerOne="180 Days."
          answerTwo="No (only once unlocked)"
          answerThree="Unlocked"
          apy="21%"
          :icon="require('@/assets/images/item-6.svg')"
        />
      </div>
      <div class="middle">
        <div class="first">
          <label for="Balance">Balance:<span>0 TPAD</span></label>
          <input id="Balance" />
          <button disabled>Approve</button>
        </div>
        <div class="last">
          <label for="Staked">Staked:<span>0 TPAD</span></label>
          <input id="Staked" />
          <button disabled>Approve</button>
        </div>
      </div>
      <div class="bottom">
        <div class="head">
          <div class="btns">
            <a
              class="active"
              href=""
              id="btn-1"
              @click.prevent="toggleLevels($event)"
              >Levels</a
            >
            <a href="" id="btn-1" @click.prevent="togglesStates($event)"
              >States</a
            >
          </div>
        </div>
        <div class="body">
          <div class="levels" v-show="levels">
            <h3>APAD Levels</h3>
            <p>
              To be eligible for any of the tiers you are required to stake the
              following ..
            </p>
            <div>
              <StackLevelItem count="1000" x="chance [1x] (20% lottery)" />
              <StackLevelItem count="6000" x="prospect [2x] (30% lottery)" />
              <StackLevelItem count="10000" x="affiliate [2x] (50% lottery)" />
              <StackLevelItem count="45000" x="associate [6x]" />
              <StackLevelItem count="150000" x="partner [22x]" />
              <StackLevelItem count="185000" x="orbit [28x]" />
              <StackLevelItem count="250000" x="black [38x]" />
            </div>
          </div>
          <div class="states" v-show="states">
            <h3>APAD States</h3>
            <span>
              To be eligible for any of the tiers you are required to stake the
              following ..
            </span>
            <StackStateItem :days="7" :TVL="835618" :Part="624" />
            <StackStateItem :days="14" :TVL="1290314" :Part="427" />
            <StackStateItem :days="60" :TVL="2570889" :Part="527" />
            <StackStateItem :days="90" :TVL="7687125" :Part="1804" />
            <StackStateItem :days="180" :TVL="15628820" :Part="1333" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StackItem from "@/components/StackItem/StackItem.vue";
import StackLevelItem from "@/components/StackItem/StackLevelItem.vue";
import StackStateItem from "@/components/StackItem/StackStateItem.vue";
export default {
  name: "StackView",
  data() {
    return {
      levels: true,
      states: false,
    };
  },
  methods: {
    toggleLevels: function (event) {
      event.target.classList.add("active");
      event.target.nextElementSibling.classList.remove("active");
      this.levels = true;
      this.states = false;
    },
    togglesStates: function (event) {
      event.target.classList.add("active");
      event.target.previousElementSibling.classList.remove("active");
      this.levels = false;
      this.states = true;
    },
  },
  components: {
    StackItem,
    StackLevelItem,
    StackStateItem,
  },
};
</script>
