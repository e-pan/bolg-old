<template>

       <section>
            <user-nav></user-nav>
        欢迎进入后台管理系统！
        <user-footer></user-footer>
       </section>

</template>

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