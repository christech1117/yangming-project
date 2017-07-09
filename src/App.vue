<template lang="pug">
  #app
    .cover
    router-link(:to="{ path: '/' }")
      .brand
    .container
      .row
        .col-sm-3.col-md-3.col-lg-3.text-center.menu-left
          h3 計畫介紹
        .col-sm-6.col-md-6.col-lg-6.text-center.menu-center
          h3 藝術家作品計畫
        .col-sm-3.col-md-3.col-lg-3.text-center.menu-right
          h3 民眾參與花絮
    router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
@import "~bootstrap/scss/bootstrap"

body
  font-size: 16px
h3
  margin-bottom: 1em
.cover
  height: 30em
  position: relative
  background: url("./assets/benner.jpg")
  background-position: center center
  background-repeat: no-repeat
  background-size: contain
  transition: 0.5s

.brand
  height: 10em
  width: 40em
  background: url("./assets/brand.png")
  background-position: center center
  background-repeat: no-repeat
  background-size: contain
  position: absolute
  top: 100px
  right: 110px
  
.menu-left
  color: blue

.menu-center
  color: green

.menu-right
  color: orange
</style>
