<template lang="pug">
  #PlanIdea
    .row
      .col-sm-10.col-md-10.col-lg-10.text-right.offset
        ol
          span 。
          router-link(:to="{ path: '/scene/pre/1' }") 
            li.submenu 前期藝術參與
          span 。
          router-link(:to="{ path: '/scene/med/1' }") 
            li.submenu.active 藝術家工作坊
          span 。
          router-link(:to="{ path: '/scene/lat/1' }") 
            li.submenu 永續推廣
          span 。
    .row
      .col-sm-3.col-md-3.col-lg-3.text-center
        ul
          li
            router-link(:to="{ path: '/scene/med/1' }")
              img.rounded(src="/static/img/button/scene-med-1.png" onmouseover="this.src='/static/img/button/scene-med-1focus.png'" onmouseout="this.src='/static/img/button/scene-med-1focus.png'")
          li
            router-link(:to="{ path: '/scene/med/2' }")
              img.rounded(src="/static/img/button/scene-med-2.png" onmouseover="this.src='/static/img/button/scene-med-2focus.png'" onmouseout="this.src='/static/img/button/scene-med-2.png'")
          li
            router-link(:to="{ path: '/scene/med/3' }")
              img.rounded(src="/static/img/button/scene-med-3.png" onmouseover="this.src='/static/img/button/scene-med-3focus.png'" onmouseout="this.src='/static/img/button/scene-med-3.png'")
          li
            router-link(:to="{ path: '/scene/med/4' }")
              img.rounded(src="/static/img/button/scene-med-4focus.png" onmouseover="this.src='/static/img/button/scene-med-4focus.png'" onmouseout="this.src='/static/img/button/scene-med-4.png'")
          li
            router-link(:to="{ path: '/scene/med/5' }")
              img.rounded(src="/static/img/button/scene-med-5.png" onmouseover="this.src='/static/img/button/scene-med-5focus.png'" onmouseout="this.src='/static/img/button/scene-med-5.png'")
      .col-sm-8.col-md-8.col-lg-8
        h1 計畫介紹
        p 陽明大學附設醫院成立於2008年，是最年輕的大學附設醫院，但其前身衛生署立宜蘭醫院卻已擁有超過百年的歷史，是蘭陽地區歷史最悠久的醫院。創始於日治時代1896年，1945年由國民政府接收為臺灣省省立宜蘭醫院，後再改制為衛生署署立宜蘭醫院，它一直是蘭陽地區的重要醫療院所，被當地民眾稱為“宜蘭大病院”。
        p 本院雖屬萌芽發生階段，由於營運穩健成長，目前新民院區空間已不敷使用，為了給予民眾醫學中心級的醫療服務，包括照顧品質及就醫環境，而有新建蘭陽院區的計畫。也同步進行公共藝術設置計畫(*文化部公共藝術設置辦法規定「公有建築物造價百分之一」需作為公共藝術設置之用)，故委託羅傑藝術文化有限公司協助代辦及徵選公共藝術，邀請本院院長羅世薰、社區醫學中心主任徐迺維、建築師許常吉、台北藝術大學美術學院美術學系教授張正仁老師、理繼文化藝術有限公司總監李良仁、中冶環境造型顧問有限公司代表郭中端、銘傳大學商業設計系專任教授陳振輝、田中央聯郭合建築師事務所建築師黃聲遠及宜蘭大學建築及永續規劃究所專任副教授何武璋，為本案擔任執行及徵選小組委員。
        p 本公共藝術設置計畫以公開徵選方式，徵選出京石文化設計有限公司為本院設置公共藝術，包含了永久性及臨時性公共藝術作品、民眾參與活動及揭幕表演屌覽活動等等。
        h1 公共藝術設置理念
        h2(style="color:#00d1b2") 主題: 療癒森林
        p 史懷哲所說名言： 「每個人心中都有他的蘭巴倫」
        p 生命如同是顆樹，聖經的第一卷書「創世紀」中記載：伊甸園裡有許多樹，其中有生命樹。人吃了善惡樹的禁果之後被趕出伊甸，不能摘食生命樹。在聖經的最後一本書「啟示錄」裡，宇宙的新天新地裡有生命樹所結的果子，是為醫治萬民。療癒之森是人類企盼的原鄉。森林療法打開了一扇門，通往回到伊甸的路。睽違千萬年的生命樹，正等我們去擁抱！
        p(style="color:#42b983") 休， 是人依靠著樹木， 森林是充滿無聲之聲， 遠離日常生活的療癒空間。
        p 療癒之森主要傳達的精神就在於相信：人們在獲得妥善的照顧與醫療，有如在綠意盎然的森林中， 心靈與身體將豁然痊癒。在大自然中， 吹著微風綠蔭鳥鳴下，感受落葉的芳香、望著樹葉隙縫灑落的陽光或樹冠、飽嚐樹木花草的顏色、肌膚上吹拂著林間的微風、傾聽葉片的擺動、小河的流水聲和自己內心的聲音，體驗季節的變動，恢復生命力，產生對自己和世界的新眼光。

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
  margin: 2rem 0

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
</style>
