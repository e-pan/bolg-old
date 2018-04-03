<template>
    <section v-cloak id='about'>
    	<nav-e></nav-e>
    	<div class='wrap about'> 
    		<section>
    			<h2>个人简介</h2>
    			<P>本人帅的不明显，丑的不突出，游走在2线边缘的工程师；间歇性勤奋，长久性懒惰；有很多人问我幸福？我可以确定的告诉他们，恩：我姓"付"。</P>
    		</section>
    		<section>
    			<h2>个人简介</h2>
    			<P>本人帅的不明显，丑的不突出，游走在2线边缘的工程师；间歇性勤奋，长久性懒惰；有很多人问我幸福？我可以确定的告诉他们，恩：我姓"付"。</P>
    		</section>
    		<section>
    			<h2>个人简介</h2>
    			<P>本人帅的不明显，丑的不突出，游走在2线边缘的工程师；间歇性勤奋，长久性懒惰；有很多人问我幸福？我可以确定的告诉他们，恩：我姓"付"。</P>
    		</section>
    		<section>
    			<h2>个人简介</h2>
    			<P>本人帅的不明显，丑的不突出，游走在2线边缘的工程师；间歇性勤奋，长久性懒惰；有很多人问我幸福？我可以确定的告诉他们，恩：我姓"付"。</P>
    		</section>
    	</div>
    	<footer-e></footer-e>
    </section>
</template>
<style lang='less' src='../../static/less/e-pan.less'></style>
<script>
	import nav from '@/components/common/nav'
	import footer from '@/components/common/footer'
	export default {
		name: 'about',
		data() {
			return {}
		},
		components: {
			'nav-e': nav,
			'footer-e': footer
		},
		methods: {},
		created: function () {},
		mounted: function () {},
		filter: function () {}
	}
</script>