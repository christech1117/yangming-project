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
            li.submenu 《光之舞》
          router-link.ainline(:to="{ path: '/work/4-1' }") 
            li.submenu 《復原．新生》
          router-link.ainline(:to="{ path: '/work/5-1' }") 
            li.submenu.active 《土地之聲》
    .row
      .col-sm-12.col-md-12.col-lg-4.text-center
        .row
          .col-sm-12.col-md-12.col-lg-12
            img.rounded.workcontent(src="static/img/button/work-5focus.png")
          .col-sm-12.col-md-12.col-lg-12
            span 作者：金澤健一<br>
            span 尺寸：外徑φ380cm × 內徑φ200cm × 座高75cm<br>
            span 材質：不鏽鋼<br>

        ul
          li
            router-link(:to="{ path: '/work/5-1' }")
              img.rounded(src="static/img/button/workmenu-1focus.png" onmouseover="this.src='static/img/button/workmenu-1focus.png'" onmouseout="this.src='static/img/button/workmenu-1focus.png'")
          li
            router-link(:to="{ path: '/work/5-2' }")
              img.rounded(src="static/img/button/workmenu-2.png" onmouseover="this.src='static/img/button/workmenu-2focus.png'" onmouseout="this.src='static/img/button/workmenu-2.png'")
          li
            router-link(:to="{ path: '/work/5-3' }")
              img.rounded(src="static/img/button/workmenu-3.png" onmouseover="this.src='static/img/button/workmenu-3focus.png'" onmouseout="this.src='static/img/button/workmenu-3.png'")
      .col-sm-12.col-md-12.col-lg-7
        h1 創作理念
        p 每個人心中都有一響難忘的聲音，特別是和土地有關的聲音，總能令人感到慰藉。透過「敲擊」 「聆聽」的行為遙想打鐵街過往的歲月，從聽覺獲得不同的感官刺激，為沉重的鬥病生活添增新鮮色彩。
        img.rounded.img-thumbnail(src="static/img/work/5/work-1-1.jpg" style="width: 90%")
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
