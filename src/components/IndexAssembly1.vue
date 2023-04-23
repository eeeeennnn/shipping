<template>
  <div class="box">
    <div class="content">
      <div class="text">
        {{ $t("message.index.index_two.content") }}
      </div>
      <div class="img_1"></div>
      <div class="img_2"></div>
    </div>
    <div class="blueLine"></div>
  </div>
</template>

<script>
export default {
  name: "IndexAssembly1",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.box {
  box-sizing: border-box;
  width: 1272px;
  height: 273px;
  background: #ffffff;
  box-shadow: 0px 0px 20px 1px rgba(72, 142, 255, 0.1);
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
  padding: 24px;
  margin-bottom: 60px;
  margin-top: 60px;
}
.box .content {
  overflow: hidden;
}
.box .text {
  float: left;
  width: 658px;
  height: 243px;
  font-size: 20px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #4c4c4c;
  line-height: 50px;
  background-color: #bfd;
  margin: 20px 0 22px 0;
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
.box .img_1,
.box .img_2 {
  float: left;
  width: 320px;
  height: 225px;
  background-color: #bff;
  border-radius: 10px;
}
.box .img_1 {
  margin-left: 26px;
  background-image: url(../assets/images/index2_img1.png);
  background-position: 50%, -10%;
  background-repeat: no-repeat;
  background-size: 110%;
}
.box .img_2 {
  margin-left: 30px;
  background-image: url(../assets/images/index2_img2.png);
  background-position: 50%, -10%;
  background-repeat: no-repeat;
  background-size: 110%;
}
</style>