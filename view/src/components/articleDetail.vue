<template>
    <section id='article-detail' v-cloak>
        <nav-e></nav-e>
        <article class='wrap article-detail min-box'>
            <h2>{{ title }}</h2>
            <div class='tag'>
                <span>发布时间：{{ createTime | formatDate }}</span>
                <span v-if='tag'>标签：{{ tag }}</span>
            </div>
            <img :src='img'>
            <div v-html='content' class='content'></div>
        </article>
        <footer-e></footer-e>
    </section>
</template>
<style lang='less' src='../../static/less/e-pan.less'></style>
<script>
import nav from '@/components/common/nav'
import footer from '@/components/common/footer'
import { formatDay } from '../../static/js/e-pan'

export default {
    name: 'article-detail',
    data () {
        return {
            id: '',
            title: '',
            content: '',
            img: '',
            createTime: ''
        }
    },
    // 通过路由传递进来的ids获取数据的id
    props: ['ids'],
    components: {
        'nav-e': nav,
        'footer-e': footer
    },
    methods: {
        getDetail: function (id) {
            let that = this
            this.$http({
                method: 'post',
                url: this.HOST + '/api/getArticleDetail',
                params: {
                    id: that.ids
                }
            }).then(function(response) {
                var datas = response.data
                if (datas.code == 200) {
                    that.title = datas.data.title
                    that.content = datas.data.content
                    that.img = datas.data.img
                    that.createTime = datas.data.createTime
                    that.tag = datas.data.tag
                }
            }).catch(function(error) {
            })
        }
    },
    created:function () {

    },
    mounted: function () {
        this.$nextTick(function () {
            console.log(this.$router)
            console.log(this.ids)
            if (this.ids) {
                this.getDetail()
            }
        })
    },
    filters: {
        formatDate: (value) => formatDay(Number(value), 'yyyy-MM-dd hh:mm')
    }
}
</script>