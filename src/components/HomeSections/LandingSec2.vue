<template>
  <section class="about" id="about">
    <div class="container">
      <p class="heading-1">
        OUT<span>AB</span>
        <img :src="require('@/assets/images/heading-img.png')" alt="" />
      </p>
      <h2>
        Fair and Transparent Rug-Proof Mechanisms Guaranteed Allocations
        High-Quality Projects
      </h2>

      <main>
        <AboutItem
          :src="require('@/assets/images/item-1.svg')"
          paragraph="This integration allows projects to launch their IDO/IGO simultaneously on both Solana and BNB Chain for example."
        />

        <AboutItem
          :src="require('@/assets/images/item-2.svg')"
          paragraph="AltsPad is a decentralized multi-chain fundraising platform enablin projects to raise capital and promise safety to early stage investors"
        />

        <AboutItem
          :src="require('@/assets/images/item-3.svg')"
          paragraph="Participants/Citizens from the following countries are strictly excluded/not allowed to participate in the IDOs: Bolivia, Cambodia, Iran, Iraq, Libya, Nepal, Zimbabwe,"
        />

        <AboutItem
          :src="require('@/assets/images/item-4.svg')"
          paragraph="Participants/Citizens from the following countries are strictly excluded/not allowed to participate in the IDOs: Bolivia, Cambodia, Iran, Iraq, Libya, Nepal, Zimbabwe,"
        />

        <AboutItem
          :src="require('@/assets/images/item-5.svg')"
          paragraph="AltsPad is a decentralized multi-chain fundraising platform enablin projects to raise capital and promise safety to early stage investors"
        />

        <AboutItem
          :src="require('@/assets/images/item-6.svg')"
          paragraph="This integration allows projects to launch their IDO/IGO simultaneously on both Solana and BNB Chain for example."
        />
      </main>
    </div>
  </section>
</template>
<script>
import AboutItem from "@/components/HomeSections/AboutItem/AboutItem.vue";
export default {
  name: "LandingSec2",
  components: {
    AboutItem,
  },
};
</script>
