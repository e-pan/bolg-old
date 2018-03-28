<template>
    <header>
        <h2 class='logo'>fuzhongkuo.com</h2>
        <nav class='admin'>
            <a @click='adminArtile'>Article</a>
            <a @click='tag'>Tag</a>
            <a>待定</a>
            <a>待定</a>
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
            return {} // 不能省略
        },
        methods: {
            adminArtile() {
                this.$router.push('/admin/article')
            },
            tag() {
                this.$router.push('/admin/tag')
            }
        },
        mounted() {
            this.$nextTick(function () {

            })
        }
    }
</script>