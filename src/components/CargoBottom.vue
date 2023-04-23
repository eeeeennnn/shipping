<template>
  <div class="box">
    <div class="left">
      <div class="left_title">
        <div class="left_box"></div>
        <slot name="left_title"></slot>
      </div>
      <div class="blueLine"></div>
      <slot name="left_text"></slot>
    </div>
    <div class="right">
      <div class="right_top">
        <slot name="Img_1"></slot>
        <slot name="Img_2"></slot>
      </div>
      <div class="right_bottom">
        <slot name="Img_3"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexAssembly7",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.box {
  margin-bottom: 60px;
  width: 1272px;
  height: 528px;
  background: #ffffff;
  box-shadow: 0px 0px 20px 1px rgba(72, 142, 255, 0.1);
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
  padding: 24px 24px 24px 0;
  box-sizing: border-box;
}
.box .left {
  margin-right: 26px;
}
.box .right {
  float: right;
}
.box .left {
  float: left;
}
.box .left .left_title {
  position: relative;
}
.box .left .left_title .left_box {
  width: 363px;
  height: 41px;
  line-height: 41px;
  background: linear-gradient(272deg, #ffffff 0%, #1e6def 100%);
  opacity: 0.15;
  border-radius: 0px 0px 0px 0px;
  padding-left: 24px;
  box-sizing: border-box;
}
.box .blueLine {
  width: 338px;
  height: 4px;
  background: linear-gradient(270deg, rgba(31, 112, 245, 0) 0%, #1f70f5 100%);
  border-radius: 0px 0px 0px 0px;
  opacity: 0.5;
}
.box .left .left_title .title {
  position: absolute;
  left: 0;
  top: 0;
  width: 309px;
  height: 24px;
  font-size: 28px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #4c4c4c;
  line-height: 55px;
  margin-left: 24px;
  zoom: 0.8;
}
.box .left .left_text {
  width: 658px;
  height: 500px;
  font-size: 20px;
  font-weight: bold;
  color: #4c4c4c;
  line-height: 50px;
  margin: 30px 0 0 24px;
  background-color: #bfa;
  zoom: 0.8;
  overflow: scroll;
}
.right_top {
  width: 670px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.right_bottom .img_3 {
  width: 670px;
  height: 225px;
  background: #ebebeb;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
}
.right_top .img_1,
.right_top .img_2 {
  width: 320px;
  height: 225px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
}
</style>