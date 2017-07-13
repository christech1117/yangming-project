<template lang="pug">
  #Home
    .row
      .col-sm-3.col-md-3.col-lg-3.text-center.menu-left
        ul.list-group(v-for="plan in plans")
          li.plan-card
            router-link(:to="{ path: plan.url }")
              img.rounded(:src="plan.image", :onmouseover="plan.focus" @mouseout="plan.focus")
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
        ul.list-group(v-for="scene in scenes")
          li.plan-card
            router-link(:to="{ path: scene.url }")
              img.rounded(:src="scene.image")
          
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
          title: '計畫理念',
          image: '/static/img/plan-2.c314dee.png',
          focus: '/static/img/plan-2focus.a65c3be.png',
          url: '/plan/idea'
          
        },
        {
          title: '行政團隊',
          image: '/static/img/plan-3.d198cab.png',
          focus: '/static/img/plan-3focus.dfe3b0f.png',
          url: '/plan/work'
        },
        {
          title: '成果影片',
          image: '/static/img/plan-4.751d5d7.png',
          focus: '/static/img/plan-3focus.dfe3b0f.png',
          url: '/plan/work'
        }
      ],
      works: [],
      scenes: [
        {
          title: '計畫理念',
          image: '/static/img/scene-2.566d6f8.png',
          url: '/scene/idea'
        },
        {
          title: '行政團隊',
          image: '/static/img/scene-3.f36d468.png',
          url: '/scene/work'
        },
        {
          title: '成果影片',
          image: '/static/img/scene-4.06b6022.png',
          url: '/scene/work'
        }
      ]
    }
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
  margin-bottom: 20px
  width: 300px
  height: 250px
  
</style>
