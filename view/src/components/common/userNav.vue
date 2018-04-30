<template>
    <nav class='menu'>
        <div class='logo'>
            <a href='/'>fuzhongkuo.com</a>
        </div>
        <div class='nav'>
            <a @click='nav(item)' v-for='(item, index) in navs' :key='item'>
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
                        text: '文章发布',
                        id: '/admin/article',
                    },
                    {
                        text: '标签维护',
                        id: '/admin/tag',
                    },
                    {
                        text: '主页',
                        id: '/',
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