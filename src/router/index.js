import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

import PlanIdea from '@/views/Plans/PlanIdea'
import PlanTeam from '@/views/Plans/PlanTeam'

import WorkIdea from '@/views/Works/WorkIdea'
import WorkProcess from '@/views/Works/WorkProcess'
import WorkShow from '@/views/Works/WorkShow'

import PreScenes from '@/views/Scenes/PreScenes'
import MedScenes from '@/views/Scenes/MedScenes'
import LatScenes from '@/views/Scenes/LatScenes'

Vue.use(Router)

export default new Router({
  mode: 'history', // html5
  base: __dirname, // router起始位置
  routes: [
    { path: '/', name: 'Home', component: Home },

    { path: '/plan/idea', name: 'PlanIdea', component: PlanIdea },
    { path: '/plan/team', name: 'PlanTeam', component: PlanTeam },

    { path: '/works/idea/:id', name: 'WorkIdea', component: WorkIdea },
    { path: '/works/process/:id', name: 'WorkProcess', component: WorkProcess },
    { path: '/works/show/:id', name: 'WorkShow', component: WorkShow },

    { path: '/scenes/pre/:id', name: 'PreScenes', component: PreScenes },
    { path: '/scenes/med/:id', name: 'MedScenes', component: MedScenes },
    { path: '/scenes/lat/:id', name: 'LatScenes', component: LatScenes }
  ]
})
