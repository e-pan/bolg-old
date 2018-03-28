<template>
    <nav class='home'>
        <div class='logo'>
            <a href='/'>fuzhongkuo.com</a>
        </div>
        <div class='nav'>
            <a @click='nav(item)' v-for='item in navs'>
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
                        text: '文章列表',
                        id: 'article',
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
                this.$router.push(item.id)
            }
        }
    }
</script>