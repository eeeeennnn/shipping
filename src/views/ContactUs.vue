<template>
  <div class="">
    <TopImgs>
      <div
        slot="topImg_bg"
        :style="{
          backgroundImage:
            'url(' + require('../assets/images/contact_1.png') + ')',
          backgroundSize: '145%',
          backgroundPosition: '50% 50%',
        }"
        class="topImg_bg"
      ></div>
    </TopImgs>
    <div class="container">
      <ContactCard>
        <div class="left_title_text" slot="left_title_text">
          {{ $t("message.contact.contact_1.company") }}
        </div>
        <div class="contactInfo_name" slot="contactInfo_name">
          {{ $t("message.contact.contact_1.name") }}
        </div>
        <span slot="contactInfo_Tel">
          {{ $t("message.contact.contact_1.Tel") }}
        </span>
        <div slot="contactInfo_Fax" class="contactInfo_Fax">
          Fax:
          {{ $t("message.contact.contact_1.Fax") }}
        </div>
        <span slot="contactInfo_Email">
          {{ $t("message.contact.contact_1.E-mail") }}
        </span>
        <div slot="contactInfo_address" class="contactInfo_address">
          {{ $t("message.contact.contact_1.address") }}
        </div>
        <div
          class="cardRight"
          slot="cardRight"
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/contact_2.png') + ')',
            backgroundPosition: '0px , 0px',
            backgroundSize: '100%',
          }"
        ></div>
      </ContactCard>
      <ContactCard>
        <div class="left_title_text" slot="left_title_text">
          {{ $t("message.contact.contact_2.company") }}
        </div>
        <div class="contactInfo_name" slot="contactInfo_name">
          {{ $t("message.contact.contact_2.name") }}
        </div>
        <span slot="contactInfo_Tel">
          {{ $t("message.contact.contact_2.Tel") }}
        </span>
        <span slot="contactInfo_Email">
          {{ $t("message.contact.contact_2.E-mail") }}
        </span>
        <div slot="contactInfo_address" class="contactInfo_address">
          {{ $t("message.contact.contact_2.address") }}
        </div>
        <div
          class="cardRight"
          slot="cardRight"
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/contact_3.png') + ')',
            backgroundPosition: '0px , 0px',
            backgroundSize: '100%',
          }"
        ></div>
      </ContactCard>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import TopImgs from "@/components/TopImgs.vue";
import Footer from "@/components/Footer.vue";
import ContactCard from "@/components/ContactCard.vue";
export default {
  name: "ContactUs",
  data() {
    return {};
  },
  components: { TopImgs, Footer, ContactCard },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.contactInfo_Fax {
  height: 51px;
  line-height: 54px;
  font-size: 26px;
  font-weight: 400;
  color: #4c4c4c;
  margin-bottom: 8px;
  zoom: 0.8;
}
</style>
