<template>
	<section id='artist' class='artist' v-cloak>
		<nav-e></nav-e>
		<child :lists='lists' v-on:childClick='parsentClick'></child>
		<footer-e></footer-e>
	</section>
</template>

<style lang='less' src='../../static/less/e-pan.less'></style>

<script>
	import footer from '@/components/common/footer'
	import nav    from '@/components/common/nav'
	import child  from '@/components/artistChild' // 引用子组件

	export default {
		name: 'artist',
		data() {
			return {
				lists: [
					1,2,3
				]
			}
		},
		props: {},
		components: {
			"footer-e": footer,
			'nav-e': nav,
			'child': child
		},
		methods: {
			// 子组件传递过来的参数
			parsentClick(param) {
				console.log(param)
			}
		}
	}
</script>