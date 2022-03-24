<template>
  <div class="single-pool">
    <div class="container">
      <div class="info">
        <div class="left">
          <div class="img-name">
            <img :src="target.image" class="pool-img" />
            <div class="name-social">
              <h3 class="name">{{ target.name }}</h3>
              <p class="social">
                <a :href="target.twitter" class="twitter" target="__blank">
                  <img
                    :src="require('@/assets/images/twitter.svg')"
                    class="profile-img"
                  />
                </a>
                <a :href="target.telegram" class="telegram" target="__blank">
                  <img
                    :src="require('@/assets/images/telegram.svg')"
                    class="profile-img"
                  />
                </a>
                <a :href="target.medium" target="__blank">
                  <img
                    :src="require('@/assets/images/icons8-medium-monogram.svg')"
                    class="profile-img"
                  />
                </a>
                <a :href="target.website" target="__blank">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 496 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                    ></path>
                  </svg>
                </a>
                <a :href="target.whitepaper" target="__blank">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 384 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm57.1 120H305c7.7 0 13.4 7.1 11.7 14.7l-38 168c-1.2 5.5-6.1 9.3-11.7 9.3h-38c-5.5 0-10.3-3.8-11.6-9.1-25.8-103.5-20.8-81.2-25.6-110.5h-.5c-1.1 14.3-2.4 17.4-25.6 110.5-1.3 5.3-6.1 9.1-11.6 9.1H117c-5.6 0-10.5-3.9-11.7-9.4l-37.8-168c-1.7-7.5 4-14.6 11.7-14.6h24.5c5.7 0 10.7 4 11.8 9.7 15.6 78 20.1 109.5 21 122.2 1.6-10.2 7.3-32.7 29.4-122.7 1.3-5.4 6.1-9.1 11.7-9.1h29.1c5.6 0 10.4 3.8 11.7 9.2 24 100.4 28.8 124 29.6 129.4-.2-11.2-2.6-17.8 21.6-129.2 1-5.6 5.9-9.5 11.5-9.5zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
                    ></path>
                  </svg>
                </a>
              </p>
              <p>{{ target.subtitle }}</p>
            </div>
          </div>
          <p class="signs">
            <BadgeComp
              text="REGISTER"
              style="background-color: #004229; color: var(--compl-1)"
              v-show="target.registerBadge"
            />
            <BadgeComp
              text="LISTED"
              style="background-color: #004229; color: var(--compl-1)"
              v-show="target.listedBadge"
            />
            <BadgeComp
              text="PRIVATE"
              style="background-color: #2f2f46; color: white"
              v-show="target.privateBadge"
            />
            <BadgeComp
              text="ENDED"
              style="background-color: #2f2f46; color: white"
              v-show="target.endedBadge"
            />
            <BadgeComp
              text="FILLED"
              style="background-color: #2f2f46; color: white"
              v-show="target.filledBadge"
            />
            <BadgeComp
              text="UPCOMING"
              style="background-color: #2f2f46; color: white"
              v-show="target.upcomingBadge"
            />
          </p>
          <p class="desc">
            {{ target.poolDesc }}
          </p>
          <p class="ido">IDO and distribution on BNB Chain</p>
          <p class="sale">
            Sale Time <span>{{ target.SaleTime }}</span>
          </p>
          <p class="FCFS">
            FCFS Time<span>{{ target.FCFSTime }}</span>
          </p>
          <div class="currency">
            <span>1 BUSD = 50 ADR</span>
            <span>1 ADR = 0.02 BUSD</span>
          </div>
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
              <font-awesome-icon
                :icon="['fas', 'fa-angle-up']"
                v-show="active"
              />
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
                >Wallet Connect
                <img :src="require('@/assets/images/wallet.svg')"
              /></a>
              <a
                :class="active == true ? 'active' : ''"
                id="btn-1"
                style="background-color: #3274bb; width: 100%"
                a
                >Trust Wallet
                <img :src="require('@/assets/images/trustwallet.svg')"
              /></a>
            </div>
          </div>
        </div>
        <div class="right">
          <h4>Pool Progress</h4>
          <div class="progress">
            <div class="main">
              <span :style="{ width: calc() }"></span>
            </div>
            <div class="sub">
              <div class="BUSD">
                <span>233</span>
                <span>BUSD</span>
              </div>
              <div class="BUSD">
                <span>1000/2000</span>
                <span>WZRD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pool-tabs">
        <div class="head">
          <div class="btns">
            <a
              class="active"
              href=""
              id="btn-1"
              @click.prevent="toggleDetails($event)"
              >Pool Information</a
            >
            <a href="" id="btn-1" @click.prevent="toggleSchedule($event)"
              >Schedule</a
            >
            <a href="" id="btn-1" @click.prevent="toggleAllocation($event)"
              >Your Allocation</a
            >
          </div>
        </div>
        <div class="body">
          <div class="pool-details" v-show="poolDetails">
            <div class="item">
              <h3>Details</h3>
              <p class="access">Access Type: <span>Levels</span></p>
              <p class="cap">Hard Cap: <span>$190 000</span></p>
              <p class="swap">Swap Rate: <span>1 PRIDE = $0.1</span></p>
              <p class="start">Start: <span>23 Mar, 11:00 am</span></p>
              <p class="end">End: <span>16:00 pm UTC</span></p>
              <p class="register">
                Registration: <span>Mar 21, 11:00 UTC–Mar 23, 08:00 UTC</span>
              </p>
              <p class="FCFSOpen">
                FCFS Opens: <span>Mar 23, 15:40 UTC UTC</span>
              </p>
              <p class="BaseAllocation:">
                Base Allocation: <span>1x = $28.98 (approx)</span>
              </p>
            </div>
            <div class="item">
              <h3>Token</h3>
              <p class="token">Token: <span>Nomad Exiles (PRIDE)</span></p>
              <p class="type">Type: <span>BEP-20</span></p>
              <p class="Tsupply">
                Total Supply: <span>250 000 000 PRIDE</span>
              </p>
              <p class="Isupply">
                Initial Supply: <span>3 697 200 PRIDE</span>
              </p>
              <p class="TokenListing">Token Listing: <span>TBA</span></p>
            </div>
            <div class="item">
              <h3>Price</h3>
              <p>Listing: <span>$0.10</span></p>
            </div>
          </div>
          <div class="Schedule" v-show="Schedule">
            <table>
              <tr>
                <th>Round</th>
                <th>Opens</th>
                <th>Closes</th>
              </tr>
              <tr>
                <td>Allocation</td>
                <td>03-14 08:00 UTC</td>
                <td>03-14 13:05 UTC</td>
              </tr>
              <tr>
                <td>FCFS - Prepare</td>
                <td>03-14 13:05 UTC</td>
                <td>03-14 13:20 UTC</td>
              </tr>
              <tr>
                <td>FCFS</td>
                <td>03-14 13:20 UTC</td>
                <td>03-14 14:20 UTC</td>
              </tr>
            </table>
          </div>
          <div class="Allocation" v-show="Allocation">
            <table>
              <tr>
                <th>No.</th>
                <th>Allocation</th>
                <th>Date</th>
                <th>Claimed</th>
              </tr>
            </table>
            <BtnComp
              link="#"
              id="btn-1"
              text="Add Token"
              style="background-color: var(--compl-2)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BadgeComp from "@/components/BadgeComp.vue";
