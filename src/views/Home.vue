<template lang="pug">
  #Home
    .row
      .col-sm-3.col-md-3.col-lg-3.text-center
        ul.list-group
          li
            router-link(:to="{ path: '/plan/idea' }")
              img.rounded(src="static/img/button/plan-1.png" onmouseover="this.src='static/img/button/plan-1focus.png'" onmouseout="this.src='static/img/button/plan-1.png'")
          li
            router-link(:to="{ path: '/plan/team' }")
              img.rounded(src="static/img/button/plan-2.png" onmouseover="this.src='static/img/button/plan-2focus.png'" onmouseout="this.src='static/img/button/plan-2.png'")
          li
            router-link(:to="{ path: '/plan/3' }")
              img.rounded(src="static/img/button/plan-3.png" onmouseover="this.src='static/img/button/plan-3focus.png'" onmouseout="this.src='static/img/button/plan-3.png'")
          li
            router-link(:to="{ path: '/plan/4' }")
              img.rounded(src="static/img/button/plan-4.png" onmouseover="this.src='static/img/button/plan-4focus.png'" onmouseout="this.src='static/img/button/plan-4.png'")

      .col-sm-6.col-md-6.col-lg-6
        .row
          .col-sm-6.col-md-6.col-lg-6.work-2.text-right.work-menu
            router-link(:to="{ path: '/work/1-1' }")
              img.rounded(src="static/img/button/work-1.png" onmouseover="this.src='static/img/button/work-1focus.png'" onmouseout="this.src='static/img/button/work-1.png'")
          .col-sm-6.col-md-6.col-lg-6.work-3.text-left.work-menu
            router-link(:to="{ path: '/work/2-1' }")
              img.rounded(src="static/img/button/work-2.png" onmouseover="this.src='static/img/button/work-2focus.png'" onmouseout="this.src='static/img/button/work-2.png'")
          .col-sm-4.col-md-4.col-lg-4.work-4.text-center
            router-link(:to="{ path: '/work/3-1' }")
              img.rounded(src="static/img/button/work-3.png" onmouseover="this.src='static/img/button/work-3focus.png'" onmouseout="this.src='static/img/button/work-3.png'")
          .col-sm-4.col-md-4.col-lg-4.work-6.text-center
            router-link(:to="{ path: '/work/5-1' }")
              img.rounded(src="static/img/button/work-5.png" onmouseover="this.src='static/img/button/work-5focus.png'" onmouseout="this.src='static/img/button/work-5.png'")
          .col-sm-4.col-md-4.col-lg-4.work-5.text-center
            router-link(:to="{ path: '/work/4-1' }")
              img.rounded(src="static/img/button/work-4.png" onmouseover="this.src='static/img/button/work-4focus.png'" onmouseout="this.src='static/img/button/work-4.png'")

      .col-sm-3.col-md-3.col-lg-3.text-center
        ul.list-group
          li
            router-link(:to="{ path: '/scene/pre/1' }")
              img.rounded(src="static/img/button/scene-1.png" onmouseover="this.src='static/img/button/scene-1focus.png'" onmouseout="this.src='static/img/button/scene-1.png'")
          li
            router-link(:to="{ path: '/scene/med/1' }")
              img.rounded(src="static/img/button/scene-2.png" onmouseover="this.src='static/img/button/scene-2focus.png'" onmouseout="this.src='static/img/button/scene-2.png'")
          li
            router-link(:to="{ path: '/scene/lat/1' }")
              img.rounded(src="static/img/button/scene-3.png" onmouseover="this.src='static/img/button/scene-3focus.png'" onmouseout="this.src='static/img/button/scene-3.png'")
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      plans: [
        {
          active: false,
          title: '計畫理念',
          image: 'static/img/button/plan-1.png',
          focus: 'static/img/button/plan-1focus.png',
          url: '/plan/idea'
          
        },
        {
          active: false,
          title: '行政團隊',
          image: 'static/img/button/plan-2.png',
          focus: 'static/img/button/plan-2focus.png',
          url: '/plan/work'
        },
        {
          active: false,
          title: '成果影片',
          image: 'static/img/button/plan-3.png',
          focus: 'static/img/button/plan-3.png',
          url: '/plan/video'
        },
        {
          active: false,
          title: '成果影片2',
          image: 'static/img/button/plan-4.png',
          focus: 'static/img/button/plan-4.png',
          url: '/plan/video2'
        }
      ],
      // works: [
      //   {
      //     active: false,
      //     title: '雲想',
      //     image: 'static/img/button/work-2.png',
      //     focus: 'static/img/button/work-2focus.png',
      //     url: '/work/1'
      //   },
      //   {
      //     active: false,
      //     title: '大地之書',
      //     image: 'static/img/button/work-3.png',
      //     focus: 'static/img/button/work-3focus.png',
      //     url: '/work/1'
      //   },
      //   {
      //     active: false,
      //     title: '光之舞',
      //     image: 'static/img/button/work-4.png',
      //     focus: 'static/img/button/work-4focus.png',
      //     url: '/work/1'
      //   },
      //   {
      //     active: false,
      //     title: '復原．新生',
      //     image: 'static/img/button/work-5.png',
      //     focus: 'static/img/button/work-5focus.png',
      //     url: '/work/1'
      //   },
      //   {
      //     active: false,
      //     title: '土地之聲',
      //     image: 'static/img/button/work-6.png',
      //     focus: 'static/img/button/work-6focus.png',
      //     url: '/work/1'
      //   },
      // ],
      scenes: [
        {
          active: false,
          title: '計畫理念',
          image: 'static/img/button/scene-1.png',
          focus: 'static/img/button/scene-1focus.png',
          url: '/scene/idea'
        },
        {
          active: false,
          title: '行政團隊',
          image: 'static/img/button/scene-2.png',
          focus: 'static/img/button/scene-2focus.png',
          url: '/scene/work'
        },
        {
          active: false,
          title: '成果影片',
          image: 'static/img/button/scene-3.png',
          focus: 'static/img/button/scene-3focus.png',
          url: '/scene/work'
        }
      ]
    }
  },
  methods: {
    // mouseOver(index) {
    //   this.plans[index] = true
    // }
  },
  computed: {
    
  }
}
</script>

<style scoped lang="sass">
@import './static/css/style.sass'


.work-menu
  height: 20rem

// .work-2
//   img
//     margin-top: 4rem

// .work-4, .work-5
//   img
//     width: 90%

// .work-6
//   img
//     margin-top: 8rem
//     width: 90%

// img
  // margin: 1rem 0
  // width: 100%
</style>
