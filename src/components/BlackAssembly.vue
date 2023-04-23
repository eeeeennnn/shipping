<template>
  <div class="box">
    <div class="Img">
      <slot name="Img"></slot>
    </div>
    <div class="Num">
      <slot name="Num"></slot>
    </div>
    <div class="Text">
      <slot name="Text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlackAssembly",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.box {
  height: 200px;
  width: 78px;
  /* background-color: skyblue; */
  box-sizing: border-box;
  position: relative;
  padding: 29px 0 10px 0;
}
.box .Img {
  width: 78px;
  height: 78px;
  opacity: 1;
  /* background-color: #bff; */
  margin-bottom: 10px;
}
.box .Num {
  /* background-color: #bfb; */
  width: 49px;
  height: 36px;
  line-height: 26px;
  font-size: 30px;
  font-family: DIN-Bold, DIN;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 10px;
  zoom: 0.8;
}
.box .Text {
  width: 250px;
  margin: 0 auto;
  transform: translate(-50%);
  position: absolute;
  left: 50%;
  text-align: center;
  margin: 0 auto;
  /* background-color: #bfe; */
  height: 21px;
  line-height: 21px;
  font-size: 26px;
  font-family: Microsoft YaHei-Regular, Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
  zoom: 0.8;
}
</style>