<template lang="pug">
  #app
    .cover(:style="{backgroundImage: 'url(' + bg + ')'}")
    router-link(:to="{ path: '/' }")
      .brand(:style="{backgroundImage: 'url(' + logo + ')'}")
    .box
    .container
      .row
        .col-sm-3.col-md-3.col-lg-3.text-center
          router-link(:to="{ path: '/plan/idea' }")
            img.menu.plan(src="static/img/button/plan-0.png")
        .col-sm-5.col-md-5.col-lg-6.text-center
          router-link(:to="{ path: '/work/1-1' }")
            img.menu(src="static/img/button/work-0.png")
        .col-sm-3.col-md-3.col-lg-3
          router-link(:to="{ path: '/scene/pre/1' }")
            img.menu(src="static/img/button/scene-0.png")
      router-view
      .footer
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      bg: require("@/assets/banner.png"),
      logo: require("@/assets/brand.png")
    }
  }
}
</script>

<style lang="sass">
@import "~bootstrap/scss/bootstrap"
@import './static/css/style.sass'

*
  animation: fadeIn 0.5s ease both
  
.cover
  height: 35rem
  width: 100%
  z-index: -9999
  position: absolute
  // background: url(/static/img/banner.png)
  background-position: center center
  background-repeat: no-repeat
  background-size: contain
  margin-bottom: -3.5rem

.brand
  height: 25rem
  width: 32%
  right: 20%
  position: absolute
  // background: url(/static/img/brand.png)
  background-position: center center
  background-repeat: no-repeat
  background-size: contain
  +trans
  &:hover
    width: 34%

.box
  position: relative
  height: 30rem
  z-index: -9999

.row
  a
    color: #555
    &:hover
      animation: fadeInUp 2s ease both
  img
    margin-top: 2.5rem
    margin-bottom: 1.5rem
    
  .menu
    width: 23rem

  .plan
    width: 14rem

.submenu
  display: inline

.footer
  padding: 3rem
</style>
