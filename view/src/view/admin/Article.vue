<template>
    <section id='u-article'> 
        <user-nav></user-nav>
        <article class='wrap u-article'>
            <section>
                <p class='tit'>文章标题</p>
                <input placeholder="请输入标题..." type="text" v-model="articleTitle" />
            </section>
            <section>
                <p class='tit'>文章缩略图</p>
                <input type="file" @change='upload' />
            </section>
            <section>
                <p class='tit'>文章标签</p>
                <ul>
                    <li v-for='item in tags' @click='checkTag'>{{ item.name }}</li>
                </ul>
            </section>
            <section>
                <p class='tit'>文章内容</p>
                <quill-editor ref="myTextEditor" :content="content" :config="editorOption" @change="onEditorChange($event)"></quill-editor>
                
            </section>
            <section class='submit'>
                <button @click='validate'>提交</button>
            </section>
        </article>
        <footer-e></footer-e>
    </section>
</template>

<style lang='less' src='../../../static/less/e-pan.less'></style>
<style lang='less'>
    .ql-editor.ql-blank {
        min-height: 300px;
    }
</style>
<script>
import footer from '@/components/common/footer'
import userNav from '@/components/common/userNav'
import { quillEditor } from 'vue-quill-editor'
// import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'

export default {
    name: 'articles', // 组件，不能和html标签重复
    data () {
        return {
            content: '',
            articleTitle: '',
            articleContent: '',
            editorOption: {},
            img: '',
            tags: [],
            checkList: []
        }
    },
    components: {
        quillEditor,
        "user-nav": userNav,
        "footer-e": footer
    },
    mounted() {
        //console.log('this is current quill instance object', this.myQuillEditor)
    },
    methods: {
        onEditorChange: function(event) {
            this.articleContent = event.html
        },
        // 获取标签
        getTag() {
            const that = this
            this.$http({
                method: 'post',
                url: this.HOST + '/api/getTag',
                params: {}
            }).then(res => {
                let { data } = res;
                if (data && data.code == 200) that.tags = data.data
            }).catch(error => console.log(error));
        },
        // 选择标签
        checkTag (e) {
            if (e && e.target) {
                if (!e.target.className) {
                    e.target.className = 'active'
                    this.checkList.push(e.target.innerHTML)
                } else {
                    e.target.className = ''
                    // 删除数组指定元素
                    this.checkList.splice(this.checkList.findIndex(v => v === e.target.innerHTML), 1);
                }
            }
            //e.target.className ? e.target.className = '' : e.target.className = 'active'
        },
        // 图片上传
        upload: function (event) {
            let files = event.target.files[0]
            var formData = new FormData()
            formData.append('files', files)

            let that = this
            this.$http.post(this.HOST + '/api/upload', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }).then((response) => {
                var datas = response.data
                if (datas.code == 200) {
                    that.img = datas.data
                }
            }).catch(error => {

            });
        },
        submit: function () {
            let that = this
            this.$http({
                method: 'post',
                url: this.HOST + '/api/insertArticle',
                params: {
                    title: that.articleTitle,
                    content: that.articleContent,
                    img: that.img,
                    tag: that.checkList.join(",")
                },
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function(response) {
                var datas = response.data
                if (datas.code == 200) {
                    //alert('发布成功')
                    that.$router.push('/');
                }
            }).catch(function(error) {
                //console.log(error)
            })
        },
        validate() {
            // 验证
            let msg;
            if (!this.articleTitle) {
                msg = '请输入文章标题'
            } else if (!this.img) {
                msg = '请上传文章缩略图'
            } else if (!this.articleContent) {
                msg = '请输入文章内容'
            }


            if (msg) {
                alert(msg);
            } else {
                this.submit()
            }
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