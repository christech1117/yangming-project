<template lang="pug">
  #Work
    .row
      .col-sm-10.col-md-10.col-lg-10.text-center.offset
        ol
          router-link.ainline(:to="{ path: '/work/1-1' }") 
            li.submenu.active 《雲想》
          router-link.ainline(:to="{ path: '/work/2-1' }") 
            li.submenu 《大地之書》
          router-link.ainline(:to="{ path: '/work/3-1' }") 
            li.submenu 《光之舞》
          router-link.ainline(:to="{ path: '/work/4-1' }") 
            li.submenu 《復原．新生》
          router-link.ainline(:to="{ path: '/work/5-1' }") 
            li.submenu 《土地之聲》
    .row
      .col-sm-12.col-md-12.col-lg-4.text-center
        .row
          .col-sm-12.col-md-12.col-lg-12
            img.rounded.workcontent(src="static/img/button/work-1focus.png")
          .col-sm-12.col-md-12.col-lg-12
            span 作者：胡棟民<br>
            span 尺寸：長570×寬550×高470cm<br>
            span 材質：合成樹脂烤漆<br>
        ul
          li
            router-link(:to="{ path: '/work/1-1' }")
              img.rounded(src="static/img/button/workmenu-1.png" onmouseover="this.src='static/img/button/workmenu-1focus.png'" onmouseout="this.src='static/img/button/workmenu-1.png'")
          li
            router-link(:to="{ path: '/work/1-2' }")
              img.rounded(src="static/img/button/workmenu-2.png" onmouseover="this.src='static/img/button/workmenu-2focus.png'" onmouseout="this.src='static/img/button/workmenu-2.png'")
          li
            router-link(:to="{ path: '/work/1-3' }")
              img.rounded(src="static/img/button/workmenu-3focus.png" onmouseover="this.src='static/img/button/workmenu-3focus.png'" onmouseout="this.src='static/img/button/workmenu-3focus.png'")
      .col-sm-12.col-md-12.col-lg-7
        h1 成果展現
        img.rounded.workcontent.img-thumbnail(src="static/img/work/1/work-3-1.jpg" style="width: 50%; height: 25%")
        img.rounded.workcontent.img-thumbnail(src="static/img/work/1/work-3-3.jpg" style="width: 50%; height: 25%")
        img.rounded.workcontent.img-thumbnail(src="static/img/work/1/work-3-2.jpg" style="width: 50%; height: 35%")
        img.rounded.workcontent.img-thumbnail(src="static/img/work/1/work-3-4.jpg" style="width: 50%; height: 35%")
        img.rounded.workcontent.img-thumbnail(src="static/img/work/1/work-3-5.jpg" style="width: 50%")
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
