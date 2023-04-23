<template>
  <div class="box">
    <div class="content">
      <div class="text">
        {{ $t("message.index.index_four.content") }}
      </div>
      <div class="img_1"></div>
    </div>
    <div class="blueLine"></div>
  </div>
</template>

<script>
export default {
  name: "IndexAssembly3",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.box {
  margin-bottom: 60px;
  box-sizing: border-box;
  width: 1272px;
  height: 273px;
  background: #ffffff;
  box-shadow: 0px 0px 20px 1px rgba(72, 142, 255, 0.1);
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
  padding: 24px;
}
.box .content {
  overflow: hidden;
}
.box .text {
  float: left;
  width: 1020px;
  height: 246px;
  font-size: 20px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #4c4c4c;
  line-height: 50px;
  margin-top: 24px;
  margin-right: 57px;
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
.box .img_1 {
  float: left;
  width: 357px;
  height: 232px;
  background: #ebebeb;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
  background-image: url(../assets/images/index4_img1.png);
  background-position: -20px -20px;
  background-size: 110%;
  background-repeat: no-repeat;
}
</style>