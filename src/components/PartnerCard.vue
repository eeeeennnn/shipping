<template>
  <div class="box">
    <slot name="topImg"></slot>
    <slot name="bottomText"></slot>
  </div>
</template>

<script>
export default {
  name: "PartnersCard",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.box {
  margin-bottom: 40px;
}
.topImg {
  width: 300px;
  height: 84px;
  background: #ffffff;
  box-shadow: 0px 0px 10px 1px rgba(72, 142, 255, 0.1);
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
  margin-bottom: 20px;
}
.bottomText {
  text-align: center;
  width: 400px;
  height: 24px;
  font-size: 26px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #4c4c4c;
  line-height: 44px;
  zoom: 0.8;
}
</style>