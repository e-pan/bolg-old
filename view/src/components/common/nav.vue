<template>
    <nav class='menu'>
        <div class='logo'>
            <a href='/'>fuzhongkuo.com</a>
        </div>
        <div class='nav'>
            <a v-for='(item, index) in navs' @click='nav(item)'>
                {{ item.text }}
            </a>
        </div>
    </nav>
</template>
<script>
    export default {
        name: 'nav-e',
        data() {
            return {
                navs: [
                    {
                        text: '网站首页',
                        id: '/',
                    },
                    {
                        text: '技术范',
                        id: 'article',
                    },
                    {
                        text: '文艺范',
                        id: 'artist',
                    },
                    {
                        text: '关于我',
                        id: 'about',
                    },
                    {
                        text: '后台管理',
                        id: 'admin',
                    }
                ]
            }
        },
        methods: {
            nav(item) {
                if (item.id != 'admin') {
                    this.$router.push(item.id)
                } else {
                    if (localStorage.getItem('isLogin')) {
                        this.$router.push(item.id)
                    } else {
                        this.$router.push('/login')
                    }
                }
            }
        }
    }
</script>