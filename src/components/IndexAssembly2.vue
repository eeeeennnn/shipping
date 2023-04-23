<template>
  <div class="box">
    <div class="imgBox">
      <slot name="Img"></slot>
    </div>
    <div class="content">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexAssembly2",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.box {
  margin-bottom: 24px;
  width: 626px;
  height: 504px;
  background: #ffffff;
  box-shadow: 0px 0px 20px 1px rgba(72, 142, 255, 0.1);
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
  box-sizing: border-box;
  padding: 24px;
  margin-right: 20px;
  flex: 50%;
}
.box:hover {
  background: #99befb;
  cursor: pointer;
}
.box:hover .content {
  color: #fff;
}
.box .imgBox div {
  width: 578px;
  height: 341px;
  /* background: #ebebeb; */
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
  margin-bottom: 24px;
  background-repeat: no-repeat;
  background-size: 125%;
  position: relative;
}
.box .imgBox div p {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -90%);
  width: 170px;
  height: 46px;
  font-size: 35px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #ffffff;
}
.box .content {
  width: 739px;
  height: 110px;
  font-size: 20px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #4c4c4c;
  line-height: 50px;
  overflow: scroll;
  zoom: 0.8;
}
</style>