<template>
    <section> 
        <nav-e></nav-e>
        <section class='wrap article min-box'>
            <h2>文章列表</h2>
            <ul>
                <!-- key不推荐用index,使用：key为了在渲染虚拟dom时候减少开销，虚拟dom使用的时diff算法 -->
                <li v-for='(item, index) in articles' :key='item' @click='detail(item)'>
                    <span>{{ index + 1 }}.</span>
                    <span>{{ item.title }}...</span>
                    <span class='time'>发布时间：{{ item.createTime | formatDate }}</span>
                </li>
            </ul>
        </section>
        <footer-e></footer-e>
    </section>
</template>
<style lang='less' src='../../static/less/e-pan.less'></style>
<script>
    import nav from '@/components/common/nav'
    import footer from '@/components/common/footer'
    import { formatDay } from '../../static/js/e-pan'
    export default {
        name: 'articles',
        data() {
            return {
                articles: []
            }
        },
        components: {
            'nav-e': nav,
            'footer-e': footer
        },
        methods: {
            // 获取文章列表
            getArticleList() {
                this.$http({
                    method: 'post',
                    url: this.HOST + '/api/getArticleList',
                    params: {}
                }).then((res) => {
                    if (res && res.status == 200) {
                        this.articles = res.data.data
                    }
                }).catch((err) => {
                    alert(err);
                });
            },
            // 进入文章详情
            detail: function (item) {  //箭头函数报错 Cannot read property 'push' of undefined
                this.$router.push('/articleDetail?id='+ item._id)
            }
        },
        created : () => {

        },
        mounted: function () {
            this.$nextTick(() => {
                this.getArticleList()
            })
        },
        filters: {
            formatDate: (value) => formatDay(Number(value), 'yyyy-MM-dd hh:mm')
        }
    }
</script>