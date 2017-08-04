<template lang="pug">
  #Work
    .row
      .col-sm-10.col-md-10.col-lg-10.text-center.offset
        ol
          router-link(:to="{ path: '/work/1-1' }") 
            li.submenu 《雲想》
          router-link(:to="{ path: '/work/2-1' }") 
            li.submenu 《大地之書》
          router-link(:to="{ path: '/work/3-1' }") 
            li.submenu 《光之舞》
          router-link(:to="{ path: '/work/4-1' }") 
            li.submenu 《復原．新生》
          router-link(:to="{ path: '/work/5-1' }") 
            li.submenu.active 《土地之聲》
    .row
      .col-sm-3.col-md-3.col-lg-3.text-left.padding-offset
        img.rounded.workcontent(src="static/img/button/work-5focus.png")
        span 作者：胡棟民<br>
        span 創作年代：2017<br>
        span 尺寸：長570×寬550×高470公分<br>
        span 材質：合成樹脂烤漆<br>

      .col-sm-3.col-md-3.col-lg-3.text-center
        ul
          li
            router-link(:to="{ path: '/work/5-1' }")
              img.rounded(src="static/img/button/workmenu-1.png" onmouseover="this.src='static/img/button/workmenu-1focus.png'" onmouseout="this.src='static/img/button/workmenu-1.png'")
          li
            router-link(:to="{ path: '/work/5-2' }")
              img.rounded(src="static/img/button/workmenu-2focus.png" onmouseover="this.src='static/img/button/workmenu-2focus.png'" onmouseout="this.src='static/img/button/workmenu-2focus.png'")
          li
            router-link(:to="{ path: '/work/5-3' }")
              img.rounded(src="static/img/button/workmenu-3.png" onmouseover="this.src='static/img/button/workmenu-3focus.png'" onmouseout="this.src='static/img/button/workmenu-3.png'")
      .col-sm-5.col-md-5.col-lg-5
        h1 創作過程
        .row
          .col-sm-6.col-md-6.col-lg-6
            img.rounded.workcontent.img-thumbnail(src="static/img/work/5/work-2-1.jpg" style="width: 100%; height: 18rem")
            p.text-center 1.基礎開挖
          .col-sm-6.col-md-6.col-lg-6
            img.rounded.workcontent.img-thumbnail(src="static/img/work/5/work-2-2.jpg" style="width: 100%; height: 18rem")
            p.text-center 2.第一層混凝土
          .col-sm-6.col-md-6.col-lg-6
            img.rounded.workcontent.img-thumbnail(src="static/img/work/5/work-2-3.jpg" style="width: 100%; height: 18rem")
            p.text-center 3.底檯吊掛安裝
          .col-sm-6.col-md-6.col-lg-6
            img.rounded.workcontent.img-thumbnail(src="static/img/work/5/work-2-4.jpg" style="width: 100%; height: 18rem")
            p.text-center 4.第二層混凝土鋼筋
          .col-sm-6.col-md-6.col-lg-6
            img.rounded.workcontent.img-thumbnail(src="static/img/work/5/work-2-5.jpg" style="width: 100%; height: 18rem")
            p.text-center 5.第二層混凝土結構
          .col-sm-6.col-md-6.col-lg-6
            img.rounded.workcontent.img-thumbnail(src="static/img/work/5/work-2-6.jpg" style="width: 100%; height: 18rem")
            p.text-center 6.斷片固定
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
