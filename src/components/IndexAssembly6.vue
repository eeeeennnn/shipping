<template>
  <div class="box">
    <div class="topImg">
      <slot name="Img"></slot>
    </div>
    <div class="blueLine"></div>
    <div class="text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexAssembly6",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.box {
  width: 408px;
  height: 511px;
  background: #ffffff;
  box-shadow: 0px 0px 20px 1px rgba(72, 142, 255, 0.1);
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
  padding: 20px;
  box-sizing: border-box;
}
.topImg {
  width: 368px;
  height: 259px;
  background: #ebebeb;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 8px 8px 8px 8px;
  opacity: 1;
}
.blueLine {
  width: 200px;
  height: 2px;
  background: linear-gradient(90deg, #1f70f5 0%, #ffffff 100%);
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
  margin: 20px 0;
}
.text {
  width: 368px;
  height: 88px;
  font-size: 12px;
  font-weight: bold;
  color: #4c4c4c;
  line-height: 24px;
}
</style>