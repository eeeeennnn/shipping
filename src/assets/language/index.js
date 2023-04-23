/*
 * @Author: lipenghui 13703562853@163.com
 * @Date: 2023-04-21 08:45:17
 * @LastEditors: lipenghui 13703562853@163.com
 * @LastEditTime: 2023-04-21 08:49:19
 * @FilePath: /cetc_demo/src/assets/language/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enLocale from './language-EN'
import usLocal from './language-CN'
console.log(VueI18n)
Vue.use(VueI18n);
const messages = {
    en: {
        ...enLocale
    },
    cn: {
        ...usLocal
    }
}
const i18n = new VueI18n({
    locale: localStorage.getItem('lang') || 'cn', // 通过this.$i18n.locale的值实现语言切换
    messages,
});
 
export default i18n;