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
      .col-sm-4.col-md-4.col-lg-4.text-center
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
              img.rounded(src="static/img/button/workmenu-1focus.png" onmouseover="this.src='static/img/button/workmenu-1focus.png'" onmouseout="this.src='static/img/button/workmenu-1focus.png'")
          li
            router-link(:to="{ path: '/work/1-2' }")
              img.rounded(src="static/img/button/workmenu-2.png" onmouseover="this.src='static/img/button/workmenu-2focus.png'" onmouseout="this.src='static/img/button/workmenu-2.png'")
          li
            router-link(:to="{ path: '/work/1-3' }")
              img.rounded(src="static/img/button/workmenu-3.png" onmouseover="this.src='static/img/button/workmenu-3focus.png'" onmouseout="this.src='static/img/button/workmenu-3.png'")
      .col-sm-7.col-md-7.col-lg-7
        h1 創作理念
        p 試圖在這樣令人不安的醫療空間中，讓所有受傷的心靈可以藉由作品得到慰藉與撫平，以最純粹的白色添加些許漸層七彩，除了增加作品豐富度也像醫護人員為病患服務最純粹之心，治療病患外在的傷，而「雲想」則療癒每位進出醫院民眾之心。
        img.rounded.img-thumbnail(src="static/img/work/1/work-1-1.jpg" style="width: 90%")
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
