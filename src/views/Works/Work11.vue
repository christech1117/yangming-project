<template lang="pug">
  #PlanIdea
    .row
      .col-sm-10.col-md-10.col-lg-10.text-center.offset
        ol
          router-link(:to="{ path: '/work/1-1' }") 
            li.submenu.active 《雲想》
          router-link(:to="{ path: '/work/2-1' }") 
            li.submenu 《大地之書》
          router-link(:to="{ path: '/work/3-1' }") 
            li.submenu 《光之舞》
          router-link(:to="{ path: '/work/4-1' }") 
            li.submenu 《復原．新生》
          router-link(:to="{ path: '/work/5-1' }") 
            li.submenu 《土地之聲》
    .row
      .col-sm-3.col-md-3.col-lg-3.text-left.padding-offset
        img.rounded.workcontent(src="/assets/button/work-1focus.png")
        span 作者：胡棟民<br>
        span 創作年代：2017<br>
        span 尺寸：長570×寬550×高470公分<br>
        span 材質：合成樹脂烤漆<br>

      .col-sm-3.col-md-3.col-lg-3.text-center
        ul
          li
            router-link(:to="{ path: '/work/1-1' }")
              img.rounded(src="@/assets/button/workmenu-1focus.png" onmouseover="this.src='/assets/button/workmenu-1focus.png'" onmouseout="this.src='/assets/button/workmenu-1focus.png'")
          li
            router-link(:to="{ path: '/work/1-2' }")
              img.rounded(src="/assets/button/workmenu-2.png" onmouseover="this.src='/assets/button/workmenu-2focus.png'" onmouseout="this.src='/assets/button/workmenu-2.png'")
          li
            router-link(:to="{ path: '/work/1-3' }")
              img.rounded(src="/assets/button/workmenu-3.png" onmouseover="this.src='/assets/button/workmenu-3focus.png'" onmouseout="this.src='/assets/button/workmenu-3.png'")
      .col-sm-5.col-md-5.col-lg-5
        h1 創作理念
        p 試圖在這樣令人不安的醫療空間中，讓所有受傷的心靈可以藉由作品得到慰藉與撫平，以最純粹的白色添加些許漸層七彩，除了增加作品豐富度也像醫護人員為病患服務最純粹之心，治療病患外在的傷，而「雲想」則療癒每位進出醫院民眾之心。
        img.rounded.workcontent(src="/assets/button/plan-1.png")
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
