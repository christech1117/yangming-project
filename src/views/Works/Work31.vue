<template lang="pug">
  #Work
    .row
      .col-sm-10.col-md-10.col-lg-10.text-center.offset
        ol
          router-link.ainline(:to="{ path: '/work/1-1' }") 
            li.submenu 《雲想》
          router-link.ainline(:to="{ path: '/work/2-1' }") 
            li.submenu 《大地之書》
          router-link.ainline(:to="{ path: '/work/3-1' }") 
            li.submenu.active 《光之舞》
          router-link.ainline(:to="{ path: '/work/4-1' }") 
            li.submenu 《復原．新生》
          router-link.ainline(:to="{ path: '/work/5-1' }") 
            li.submenu 《土地之聲》
    .row
      .col-sm-4.col-md-4.col-lg-4.text-center
        .row
          .col-sm-12.col-md-12.col-lg-12
            img.rounded.workcontent(src="static/img/button/work-3focus.png")
          .col-sm-12.col-md-12.col-lg-12
            span 作者：許敬忠<br>
            span 尺寸：長135~150cm × 寬60~130cm×高24cm<br>
            span 材質：不鏽鋼、鍍膜玻璃<br>
        ul
          li
            router-link(:to="{ path: '/work/3-1' }")
              img.rounded(src="static/img/button/workmenu-1focus.png" onmouseover="this.src='static/img/button/workmenu-1focus.png'" onmouseout="this.src='static/img/button/workmenu-1focus.png'")
          li
            router-link(:to="{ path: '/work/3-2' }")
              img.rounded(src="static/img/button/workmenu-2.png" onmouseover="this.src='static/img/button/workmenu-2focus.png'" onmouseout="this.src='static/img/button/workmenu-2.png'")
          li
            router-link(:to="{ path: '/work/3-3' }")
              img.rounded(src="static/img/button/workmenu-3.png" onmouseover="this.src='static/img/button/workmenu-3focus.png'" onmouseout="this.src='static/img/button/workmenu-3.png'")
      .col-sm-7.col-md-7.col-lg-7
        h1 創作理念
        p 在地球上，太陽光是生命的起源；例如植物藉由光合作用成為捕捉此能量的重要生物途徑，也提供了人類照明與免費的能源。同時，經科學證明，有色的光對人體也會產生一定的影響，啟動自我療癒系統的能力。
        img.rounded.img-thumbnail(src="static/img/work/3/work-1-1.jpg" style="width: 90%")
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
