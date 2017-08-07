<template lang="pug">
  #Scene
    .row
      .col-sm-10.col-md-10.col-lg-10.text-right.offset
        ol
          span 。
          router-link.ainline(:to="{ path: '/scene/pre/1' }") 
            li.submenu.active 前期藝術參與
          span 。
          router-link.ainline(:to="{ path: '/scene/med/1' }") 
            li.submenu 藝術家工作坊
          span 。
          router-link.ainline(:to="{ path: '/scene/lat/1' }") 
            li.submenu 永續推廣
          span 。
    .row
      .col-sm-3.col-md-3.col-lg-3.text-center
        ul
          li
            router-link(:to="{ path: '/scene/pre/1' }")
              img.rounded(src="static/img/button/scene-pre-1focus.png" onmouseover="this.src='static/img/button/scene-pre-1focus.png'" onmouseout="this.src='static/img/button/scene-pre-1focus.png'")
          li
            router-link(:to="{ path: '/scene/pre/2' }")
              img.rounded(src="static/img/button/scene-pre-2.png" onmouseover="this.src='static/img/button/scene-pre-2focus.png'" onmouseout="this.src='static/img/button/scene-pre-2.png'")
      .col-sm-8.col-md-8.col-lg-8
        h1 《拼貼創作藝術家》相框拼貼活動
        p ● 宗旨：此活動延伸陽大醫院醫療服務的精神與公共藝術教育推廣目的，規劃以藝術療癒為出發點之拼貼活動，邀請藝術療癒專業講師帶領參與者拼貼創作，體驗藝術家自由創作的樂趣。
        p ● 主題：《幸福宜蘭─咱ㄟ宜蘭大病院》
        p ● 活動方式：
        p 1. 拼貼的素材除了一般彩色紙材，也加入乾燥植物、花草增加植物對身心靈的正面療癒功能，可讓長者從活動中放鬆心情，沒有任何拘束。
        p 2. 從15分鐘的公共藝術推廣帶出本次活動內容。提供每組參與者一個相框及多樣性的拼貼素材，以簡易的創作方式，完成相框也就屬於參與者自己獨一無二的拼貼相框，可以放置於屬於自己的空間內，延伸患者自我空間療癒功效。
        p 3. 完成作品後，工作團隊於現場為參與者和作品合照作留念，並於活動後洗成相片供留念。
        p ● 講師：邱萱芹 老師
        p ● 主辦單位：國立陽明大學附設醫院
        p ● 執行單位：羅傑藝術文化有限公司

        .row
          .col-sm-12.col-md-12.col-lg-12.text-center
            img.img-thumbnail(src="static/img/scene/pre-1-1.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/pre-1-2.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/pre-1-3.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/pre-1-4.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/pre-1-5.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/pre-1-6.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/pre-1-7.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/pre-1-8.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/pre-1-9.jpg" style="width: 30%")
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
