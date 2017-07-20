<template lang="pug">
  #PlanIdea
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
            li.submenu.active 《復原．新生》
          router-link(:to="{ path: '/work/5-1' }") 
            li.submenu 《土地之聲》
    .row
      .col-sm-3.col-md-3.col-lg-3.text-left.padding-offset
        img.rounded.workcontent(src="/static/img/button/work-4focus.png")
        span 作者：許維忠<br>
        span 創作年代：2017<br>
        span 尺寸：長460×寬420×高400公分<br>
        span 材質：鑄銅<br>
      .col-sm-3.col-md-3.col-lg-3.text-center
        ul
          li
            router-link(:to="{ path: '/work/4-1' }")
              img.rounded(src="/static/img/button/workmenu-1focus.png" onmouseover="this.src='/static/img/button/workmenu-1focus.png'" onmouseout="this.src='/static/img/button/workmenu-1focus.png'")
          li
            router-link(:to="{ path: '/work/4-2' }")
              img.rounded(src="/static/img/button/workmenu-2.png" onmouseover="this.src='/static/img/button/workmenu-2focus.png'" onmouseout="this.src='/static/img/button/workmenu-2.png'")
          li
            router-link(:to="{ path: '/work/4-3' }")
              img.rounded(src="/static/img/button/workmenu-3.png" onmouseover="this.src='/static/img/button/workmenu-3focus.png'" onmouseout="this.src='/static/img/button/workmenu-3.png'")
      .col-sm-5.col-md-5.col-lg-5
        h1 創作理念
        p 以雙蛇纏繞成圓形的造形，融合如意吉祥圖案( 雙如意) 象徵醫病雙方面的圓滿。以富含生命力 的形體扭動、翻騰，視覺上從外向內或從內（大廳）向外，都能呈現動中宜靜氣勢；單純的色調（古銅綠）靜謐安寧，試著幫助人們舒解心情、撫慰不安。
        img.rounded.workcontent(src="/static/img/button/plan-1.png")
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

h1
  font-size: 1.8rem
  margin: 2.5rem 0

p
  font-size: 1.3rem

ol
  margin: -1.2rem 0 2.2rem 6rem
  span
    color: #005AB5
  a
    color: #005AB5
    &:hover
      border-bottom: #005AB5 1px solid
.submenu
  display: inline

.active
  border-bottom: #005AB5 1px solid

.offset
  margin-left: 15rem
.padding-offset
  padding-left: 15rem
.workcontent
  width: 100%
</style>
