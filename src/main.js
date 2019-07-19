import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import store from '@/store/store'
import '@/styles/index.scss'
import ResizableModule from "@/components/ResizableModule"

import draggable from "vuedraggable";




import ExternalItem from '@/components/panelApps/ExternalItem'
import CurrentVisitor from '@/components/panelApps/CurrentVisitor'
import Essay from '@/components/panelApps/Essay'
import EssayList from '@/components/panelApps/EssayList'
import LatestNews from '@/components/panelApps/LatestNews'
import MsgBoard from '@/components/panelApps/MsgBoard'
import Notice from '@/components/panelApps/Notice'
import Todo from '@/components/panelApps/Todo'
import UserInfo from '@/components/panelApps/UserInfo'

import ModalAddItem from '@/components/modals/ModalAddItem'
import ModalAddModule from '@/components/modals/ModalAddModule'
import ModalMoveModule from '@/components/modals/ModalMoveModule'

import HomeBar from '@/components/navBars/HomeBar'
import ZoneBar from '@/components/navBars/ZoneBar'
import EditZoneBar from '@/components/editBars/EditZoneBar';

import TemplateSingleModule from "@/components/templates/TemplateSingleModule";
import PersonalZoneHead from '@/components/PersonalZoneHead';
import TemplateModules from "@/components/templates/TemplateModules";
import HomeElement from "@/components/templates/HomeElement";
import ZoneElement from "@/components/templates/ZoneElement";

import Footer from "@/components/Footer";


Vue.component('ExternalItem', ExternalItem);
Vue.component('CurrentVisitor', CurrentVisitor);
Vue.component('Essay', Essay);
Vue.component('EssayList', EssayList);
Vue.component('LatestNews', LatestNews);
Vue.component('MsgBoard', MsgBoard);
Vue.component('Notice', Notice);
Vue.component('Todo', Todo);
Vue.component('UserInfo', UserInfo);

Vue.component('ModalAddItem', ModalAddItem);
Vue.component('ModalAddModule', ModalAddModule);
Vue.component('ModalMoveModule', ModalMoveModule);

Vue.component('HomeBar', HomeBar);
Vue.component('ZoneBar', ZoneBar);
Vue.component('draggable', draggable);
Vue.component('EditZoneBar', EditZoneBar);

Vue.component('TemplateSingleModule', TemplateSingleModule);
Vue.component('TemplateModules', TemplateModules);
Vue.component('PersonalZoneHead', PersonalZoneHead);
Vue.component('Footer', Footer);

Vue.component('HomeElement', HomeElement);
Vue.component('ZoneElement', ZoneElement);



Vue.use(ResizableModule)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
