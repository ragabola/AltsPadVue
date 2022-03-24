<template>
  <footer>
    <UpBtn />
    <div class="container">
      <div class="row">
        <h1 class="logo">
          <a href="#"
            ><img :src="require('@/assets/images/logo.png')" alt="" /><span
              >Alts</span
            ><span>Pad</span></a
          >
        </h1>
        <p class="nabza">
          AltsPad is a decentralized multi-chain fundraising platform enabling
          projects to raise capital and promise safety to early stage investors.
          Stake TrustPad tokens to get priority-access to promising projects.
        </p>
        <div class="launch">
          <div class="socia">
            <a href="">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 576 512"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"
                ></path>
              </svg>
            </a>
            <a href=""><img :src="require('@/assets/images/twitter.svg')" /></a>
            <a href="">
              <img :src="require('@/assets/images/telegram.svg')" />
            </a>
            <a href="">
              <img
                :src="require('@/assets/images/icons8-medium-monogram.svg')"
              />
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 121.378 121.333"
                class="h-6 w-6"
              >
                <g
                  id="bscscan-logo-light-circle"
                  transform="translate(-219.378 -213.334)"
                >
                  <path
                    d="M244.6,271.1a5.144,5.144,0,0,1,5.168-5.143l8.568.028a5.151,5.151,0,0,1,5.151,5.151v32.4c.965-.286,2.2-.591,3.559-.911a4.292,4.292,0,0,0,3.309-4.177V258.261a5.152,5.152,0,0,1,5.151-5.152H284.1a5.152,5.152,0,0,1,5.151,5.152v37.3s2.15-.87,4.243-1.754a4.3,4.3,0,0,0,2.625-3.957V245.383a5.151,5.151,0,0,1,5.15-5.151h8.585A5.151,5.151,0,0,1,315,245.383V282c7.443-5.394,14.986-11.882,20.972-19.683a8.646,8.646,0,0,0,1.316-8.072,60.636,60.636,0,1,0-109.855,50.108,7.668,7.668,0,0,0,7.316,3.79c1.624-.143,3.646-.345,6.05-.627a4.29,4.29,0,0,0,3.805-4.258V271.1"
                    fill="#fff"
                  ></path>
                  <path
                    d="M244.417,323.061A60.656,60.656,0,0,0,340.756,274c0-1.4-.065-2.778-.158-4.152-22.163,33.055-63.085,48.508-96.181,53.213"
                    fill="#f0b90b"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
          <BtnComp
            link="#"
            id="btn-1"
            text="Apply As Project"
            style="background-color: var(--compl-2);font-size: 19px;"
          />
        </div>
      </div>
      <div class="cont">
        <div class="gr">
          <h4>General</h4>
          <a class="link" href="/#levels">Levels Staking</a
          ><a class="link" href="/pools">Apply For IDO</a
          ><a class="link" href="/farm">Farm</a><a class="link" href="/pools">Pool</a
          ><a class="link" href="#">Privcy Policy</a
          ><a class="link" href="#">Terms of use</a>
        </div>
        <div class="gr">
          <h4>Communities</h4>
          <a class="link" href="#">English</a
          ><a class="link" href="#">Russian</a
          ><a class="link" href="#">Chinese</a
          ><a class="link" href="#">Turkish</a
          ><a class="link" href="#">Korean</a>
        </div>
        <div class="gr">
          <h4>Help</h4>
          <a class="link" href="#">How to participate in IDO</a
          ><a class="link" href="/#faq">FAQ</a
          ><a class="link" href="/#about">About APAD redistribution fee</a>
        </div>
        <div class="gr">
          <h4>Token</h4>
          <a class="link" href="#">CoinGecko</a
          ><a class="link" href="#">CoinMarketCap</a
          ><a class="link" href="#">CryptoRank</a
          ><a class="link" href="#">PancakeSwap</a>
        </div>
        <div class="gr">
          <h4>Audits</h4>
          <a class="link" href="#"
            >Soon</a
          ><a class="link" href="#"
            >Soon</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import BtnComp from "@/components/BtnComp.vue";
import UpBtn from "@/components/UpBtn.vue";
export default {
  name: "FooterComp",
  components: {
    BtnComp,
    UpBtn
  },
};
</script>
