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
      .col-sm-3.col-md-3.col-lg-3.text-left.padding-offset
        img.rounded.workcontent(src="static/img/button/work-3focus.png")
        span 作者：許敬忠<br>
        span 尺寸：長135~150cm × 寬60~130cm×高24cm<br>
        span 材質：不鏽鋼、鍍膜玻璃<br>

      .col-sm-2.col-md-2.col-lg-2.text-center
        ul
          li
            router-link(:to="{ path: '/work/3-1' }")
              img.rounded(src="static/img/button/workmenu-1.png" onmouseover="this.src='static/img/button/workmenu-1focus.png'" onmouseout="this.src='static/img/button/workmenu-1.png'")
          li
            router-link(:to="{ path: '/work/3-2' }")
              img.rounded(src="static/img/button/workmenu-2focus.png" onmouseover="this.src='static/img/button/workmenu-2focus.png'" onmouseout="this.src='static/img/button/workmenu-2focus.png'")
          li
            router-link(:to="{ path: '/work/3-3' }")
              img.rounded(src="static/img/button/workmenu-3.png" onmouseover="this.src='static/img/button/workmenu-3focus.png'" onmouseout="this.src='static/img/button/workmenu-3.png'")
      .col-sm-6.col-md-6.col-lg-6
        h1 創作過程
        .row
          .col-sm-12.col-md-12.col-lg-12.text-center
            img.rounded.workcontent.img-thumbnail(src="static/img/work/3/work-2-1.jpg" style="width: 80%")
            p.text-center 1.確認作品安裝位置
          .col-sm-12.col-md-12.col-lg-12.text-center
            img.rounded.workcontent.img-thumbnail(src="static/img/work/3/work-2-2.jpg" style="width: 80%")
            p.text-center 2.作品定位後安裝
          .col-sm-12.col-md-12.col-lg-12.text-center
            img.rounded.workcontent.img-thumbnail(src="static/img/work/3/work-2-3.jpg" style="width: 80%")
            p.text-center 3.安裝於牆面
          .col-sm-12.col-md-12.col-lg-12.text-center
            img.rounded.workcontent.img-thumbnail(src="static/img/work/3/work-2-4.jpg" style="width: 80%")
            p.text-center 4.投射燈安裝測試
          .col-sm-12.col-md-12.col-lg-12.text-center
            img.rounded.workcontent.img-thumbnail(src="static/img/work/3/work-2-5.jpg" style="width: 80%")
            p.text-center 5.覆鍍膜玻璃安裝固定
          .col-sm-12.col-md-12.col-lg-12.text-center
            img.rounded.workcontent.img-thumbnail(src="static/img/work/3/work-2-6.jpg" style="width: 80%")
            p.text-center 6.調整鍍膜玻璃角度
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
