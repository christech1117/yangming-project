<template lang="pug">
  #Work
    .row
      .col-sm-10.col-md-10.col-lg-10.text-center.offset
        ol
          router-link.ainline(:to="{ path: '/work/1-1' }") 
            li.submenu 《雲想》
          router-link.ainline(:to="{ path: '/work/2-1' }") 
            li.submenu.active 《大地之書》
          router-link.ainline(:to="{ path: '/work/3-1' }") 
            li.submenu 《光之舞》
          router-link.ainline(:to="{ path: '/work/4-1' }") 
            li.submenu 《復原．新生》
          router-link.ainline(:to="{ path: '/work/5-1' }") 
            li.submenu 《土地之聲》
    .row
      .col-sm-4.col-md-4.col-lg-4.text-center
        .row
          .col-sm-12.col-md-12.col-lg-12
            img.rounded.workcontent(src="static/img/button/work-2focus.png")
          .col-sm-12.col-md-12.col-lg-12
            span 作者：笠原由起子<br>
            span 尺寸：(鑄銅)長23×寬28×高4cm〜長47×寬28×高6cm<br>(石)寬×深25×30cm~50×30cm；高40〜130cm<br>
            span 材質：鑄銅、石<br>
        ul
          li
            router-link(:to="{ path: '/work/2-1' }")
              img.rounded(src="static/img/button/workmenu-1focus.png" onmouseover="this.src='static/img/button/workmenu-1focus.png'" onmouseout="this.src='static/img/button/workmenu-1focus.png'")
          li
            router-link(:to="{ path: '/work/2-2' }")
              img.rounded(src="static/img/button/workmenu-2.png" onmouseover="this.src='static/img/button/workmenu-2focus.png'" onmouseout="this.src='static/img/button/workmenu-2.png'")
          li
            router-link(:to="{ path: '/work/2-3' }")
              img.rounded(src="static/img/button/workmenu-3.png" onmouseover="this.src='static/img/button/workmenu-3focus.png'" onmouseout="this.src='static/img/button/workmenu-3.png'")
      .col-sm-7.col-md-7.col-lg-7
        h1 創作理念
        p 獲得新知時總是令人感到愉悅與充實。一本本記載宜蘭植物之美的大地之書點綴在公園中，透過「學習」「閱讀」的行為獲得知識及心靈的滿足，進而忘記病痛的煩憂。
        img.rounded.img-thumbnail(src="static/img/work/2/work-1-1.jpg" style="width: 90%")
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
