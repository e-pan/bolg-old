<template>
    <header>
        <h2 class='logo'>fuzhongkuo.com</h2>
        <nav class='admin'>
            <a @click='nav(item)' v-for='item in navs'>
                {{ item.text }}
            </a>
        </nav>
    </header>
</template>
<style lang="less">
    h2.logo {
        float: left;
        height: 50px;
        line-height: 50px;
        padding-left: 20px;
    }
    nav.admin {
        height: 50px;
        line-height: 50px;
        background: #ddd;
        text-align: right;

        a {
            display: inline-block;
            padding: 0 50px;
        }
        a:hover {
            color: #825cff;
        }
    }
</style>
<script>
    export default {
        name: "userNav", // 可以省略
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
            } // 不能省略
        },
        methods: {
            nav(item) {
                this.$router.push(item.id)
            }
        },
        mounted() {
            this.$nextTick(function () {

            })
        }
    }
</script>