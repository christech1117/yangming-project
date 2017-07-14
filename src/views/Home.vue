<template lang="pug">
  #Home
    .row
      .col-sm-3.col-md-3.col-lg-3.text-center
        ul.list-group(v-for="(plan, index) in plans")
          li.plan-card
            router-link(:to="{ path: plan.url }")
              img.rounded(v-if="!plan.active" :src="plan.image" @mouseover="plan.active=true" @mouseleave="plan.active=false")
              img.rounded(v-if="plan.active" :src="plan.focus" @mouseover="plan.active=true" @mouseleave="plan.active=false")

      .col-sm-6.col-md-6.col-lg-6
        .row
          .col-sm-6.col-md-6.col-lg-6.work-2.text-right.work-menu
            img.rounded(src="/static/img/button/work-2.png")
          .col-sm-6.col-md-6.col-lg-6.work-3.text-left.work-menu
            img.rounded(src="/static/img/button/work-3.png")
          .col-sm-4.col-md-4.col-lg-4.work-4.text-center
            img.rounded(src="/static/img/button/work-4.png")
          .col-sm-4.col-md-4.col-lg-4.work-6.text-center
            img.rounded(src="/static/img/button/work-6.png")
          .col-sm-4.col-md-4.col-lg-4.work-5.text-center
            img.rounded(src="/static/img/button/work-5.png")
        //- .row
          
        
      .col-sm-3.col-md-3.col-lg-3.text-center
        ul.list-group(v-for="scene in scenes")
          li.plan-card
            router-link(:to="{ path: scene.url }")
              img.rounded(v-if="!scene.active" :src="scene.image" @mouseover="scene.active=true" @mouseleave="scene.active=false")
              img.rounded(v-if="scene.active" :src="scene.focus" @mouseover="scene.active=true" @mouseleave="scene.active=false")
          
    button.btn.btn-primary.btn-lg(type='button', data-toggle='modal', data-target='#flipFlop') 123

    #flipFlop.modal.fade(tabindex='-1', role='dialog', aria-labelledby='modalLabel', aria-hidden='true')
      .modal-dialog(role='document')
        .modal-content
          .modal-header
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
            h4#modalLabel.modal-title Flip-flop
          .modal-body
            | A type of open-toed sandal.
          .modal-footer
            button.btn.btn-secondary(type='button', data-dismiss='modal') Close


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
          image: '/static/img/button/plan-2.png',
          focus: '/static/img/button/plan-2focus.png',
          url: '/plan/idea'
          
        },
        {
          active: false,
          title: '行政團隊',
          image: '/static/img/button/plan-3.png',
          focus: '/static/img/button/plan-3focus.png',
          url: '/plan/work'
        },
        {
          active: false,
          title: '成果影片',
          image: '/static/img/button/plan-4.png',
          focus: '/static/img/button/plan-4.png',
          url: '/plan/video'
        },
        {
          active: false,
          title: '成果影片2',
          image: '/static/img/button/plan-5.png',
          focus: '/static/img/button/plan-5.png',
          url: '/plan/video2'
        }
      ],
      works: [
        {
          active: false,
          title: '雲想',
          image: '/static/img/button/work-2.png',
          focus: '/static/img/button/work-2focus.png',
          url: '/work/1'
        },
        {
          active: false,
          title: '雲想',
          image: '/static/img/button/work-3.png',
          focus: '/static/img/button/work-3focus.png',
          url: '/work/1'
        },
        {
          active: false,
          title: '雲想',
          image: '/static/img/button/work-4.png',
          focus: '/static/img/button/work-4focus.png',
          url: '/work/1'
        },
        {
          active: false,
          title: '雲想',
          image: '/static/img/button/work-5.png',
          focus: '/static/img/button/work-5focus.png',
          url: '/work/1'
        },
        {
          active: false,
          title: '雲想',
          image: '/static/img/button/work-6.png',
          focus: '/static/img/button/work-6focus.png',
          url: '/work/1'
        },
      ],
      scenes: [
        {
          active: false,
          title: '計畫理念',
          image: '/static/img/button/scene-2.png',
          focus: '/static/img/button/scene-2focus.png',
          url: '/scene/idea'
        },
        {
          active: false,
          title: '行政團隊',
          image: '/static/img/button/scene-3.png',
          focus: '/static/img/button/scene-2focus.png',
          url: '/scene/work'
        },
        {
          active: false,
          title: '成果影片',
          image: '/static/img/button/scene-4.png',
          focus: '/static/img/button/scene-2focus.png',
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

*
  animation: fadeIn 1s ease both

img
  animation: fadeIn 2s ease both
  margin-bottom: 20px
  width: 70%

.work-menu
  height: 320px

.work-2
  img
    margin-top: 4rem

.work-4, .work-5
  img
    width: 90%

.work-6
  img
    margin-top: 8rem
    width: 90%

</style>
