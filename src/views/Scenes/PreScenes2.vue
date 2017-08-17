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
      .col-sm-4.col-md-4.col-lg-4.text-center
        ul
          li
            router-link(:to="{ path: '/scene/pre/1' }")
              img.rounded(src="static/img/button/scene-pre-1.png" onmouseover="this.src='static/img/button/scene-pre-1focus.png'" onmouseout="this.src='static/img/button/scene-pre-1.png'")
          li
            router-link(:to="{ path: '/scene/pre/2' }")
              img.rounded(src="static/img/button/scene-pre-2focus.png" onmouseover="this.src='static/img/button/scene-pre-2focus.png'" onmouseout="this.src='static/img/button/scene-pre-2focus.png'")
      .col-sm-7.col-md-7.col-lg-7
        h1 《彩繪蘭陽之美》彩繪木製掛牌活動
        p ● 活動說明：延伸陽大醫院醫療服務的精神與公共藝術教育推廣目的，邀請蘭陽地區的學童、民眾以在地人的角度畫出日常生活所見的宜蘭，小從街角、路口、車站、大到整個蘭陽平原、太平山林皆為宜蘭之美，展現宜蘭在地人文特色。以彩繪鄉村風格的木製迎賓掛牌帶出蘭陽地區家家戶戶獨特的宜蘭人文特色，將來也可掛至於家門巷口歡迎各地來的訪客。
        p ● 主題：《彩繪蘭陽之美》
        p ● 參與對象：黎明國小
        p ● 主辦單位：國立陽明大學附設醫院
        p ● 執行單位：羅傑藝術文化有限公司

        .row
          .col-sm-12.col-md-12.col-lg-12.text-center
            img.img-thumbnail(src="static/img/scene/pre-2-1.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/pre-2-2.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/pre-2-3.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/pre-2-4.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/pre-2-5.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/pre-2-6.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/pre-2-7.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/pre-2-8.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/pre-2-9.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/pre-2-13.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/pre-2-11.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/pre-2-12.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/pre-2-10.jpg" style="width: 30%; height: 20%")
            img.img-thumbnail(src="static/img/scene/pre-2-15.jpg" style="width: 30%; height: 20%")
            img.img-thumbnail(src="static/img/scene/pre-2-14.jpg" style="width: 30%; height: 20%")
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
