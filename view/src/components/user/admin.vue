<template>
   <section id='u-home' v-cloak>
        <user-nav></user-nav>
        <section class='u-wrap u-home'>
            欢迎进入后台管理系统！
        </section>
        <user-footer></user-footer>
   </section>
</template>
<style lang='less'>
    .u-home {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
    }
</style>
<script>
import userFooter from '@/components/common/userFooter'
import userNav from '@/components/common/userNav'

export default {
    name: 'login',
    data () {
        return {

        }
    },
    components: {
        "user-nav": userNav,
        "user-footer": userFooter
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