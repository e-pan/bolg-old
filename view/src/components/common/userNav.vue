<template>
    <el-header >
        <div class="el-row">
            <div class="el-col el-col-6">fuzhongkuo.com</div>
            <div class="el-col el-col-18">
                <nav class='admin'>
                    <a @click='adminArtile'>Article</a>
                    <a @click='tag'>Tag</a>
                    <a>待定</a>
                    <a>待定</a>
                </nav>
            </div>
        </div>
    </el-header>
</template>
<style lang="less">
    nav.admin {
        text-align: right;

        a {
            min-width: 100px;
            padding: 0 50px;
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