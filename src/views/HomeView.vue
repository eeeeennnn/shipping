<template>
  <div class="home">
    <div class="topImg">
      <div class="text">
        <div class="EN_text">FORTUNE OCEAN SHIPPING LIMITED</div>
        <div class="blueLine"></div>
        <div class="textTitle">
          <div class="textTitle_left">
            {{ $t("message.index.index_one.title_left") }}
          </div>
          <div class="textTitle_right">
            {{ $t("message.index.index_one.title_right") }}
          </div>
        </div>
        <div class="textContent">
          {{ $t("message.index.index_one.content") }}
        </div>
      </div>
    </div>
    <div id="content">
      <IndexAssembly1></IndexAssembly1>
      <div class="IndexAssembly2_box">
        <div>
          <IndexAssembly2>
            <div
              slot="Img"
              :style="{
                backgroundImage:
                  'url(' + require('../assets/images/index3_img1.png') + ')',
              }"
            >
              <p>{{ $t("message.index.index_three.title_one") }}</p>
            </div>
            <p slot="text">
              {{ $t("message.index.index_three.content_one") }}
            </p>
          </IndexAssembly2>
          <IndexAssembly2>
            <div
              slot="Img"
              :style="{
                backgroundImage:
                  'url(' + require('../assets/images/index3_img3.png') + ')',
                backgroundPosition: '-25px , 0px',
                backgroundSize: '130%',
              }"
            >
              <p>{{ $t("message.index.index_three.title_two") }}</p>
            </div>
            <p slot="text">
              {{ $t("message.index.index_three.content_two") }}
            </p>
          </IndexAssembly2>
        </div>
        <div>
          <IndexAssembly2>
            <div
              slot="Img"
              :style="{
                backgroundImage:
                  'url(' + require('../assets/images/index3_img2.png') + ')',
                backgroundPosition: '-25px , 0px',
                backgroundSize: '130%',
              }"
            >
              <p>{{ $t("message.index.index_three.title_three") }}</p>
            </div>
            <p slot="text">
              {{ $t("message.index.index_three.content_three") }}
            </p>
          </IndexAssembly2>
          <IndexAssembly2>
            <div
              slot="Img"
              :style="{
                backgroundImage:
                  'url(' + require('../assets/images/index3_img4.png') + ')',
              }"
            >
              <p>{{ $t("message.index.index_three.title_four") }}</p>
            </div>
            <p slot="text">
              {{ $t("message.index.index_three.content_four") }}
            </p>
          </IndexAssembly2>
        </div>
      </div>
      <IndexAssembly3></IndexAssembly3>
      <IndexAssembly4></IndexAssembly4>
      <IndexAssembly5></IndexAssembly5>
    </div>
    <div class="black">
      <div class="blackBox">
        <BlackAssembly>
          <div slot="Img">
            <img src="" alt="" />
          </div>
          <div slot="Num">10+</div>
          <div slot="Text">
            {{ $t("message.index.index_seven.black_one") }}
          </div>
        </BlackAssembly>
        <BlackAssembly>
          <div slot="Img">
            <img src="" alt="" />
          </div>
          <div slot="Num">10+</div>
          <div slot="Text">
            {{ $t("message.index.index_seven.black_two") }}
          </div>
        </BlackAssembly>
        <BlackAssembly>
          <div slot="Img">
            <img src="" alt="" />
          </div>
          <div slot="Num">10+</div>
          <div slot="Text">
            {{ $t("message.index.index_seven.black_three") }}
          </div>
        </BlackAssembly>
        <BlackAssembly>
          <div slot="Img">
            <img src="" alt="" />
          </div>
          <div slot="Num">10+</div>
          <div slot="Text">
            {{ $t("message.index.index_seven.black_four") }}
          </div>
        </BlackAssembly>
      </div>
    </div>
    <div id="content">
      <IndexAssembly9></IndexAssembly9>
      <IndexAssembly8></IndexAssembly8>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import IndexAssembly1 from "@/components/IndexAssembly1.vue";
import IndexAssembly2 from "@/components/IndexAssembly2.vue";
import IndexAssembly3 from "@/components/IndexAssembly3.vue";
import IndexAssembly4 from "@/components/IndexAssembly4.vue";
import IndexAssembly5 from "@/components/IndexAssembly5.vue";
import IndexAssembly6 from "@/components/IndexAssembly6.vue";
import IndexAssembly8 from "@/components/IndexAssembly8.vue";
import IndexAssembly9 from "@/components/IndexAssembly9.vue";
import ContactCard from "@/components/ContactCard.vue";
import Footer from "@/components/Footer.vue";
import BlackAssembly from "@/components/BlackAssembly.vue";

export default {
  name: "HomeView",
  components: {
    IndexAssembly1,
    IndexAssembly2,
    IndexAssembly3,
    IndexAssembly4,
    IndexAssembly5,
    IndexAssembly6,
    IndexAssembly8,
    IndexAssembly9,
    ContactCard,
    BlackAssembly,
    Footer,
  },
};
</script>
<style scoped>
.topImg {
  background-image: url(../assets/images/index1_img1.png);
  background-repeat: no-repeat;
  background-size: 110%;
  height: 700px;
  /* background: #bfa; */
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  border: 1px solid #707070;
}
.text {
  margin-left: 17%;
  margin-top: 15%;
}
.EN_text {
  font-size: 42px;
  font-weight: bold;
  color: #ffffff;
}
.blueLine {
  width: 516px;
  height: 5px;
  background: #1f70f5;
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
}
.textTitle {
  display: flex;
  width: 500px;
  height: 50px;
  font-size: 29px;
  font-weight: bold;
  color: #ffffff;
  line-height: 50px;
}
.textTitle_left,
.textTitle_right {
  flex: 1;
}
.textContent {
  width: 616px;
  height: 320px;
  font-size: 22px;
  font-weight: 400;
  color: #ffffff;
  line-height: 54px;
  overflow: scroll;
  zoom: 0.8;
}
.IndexAssembly6_box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
}
.IndexAssembly2_box {
  display: flex;
  margin-bottom: 60px;
}
.black {
  width: 100%;
  height: 200px;
  background-image: url(../assets/images/black_1.png);
  background-repeat: no-repeat;
  background-size: 110%;
  background-position: -95px -10px;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  margin-bottom: 60px;
}
.black .blackBox {
  margin: 0 auto;
  display: flex;
  width: 35%;
  justify-content: space-between;
}
.home {
  background-repeat: no-repeat;
  background-image: url(../assets/images/service_bg1.png),
    url(../assets/images/home_bg1.png), url(../assets/images/home_bg1.png),
    url(../assets/images/home_bg3.png);
  background-size: 35%, 35%, 35%, 35%;
  background-position: 110% 20%, -25% 43%, 145% 43%, 110% 75%;
}
</style>
