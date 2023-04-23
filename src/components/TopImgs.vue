<template>
  <div class="box">
    <slot name="topImg_bg"></slot>
  </div>
</template>

<script>
export default {
  name: "TopImgs",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.box {
  margin-bottom: 60px;
}
.topImg_bg {
  background-repeat: no-repeat;
  /* background-position: 0px 10px; */
  height: 700px;
  /* background: #bfa; */
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  border: 1px solid #707070;
}
</style>