<template lang="pug">
  #app
    .cover
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
.cover
  height: 30em
  background: url("./assets/home.jpg")
  background-position: center center
  background-repeat: no-repeat
  background-size: cover
  transition: 0.5s
  margin-bottom: 20px
</style>
