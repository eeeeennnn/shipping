<template>
  <div class="box">
    <div class="city">
      <slot name="cityName"></slot>
      <div class="aaa">
        <div class="outside">
          <div class="inner"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MapCoordinate",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.aaa {
  width: 25px;
  height: 50px;
  /* background-color: #bfa; */
  position: relative;
  left: 205px;
  top: -50px;
}
.city:hover {
  background-color: #70a6ff;
  color: #fff;
}
.city {
  width: 207px;
  height: 50px;
  background: #f5f5f5;
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
  font-size: 26px;
  font-family: Microsoft YaHei-Regular, Microsoft YaHei;
  font-weight: 400;
  color: #1f70f5;
  line-height: 50px;
  text-align: center;
  zoom: 0.8;
  position: relative;
  z-index: 99;
}
.outside {
  width: 13px;
  height: 13px;
  background: #ffffff;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.16);
  opacity: 1;
  border-radius: 50%;
  z-index: 99;
  transform: scale(1.5);
  position: absolute;
  top: 18px;
  left: 15px;
}
.inner {
  width: 7px;
  height: 7px;
  background: #1f70f5;
  opacity: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.city:hover .outside {
  transform: scale(1.7);
}
</style>