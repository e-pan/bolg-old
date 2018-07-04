<template>
    <section id='u-tag' > 
        <user-nav></user-nav>
        <section class='wrap tag-item min-box'>
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
        </section>
        <footer-e></footer-e>
    </section>
</template>

<style lang='less' src='../../../static/less/e-pan.less'></style>
<script>
import footer from '@/components/common/footer'
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
        "footer-e": footer
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
            console.log(this.HOST)
            const that = this
            let tagName = prompt('添加一个新的标签，请输入标签名', '')
            if (tagName) {
                this.$http({
                    method: "post",
                    url: that.HOST + '/api/addTag',
                    params: {
                        tagName
                    }
                }).then(function (res) {
                    console.log(res);
                    if (res.status == 200) {
                        this.getTag()
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