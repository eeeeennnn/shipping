<template>
  <div class="box">
    <div class="blueLine"></div>
    <slot name="fleet_text"></slot>
  </div>
</template>

<script>
export default {
  name: "FleetCard",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.box {
  width: 408px;
  height: 190px;
  background: #ffffff;
  box-shadow: 0px 0px 20px 1px rgba(72, 142, 255, 0.1);
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
  padding: 20px;
  box-sizing: border-box;
}
.blueLine {
  margin: 33px 0 20px 0;
  width: 200px;
  height: 2px;
  background: linear-gradient(90deg, #1f70f5 0%, #ffffff 100%);
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
}
.fleet_text {
  width: 450px;
  height: 132px;
  font-size: 20px;
  zoom: 0.8;
  overflow: scroll;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #4c4c4c;
  line-height: 44px;
}
</style>