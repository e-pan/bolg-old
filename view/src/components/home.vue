<template>
    <div id='home'> 
        <div class="banner" v-show='show'>
            <div>
                <img src="../../static/images/logo.png" class='logo' />
            </div>
            <div class='share'>
                <ul>
                    <li>
                        <a href="https://github.com/e-pan" target="_blank">
                            <img src='../../static/images/icon/github.png' alt='github' />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/e-pan" target="_blank">
                            <img src='../../static/images/icon/github-h.png' alt='github' />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href='https://weibo.com/fzkuo' target="_blank">
                            <img src='../../static/images/icon/weibo.png' alt='微博' />
                        </a>
                    </li>
                    <li>
                        <a href='https://weibo.com/fzkuo' target="_blank">
                            <img src='../../static/images/icon/weibo-h.png' alt='微博' />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="tencent://message/?uin=121271770&Site=&Menu=yes" target="_blank"> 
                            <img src='../../static/images/icon/QQ.png' alt='QQ' />
                        </a>
                    </li>
                    <li>
                        <a href="tencent://message/?uin=121271770&Site=&Menu=yes" target="_blank" > 
                            <img src='../../static/images/icon/QQ-h.png' alt='QQ' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <nav-e></nav-e>
        <div class='wrap home'>
            <div class='main'>
                <section v-for='(item, index) in articles' :key='index' @click="articleDetail(item)">
                    <div class='tit'>
                        <a>{{ item.title }}...</a>
                        <em>
                            <time class='time'>发布时间：{{ item.createTime | formDate }}</time>
                            <span>浏览：200</span>
                            <span>评论：20</span>
                        </em>
                    </div>
                    <img src='../../static/images/test/pic-1.png' v-bind:src='item.img'>
                    <p class='con' v-html='item.content'></p>
                </section>
                <section class='page'>
                    <ul>
                        <li v-for='(page, index) in 10'>第{{ page }}页</li>
                    </ul>
                </section>
            </div>
            <aside class='side'>
                <article class='tag'>
                    <h3>分类标签</h3>
                    <div>
                        <a v-for='(tag, index) in tags' :key='index'>{{ tag.type }}{{ tag.name }}</a>
                    </div>
                </article>
                <article class='message'>
                    <h3>最新留言</h3>
                    <ul>
                        <li v-for='(item, index) in msg' :key='index'>
                            <span>{{ item.nickName }}：</span>
                            <a href=''>{{ item.content }}</a>
                        </li>
                    </ul>
                </article>
            </aside>
        </div>
        <footer-e></footer-e>
    </div>
</template>

<script>
import nav from '@/components/common/nav'
import footer from '@/components/common/footer'
import { formatDay } from '../../static/js/e-pan'
export default {
    name: 'home',
    data () {
        return {
            tags: [],
            articles: [],
            msg: [
                {
                    nickName: 'e-pan',
                    content: '你好啊？'
                },
                {
                    nickName: 'e-pan',
                    content: '你好啊？'
                },{
                    nickName: 'e-pan',
                    content: '你好啊？'
                },{
                    nickName: 'e-pan',
                    content: '你好啊？'
                },{
                    nickName: 'e-pan',
                    content: '你好啊？'
                },{
                    nickName: 'e-pan',
                    content: '你好啊？'
                },{
                    nickName: 'e-pan',
                    content: '你好啊？'
                },{
                    nickName: 'e-pan',
                    content: '你好啊？'
                },{
                    nickName: 'e-pan',
                    content: '你好啊？'
                },{
                    nickName: 'e-pan',
                    content: '你好啊？'
                }
            ],
            show: true
        }
    },
    components: {
        'nav-e': nav,
        'footer-e': footer
    },
    methods: {
        setPage: function () {
            var windowH = window.innerHeight
            var windwoW = document.body.scrollWidth
            document.querySelector(".banner").style.height = windowH + "px"
        },
        getTag: function () {
            let that = this
            this.$http({
                method: 'post',
                url: this.HOST + '/api/getTag',
                params: {}
            }).then(function(response) {
                var datas = response.data
                if (datas.code == 200) {
                    that.tags = datas.data
                }
            }).catch(function(error) {
            })
        },
        getArticleList: function () {
            let that = this
            this.$http({
                method: 'post',
                url: this.HOST + '/api/getArticleList',
                params: {}
            }).then(function(response) {
                var datas = response.data
                if (datas.code == 200) {
                    that.articles = datas.data
                }
            }).catch(function(error) {
            })
        },
        articleDetail: function (item) {
            this.$router.push('/articleDetail?id='+ item._id);
        }
    },
    created:function () {

    },
    mounted: function () {
        this.$nextTick(function () {
            this.setPage()
            this.getTag()
            this.getArticleList()
        })
    },
    filters: {
        formDate: (value) => formatDay(Number(value), 'yyyy-MM-dd hh:mm')
    }
}
</script>