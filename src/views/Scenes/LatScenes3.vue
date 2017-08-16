<template lang="pug">
  #Scene
    .row
      .col-sm-10.col-md-10.col-lg-10.text-right.offset
        ol
          span 。
          router-link.ainline(:to="{ path: '/scene/pre/1' }") 
            li.submenu 前期藝術參與
          span 。
          router-link.ainline(:to="{ path: '/scene/med/1' }") 
            li.submenu 藝術家工作坊
          span 。
          router-link.ainline(:to="{ path: '/scene/lat/1' }") 
            li.submenu.active 永續推廣
          span 。
    .row
      .col-sm-4.col-md-4.col-lg-4.text-center
        ul
          li
            router-link(:to="{ path: '/scene/lat/1' }")
              img.rounded(src="static/img/button/scene-lat-1.png" onmouseover="this.src='static/img/button/scene-lat-1focus.png'" onmouseout="this.src='static/img/button/scene-lat-1focus.png'")
          li
            router-link(:to="{ path: '/scene/lat/2' }")
              img.rounded(src="static/img/button/scene-lat-2.png" onmouseover="this.src='static/img/button/scene-lat-2focus.png'" onmouseout="this.src='static/img/button/scene-lat-2.png'")
          li
            router-link(:to="{ path: '/scene/lat/3' }")
              img.rounded(src="static/img/button/plan-4focus.png" onmouseover="this.src='static/img/button/plan-4focus.png'" onmouseout="this.src='static/img/button/plan-4focus.png'")
      .col-sm-7.col-md-7.col-lg-7
        h1 成果專輯
        p ● 影片內容：透過藝術家訪談認識本案公共藝術作品創作理念、設置過程。
        p ● 採訪藝術家：《復原‧新生》-許維忠、《雲想》-胡棟民、《光之舞》-許敬忠、《大地之書》-笠原由起子、《土地之聲》-金澤健一
        p ● 執行單位：羅傑藝術文化有限公司
        p ● 攝影團隊：榖雨展演協創
        
        video(width="100%" controls)
          source(src="static/video/scene_video.mp4" type="video/mp4")
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
