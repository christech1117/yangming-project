<template lang="pug">
  #Home
    .container
      .row
        .col-sm-3.col-md-3.col-lg-3.text-center.menu-left
          h2 計畫介紹
          router-link(:to="{ path: '/plan/idea' }")
            img.rounded-circle(src="../assets/plan-team.jpg" alt="...")
          router-link(:to="{ path: '/plan/team' }")
            img.rounded-circle(src="../assets/plan-team.jpg" alt="...")
          img.rounded-circle(src="../assets/plan-team.jpg" alt="...")
        .col-sm-6.col-md-6.col-lg-6.text-center.menu-center
          h2 藝術家作品計畫
          .row
            .col-sm-6.col-md-6.col-lg-6.text-center.menu-center
              router-link(:to="{ path: '/works/:id' }")
                img.rounded(src="../assets/works-1.jpg" alt="...")
                img.rounded(src="../assets/works-1.jpg" alt="...")
                img.rounded(src="../assets/works-1.jpg" alt="...")
            .col-sm-6.col-md-6.col-lg-6.text-center.menu-center
              router-link(:to="{ path: '/works/:id' }")
                img.rounded(src="../assets/works-1.jpg" alt="...")
                img.rounded(src="../assets/works-1.jpg" alt="...")
          
        .col-sm-3.col-md-3.col-lg-3.text-center.menu-right
          h2 民眾參與花絮
          router-link(:to="{ path: '/scenes/pre/:id' }")
            img.rounded(src="../assets/sences.jpg" alt="...")
          router-link(:to="{ path: '/scenes/med/:id' }")
            img.rounded(src="../assets/sences.jpg" alt="...")
          router-link(:to="{ path: '/scenes/last/:id' }")
            img.rounded(src="../assets/sences.jpg" alt="...")
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="sass">

h2
  margin-top: 10px
  margin-bottom: 50px

img
  margin-bottom: 20px
  width: 250px
  height: 250px

.menu-left
  color: blue

.menu-center
  color: green

.menu-right
  color: orange

</style>
