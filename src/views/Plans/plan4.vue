<template lang="pug">
  #Plan
    .row
      .col-sm-10.col-md-10.col-lg-10.submenu
        ol
          span 。
          router-link.ainline(:to="{ path: '/plan/idea' }") 
            li.submenu 公共藝術理念
          span 。
          router-link.ainline(:to="{ path: '/plan/team' }") 
            li.submenu 行政團隊
          span 。
    .row
      .col-sm-4.col-md-4.col-lg-4.text-center
        ul
          li
            router-link(:to="{ path: '/plan/3' }")
              img.rounded(src="static/img/button/plan-3.png" onmouseover="this.src='static/img/button/plan-3focus.png'" onmouseout="this.src='static/img/button/plan-3.png'")
          li
            router-link(:to="{ path: '/plan/4' }")
              img.rounded(src="static/img/button/plan-4focus.png" onmouseover="this.src='static/img/button/plan-4focus.png'" onmouseout="this.src='static/img/button/plan-4focus.png'")
      .col-sm-7.col-md-7.col-lg-7
        h1 公共藝術導覽影片
        p ● 影片內容：透過藝術家訪談認識本案公共藝術作品創作理念、設置過程。
        p ● 採訪藝術家：《復原‧新生》-許維忠、《雲想》-胡棟民、《光之舞》-許敬忠、《大地之書》-笠原由起子、《土地之聲》-金澤健一
        p ● 執行單位：羅傑藝術文化有限公司
        p ● 攝影團隊：榖雨展演協創
        
        iframe(width="560" height="315" src="https://www.youtube.com/embed/hyAyS4ZdQuk" frameborder="0" allowfullscreen)
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
