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
              img.rounded(src="static/img/button/scene-med-1.png" onmouseover="this.src='static/img/button/scene-med-1focus.png'" onmouseout="this.src='static/img/button/scene-med-1.png'")
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
              img.rounded(src="static/img/button/scene-med-5focus.png" onmouseover="this.src='static/img/button/scene-med-5focus.png'" onmouseout="this.src='static/img/button/scene-med-5focus.png'")
      .col-sm-7.col-md-7.col-lg-7
        h1 《微笑座椅》臨時裝置互動藝術
        p ● 計畫說明：每個人，不管是大人或小孩，或多或少都存在著壓力，每個人煩惱的事情都不同，尤其是上班族，工作的壓力、生活的壓力常常壓得喘不過氣，壓力需要一些方法來釋放，如果懂得與壓力相處，才有正向的力量驅使自己向前進步!微笑是一種紓解壓力的方式，結合搖搖椅希望能帶來舒緩身心目的，讓所有人進出醫院的空間時，能獲得正面的能量!
        p ● 造型創作：李岳庚
        p ● 圖像創作：潘勁瑞 (版畫家、宜蘭縣東光國中美術班老師)
        p ● 主辦單位：國立陽明大學附設醫院
        p ● 執行單位：京石文化設計有限公司

        .row
          .col-sm-12.col-md-12.col-lg-12.text-center
            img.img-thumbnail(src="static/img/scene/med-5-1.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-5-2.jpg" style="width: 30%")
          .col-sm-12.col-md-12.col-lg-12.text-center
            img.img-thumbnail(src="static/img/scene/med-5-3.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-5-4.jpg" style="width: 30%")
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
