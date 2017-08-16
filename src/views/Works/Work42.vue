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
            li.submenu.active 《復原．新生》
          router-link.ainline(:to="{ path: '/work/5-1' }") 
            li.submenu 《土地之聲》
    .row
      .col-sm-4.col-md-4.col-lg-4.text-center
        .row
          .col-sm-12.col-md-12.col-lg-12
            img.rounded.workcontent(src="static/img/button/work-4focus.png")
          .col-sm-12.col-md-12.col-lg-12
            span 作者：許維忠<br>
            span 尺寸：長460×寬420×高400cm<br>
            span 材質：鑄銅<br>
        ul
          li
            router-link(:to="{ path: '/work/4-1' }")
              img.rounded(src="static/img/button/workmenu-1.png" onmouseover="this.src='static/img/button/workmenu-1focus.png'" onmouseout="this.src='static/img/button/workmenu-1.png'")
          li
            router-link(:to="{ path: '/work/4-2' }")
              img.rounded(src="static/img/button/workmenu-2focus.png" onmouseover="this.src='static/img/button/workmenu-2focus.png'" onmouseout="this.src='static/img/button/workmenu-2focus.png'")
          li
            router-link(:to="{ path: '/work/4-3' }")
              img.rounded(src="static/img/button/workmenu-3.png" onmouseover="this.src='static/img/button/workmenu-3focus.png'" onmouseout="this.src='static/img/button/workmenu-3.png'")
      .col-sm-7.col-md-7.col-lg-7.text-center
        h1 創作過程
        .row
          .col-sm-12.col-md-12.col-lg-12
            img.rounded.workcontent.img-thumbnail(src="static/img/work/4/work-2-1.jpg" style="width: 80%")
            p 1.螺栓預埋
          .col-sm-12.col-md-12.col-lg-12
            img.rounded.workcontent.img-thumbnail(src="static/img/work/4/work-2-2.jpg" style="width: 80%")
            p 2.灌注
          .col-sm-12.col-md-12.col-lg-12
            img.rounded.workcontent.img-thumbnail(src="static/img/work/4/work-2-3.jpg" style="width: 80%")
            p 3.作品進場安裝
          .col-sm-12.col-md-12.col-lg-12
            img.rounded.workcontent.img-thumbnail(src="static/img/work/4/work-2-4.jpg" style="width: 80%")
            p 4.安裝固定後RC加強
          .col-sm-12.col-md-12.col-lg-12
            img.rounded.workcontent.img-thumbnail(src="static/img/work/4/work-2-5.jpg" style="width: 80%")
            p 5.覆土
          .col-sm-12.col-md-12.col-lg-12
            img.rounded.workcontent.img-thumbnail(src="static/img/work/4/work-2-6.jpg" style="width: 80%")
            p 6.覆土植草皮完成
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
