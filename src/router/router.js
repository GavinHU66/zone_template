import Vue from 'vue'
import Router from 'vue-router'
import PersonalLayout from '@/views/layout/PersonalLayout'
import Login from '@/views/login/login'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '',
      component: PersonalLayout,
      children: [
        {
          path: '/home',
          components: {
            default: () => import('@/views/personalzone/Home.vue'),
            // nav: () => import('@/components/navBars/HomeBar.vue')
          }
        },
        
        {
          path: '/zone',
          components: {
            default: () => import('@/views/personalzone/Zone.vue'),
            // nav: () => import('@/components/navBars/ZoneBar.vue')
          }
        },

        {
          path: '/editzone',
          components: {
            default: () => import('@/views/personalzone/EditZone.vue'),
            // nav: () => import('@/components/editBars/EditZoneBar.vue')
          }
        },

        {
          path: '/myclass',
          components: {
            default: () => import('@/views/personalzone/Class.vue'),
          }
        },

        {
          path: '/personal_info',
          components: {
            default: () => import('@/components/PersonalInfo.vue'),
          }
        },

        {
          path: '/control_panel',
          components: {
            default: () => import('@/components/ControlPanel.vue'),
          }
        },

        {
          path: '/school',
          components: {
            default: () => import('@/components/SchoolZone.vue'),
          }
        },

      ] // end of children
    },

    {
      path: '/myclass',
      component: PersonalLayout,
      children: [
        {
          path: 'class_management',
          components: {
            default: () => import('@/components/myClassSubModule/ClassManagement.vue')
          },
        },
        {
          path: 'class_notice',
          components: {
            default: () => import('@/components/myClassSubModule/ClassNotice.vue')
          },
        },
        {
          path: 'class_timetable',
          components: {
            default: () => import('@/components/myClassSubModule/ClassTimetable.vue')
          },
        },
        {
          path: 'class_resource',
          components: {
            default: () => import('@/components/myClassSubModule/ClassResource.vue')
          },
        },
        {
          path: 'class_zone',
          components: {
            default: () => import('@/components/myClassSubModule/ClassZone.vue')
          },
        },
        {
          path: 'class_grades',
          components: {
            default: () => import('@/components/myClassSubModule/ClassGrades.vue')
          },
        },
        {
          path: 'teacher_msgs',
          components: {
            default: () => import('@/components/myClassSubModule/TeacherMsgs.vue')
          },
        },
        {
          path: 'QandA',
          components: {
            default: () => import('@/components/myClassSubModule/ClassQandA.vue')
          },
        },
        {
          path: 'class_contact',
          components: {
            default: () => import('@/components/myClassSubModule/ClassContact.vue')
          },
        },

      ]
    },


    {
      path: '',
      component: PersonalLayout,
      children: [{
        path: '/about',
        name: 'about',
        meta: {
          icon: 'about',
          noCache: true
        },
        component: () => import('@/views/About')
      }]
    }
  ]
})
