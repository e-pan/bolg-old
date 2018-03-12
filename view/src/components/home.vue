<template>
    <div v-cloak>
        <div class="banner">
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
                        <img src='../../static/images/icon/weibo.png' alt='微博' />
                    </li>
                    <li>
                        <img src='../../static/images/icon/weibo-h.png' alt='微博' />
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src='../../static/images/icon/QQ.png' alt='QQ' />
                    </li>
                    <li>
                        <img src='../../static/images/icon/QQ-h.png' alt='QQ' />
                    </li>
                </ul>
            </div>
        </div>
        <!-- <nav>
            <div class='logo'>
                <a href='/'>fuzhongkuo.com</a>
            </div>
            <div class='nav'>
                <a href=''>网站首页</a>
                <a href='news.html'>前端技术</a>
                <a href='live.html'>艺术生活</a>
                <a href='about.html'>关于我</a>
            </div>
        </nav> -->
        <nav-e></nav-e>
        <div class='main wrap'>
            <div class='news'>
                <section v-for='(item, index) in articles'>
                    <h2>
                        <a @click="articleDetail(item)">{{ item.title }}</a>
                    </h2>
                    <p class='tag'>时间：{{ item.createTime }}    浏览：200  评论：20</p>
                    <img src='../../static/images/test/pic-1.png' v-bind:src='item.img'>
                    <p v-html='item.content'></p>
                </section>
            </div>
            <aside>
                <article class='tag'>
                    <h3>分类标签</h3>
                    <div>
                        <a href='' v-for='item in tags'>{{ item.type }}{{ item.name }}</a>
                    </div>
                </article>
                <article class='message'>
                    <h3>最新留言</h3>
                    <ul>
                        <li>
                            <span>e-pan：</span>
                            <a href=''>关于使用HTML5 canvas制作涂鸦板的方法？</a>
                        </li>
                        <li>
                            <span>e-pan：</span>
                            <a href=''>关于使用HTML5 canvas制作涂鸦板的方法？</a>
                        </li>
                        <li>
                            <span>e-pan：</span>
                            <a href=''>关于使用HTML5 canvas制作涂鸦板的方法？</a>
                        </li>
                        <li>
                            <span>e-pan：</span>
                            <a href=''>关于使用HTML5 canvas制作涂鸦板的方法？</a>
                        </li>
                        <li>
                            <span>e-pan：</span>
                            <a href=''>关于使用HTML5 canvas制作涂鸦板的方法？</a>
                        </li>
                        <li>
                            <span>e-pan：</span>
                            <a href=''>关于使用HTML5 canvas制作涂鸦板的方法？</a>
                        </li>
                        <li>
                            <span>e-pan：</span>
                            <a href=''>关于使用HTML5 canvas制作涂鸦板的方法？</a>
                        </li>
                        <li>
                            <span>e-pan：</span>
                            <a href=''>关于使用HTML5 canvas制作涂鸦板的方法？</a>
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
export default {
    name: 'home',
    data () {
        return {
            tags: [],
            articles: []
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
                console.log(datas)
                if (datas.code == 200) {
                    that.tags = datas.data
                }
                //that.$router.push('/register');
            }).catch(function(error) {
                //console.log(error)
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
                console.log(datas)
                if (datas.code == 200) {
                    that.articles = datas.data
                }
                //that.$router.push('/register');
            }).catch(function(error) {
                //console.log(error)
            })
        },
        articleDetail: function (item) {
            console.log(item)
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
    }
}
</script>