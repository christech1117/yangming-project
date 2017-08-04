<template lang="pug">
  #Plan
    .row
      .col-sm-10.col-md-10.col-lg-10.text-left.offset
        ol
          span 。
          router-link(:to="{ path: '/plan/idea' }") 
            li.submenu.active 公共藝術理念
          span 。
          router-link(:to="{ path: '/plan/team' }") 
            li.submenu 行政團隊
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
      .col-sm-8.col-md-8.col-lg-8
        h1 宜蘭大病院 - 陽大醫院過去、現在與未來
        p ● 影片內容：透過宜蘭在地人文歷史探索、資料蒐集，將宜蘭的人、事、物、地以影片方式將重要的元素整裡起來，引發後續一連串公共藝術事件─包含作品與相關民眾與活動。
        p ● 採訪對象：聯合報萬象版主編-吳敏顯、前任國立陽明大學附設醫院院長-唐高駿、蘭地文史工作室負責人-莊文生、前宜蘭醫院副院長- 陳玉枝、蔣渭水基金會執行長-蔣朝根、現任國立陽明大學附設醫院院長- 羅世薰、東村里里長-林讚生
        p ● 執行單位：羅傑藝術文化有限公司
        p ● 攝影團隊：榖雨展演協創

        video(width="100%" controls)
          source(src="static/video/scene_video.mp4" type="video/mp4")
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
