<template>
  <div class="box">
    <TopImgs>
      <div
        slot="topImg_bg"
        :style="{
          backgroundImage:
            'url(' + require('../assets/images/fleet_1.png') + ')',
          backgroundSize: '145%',
          backgroundPosition: '50% 50%',
        }"
        class="topImg_bg"
      ></div>
    </TopImgs>
    <div class="container">
      <div class="top">
        <div class="left">
          <div class="text">
            {{ $t("message.fleet.fleetContent.text") }}
          </div>
        </div>
        <div class="right"></div>
      </div>
      <div class="bottom">
        <FleetCard
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/fleet_card4.png') + ')',
            backgroundSize: '120%',
            backgroundPosition: '60% 50%',
          }"
        >
          <div class="fleet_text" slot="fleet_text">
            {{ $t("message.fleet.fleetCard.fleetCard_one") }}
          </div>
        </FleetCard>
        <FleetCard
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/fleet_card3.png') + ')',
            backgroundSize: '120%',
            backgroundPosition: '60% 50%',
          }"
        >
          <div class="fleet_text" slot="fleet_text">
            {{ $t("message.fleet.fleetCard.fleetCard_one") }}
          </div>
        </FleetCard>
        <FleetCard
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/fleet_card2.png') + ')',
            backgroundSize: '120%',
            backgroundPosition: '60% 50%',
          }"
        >
          <div class="fleet_text" slot="fleet_text">
            {{ $t("message.fleet.fleetCard.fleetCard_one") }}
          </div>
        </FleetCard>
        <FleetCard
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/fleet_card1.png') + ')',
            backgroundSize: '120%',
            backgroundPosition: '60% 50%',
          }"
        >
          <div class="fleet_text" slot="fleet_text">
            {{ $t("message.fleet.fleetCard.fleetCard_one") }}
          </div>
        </FleetCard>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import TopImgs from "@/components/TopImgs.vue";
import FleetCard from "@/components/FleetCard.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "FleetInformation",
  data() {
    return {};
  },
  components: { TopImgs, FleetCard, Footer },
};
</script>

<style scoped>
.box {
  background-image: url(../assets/images/fleet_bg1.png);
  background-size: 110%;
  background-repeat: no-repeat;
  background-position: 0px 115%;
}
.container {
  margin-top: 138px;
  padding: 0 108px;
}
.container .top {
  overflow: hidden;
  margin-bottom: 40px;
}
.container .top .left {
  width: 377px;
  height: 544px;
  /* background: #bed5fa; */
  /* opacity: 0.4; */
  padding: 24px;
  box-sizing: border-box;
  margin-right: 43px;
  float: left;
}
.container .top .left .text {
  width: 410px;
  height: 400px;
  font-size: 20px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #4c4c4c;
  line-height: 50px;
  overflow: scroll;
  zoom: 0.8;
}
.container .top .right {
  float: left;
  width: 911px;
  height: 595px;
  background-image: url(../assets/images/fleet_tabble.png);
  background-size: 100%;
}
.container .bottom {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
</style>
