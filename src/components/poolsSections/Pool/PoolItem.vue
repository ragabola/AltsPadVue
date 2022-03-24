<template>
  <router-link :to="'/pool/' + PoolID">
    <div class="item">
      <div class="user-data">
        <div class="row">
          <div class="image">
            <img :src="Imagesrc" class="profile-img" />
            <img
              :src="require('@/assets/images/special.svg')"
              v-show="Showspecial"
              class="special"
            />
            <img
              :src="require('@/assets/images/polygon.svg')"
              v-show="Showpolygon"
              class="special"
            />
            <img
              :src="require('@/assets/images/solana.png')"
              v-show="Showsolana"
              class="special"
            />
            <img
              :src="require('@/assets/images/terra.png')"
              v-show="Showterra"
              class="special"
            />
            <img
              :src="require('@/assets/images/ledgity.jpg')"
              v-show="Showledgity"
              class="special"
            />
          </div>
          <div class="left">
            <h3>{{ Pname }}</h3>
            <p>{{ Pusername }}</p>
          </div>
          <div class="bscan">
            <a href="" v-show="Showbascan">
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
            <a href="" v-show="Showetherscan">
              <img
                :src="require('@/assets/images/etherscan.png')"
              />
            </a>
            <a href="" v-show="Showftmscan">
              <img
                :src="require('@/assets/images/ftmscan.png')"
              />
            </a>
          </div>
        </div>
        <p class="social">
          <a :href="TwitterSrc" class="twitter" @click.stop="" target="__blank">
            <img
              :src="require('@/assets/images/twitter.svg')"
              class="profile-img"
            />
          </a>
          <a
            :href="TelegramSrc"
            class="telegram"
            @click.stop=""
            target="__blank"
          >
            <img
              :src="require('@/assets/images/telegram.svg')"
              class="profile-img"
            />
          </a>
          <a :href="MediumSrc" @click.stop="" target="__blank">
            <img
              :src="require('@/assets/images/icons8-medium-monogram.svg')"
              class="profile-img"
            />
          </a>
          <a :href="WebsiteSrc" @click.stop="" target="__blank">
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
          <a :href="WhitePaperSrc" @click.stop="" target="__blank">
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
        <p class="state">
          <BadgeComp
            text="REGISTER"
            style="background-color: #004229; color: var(--compl-1)"
            v-show="register"
          />
          <BadgeComp
            text="LISTED"
            style="background-color: #004229; color: var(--compl-1)"
            v-show="listed"
          />
          <BadgeComp
            text="PRIVATE"
            style="background-color: #2f2f46; color: white"
            v-show="private"
          />
          <BadgeComp
            text="ENDED"
            style="background-color: #2f2f46; color: white"
            v-show="endedBadge"
          />
          <BadgeComp
            text="FILLED"
            style="background-color: #2f2f46; color: white"
            v-show="filled"
          />
          <BadgeComp
            text="UPCOMING"
            style="background-color: #2f2f46; color: white"
            v-show="upcoming"
          />
        </p>
        <p class="description">
          {{ Pdesc }}
        </p>
        <p class="raise">
          <span>Total Raise</span>
          <span>{{ Praise }}$</span>
        </p>
        <p class="starts">
          <span>Starts</span>
          <span>{{ Pstartstime }}</span>
        </p>
        <p class="price">
          <span>Price</span>
          <span>{{ Pprice }}</span>
        </p>
        <p class="FCFS">
          <span v-show="!ended"
            >Registration closes in
            <p>{{ TimeOPenOrClose }}</p>
          </span>
          <span v-show="ended"
            >Registration closed
            <p>{{ TimeOPenOrClose }} ago</p>
          </span>
          <span>{{ TimePercentage }}%</span>
        </p>
        <div class="progress">
          <div class="main">
            <span :style="{ width: calc }"></span>
          </div>
          <div class="sub">
            <div class="BUSD">
              <span>{{ PoolBUSD }}</span>
              <span>BUSD</span>
            </div>
            <div class="BUSD">
              <span>{{ ProgressDone }}/{{ ProgressTotal }}</span>
              <span>WZRD</span>
            </div>
          </div>
        </div>
        <p class="list-time">
          Listing Time <span>{{ ListingTime }}</span>
        </p>
        <p class="one-x">
          1x (approx) = <span>{{ xPrice }}$</span>
          <router-link
            :to="'/pool/' + PoolID"
            style="
              color: var(--dominant-bmode-color);
              font-weight: bold;
              display: inline-block;
              background-color: var(--compl-2);
              font-size: 17px;
            "
            id="btn-1"
          >
            View Pool</router-link
          >
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
import BadgeComp from "@/components/BadgeComp.vue";
export default {
  name: "PoolItem",
  components: {
    BadgeComp,
  },
  data() {
    return {
      calc: `${(this.ProgressDone / this.ProgressTotal) * 100}%`,
    };
  },
  props: {
    PoolID: Number,
    Pname: String,
    Pusername: String,
    Imagesrc: String,
    Showfire: Boolean,
    Showspecial: Boolean,
    Showpolygon: Boolean,
    Showsolana: Boolean,
    Showterra: Boolean,
    Showledgity: Boolean,
    Showftmscan: Boolean,
    Showetherscan: Boolean,
    Showbascan: Boolean,
    TwitterSrc: String,
    TelegramSrc: String,
    MediumSrc: String,
    WebsiteSrc: String,
    WhitePaperSrc: String,
    register: Boolean,
    listed: Boolean,
    private: Boolean,
    endedBadge: Boolean,
    ended: Boolean,
    filled: Boolean,
    upcoming: Boolean,
    Pdesc: String,
    Praise: String,
    Pstartstime: String,
    Pprice: String,
    TimeOPenOrClose: String,
    TimePercentage: Number,
    PoolBUSD: String,
    ProgressDone: Number,
    ProgressTotal: Number,
    ListingTime: String,
    xPrice: Number,
  },
};
</script>
