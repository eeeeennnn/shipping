<template>
  <div class="box">
    <div class="top">
      {{ $t("message.index.index_eight.content_top") }}
    </div>
    <div
      class="center"
      :style="{
        backgroundImage: 'url(' + require('../assets/images/Img1225.png') + ')',
      }"
    ></div>
    <div class="bottom">
      {{ $t("message.index.index_eight.content_bottom") }}
    </div>
  </div>
</template>

<script>
export default {
  name: "",
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
  height: 700px;
  background: #ffffff;
  box-shadow: 0px 0px 20px 1px rgba(72, 142, 255, 0.1);
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
  padding: 60px 76px 0px 76px;
  box-sizing: border-box;
}
.box .center {
  height: 265px;
  background-size: 100%;
}
.box .top {
  padding-left: 4px;
  width: 1316px;
  height: 150px;
  font-size: 20px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #4c4c4c;
  line-height: 50px;
  overflow: scroll;
  margin-bottom: 26px;
  zoom: 0.8;
}
.box .bottom {
  margin-top: 90px;
  padding-left: 95px;
  width: 1231px;
  height: 150px;
  /* background-color: #bfa; */
  font-size: 20px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #4c4c4c;
  line-height: 50px;
  overflow: scroll;
  zoom: 0.8;
}
</style>