<template>
    <section id='u-tag' v-cloak> 
        <user-nav></user-nav>
        <section class='u-wrap'>
            <div class='tag-item'>
                <p class="tit">
                    <span>我的标签</span>
                    <em @click='addTag'>添加+</em>
                </p>
                <ul class='tag-list'>
                    <li v-for='tag in tags'>
                        <em>{{ tag.name }}</em>
                        <i @click='removeTag(tag)'>X</i>
                    </li>
                </ul>
            </div>
        </section>
        <user-footer></user-footer>
    </section>
</template>

<style lang='less'>
    .tag-item {
        background: #f5f5f5;
        padding: 10px 30px;
        margin-top: 20px;
        .tit {
            display: inline-block;
            border-bottom: 1px solid #ccc;
            height: 50px;
            line-height: 50px;
            width: 100%;

            span {
                float: left;
            }
            em {
                float: right;
                cursor: pointer;
            }
        }

        .tag-list {
            display: flex;
            justify-content: flex-start;
            margin-top: 20px;
            flex-wrap: wrap;

            li {
                background: #fff;
                position: relative;
                padding: 10px 30px;

                i {
                    position: absolute;
                    top: -5px;
                    right: -2px;
                    font-size: 14px;
                    color: #f00;
                    font-style: normal;
                    cursor: pointer;
                }
            }
        }
    }
</style>
<script>
import userFooter from '@/components/common/userFooter'
import userNav from '@/components/common/userNav'

export default {
    name: 'login',
    data () {
        return {
            tags: []
        }
    },
    components: {
        "user-nav": userNav,
        "user-footer": userFooter
    },
    mounted() {

    },
    methods: {
        // 获取标签
        getTag() {
            var that = this
            this.$http({
                method: "post",
                url: this.HOST + '/api/getTag',
                params: {}
            }).then(function(res) {
                var data = res.data;
                if (data.code == 200) {
                    that.tags = data.data
                }
            }).catch();
        },
        // 添加标签
        addTag() {
            const that = this
            let tagName = prompt('添加一个新的标签，请输入标签名', '')
            if (tagName) {
                that.$http({
                    method: "post",
                    url: that.HOST + '/api/addTag',
                    params: {
                        tagName
                    }
                }).then(function (res) {
                    console.log(res);
                    if (res.status == 200) {
                        that.getTag()
                    } else {
                        alert(res.data)
                    }
                }).catch();
            } else {
                alert('请输入标签名！')
            }
        },
        // 删除标签
        removeTag(tag) {
            let { _id }  = tag
            console.log(_id)
            this.$http({
                method: "post",
                url: this.HOST + '/api/removeTag',
                params: {
                    _id
                }
            }).then(function (res) {
                if (res.code == 200) {
                    this.getTag()
                } else {
                    alert(res.msg)
                }
            }).catch();
        }
    },
    created:function () {
    },
    mounted: function () {
        this.$nextTick(function () {
            this.getTag()
        })
    }
}
</script>
116 656