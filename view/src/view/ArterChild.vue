<template>
	<article>
		<ul>
			<li v-for='(item, index) in lists' :key='item' @click='childClick'>{{ item }}</li>
		</ul>
	</article>
</template>


<script>
	export default {
		props: {
			lists: Array
		},
		methods: {
			childClick () {
				this.$emit('childClick', 'paramsasdasdas') //第一个参数名为调用的方法名，第二个参数为需要传递的参数
			}
		}
	}
</script>