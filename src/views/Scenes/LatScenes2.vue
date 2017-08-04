<template lang="pug">
  #Scene
    .row
      .col-sm-10.col-md-10.col-lg-10.text-right.offset
        ol
          span 。
          router-link(:to="{ path: '/scene/pre/1' }") 
            li.submenu 前期藝術參與
          span 。
          router-link(:to="{ path: '/scene/med/1' }") 
            li.submenu 藝術家工作坊
          span 。
          router-link(:to="{ path: '/scene/lat/1' }") 
            li.submenu.active 永續推廣
          span 。
    .row
      .col-sm-3.col-md-3.col-lg-3.text-center
        ul
          li
            router-link(:to="{ path: '/scene/lat/1' }")
              img.rounded(src="static/img/button/scene-lat-1.png" onmouseover="this.src='static/img/button/scene-lat-1focus.png'" onmouseout="this.src='static/img/button/scene-lat-1focus.png'")
          li
            router-link(:to="{ path: '/scene/lat/2' }")
              img.rounded(src="static/img/button/scene-lat-2focus.png" onmouseover="this.src='static/img/button/scene-lat-2focus.png'" onmouseout="this.src='static/img/button/scene-lat-2focus.png'")
          li
            router-link(:to="{ path: '/scene/lat/3' }")
              img.rounded(src="static/img/button/plan-4.png" onmouseover="this.src='static/img/button/plan-4focus.png'" onmouseout="this.src='static/img/button/plan-4.png'")
      .col-sm-8.col-md-8.col-lg-8
        h1 成果專輯
        
          p ● 線上連結網址：
            router-link(:to="{ path: '/' }") ＰＤＦ
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
