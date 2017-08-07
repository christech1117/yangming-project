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
      .col-sm-3.col-md-3.col-lg-3.text-center
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
              img.rounded(src="static/img/button/scene-med-4focus.png" onmouseover="this.src='static/img/button/scene-med-4focus.png'" onmouseout="this.src='static/img/button/scene-med-4focus.png'")
          li
            router-link(:to="{ path: '/scene/med/5' }")
              img.rounded(src="static/img/button/scene-med-5.png" onmouseover="this.src='static/img/button/scene-med-5focus.png'" onmouseout="this.src='static/img/button/scene-med-5.png'")
      .col-sm-8.col-md-8.col-lg-8
        h1 《圓心花園》活動
        p ● 活動說明：透過曼陀羅的彩繪，紓壓、祈福、療癒心靈。
        p ● 講師：財團法人台北市開放空間文教基金會
        p ● 地點：蘭陽院區B1下沉廣場
        p ● 活動內容：
        p
          b 一、彩繪參與：
          p 將由藝術家團隊帶領民眾，先靜心思考，寫下一段文字(關於祈願、祝福、心靈小語)，再進行曼陀羅進行。藝術團隊將提供圓形板材以及壓力克顏料、畫筆等工具，民眾可選擇以團隊所提供之現有輪廓圖案著色，或自行創作曼陀羅圖案。
        p
          b 二、參與作品裝置：
          p 民眾參與所完成之作品，將由藝術團隊加工後製，文字部分以數位印刷鋁板貼於已彩繪曼陀羅之圓形板材背面，所有曼陀羅將以不鏽鋼桿裝置裝置於草地上，200片彩繪曼陀羅以隨機排列方式，在景觀池畔綠地形塑出蘊含200個圓滿心靈的《圓心花園》。
        p ● 主辦單位：國立陽明大學附設醫院
        p ● 執行單位：京石文化設計有限公司
        p 創作的作品將會被製作出成品，設置在景觀池畔綠地上。
        .row
          .col-sm-12.col-md-12.col-lg-12.text-center
            img.img-thumbnail(src="static/img/scene/med-4-1.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-4-2.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-4-3.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-4-4.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-4-5.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-4-6.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-4-7.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/med-4-8.jpg" style="width: 30%")
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
