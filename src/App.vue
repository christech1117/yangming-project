<template lang="pug">
  #app
    .cover
    router-link(:to="{ path: '/' }")
      .brand
    .row
      .col-sm-3.col-md-3.col-lg-3.text-center
        img.menu.plan(src="/static/img/button/plan-0.png")
      .col-sm-6.col-md-6.col-lg-6.text-center
        img.menu(src="/static/img/button/work-0.png")
      .col-sm-3.col-md-3.col-lg-3.text-center
        img.menu(src="/static/img/button/scene-0.png")
    router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
@import "~bootstrap/scss/bootstrap"
@import './static/css/style.sass'
  
.cover
  height: 35em
  position: relative
  background: url("./assets/banner.jpg")
  background-position: center center
  background-repeat: no-repeat
  background-size: contain

.brand
  height: 10em
  width: 50em
  background: url("./assets/brand.png")
  background-position: center center
  background-repeat: no-repeat
  background-size: contain
  position: absolute
  top: 100px
  right: 110px

.menu
  width: 300px
  margin-bottom: 1.5em

.plan
  width: 200px
</style>
