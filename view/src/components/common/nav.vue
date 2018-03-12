<template>
    <nav class='home'>
        <div class='logo'>
            <a href='/'>fuzhongkuo.com</a>
        </div>
        <div class='nav'>
            <a href=''>网站首页111</a>
            <a href='news.html'>前端技术</a>
            <a href='live.html'>艺术生活</a>
            <a href='about.html'>关于我</a>
            <a @click='admin'>后台管理</a>
        </div>
    </nav>
</template>
<script>
    
    export default {
        name: 'nav',
        data() {
            return {}
        },
        methods: {
            admin() {
                this.$router.push('/admin')
            }
        }
    }

</script>