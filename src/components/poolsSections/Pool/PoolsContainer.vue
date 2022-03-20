<template>
  <div class="container">
    <div class="head">
      <div class="btns">
        <a class="active" href="" id="btn-1" @click.prevent="toggleUP($event)"
          >UpComing [{{ poolsOpenedCount }}]</a
        >
        <a href="" id="btn-1" @click.prevent="toggleEn($event)"
          >Ended [{{ poolsEndedCount }}]</a
        >
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'fa-search']" />
        <input class="search" placeholder="Search Pools" />
      </div>
    </div>
    <div class="body">
      <div class="upcomning" v-show="upcoming">
        <div class="flex-pool">
          <PoolItem
            v-for="pool in pools"
            v-bind:key="pool.id"
            v-show="pool.poolEnded == false"
            :PoolID="pool.id"
            :Pname="pool.name"
            :Pusername="pool.username"
            :Imagesrc="pool.image"
            :Showfire="pool.showfire"
            :Showspecial="pool.showspecial"
            :TwitterSrc="pool.twitter"
            :TelegramSrc="pool.telegram"
            :MediumSrc="pool.medium"
            :WebsiteSrc="pool.website"
            :WhitePaperSrc="pool.whitepaper"
            :register="pool.registerBadge"
            :listed="pool.listedBadge"
            :private="pool.privateBadge"
            :upcoming="pool.upcomingBadge"
            :endedBadge="pool.endedBadge"
            :Pdesc="pool.poolDesc"
            :Praise="pool.raise"
            :Pstartstime="pool.startTime"
            :Pprice="pool.poolPrice"
            :ended="pool.poolEnded"
            :TimeOPenOrClose="pool.TimeOPenOrClose"
            :TimePercentage="pool.TimeOPenOrClosePercentage"
            :PoolBUSD="pool.BUSD"
            :ProgressTotal="pool.ProgressTotal"
            :ProgressDone="pool.ProgressDone"
            :ListingTime="pool.ListingTime"
            :xPrice="pool.xPrice"
          />
        </div>
      </div>
      <div class="Ended" v-show="ended">
        <div class="flex-pool">
          <PoolItem
            v-for="pool in pools"
            v-bind:key="pool.id"
            v-show="pool.poolEnded == true"
            :PoolID="pool.id"
            :Pname="pool.name"
            :Pusername="pool.username"
            :Imagesrc="pool.image"
            :Showfire="pool.showfire"
            :Showspecial="pool.showspecial"
            :TwitterSrc="pool.twitter"
            :TelegramSrc="pool.telegram"
            :MediumSrc="pool.medium"
            :WebsiteSrc="pool.website"
            :WhitePaperSrc="pool.whitepaper"
            :register="pool.registerBadge"
            :listed="pool.listedBadge"
            :private="pool.privateBadge"
            :upcoming="pool.upcomingBadge"
            :endedBadge="pool.endedBadge"
            :Pdesc="pool.poolDesc"
            :Praise="pool.raise"
            :Pstartstime="pool.startTime"
            :Pprice="pool.poolPrice"
            :ended="pool.poolEnded"
            :TimeOPenOrClose="pool.TimeOPenOrClose"
            :TimePercentage="pool.TimeOPenOrClosePercentage"
            :PoolBUSD="pool.BUSD"
            :ProgressTotal="pool.ProgressTotal"
            :ProgressDone="pool.ProgressDone"
            :ListingTime="pool.ListingTime"
            :xPrice="pool.xPrice"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BtnComp from "@/components/BtnComp.vue";
import BadgeComp from "@/components/BadgeComp.vue";
import PoolItem from "@/components/poolsSections/Pool/PoolItem.vue";
export default {
  name: "PoolsContainer",
  data() {
    return {
      upcoming: true,
      ended: false,
      pools: this.$store.state.pools,
      poolsEndedCount: this.$store.getters.poolsEndedCount,
      poolsOpenedCount: this.$store.getters.poolsOpenedCount,
    };
  },
  components: {
    BtnComp,
    BadgeComp,
    PoolItem,
  },
  methods: {
    toggleUP: function (event) {
      event.target.classList.add("active");
      event.target.nextElementSibling.classList.remove("active");
      this.upcoming = true;
      this.ended = false;
    },
    toggleEn: function (event) {
      event.target.classList.add("active");
      event.target.previousElementSibling.classList.remove("active");
      this.ended = true;
      this.upcoming = false;
    },
  },
};
</script>
