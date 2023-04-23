<template>
  <div class="box">
    <div class="left">
      <div class="leftText">
        {{ $t("message.index.index_nine.content") }}
      </div>
      <div class="blueLine"></div>
    </div>
    <div class="right">
      <div
        class="rightBox"
        :style="{
          backgroundImage: 'url(' + require('../assets/images/Img10.png') + ')',
        }"
      ></div>
      <div
        class="rightBox"
        :style="{
          backgroundImage: 'url(' + require('../assets/images/Img11.png') + ')',
        }"
      ></div>
      <div
        class="rightBox"
        :style="{
          backgroundImage: 'url(' + require('../assets/images/Img12.png') + ')',
          backgroundSize: '70%',
          backgroundPosition: '50% 30%',
        }"
      ></div>
      <div
        class="rightBox"
        :style="{
          backgroundImage: 'url(' + require('../assets/images/Img13.png') + ')',
        }"
      ></div>
      <div
        class="rightBox"
        :style="{
          backgroundImage: 'url(' + require('../assets/images/Img14.png') + ')',
        }"
      ></div>
      <div
        class="rightBox"
        :style="{
          backgroundImage: 'url(' + require('../assets/images/Img15.png') + ')',
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexAssembly8",
  data() {
    return {
      //   bgImg1: {
      //     backgroundImage: "url(" + require("../assets/图像 11.png") + ")",
      //     backgroundRepeat: "no-repeat",
      //     backgroundSize: "100% 100$",
      //   },
    };
  },
  components: {},
};
</script>

<style scoped>
.box {
  margin-bottom: 60px;
  overflow: hidden;
  background-color: #fff;
}
.box .left {
  float: left;
  padding-top: 3px;
  padding-bottom: 2px;
  margin-right: 26px;
}
.box .leftText {
  width: 302px;
  height: 150px;
  font-size: 20px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #4c4c4c;
  line-height: 50px;
  /* margin-bottom: 49px; */
  overflow: scroll;
  zoom: 0.8;
}
.box .blueLine {
  width: 200px;
  height: 2px;
  background: linear-gradient(90deg, #1f70f5 0%, #ffffff 100%);
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
}
.box .right {
  width: 983px;
  display: flex;
  float: left;
  justify-content: space-between;
}
.box .rightBox {
  background-color: #fff;
  width: 144px;
  height: 144px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 28px 28px 28px 28px;
  opacity: 1;
  position: relative;
  background-position: 50% 50%;
  background-size: 100%;
  background-repeat: no-repeat;
}
.box .rightBox img {
  display: block;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>