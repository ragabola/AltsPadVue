<template>
  <div class="farm">
    <div class="container">
      <h2>Farm</h2>
      <div class="flex-farm">
        <FarmItem
          :image="require('@/assets/images/pools/profile-img1.png')"
          farmHeader="Ledgity LP Staking"
          farmSubHeader="NFTPAD/NFTPAD"
          farmDesc="Pool is deprecated, please withdraw the funds and stake in the other one."
          staked="0 TPAD"
          earned="0.00 TPAD"
          APR="0"
          LP="$0.0567"
          total="$0"
          activeQ="q"
          activeA="a"
        />
        <FarmItem
          :image="require('@/assets/images/pools/deadknight.1951af75.jpg')"
          farmHeader="IDO Staking"
          farmSubHeader="TPAD / TPAD"
          farmDesc="Pool is deprecated, please withdraw the funds and stake in the other one."
          staked="0 TPAD"
          earned="0.00 TPAD"
          APR="0"
          LP="$0.0567"
          total="$0"
          activeQ="q"
          activeA="a"
        />
        <FarmItem
          :image="require('@/assets/images/pools/riox.4a340dcf.png')"
          farmHeader="NFTPad IDO Staking"
          farmSubHeader="NFTPAD/NFTPAD"
          farmDesc="Pool is deprecated, please withdraw the funds and stake in the other one."
          staked="0 TPAD"
          earned="0.00 TPAD"
          APR="0"
          LP="$0.0567"
          total="$0"
          activeQ="q"
          activeA="a"
        />
        <FarmItem
          :image="require('@/assets/images/pools/nestarcade.533035d4.jpg')"
          farmHeader="Ledgity LP Staking"
          farmSubHeader="NFTPAD/NFTPAD"
          farmDesc="Pool is deprecated, please withdraw the funds and stake in the other one."
          staked="0 TPAD"
          earned="0.00 TPAD"
          APR="0"
          LP="$0.0567"
          total="$0"
          activeQ="q"
          activeA="a"
        />
      </div>
    </div>
  </div>
</template>
<script>
import FarmItem from "@/components/FarmSections/FarmItem.vue";

export default {
  name: "FarmView",
  components: {
    FarmItem,
  },
};
</script>
