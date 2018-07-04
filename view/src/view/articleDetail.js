import Vue from 'vue'

const childComponent = {
	template: '<div>childComponent</div>',
	inject: ['yeye', 'value'] //注入  下级注入
}

const component = {
    data() {
    	return {
    		// 数据要return出去
    	}
    },
    // 单向数据流
    // props: {
    // 	active: {
    // 		//type: Boolean,  // 如果类型不符会有警告
    // 		//required: true, // 必传
    // 		// default() {   /
    // 		// 	return {}
    // 		// },
    // 		// validator(value) { // 验证
    // 		// 	console.log(value)
    // 		// }
    // 	},  
    // 	propOne: String    
    // },
    props: ['active', 'propOne'],
    template: `<div>
    	<div v-show="active"> this is compent</div>
    	<div>{{ propOne }}</div>
    	<!--<slot name='aaa'></slot>-->
    	<slot value='外部传递进来的'></slot>
    </div>`,
	mounted() {
		//this.propOne = 'asdadas' // 传递进来的不能修改
	}
}
// 全局注册的组件
//Vue.component('CompOne', component)

new Vue({
	data() {
		return {
			value: '自己的值'
		}
	},
	provide(){   //提供 上级提供
		return {
			yeye: this,
			value: this.value
		}
	},
	// 私有组件
	components: {
		CompOne: component
	},
	el: '#app',
	// 推荐使用驼峰式命名
	template: `
		<div>
			<comp-one ref='comp' :active='true' prop-one='text1' style='border: 1px solid #ddd; width: 200px; height: 200px;'>
				<!--<div slot='aaa'>aaaaaaaaa  header</div>-->
				<span ref='span' slot-scope='props'>{{ props.value }}---{{ value}}</span>
			</comp-one>
		</div>
	`,
	mounted() {
		console.log(this.$refs.comp)
		console.log(this.$refs.span)
	},
	render(createElement) {
		// return createElement()
	}
})

// // extend 扩展组件
// const CompVue = Vue.extend({
	
// })

// new CompVue({
// 	el: '#app',
// 	propsData: {
// 		propOne: 'xxxx' // 传递props
// 	},
// 	data: {
// 		text: 'adasd' //覆盖原来的text
// 	},
// 	mounted() {
// 		this.$parent.text = 'xxx' // 子组件改变父组件
// 	}
// })