<template>
  <div class="box">
    <slot name="top"></slot>
    <div class="center">
      <div class="center_bg"></div>
      <slot name="center_title"></slot>
      <div class="blueLine"></div>
    </div>
    <div>
      <slot name="bottom"></slot>
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
  width: 408px;
  height: 490px;
  background: #ffffff;
  box-shadow: 0px 0px 20px 1px rgba(72, 142, 255, 0.1);
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 24px;
}
.top {
  width: 368px;
  height: 259px;
  border-radius: 8px 8px 8px 8px;
  margin-bottom: 24px;
}
.center {
  position: relative;
}
.center_bg {
  width: 157px;
  height: 41px;
  background: linear-gradient(272deg, #ffffff 0%, #1e6def 100%);
  border-radius: 0px 0px 0px 0px;
  opacity: 0.15;
}
.center_title {
  width: 231px;
  height: 24px;
  font-size: 24px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #4c4c4c;
  line-height: 51px;
  position: absolute;
  left: 20px;
  top: 0;
  zoom: 0.8;
}
.blueLine {
  width: 157px;
  height: 4px;
  background: linear-gradient(270deg, rgba(31, 112, 245, 0) 0%, #1f70f5 100%);
  border-radius: 0px 0px 0px 0px;
  opacity: 0.5;
  position: absolute;
  top: 41px;
}
.bottom {
  margin-top: 24px;
  width: 468px;
  height: 150px;
  font-size: 20px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #4c4c4c;
  line-height: 50px;
  background-color: #bfa;
  zoom: 0.8;
  overflow: scroll;
}
</style>