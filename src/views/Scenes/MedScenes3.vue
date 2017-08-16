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
              img.rounded(src="static/img/button/scene-med-3focus.png" onmouseover="this.src='static/img/button/scene-med-3focus.png'" onmouseout="this.src='static/img/button/scene-med-3focus.png'")
          li
            router-link(:to="{ path: '/scene/med/4' }")
              img.rounded(src="static/img/button/scene-med-4.png" onmouseover="this.src='static/img/button/scene-med-4focus.png'" onmouseout="this.src='static/img/button/scene-med-4.png'")
          li
            router-link(:to="{ path: '/scene/med/5' }")
              img.rounded(src="static/img/button/scene-med-5.png" onmouseover="this.src='static/img/button/scene-med-5focus.png'" onmouseout="this.src='static/img/button/scene-med-5.png'")
      .col-sm-7.col-md-7.col-lg-7
        h1 《植物創作工作坊》活動
        p ● 活動說明：邀請民眾親自感受宜蘭的自然之美，以大自然的素材進行藝術創作，實作的手感與創作的喜悅，讓參與者感受從不同角度接觸植物的趣味。邀請日籍藝術家與民眾直接進行對話交流，讓更多人可以了解大自然如何讓人們的心靈富足。
        p ● 講師：笠原由起子 小姐
        p ● 地點：福山植物園 (264宜蘭縣員山鄉湖西村雙埤路福山1號)
        p ● 活動內容：公共藝術品及藝術家介紹(10分鐘)、福山植物園介紹 影片觀賞、福山植物園園內見學、藝術家與民眾的小小交流時間、導覽內容回顧、植栽介紹、製作彩拓明信片，在藝術家的帶領下，利用前日採集而來的植物創作獨一無二的個人小小平面作品。成果發表、與民眾的小小交流時間除了一天中的感想，也了解宜蘭在地民眾是否有其他一般生活中熟悉，且可代表宜蘭的民俗植物。藝術家簡介公共藝術品的創作
        p ● 主辦單位：國立陽明大學附設醫院
        p ● 執行單位：京石文化設計有限公司

        .row
          .col-sm-12.col-md-12.col-lg-12.text-center
            img.img-thumbnail(src="static/img/scene/med-3-1.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-3-2.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-3-3.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-3-4.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-3-5.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-3-6.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-3-7.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-3-8.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-3-9.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-3-10.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-3-11.jpg" style="width: 30%")
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
