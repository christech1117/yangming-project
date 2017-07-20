import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

import PlanIdea from '@/views/Plans/PlanIdea'
import PlanTeam from '@/views/Plans/PlanTeam'

import Work11 from '@/views/Works/Work11'
import Work12 from '@/views/Works/Work12'
import Work13 from '@/views/Works/Work13'
import Work21 from '@/views/Works/Work21'
import Work22 from '@/views/Works/Work22'
import Work23 from '@/views/Works/Work23'
import Work31 from '@/views/Works/Work31'
import Work32 from '@/views/Works/Work32'
import Work33 from '@/views/Works/Work33'
import Work41 from '@/views/Works/Work41'
import Work42 from '@/views/Works/Work42'
import Work43 from '@/views/Works/Work43'
import Work51 from '@/views/Works/Work51'
import Work52 from '@/views/Works/Work52'
import Work53 from '@/views/Works/Work53'

import PreScenes1 from '@/views/Scenes/PreScenes1'
import PreScenes2 from '@/views/Scenes/PreScenes2'

import MedScenes1 from '@/views/Scenes/MedScenes1'
import MedScenes2 from '@/views/Scenes/MedScenes2'
import MedScenes3 from '@/views/Scenes/MedScenes3'
import MedScenes4 from '@/views/Scenes/MedScenes4'
import MedScenes5 from '@/views/Scenes/MedScenes5'

import LatScenes1 from '@/views/Scenes/LatScenes1'
import LatScenes2 from '@/views/Scenes/LatScenes2'
import LatScenes3 from '@/views/Scenes/LatScenes3'

Vue.use(Router)

export default new Router({
  mode: 'history', // html5
  base: __dirname, // router起始位置
  routes: [
    { path: '/', name: 'Home', component: Home },

    { path: '/plan/idea', name: 'PlanIdea', component: PlanIdea },
    { path: '/plan/team', name: 'PlanTeam', component: PlanTeam },

    { path: '/work/1-1', name: 'Work11', component: Work11 },
    { path: '/work/1-2', name: 'Work12', component: Work12 },
    { path: '/work/1-3', name: 'Work13', component: Work13 },
    { path: '/work/2-1', name: 'Work21', component: Work21 },
    { path: '/work/2-2', name: 'Work22', component: Work22 },
    { path: '/work/2-3', name: 'Work23', component: Work23 },
    { path: '/work/3-1', name: 'Work31', component: Work31 },
    { path: '/work/3-2', name: 'Work32', component: Work32 },
    { path: '/work/3-3', name: 'Work33', component: Work33 },
    { path: '/work/4-1', name: 'Work41', component: Work41 },
    { path: '/work/4-2', name: 'Work42', component: Work42 },
    { path: '/work/4-3', name: 'Work43', component: Work43 },
    { path: '/work/5-1', name: 'Work51', component: Work51 },
    { path: '/work/5-2', name: 'Work52', component: Work52 },
    { path: '/work/5-3', name: 'Work53', component: Work53 },

    { path: '/scene/pre/1', name: 'PreScenes1', component: PreScenes1 },
    { path: '/scene/pre/2', name: 'PreScenes2', component: PreScenes2 },

    { path: '/scene/med/1', name: 'MedScenes1', component: MedScenes1 },
    { path: '/scene/med/2', name: 'MedScenes2', component: MedScenes2 },
    { path: '/scene/med/3', name: 'MedScenes3', component: MedScenes3 },
    { path: '/scene/med/4', name: 'MedScenes4', component: MedScenes4 },
    { path: '/scene/med/5', name: 'MedScenes5', component: MedScenes5 },

    { path: '/scene/lat/1', name: 'LatScenes1', component: LatScenes1 },
    { path: '/scene/lat/2', name: 'LatScenes2', component: LatScenes2 },
    { path: '/scene/lat/3', name: 'LatScenes3', component: LatScenes3 }
  ]
})
