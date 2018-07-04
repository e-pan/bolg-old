<template>
   <section id='u-home'> 
        <user-nav></user-nav>
        <section class='wrap u-home min-box'>
            欢迎进入后台管理系统！
        </section>
        <footer-e></footer-e>
   </section>
</template>
<style lang='less' src='../../../static/less/e-pan.less'></style>
<script>
import footer from '@/components/common/footer'
import userNav from '@/components/common/userNav'

export default {
    name: 'login',
    data () {
        return {

        }
    },
    components: {
        "user-nav": userNav,
        "footer-e": footer
    },
    mounted() {

    },
    methods: {

    },
    created:function () {
    },
    mounted: function () {
    }
}
</script>