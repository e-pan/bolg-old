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
                            <span>浏览：{{ preview }}次</span>
                            <span>评论：{{ comment }}条</span>
                        </em>
                    </div>
                    <img src='../../static/images/test/pic-1.png' :src='item.img'>
                    <p class='con' v-html='item.content'></p>
                </section>
                <!-- <section class='page'>
                    <ul>
                        <li v-for='(page, index) in 10'>第{{ page }}页</li>
                    </ul>
                </section> -->
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
            preview: 0,
            comment: 0,
            msg: [
                {
                    nickName: '雨果',
                    content: '真爱的第一个征兆，在男孩身上是胆怯，在女孩身上是大胆。《悲惨世界》'
                },
                {
                    nickName: '狄更斯',
                    content: '我有个原则：想到要做一件事，就一定要做到，而且要做得彻底。《远大前程》'
                },
                {
                    nickName: '玛格丽特·杜拉斯',
                    content: '那时候，你还很年轻，人人都说你美。现在，我是特意来告诉你，对我来说，我觉得现在你比年轻的时候更美。与你那时的面貌相比，我更爱你现在备受摧残的面容。《情人》'
                },
                {
                    nickName: '孔子',
                    content: '三人行，必有我师焉，择其善者而从之，其不善者而改之。《论语》'
                },
                {
                    nickName: '戴尔·卡耐基',
                    content: '人不是因为没有信念而失败，而是因为不能把信念化成行动，并且坚持到底。《人性的弱点》'
                },
                {
                    nickName: '爱默生',
                    content: '有两件事我最憎恶：没有信仰的博才多学和充满信仰的愚昧无知。《处世之道·崇拜》'
                },
                {
                    nickName: '罗素',
                    content: '爱情只有当它是自由自在时，才会叶茂花繁。认为爱情是某种义务的思想只能置爱情于死地。只消一句话：你应当爱某个人，就足以使你对这个人恨之入骨。'
                },{
                    nickName: '雷锋',
                    content: '钉子有两个长处：一个是“挤”劲，一个是“钻”劲。我们在学习上，也要提倡这种“钉子”精神，善于挤和钻。'
                },{
                    nickName: '马克·吐温',
                    content: '“原则”是“偏见”的另一个名称。'
                },{
                    nickName: '海明威',
                    content: '一个人可以被毁灭，但不能被打败。《老人与海》'
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