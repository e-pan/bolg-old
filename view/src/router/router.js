// router的一些设置
import Router from 'vue-router'

import routes from './routes'

export default () => {
	return new Router({
		routes
	})
}

// #不推荐这样，这样全局用的是同一个router
// const router = new Router({
// 	routes
// })
//export default router 
