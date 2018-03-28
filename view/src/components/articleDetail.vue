<template>
    <section id='article-detail' v-cloak>
        <nav-e></nav-e>
        <article class='u-wrap article-detail'>
            <h2>{{ title }}</h2>
            <div class='tag'>
                <span>发布时间：{{ createTime | formatDate }}</span>
                <span v-if='tag'>标签：{{ tag }}</span>
            </div>
            <img v-bind:src='img'>
            <div v-html='content' class='content'></div>
        </article>
        <footer-e></footer-e>
    </section>
</template>

<style lang='less'>
    .article-detail {
        background: #f5f5f5;
        padding: 10px 30px;
        margin: 20px auto;
    }
    h2 {
        margin-top: 20px;
        font-size: 16px;
    }
    .tag {
        margin-top: 20px;
        color: #666;
        display: block;
    }
    img {
        max-width: 400px;
        border: 1px solid #ddd;
        margin-top: 20px;
    }
    p {
        text-indent: 2em;
        line-height: 30px;
    }
    .content {
        margin-top: 20px;
    }
</style>

<script>
import nav from '@/components/common/nav'
import footer from '@/components/common/footer'
import { getQueryString, formatDay } from '../../static/js/e-pan'

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
                    id: that.id
                }
            }).then(function(response) {
                var datas = response.data
                console.log(datas)
                if (datas.code == 200) {
                    that.title = datas.data.title
                    that.content = datas.data.content
                    that.img = datas.data.img
                    that.createTime = datas.data.createTime

                    that.tag = datas.data.tag
                }
            }).catch(function(error) {
                //console.log(error)
            })
        }
    },
    created:function () {

    },
    mounted: function () {
        this.$nextTick(function () {
            this.id = getQueryString("id")
            if (this.id) {
                this.getDetail()
            }
        })
    },
    filters: {
        formatDate: (value) => formatDay(Number(value), 'yyyy-MM-dd hh:mm')
    }
}
</script>