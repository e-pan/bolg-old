<template>
    <section>
        <user-nav></user-nav>
        <article>
            <section>
                <div class="grid-content">维护标签：</div>
                <div style="width: 100%">
                    <ul>
                        <li v-for='item in tags'>{{ item.name }}</li>
                    </ul>
                    <button type="text" @click="addTag">点击打开 Message Box</button>
                </div>
            </section>
        </article>
        <user-footer></user-footer>
    </section>
</template>

<style lang='less'>
    // 自定义样式
    article section {
        background: #fff;
        display: flex;
        margin: 20px 0;

        div {
            min-width: 100px;
            align-items: center;
            justify-content: center;
        }
        input[type='file'], button {
            width: 100%;
        }
    }
    // 自定义样式

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
            let tagName = '';
            this.$prompt('请输入标签名', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消'
            }).then(({ value }) => {
                tagName = value;
                that.$http({
                    method: "post",
                    url: that.HOST + '/api/addTag',
                    params: {
                        tagName
                    }
                }).then(function (res) {
                    console.log(res);
                }).catch();
            }).catch(() => {
              console.log("点击返回按钮")
            });
        },
        // 删除标签
        removeTag() {

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