import BtnComp from "@/components/BtnComp.vue";

export default {
  name: "SinglePool",
  components: {
    BadgeComp,
    BtnComp,
  },
  data() {
    return {
      target: this.$store.getters.getTargetPool(this.$route.params.id).length
        ? this.$store.getters.getTargetPool(this.$route.params.id)[0]
        : "NOT FOUND 404",
      poolDetails: true,
      Schedule: false,
      Allocation: false,
      active: false,
    };
  },
  methods: {
    calc: function () {
      return `${(this.target.ProgressDone / this.target.ProgressTotal) * 100}%`;
    },
    toggleDetails: function (event) {
      event.target.classList.add("active");
      event.target.nextElementSibling.classList.remove("active");
      event.target.nextElementSibling.nextElementSibling.classList.remove(
        "active"
      );
      this.poolDetails = true;
      this.Schedule = false;
      this.Allocation = false;
    },
    toggleSchedule: function (event) {
      event.target.classList.add("active");
      event.target.previousElementSibling.classList.remove("active");
      event.target.nextElementSibling.classList.remove("active");
      this.poolDetails = false;
      this.Schedule = true;
      this.Allocation = false;
    },
    toggleAllocation: function (event) {
      event.target.classList.add("active");
      event.target.previousElementSibling.classList.remove("active");
      event.target.previousElementSibling.previousElementSibling.classList.remove(
        "active"
      );
      this.poolDetails = false;
      this.Schedule = false;
      this.Allocation = true;
    },
    toggle: function (event) {
      this.active = !this.active;
    },
  },
};
</script>
