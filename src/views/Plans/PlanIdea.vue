<template lang="pug">
  #Plan
    .row
      .col-sm-10.col-md-10.col-lg-10.submenu
        ol
          span 。
          router-link.ainline(:to="{ path: '/plan/idea' }") 
            li.submenu.active 公共藝術理念
          span 。
          router-link.ainline(:to="{ path: '/plan/team' }") 
            li.submenu 行政團隊
          span 。
    .row
      .col-sm-12.col-md-12.col-lg-4.text-center
        ul
          li
            router-link(:to="{ path: '/plan/3' }")
              img.rounded(src="static/img/button/plan-3.png" onmouseover="this.src='static/img/button/plan-3focus.png'" onmouseout="this.src='static/img/button/plan-3.png'")
          li
            router-link(:to="{ path: '/plan/4' }")
              img.rounded(src="static/img/button/plan-4.png" onmouseover="this.src='static/img/button/plan-4focus.png'" onmouseout="this.src='static/img/button/plan-4.png'")
      .col-sm-12.col-md-12.col-lg-7
        h1 陽明大學附設醫院公共藝術設置計畫
        p 陽明大學附設醫院成立於2008年，是最年輕的大學附設醫院，但其前身衛生署立宜蘭醫院卻已擁有超過百年的歷史，是蘭陽地區歷史最悠久的醫院。創始於日治時代1896年，1945年由國民政府接收為臺灣省省立宜蘭醫院，後再改制為衛生署署立宜蘭醫院，它一直是蘭陽地區的重要醫療院所，被當地民眾稱為“宜蘭大病院”。
        p 本院雖屬萌芽發生階段，由於營運穩健成長，目前新民院區空間已不敷使用，為了給予民眾醫學中心級的醫療服務，包括照顧品質及就醫環境，而有新建蘭陽院區的計畫。也同步進行公共藝術設置計畫(*文化部公共藝術設置辦法規定「公有建築物造價百分之一」需作為公共藝術設置之用)，故委託羅傑藝術文化有限公司協助代辦及徵選公共藝術，邀請本院院長羅世薰、社區醫學中心主任徐迺維、建築師許常吉、台北藝術大學美術學院美術學系教授張正仁老師、理繼文化藝術有限公司總監李良仁、中冶環境造型顧問有限公司代表郭中端、銘傳大學商業設計系專任教授陳振輝、田中央聯郭合建築師事務所建築師黃聲遠及宜蘭大學建築及永續規劃究所專任副教授何武璋，為本案擔任執行及徵選小組委員。
        p 本公共藝術設置計畫以公開徵選方式，徵選出京石文化設計有限公司為本院設置公共藝術，包含了永久性及臨時性公共藝術作品、民眾參與活動及揭幕表演屌覽活動等等。
        h1 公共藝術設置理念
        h2(style="color:#00B050") 主題: 療癒森林
        p(style="color:#9B6233") 史懷哲所說名言： 「每個人心中都有他的蘭巴倫」
        p 生命如同是顆樹，聖經的第一卷書「創世紀」中記載：伊甸園裡有許多樹，其中有生命樹。人吃了善惡樹的禁果之後被趕出伊甸，不能摘食生命樹。在聖經的最後一本書「啟示錄」裡，宇宙的新天新地裡有生命樹所結的果子，是為醫治萬民。療癒之森是人類企盼的原鄉。森林療法打開了一扇門，通往回到伊甸的路。睽違千萬年的生命樹，正等我們去擁抱！
        p(style="color:#008500") 休， 是人依靠著樹木， 森林是充滿無聲之聲， 遠離日常生活的療癒空間。
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

</style>
