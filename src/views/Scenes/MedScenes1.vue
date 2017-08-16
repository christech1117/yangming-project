<template lang="pug">
  #Scene
    .row
      .col-sm-10.col-md-10.col-lg-10.text-right.offset
        ol
          span 。
          router-link.ainline(:to="{ path: '/scene/pre/1' }") 
            li.submenu 前期藝術參與
          span 。
          router-link.ainline(:to="{ path: '/scene/med/1' }") 
            li.submenu.active 藝術家工作坊
          span 。
          router-link.ainline(:to="{ path: '/scene/lat/1' }") 
            li.submenu 永續推廣
          span 。
    .row
      .col-sm-4.col-md-4.col-lg-4.text-center
        ul
          li
            router-link(:to="{ path: '/scene/med/1' }")
              img.rounded(src="static/img/button/scene-med-1focus.png" onmouseover="this.src='static/img/button/scene-med-1focus.png'" onmouseout="this.src='static/img/button/scene-med-1focus.png'")
          li
            router-link(:to="{ path: '/scene/med/2' }")
              img.rounded(src="static/img/button/scene-med-2.png" onmouseover="this.src='static/img/button/scene-med-2focus.png'" onmouseout="this.src='static/img/button/scene-med-2.png'")
          li
            router-link(:to="{ path: '/scene/med/3' }")
              img.rounded(src="static/img/button/scene-med-3.png" onmouseover="this.src='static/img/button/scene-med-3focus.png'" onmouseout="this.src='static/img/button/scene-med-3.png'")
          li
            router-link(:to="{ path: '/scene/med/4' }")
              img.rounded(src="static/img/button/scene-med-4.png" onmouseover="this.src='static/img/button/scene-med-4focus.png'" onmouseout="this.src='static/img/button/scene-med-4.png'")
          li
            router-link(:to="{ path: '/scene/med/5' }")
              img.rounded(src="static/img/button/scene-med-5.png" onmouseover="this.src='static/img/button/scene-med-5focus.png'" onmouseout="this.src='static/img/button/scene-med-5.png'")
      .col-sm-7.col-md-7.col-lg-7
        h1 《心心相印》版畫DIY活動
        p ● 活動說明：現場提供各種「心」造型木刻版，提供民眾DIY印製，可以帶走自己親手製作的卡片，不限人數，時間內皆可參加，藝術家於活動結束，挑選7件優秀作品於裱框後設置於4-8F牆面永久裝飾。
        p ● 講師：許敬忠、潘勁瑞
        p ● 主辦單位：國立陽明大學附設醫院
        p ● 執行單位：京石文化設計有限公司
        .row
          .col-sm-12.col-md-12.col-lg-12.text-center
            img.img-thumbnail(src="static/img/scene/med-1-1.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-1-2.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-1-3.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-1-4.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-1-5.jpg" style="width: 30%")
            img.img-thumbnail.text-center(src="static/img/scene/med-1-6.jpg" style="width: 17%")
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
