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
      .col-sm-3.col-md-3.col-lg-3.text-left.padding-offset
        img.rounded.workcontent(src="static/img/button/work-2focus.png")
        span 作者：笠原由起子<br>
        span 尺寸：(鑄銅)長23×寬28×高4cm〜長47×寬28×高6cm、(石)寬×深25×30cm~50×30cm；高40〜130cm<br>
        span 材質：鑄銅、石<br>

      .col-sm-2.col-md-2.col-lg-2.text-center
        ul
          li
            router-link(:to="{ path: '/work/2-1' }")
              img.rounded(src="static/img/button/workmenu-1.png" onmouseover="this.src='static/img/button/workmenu-1focus.png'" onmouseout="this.src='static/img/button/workmenu-1.png'")
          li
            router-link(:to="{ path: '/work/2-2' }")
              img.rounded(src="static/img/button/workmenu-2focus.png" onmouseover="this.src='static/img/button/workmenu-2focus.png'" onmouseout="this.src='static/img/button/workmenu-2focus.png'")
          li
            router-link(:to="{ path: '/work/2-3' }")
              img.rounded(src="static/img/button/workmenu-3.png" onmouseover="this.src='static/img/button/workmenu-3focus.png'" onmouseout="this.src='static/img/button/workmenu-3.png'")
      .col-sm-6.col-md-6.col-lg-6
        h1 創作過程
        .row
          .col-sm-12.col-md-12.col-lg-12.text-center
            img.rounded.workcontent.img-thumbnail(src="static/img/work/2/work-2-1.jpg" style="width: 80%")
            p.text-center 1.基礎開挖
          .col-sm-12.col-md-12.col-lg-12.text-center
            img.rounded.workcontent.img-thumbnail(src="static/img/work/2/work-2-2.jpg" style="width: 80%")
            p.text-center 2.第一層混凝土
          .col-sm-12.col-md-12.col-lg-12.text-center
            img.rounded.workcontent.img-thumbnail(src="static/img/work/2/work-2-3.jpg" style="width: 80%")
            p.text-center 3.第二層混凝土
          .col-sm-12.col-md-12.col-lg-12.text-center
            img.rounded.workcontent.img-thumbnail(src="static/img/work/2/work-2-4.jpg" style="width: 80%")
            p.text-center 4.石材固定、作品配置確認
          .col-sm-12.col-md-12.col-lg-12.text-center
            img.rounded.workcontent.img-thumbnail(src="static/img/work/2/work-2-5.jpg" style="width: 80%")
            p.text-center 5.作品安裝固定
          .col-sm-12.col-md-12.col-lg-12.text-center
            img.rounded.workcontent.img-thumbnail(src="static/img/work/2/work-2-6.jpg" style="width: 80%")
            p.text-center 6.作品說明牌安裝
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
