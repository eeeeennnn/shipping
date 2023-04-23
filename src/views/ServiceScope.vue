<template>
  <div class="serviceBox">
    <TopImgs>
      <div
        slot="topImg_bg"
        :style="{
          backgroundImage:
            'url(' + require('../assets/images/service_img1.png') + ')',
          backgroundSize: '145%',
          backgroundPosition: '50% 50%',
        }"
        class="topImg_bg"
      ></div>
    </TopImgs>
    <div id="content" class="service_content">
      <CompanyCard>
        <div slot="company_title" class="company_title">
          {{ $t("message.company.company_dalian.title") }}
        </div>
        <div slot="company_content" class="company_content">
          {{ $t("message.company.company_dalian.content") }}
        </div>
        <div
          class="right_one"
          slot="company_img1"
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/company_1.png') + ')',
          }"
        ></div>
        <div
          class="right_two"
          slot="company_img2"
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/company_2.png') + ')',
          }"
        ></div>
      </CompanyCard>
      <CompanyCard>
        <div slot="company_title" class="company_title">
          {{ $t("message.company.company_singapore.title") }}
        </div>
        <div slot="company_content" class="company_content">
          {{ $t("message.company.company_singapore.content") }}
        </div>
        <div
          class="right_one"
          slot="company_img1"
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/company_1.png') + ')',
          }"
        ></div>
        <div
          class="right_two"
          slot="company_img2"
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/company_2.png') + ')',
          }"
        ></div>
      </CompanyCard>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import TopImgs from "@/components/TopImgs.vue";
import CompanyCard from "@/components/CompanyCard.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "ServiceScope",
  data() {
    return {};
  },
  components: { TopImgs, CompanyCard, Footer },
  methods: {},
};
</script>

<style scoped>
.serviceBox {
  background-image: url(../assets/images/service_bg1.png);
  background-repeat: no-repeat;
  background-position: 115% 100%;
  background-size: 40%;
}
.service_content {
  padding-bottom: 60px;
}
</style>