<template lang="pug">
  #Home
    .container
      .row
        .col-sm-3.col-md-3.col-lg-3.text-center.menu-left
          ul.list-group(v-for="plan in plans")
            li.plan-card
              router-link(:to="{ path: '/plan/idea' }")
                  //- .menu-image.rounded-circle(:style="{ 'background-image': 'url(' + plan.image + ')' }")
                  img(:src="plan.image")
                  h4 {{ plan.title }}
        .col-sm-6.col-md-6.col-lg-6.text-center.menu-center
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
      plans: [
        {
          title: '計畫理念',
          image: '../assets/plan-team.jpg',
          url: '/plan/idea'
        },
        {
          title: '行政團隊',
          image: 'https://click.linksynergy.com/link?id=BoHFIyu6APU&offerid=323058.932344&type=2&murl=https%3A%2F%2Fwww.udemy.com%2Fdata-analysis-with-pandas%2F',
          url: '/plan/work'
        },
        {
          title: '成果影片',
          image: '../assets/works-1.jpg',
          url: '/plan/work'
        }
      ],
      works: [],
      scenes: [],
      image: "http://1.bp.blogspot.com/-8PfnHfgrH4I/TylX2v8pTMI/AAAAAAAAJJ4/TICBoSEI57o/s1600/search_by_image_image.png"
    }
  },
  computed: {
    bg_css () {
      return {
        'background-image': "url('" + this.plans.image + "')"
      }
    }
  }
}
</script>

<style scoped lang="sass">
img
  margin-bottom: 20px
  width: 250px
  height: 250px

li
  list-style-type: none
.plan-card
  animation: fadeIn 1s ease both
  position: relative
  margin-bottom: 20px
  h4
    position: absolute
    top: 40%
    left: 0
    width: 100%
    z-index: 3
.menu-image
  height: 250px
  width: 250px
  background: url("../assets/plan-team.jpg")
  background-position: center center
  background-repeat: no-repeat
  background-size: contain
  transition: 0.5s
  
</style>
