<template>
  <div class="box">
    <div class="line">
      <div class="map">
        <div @mouseover="lineLight1()" @mouseout="lineDefault1()">
          <MapCoordinate class="cityCoordinates_1">
            <span slot="cityName" class="cityName">Rotterdam</span>
          </MapCoordinate>
        </div>
        <div @mouseover="lineLight2()" @mouseout="lineDefault2()">
          <MapCoordinate class="cityCoordinates_2">
            <span slot="cityName" class="cityName">Paradip</span>
          </MapCoordinate>
        </div>
        <div @mouseover="lineLight3()" @mouseout="lineDefault3()">
          <MapCoordinate class="cityCoordinates_3">
            <span slot="cityName" class="cityName">Qingdao</span>
          </MapCoordinate>
        </div>
        <div @mouseover="lineLight4()" @mouseout="lineDefault4()">
          <MapCoordinateRight class="cityCoordinates_4">
            <span slot="cityName" class="cityName">Changjiangkou</span>
          </MapCoordinateRight>
        </div>
        <div @mouseover="lineLight5()" @mouseout="lineDefault5()">
          <MapCoordinate class="cityCoordinates_5">
            <span slot="cityName" class="cityName">Gladstone</span>
          </MapCoordinate>
        </div>
        <div @mouseover="lineLight6()" @mouseout="lineDefault6()">
          <MapCoordinate class="cityCoordinates_6">
            <span slot="cityName" class="cityName">Kalama</span>
          </MapCoordinate>
        </div>
        <div @mouseover="lineLight7()" @mouseout="lineDefault7()">
          <MapCoordinate class="cityCoordinates_7">
            <span slot="cityName" class="cityName">NewOrleans</span>
          </MapCoordinate>
        </div>
        <div @mouseover="lineLight8()" @mouseout="lineDefault8()">
          <MapCoordinate class="cityCoordinates_8">
            <span slot="cityName" class="cityName">Santos</span>
            <div class="path_4" slot="path">
              <div class="path_4_1"></div>
              <div class="path_4_2"></div>
            </div>
          </MapCoordinate>
        </div>
        <div class="lineChoose">
          <ul>
            <li v-for="item in address" :key="item.id">
              <div class="left">
                {{ item.start }}
              </div>
              <div class="center">
                <div class="start">
                  <div class="start_s"></div>
                </div>
                <div class="sharp"></div>
                <div class="arrow"></div>
                <div class="end">
                  <div class="end_s"></div>
                </div>
              </div>
              <div class="right">
                {{ item.end }}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="path1_default" v-show="lineShow1"></div>
      <div class="path1_light" v-show="!lineShow1"></div>
      <div class="path2_default" v-show="lineShow2"></div>
      <div class="path2_light" v-show="!lineShow2"></div>
      <div class="path3_default" v-show="lineShow3"></div>
      <div class="path3_light" v-show="!lineShow3"></div>
      <div class="path4_default" v-show="lineShow4"></div>
      <div class="path4_light" v-show="!lineShow4"></div>
      <div class="path5_default" v-show="lineShow5"></div>
      <div class="path5_light" v-show="!lineShow5"></div>
      <div class="path6_default" v-show="lineShow6"></div>
      <div class="path6_light" v-show="!lineShow6"></div>
      <div class="path7_default" v-show="lineShow7"></div>
      <div class="path7_light" v-show="!lineShow7"></div>
      <div class="path8_default" v-show="lineShow8"></div>
      <div class="path8_light" v-show="!lineShow8"></div>
      <div class="path9_default" v-show="lineShow9"></div>
      <div class="path9_light" v-show="!lineShow9"></div>
      <div class="path10_default" v-show="lineShow10"></div>
      <div class="path10_light" v-show="!lineShow10"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import MapCoordinate from "@/components/MapCoordinate.vue";
