<template lang="pug">
  #Scene
    .row
      .col-sm-10.col-md-10.col-lg-10.text-right.offset
        ol
          span 。
          router-link(:to="{ path: '/scene/pre/1' }") 
            li.submenu 前期藝術參與
          span 。
          router-link(:to="{ path: '/scene/med/1' }") 
            li.submenu.active 藝術家工作坊
          span 。
          router-link(:to="{ path: '/scene/lat/1' }") 
            li.submenu 永續推廣
          span 。
    .row
      .col-sm-3.col-md-3.col-lg-3.text-center
        ul
          li
            router-link(:to="{ path: '/scene/med/1' }")
              img.rounded(src="static/img/button/scene-med-1.png" onmouseover="this.src='static/img/button/scene-med-1focus.png'" onmouseout="this.src='static/img/button/scene-med-1.png'")
          li
            router-link(:to="{ path: '/scene/med/2' }")
              img.rounded(src="static/img/button/scene-med-2focus.png" onmouseover="this.src='static/img/button/scene-med-2focus.png'" onmouseout="this.src='static/img/button/scene-med-2focus.png'")
          li
            router-link(:to="{ path: '/scene/med/3' }")
              img.rounded(src="static/img/button/scene-med-3.png" onmouseover="this.src='static/img/button/scene-med-3focus.png'" onmouseout="this.src='static/img/button/scene-med-3.png'")
          li
            router-link(:to="{ path: '/scene/med/4' }")
              img.rounded(src="static/img/button/scene-med-4.png" onmouseover="this.src='static/img/button/scene-med-4focus.png'" onmouseout="this.src='static/img/button/scene-med-4.png'")
          li
            router-link(:to="{ path: '/scene/med/5' }")
              img.rounded(src="static/img/button/scene-med-5.png" onmouseover="this.src='static/img/button/scene-med-5focus.png'" onmouseout="this.src='static/img/button/scene-med-5.png'")
      .col-sm-8.col-md-8.col-lg-8
        h1 《飛越生命的波浪》課程
        p ● 活動說明: 手的溫度與土的溫度接觸是最原始與自然親近的療癒，認識宜蘭的環境與生態，民眾與藝術家一同體驗公共藝術，讓參與者了解圍繞宜蘭伴隨著我們一同生活的生命價值。
        p ● 活動方式以群鳥彩鷸飛翔的公共藝術，透過藝術家指噵彩繪陶鳥，完成後與藝術家交換由藝術家所製作簽名的青花彩鷸，最後藝術家將民眾參與完成之陶鳥燒成後設置，象徵一起齊心飛越人生的波浪，完成「飛越生命的波浪」群眾參與公共藝術集體創作。
        p ● 講師：李哲榮
        p ● 主辦單位：國立陽明大學附設醫院
        p ● 執行單位：京石文化設計有限公司
        .row
          .col-sm-12.col-md-12.col-lg-12.text-center
            img.img-thumbnail(src="static/img/scene/med-2-1.jpg" style="width: 30%; height: 30%")
            img.img-thumbnail(src="static/img/scene/med-2-2.jpg" style="width: 30%; height: 30%")
            img.img-thumbnail(src="static/img/scene/med-2-3.jpg" style="width: 30%; height: 30%")
            img.img-thumbnail(src="static/img/scene/med-2-4.jpg" style="width: 30%; height: 30%")
            img.img-thumbnail(src="static/img/scene/med-2-5.jpg" style="width: 30%; height: 30%")
            img.img-thumbnail(src="static/img/scene/med-2-6.jpg" style="width: 30%; height: 30%")
            img.img-thumbnail(src="static/img/scene/med-2-7.jpg" style="width: 30%; height: 30%")
            img.img-thumbnail(src="static/img/scene/med-2-8.jpg" style="width: 30%; height: 30%")
            img.img-thumbnail(src="static/img/scene/med-2-9.jpg" style="width: 30%; height: 30%")
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
