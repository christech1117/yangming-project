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
              img.rounded(src="static/img/button/scene-lat-1focus.png" onmouseover="this.src='static/img/button/scene-lat-1focus.png'" onmouseout="this.src='static/img/button/scene-lat-1focus.png'")
          li
            router-link(:to="{ path: '/scene/lat/2' }")
              img.rounded(src="static/img/button/scene-lat-2.png" onmouseover="this.src='static/img/button/scene-lat-2focus.png'" onmouseout="this.src='static/img/button/scene-lat-2.png'")
          li
            router-link(:to="{ path: '/scene/lat/3' }")
              img.rounded(src="static/img/button/plan-4.png" onmouseover="this.src='static/img/button/plan-4focus.png'" onmouseout="this.src='static/img/button/plan-4.png'")
      .col-sm-7.col-md-7.col-lg-7
        h1 揭幕表演暨導覽活動
        p 國立陽明大學附設醫院成立於2008年，是最年輕的大學附設醫院，為了給予民眾醫學中心級的醫療服務，而新建了蘭陽院區也同時繼續加強醫護人員以“病人為中心”的醫療觀念，提供更貼心更人性化的服務，讓來到院區的民眾及病友都能感受到醫院用心的照顧及治療。
        p 醫學科學不斷創新的今日，人類試圖與疾病對抗、與生命的長度賽跑，一劑又一劑的疫苗被開發，用來消滅各類的病菌、延緩人們的老化。然而藝術的介入，便是試圖在這樣令人不安的醫療空間中，讓所有受傷的心靈可以得到慰藉與撫平。
        p 國立陽明大學附設醫院提供民眾療癒身心的空間，並用最細心及專業的技術為病友減輕痛苦，因此京石文化設計有限公司針對國立陽明大學附設醫院，以「療癒森林」作為主題，並邀請五位國內外藝術家設計作品，期待作品能夠將醫院療癒病患的印象藉由作品柔和地傳達與民親近，提升醫院形象。
        p 於106年6月16日在國立陽明大學附設醫院蘭陽院區舉行公共藝術設置剪綵儀式，並邀請國立陽明大學附設醫院院長 羅世薰院長、副院長、主任秘書、主計及藝術家團隊共同剪綵，為開幕導覽活動揭開序幕。並邀請藝術家親臨現場，分享藝術作品之創作理念，與民眾近距離互動交流。
        
        .row
          .col-sm-12.col-md-12.col-lg-12.text-center
            img.img-thumbnail(src="static/img/scene/lat-1-1.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/lat-1-2.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/lat-1-3.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/lat-1-4.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/lat-1-5.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/lat-1-6.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/lat-1-7.jpg" style="width: 30%")
            img.img-thumbnail(src="static/img/scene/lat-1-8.jpg" style="width: 30%")
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