import MapCoordinateRight from "@/components/MapCoordinateRight.vue";
export default {
  name: "RouteOverview",
  data() {
    return {
      lineShow1: true,
      lineShow2: true,
      lineShow3: true,
      lineShow4: true,
      lineShow5: true,
      lineShow6: true,
      lineShow7: true,
      lineShow8: true,
      lineShow9: true,
      lineShow10: true,
      address: [
        {
          id: 1,
          start: "Santos",
          end: "Kalama",
        },
        {
          id: 2,
          start: "Gladstone",
          end: "Qingdao",
        },
        {
          id: 3,
          start: "Qingdao",
          end: "Gladstone",
        },
        {
          id: 4,
          start: "Rotterdam",
          end: "Santos",
        },
        {
          id: 5,
          start: "Rotterdam",
          end: "Santos",
        },
        {
          id: 6,
          start: "Rotterdam",
          end: "Santos",
        },
        {
          id: 7,
          start: "Rotterdam",
          end: "Santos",
        },
        {
          id: 8,
          start: "Rotterdam",
          end: "Santos",
        },
        {
          id: 9,
          start: "Rotterdam",
          end: "Santos",
        },
        {
          id: 10,
          start: "Rotterdam",
          end: "Santos",
        },
      ],
    };
  },
  mounted() {},
  components: { Footer, MapCoordinate, MapCoordinateRight },
  methods: {
    lineLight1() {
      this.lineShow1 = false;
      this.lineShow2 = false;
    },
    lineDefault1() {
      this.lineShow1 = true;
      this.lineShow2 = true;
    },
    lineLight2() {
      this.lineShow3 = false;
      this.lineShow4 = false;
    },
    lineDefault2() {
      this.lineShow3 = true;
      this.lineShow4 = true;
    },
    lineLight3() {
      this.lineShow5 = false;
      this.lineShow6 = false;
      this.lineShow7 = false;
    },
    lineDefault3() {
      this.lineShow5 = true;
      this.lineShow6 = true;
      this.lineShow7 = true;
    },
    lineLight4() {
      this.lineShow5 = false;
    },
    lineDefault4() {
      this.lineShow5 = true;
    },
    lineLight5() {
      this.lineShow5 = false;
      this.lineShow4 = false;
    },
    lineDefault5() {
      this.lineShow5 = true;
      this.lineShow4 = true;
    },
    lineLight6() {
      this.lineShow7 = false;
    },
    lineDefault6() {
      this.lineShow7 = true;
    },
    lineLight7() {
      this.lineShow6 = false;
      this.lineShow8 = false;
    },
    lineDefault7() {
      this.lineShow6 = true;
      this.lineShow8 = true;
    },
    lineLight8() {
      this.lineShow9 = false;
      this.lineShow10 = false;
    },
    lineDefault8() {
      this.lineShow9 = true;
      this.lineShow10 = true;
    },
  },
};
</script>

