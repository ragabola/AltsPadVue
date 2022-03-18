<template>
  <footer>
    <div class="container">
      <div class="gr">
        <h4>General</h4>
        <a class="link" href="#">Levels Staking</a
        ><a class="link" href="#">CoinMarketCap</a
        ><a class="link" href="#">Farm</a><a class="link" href="#">Pool</a
        ><a class="link" href="#">Stack</a>
      </div>
      <div class="gr">
        <h4>Communities</h4>
        <a class="link" href="#">English</a><a class="link" href="#">Russian</a
        ><a class="link" href="#">Chinese</a><a class="link" href="#">Turkish</a
        ><a class="link" href="#">Korean</a>
      </div>
      <div class="gr">
        <h1 class="logo">
          <a href="#"
            ><img :src="require('@/assets/images/logo.png')" alt="" /><span>Alts</span
            ><span>Pad</span></a
          >
        </h1>
        <p class="nabza">
          AltsPad is a decentralized multi-chain fundraising platform enabling
          projects to raise capital and promise safety to early stage investors.
          Stake TrustPad tokens to get priority-access to promising projects.
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default{
    name: "FooterComp",
}
</script>