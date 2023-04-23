<template>
  <div class="box">
    <div class="topImg"></div>
    <div class="text">
      {{ $t("message.index.index_five.content") }}
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexAssembly4",
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
  height: 566px;
  background: #ffffff;
  box-shadow: 0px 0px 20px 1px rgba(72, 142, 255, 0.1);
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
}
.box .topImg {
  width: 1272px;
  height: 434px;
  background: #ebebeb;
  border-radius: 12px 12px 0px 0px;
  opacity: 1;
  background-image: url(../assets/images/index5_img1.png);
  background-size: 100%;
  background-repeat: no-repeat;
}
.box .text {
  width: 1483px;
  height: 100px;
  font-size: 20px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #4c4c4c;
  line-height: 50px;
  margin: 39px 49px 53px 40px;
  overflow: scroll;
  zoom: 0.8;
}
</style>