<template>
  <div class="s-question">
    <div :class="activeQ" @click="toggle($event)">
      <img class="farm-img" :src="image" alt="" />
      <div class="farm-data">
        <h2 class="farm-header">{{ farmHeader }}</h2>
        <p class="farm-sub-header">{{ farmSubHeader }}</p>
        <p class="desc">{{ farmDesc }}</p>
      </div>
      <div class="statics">
        <p>
          Staked <span>{{ staked }}</span>
        </p>
        <p>
          Earned <span>{{ earned }}</span>
        </p>
        <p>
          APR <span>{{ APR }}</span>
        </p>
        <p>
          LP Price <span>{{ LP }}</span>
        </p>
        <p>
          Total Locked <span>{{ total }}</span>
        </p>
      </div>
    </div>
    <div :class="activeA">
      <div class="middle">
        <div class="first">
          <h3>Deposit</h3>
          <label for="Balance">Balance:<span>0 TPAD</span></label>
          <input id="Balance" />
          <button disabled>Approve</button>
        </div>
        <div class="last">
          <h3>Deposit</h3>
          <label for="Staked">Deposited:<span>0 TPAD</span></label>
          <input id="Staked" />
          <button disabled>Approve</button>
        </div>
        <div class="last">
          <h3>Pending rewards</h3>
          <label>0.00 LTY</label>
          <button disabled>Approve</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FarmItem",
  data() {
    return {
      down: true,
      up: false,
    };
  },
  props: {
    activeQ: String,
    activeA: String,

    image: String,
    farmHeader: String,
    farmSubHeader: String,
    farmDesc: String,
    staked: String,
    earned: String,
    APR: String,
    LP: String,
    total: String,
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