<style scoped>
/* .city:hover + .path_1 {
  background-color: red;
} */
.city:hover + .path_2 {
  background-color: red;
}
.city:hover + .path_3 {
  background-color: red;
}
.city:hover + .path_4 {
  background-color: red;
}
.line {
  position: relative;
  height: 960px;
  background: linear-gradient(
    180deg,
    #113a80 0%,
    #1d69e5 35%,
    #1c65dc 64%,
    #10387b 100%
  );
  margin-bottom: 20px;
}
.path {
  height: 960px;
}
.map {
  height: 960px;
  background-image: url(../assets/images/line_1.png);
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: 50% 100%;
}
.lineChoose {
  list-style: none;
  width: 285px;
  height: 161px;
  background: #ffffff;
  box-shadow: 0px 0px 20px 1px rgba(72, 142, 255, 0.1);
  border-radius: 8px 8px 8px 8px;
  opacity: 1;
  position: absolute;
  right: 100px;
  bottom: 50px;
  overflow: scroll;
}
.lineChoose ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.lineChoose ul li {
  width: 286px;
  height: 34px;
  display: flex;
  justify-content: space-between;
}
.lineChoose ul li .left {
  width: 45px;
  height: 19px;
  line-height: 80px;
  font-size: 30px;
  font-family: Microsoft YaHei-Regular, Microsoft YaHei;
  font-weight: 400;
  color: #1f70f5;
  flex: 1;
  text-align: end;
  zoom: 0.4;
}
.lineChoose ul li .right {
  width: 49px;
  height: 19px;
  line-height: 80px;
  font-size: 30px;
  font-family: Microsoft YaHei-Regular, Microsoft YaHei;
  font-weight: 400;
  color: #1f70f5;
  flex: 1;
  zoom: 0.4;
}
.lineChoose ul li .start {
  width: 13px;
  height: 13px;
  background: #ffffff;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.16);
  opacity: 1;
  position: relative;
  border-radius: 50%;
  float: left;
  left: 10px;
  top: 10px;
  z-index: 2;
}
.lineChoose ul li .start .start_s {
  width: 7px;
  height: 7px;
  background: #1f70f5;
  opacity: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.lineChoose ul li .end {
  width: 13px;
  height: 13px;
  background: #ffffff;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.16);
  opacity: 1;
  position: relative;
  border-radius: 50%;
  float: left;
  left: 60px;
  top: 10px;
}
.lineChoose ul li .end .end_s {
  width: 7px;
  height: 7px;
  background: #1f70f5;
  opacity: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.lineChoose ul li .center {
  width: 77px;
  overflow: hidden;
  height: 34px;
  /* background-color: #bfa; */
  position: relative;
  flex: 1;
}
.lineChoose ul li .sharp {
  width: 50px;
  height: 3px;
  background: #d9d9d9;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  float: left;
  position: absolute;
  top: 15px;
  left: 18px;
}
.lineChoose ul li .arrow {
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 8px solid #d9d9d9;
  float: left;
  position: absolute;
  top: 11px;
  left: 65px;
}
.lineChoose ul li:hover {
  background-color: rgba(31, 112, 245, 0.16);
  cursor: pointer;
}
.lineChoose ul li:hover .sharp {
  background: #f59f2e;
}
.lineChoose ul li:hover .arrow {
  border-left: 8px solid #f59f2e;
}
.cityCoordinates_1 {
  position: absolute;
  left: 273px;
  top: 243px;
}
.cityCoordinates_2 {
  position: absolute;
  left: 500px;
  top: 405px;
}
.cityCoordinates_3 {
  position: absolute;
  left: 633px;
  top: 338px;
}
.cityCoordinates_4 {
  position: absolute;
  left: 823px;
  top: 368px;
}
.cityCoordinates_5 {
  position: absolute;
  left: 753px;
  top: 610px;
}
.cityCoordinates_6 {
  position: absolute;
  left: 1050px;
  top: 258px;
}
.cityCoordinates_7 {
  position: absolute;
  left: 1188px;
  top: 340px;
}
.cityCoordinates_8 {
  position: absolute;
  left: 1385px;
  top: 605px;
}

.path1_default {
  width: 332px;
  height: 100px;
  /* background-color: #bfa; */
  background-image: url(../assets/images/line_route_1_default.png);
  background-size: 80%;
  background-position: 73px 0px;
  background-repeat: no-repeat;
  position: absolute;
  top: 255px;
  left: 130px;
}
.path1_light {
  width: 332px;
  height: 100px;
  background-image: url(../assets/images/line_route_1_light.png);
  background-size: 80%;
  background-position: 73px 0px;
  background-repeat: no-repeat;
  position: absolute;
  top: 255px;
  left: 130px;
}
.path2_default {
  width: 332px;
  height: 200px;
  /* background-color: #bfa; */
  background-image: url(../assets/images/line_route_2_default.png);
  background-size: 80%;
  background-position: 65px 10px;
  background-repeat: no-repeat;
  position: absolute;
  top: 255px;
  left: 130px;
}
.path2_light {
  width: 332px;
  height: 200px;
  /* background-color: #bfa; */
  background-image: url(../assets/images/line_route_2_light.png);
  background-size: 80%;
  background-position: 65px 10px;
  background-repeat: no-repeat;
  position: absolute;
  top: 255px;
  left: 130px;
}
.path3_default {
  width: 530px;
  height: 308px;
  background-image: url(../assets/images/line_route_3_default.png);
  background-size: 80%;
  background-position: 111px 0;
  background-repeat: no-repeat;
  position: absolute;
  top: 420px;
  left: 155px;
}
.path3_light {
  width: 530px;
  height: 308px;
  background-image: url(../assets/images/line_route_3_light.png);
  background-size: 80%;
  background-position: 111px 0;
  background-repeat: no-repeat;
  position: absolute;
  top: 420px;
  left: 155px;
}
.path4_default {
  width: 263px;
  height: 308px;
  /* background-color: red; */
  position: absolute;
  top: 423px;
  left: 683px;
  background-image: url(../assets/images/line_route_4_default.png);
  background-size: 104%;
  background-position: -3px 0px;
  background-repeat: no-repeat;
}
.path4_light {
  width: 263px;
  height: 308px;
  /* background-color: red; */
  position: absolute;
  top: 423px;
  left: 683px;
  background-image: url(../assets/images/line_route_4_light.png);
  background-size: 104%;
  background-position: -3px 0px;
  background-repeat: no-repeat;
}
.path5_default {
  width: 226px;
  height: 276px;
  /* background-color: red; */
  position: absolute;
  top: 358px;
  left: 813px;
  background-image: url(../assets/images/line_route_5_default.png);
  background-size: 60%;
  background-position: -5px -5px;
  background-repeat: no-repeat;
}
.path5_light {
  width: 226px;
  height: 276px;
  /* background-color: red; */
  position: absolute;
  top: 358px;
  left: 813px;
  background-image: url(../assets/images/line_route_5_light.png);
  background-size: 60%;
  background-position: -5px -5px;
  background-repeat: no-repeat;
}
.path6_default {
  width: 576px;
  height: 104px;
  position: absolute;
  top: 345px;
  left: 813px;
  background-image: url(../assets/images/line_route_6_default.png);
  background-size: 98%;
  background-position: 0px 0px;
  background-repeat: no-repeat;
}
.path6_light {
  width: 576px;
  height: 104px;
  position: absolute;
  top: 345px;
  left: 813px;
  background-image: url(../assets/images/line_route_6_light.png);
  background-size: 98%;
  background-position: 0px 0px;
  background-repeat: no-repeat;
}
.path7_default {
  width: 431px;
  height: 100px;
  position: absolute;
  top: 261px;
  left: 813px;
  background-image: url(../assets/images/line_route_7_default.png);
  background-size: 99%;
  background-position: 3px 5px;
  background-repeat: no-repeat;
}
.path7_light {
  width: 431px;
  height: 100px;
  position: absolute;
  top: 261px;
  left: 813px;
  background-image: url(../assets/images/line_route_7_light.png);
  background-size: 99%;
  background-position: 3px 5px;
  background-repeat: no-repeat;
}
.path8_default {
  width: 273px;
  height: 100px;
  position: absolute;
  top: 305px;
  left: 1363px;
  background-image: url(../assets/images/line_route_8_default.png);
  background-size: 99%;
  background-position: 3px 5px;
  background-repeat: no-repeat;
}
.path8_light {
  width: 273px;
  height: 100px;
  position: absolute;
  top: 305px;
  left: 1363px;
  background-image: url(../assets/images/line_route_8_light.png);
  background-size: 99%;
  background-position: 3px 5px;
  background-repeat: no-repeat;
}
.path9_default {
  width: 116px;
  height: 277px;
  /* background-color: #bfa; */
  position: absolute;
  top: 375px;
  left: 1563px;
  background-image: url(../assets/images/line_route_9_default.png);
  background-size: 98%;
  background-position: -1px 10px;
  background-repeat: no-repeat;
}
.path9_light {
  width: 116px;
  height: 277px;
  /* background-color: #bfa; */
  position: absolute;
  top: 375px;
  left: 1563px;
  background-image: url(../assets/images/line_route_9_light.png);
  background-size: 98%;
  background-position: -1px 10px;
  background-repeat: no-repeat;
}
.path10_default {
  width: 210px;
  height: 107px;
  /* background-color: #bfa; */
  position: absolute;
  top: 625px;
  left: 1563px;
  background-image: url(../assets/images/line_route_10_default.png);
  background-size: 98%;
  background-position: 0px 0px;
  background-repeat: no-repeat;
}
.path10_light {
  width: 210px;
  height: 107px;
  /* background-color: #bfa; */
  position: absolute;
  top: 625px;
  left: 1563px;
  background-image: url(../assets/images/line_route_10_light.png);
  background-size: 98%;
  background-position: 0px 0px;
  background-repeat: no-repeat;
}
</style>