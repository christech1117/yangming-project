<template lang="pug">
  #Plan
    .row
      .col-sm-10.col-md-10.col-lg-10.submenu
        ol
          span 。
          router-link.ainline(:to="{ path: '/plan/idea' }") 
            li.submenu 公共藝術理念
          span 。
          router-link.ainline(:to="{ path: '/plan/team' }") 
            li.submenu.active 行政團隊
          span 。
    .row
      .col-sm-3.col-md-3.col-lg-3.text-center
        ul
          li
            router-link(:to="{ path: '/plan/3' }")
              img.rounded(src="static/img/button/plan-3.png" onmouseover="this.src='static/img/button/plan-3focus.png'" onmouseout="this.src='static/img/button/plan-3.png'")
          li
            router-link(:to="{ path: '/plan/4' }")
              img.rounded(src="static/img/button/plan-4.png" onmouseover="this.src='static/img/button/plan-4focus.png'" onmouseout="this.src='static/img/button/plan-4.png'")
      .col-sm-9.col-md-9.col-lg-9
        h1 行政團隊
        .row
          .col-sm-5.col-md-5.col-lg-5
            pre
              h2 執行及徵選小組委員
              p 陽明大學附設醫院院長　　　　　　　　羅世薰院長
              p 陽明大學附設醫院社區醫學中心　　　　徐迺維主任
              p 許常吉建築師事務所　　　　　　　　　許常吉建築師
              p 台北藝術大學美術學院美術學系教授　　張正仁教授
              p 理繼文化藝術有限公司　　　　　　　　李良仁總監
              p 中冶環境造型顧問有限公司　　　　　　郭中端代表
              p 銘傳大學商業設計系　　　　　　　　　陳振輝教授
              p 田中央聯郭合建築師事務所　　　　　　黃聲遠建築師
              p 宜蘭大學建築及永續規劃究所　　　　　何武璋副教授
          .col-sm-4.col-md-4.col-lg-4
            img.rounded(src="static/img/plan/team.jpg" style="width: 150%")
        .row
          .col-sm-6.col-md-6.col-lg-6
            pre
              h2 陽大附醫工作團隊
              p 陽明大學附設醫院公務室　　　　　　　張永義、李麗惠、江芳瑜
              p 許常吉建築師事務所　　　　　　　　　關偉強
              p 台灣世曦工程顧問股份有限公司　　　　彭子斌
        .row
          .col-sm-11.col-md-11.col-lg-11
            pre
              h2 公共藝術規劃團隊
              p 計畫主持人　　　　　　　京石文化設計有限公司
              p 策劃人　　　　　　　　　許敬忠
              p 協力團隊　　　　　　　　TWON ART CO.、開放空間文教基金會、日大重機、林育信結構技師事務所
              p 藝術家團隊　　　　　　　許維忠、胡棟民、許敬忠、金澤健一、笠原由起子
              p 民眾參與團隊　　　　　　李哲榮、許敬忠、潘勁瑞、李岳庚、TWON ART CO.、開放空間文教基金會、習作有限公司
              p 行政團隊　　　　　　　　林士邦、汪靜宜、高德恩、廖姿綺、趙啟揚
        .row
          .col-sm-11.col-md-11.col-lg-11
            pre
              h2 服務及執行團隊
              p 羅傑藝術文化有限公司　　羅傑、簡敏怡、陳琦蓁
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="sass">
@import './static/css/style.sass'

</style>
