<template lang="pug">
  #Home
    .container
      .row
        .col-sm-3.col-md-3.col-lg-3.text-center.menu-left
          ul.list-group(v-for="plan in plans")
            li.plan-card
              router-link(:to="{ path: plan.url }")
                  //- .menu-image.rounded-circle(:style="{ 'background-image': 'url(' + plan.image + ')' }")
                  img.rounded-circle(:src="plan.image")
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
          image: 'http://www.citytalk.tw/upload/event/0/122/3a0/pb/img/269985/700x524-exactly.jpg',
          url: '/plan/idea'
        },
        {
          title: '行政團隊',
          image: 'http://www.citytalk.tw/upload/event/0/122/3a0/pb/img/269985/700x524-exactly.jpg',
          url: '/plan/work'
        },
        {
          title: '成果影片',
          image: '/static/img/works-1.4ff41f8.jpg',
          url: '/plan/work'
        }
      ],
      works: [],
      scenes: []
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
