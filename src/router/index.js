import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/home'
import Item from '@/page/item'
import Scure from '@/page/scure'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
	  },{
	  	path:'/item',
	  	component:Item
	  },{
	  	path:'/scure',
	  	component:Scure
	  }
  ]
})
