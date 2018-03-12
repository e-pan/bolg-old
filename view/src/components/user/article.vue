<template>
    <el-container>
        <user-nav></user-nav>
        <article>
            <section>
                <div class="grid-content bg-purple">文章标题：</div>
                <el-input placeholder="请输入内容" v-model="articleTitle" clearable></el-input>
            </section>
            <section>
                <div class="grid-content bg-purple">文章缩略图：</div>
                <input type="file" class="el-button el-button--default" placeholder="请输入标题" @change='upload' />
            </section>
            <section>
                <div class="grid-content bg-purple">文章标签：</div>
                <div class='tags'>
                    <el-checkbox-group v-model="checkList">
<<<<<<< HEAD:view/src/components/user/article.vue
                        <!-- <el-checkbox v-for='item in tags' :label="item.name"></el-checkbox> -->
=======
                        <el-checkbox v-for='item in tags' :label="item.name"></el-checkbox>
>>>>>>> 27eabd35eb936f2ef33e1a694aa1b6489cfc19dc:dev-www/src/components/user/article.vue
                    </el-checkbox-group>
                </div>
            </section>
            <section >
                <div class="grid-content bg-purple">文章内容：</div>
                <quill-editor ref="myTextEditor" :content="content" :config="editorOption" @change="onEditorChange($event)"></quill-editor>
            </section>
            <br style="clear: both;" />
            <section>
                <div></div>
                <el-button type="primary" plain @click='validate'>提交</el-button>
            </section>
        </article>
        <user-footer></user-footer>
    </el-container>
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
        .tags {
            width: 100%;
            display: flex;
            justify-content: flex-start;
        }
    }
    // 自定义样式

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    width: 100%;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    width: 100%;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container {
    flex-direction: column;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  /**/
  .ql-editor.ql-blank {
    min-height: 300px;
  }
</style>
<script>
import ElementUI from 'element-ui'
import userFooter from '@/components/common/userFooter'
import userNav from '@/components/common/userNav'
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
    name: 'login',
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
        "user-footer": userFooter
    },
    mounted() {
        console.log('this is current quill instance object', this.myQuillEditor)
    },
    methods: {
        onEditorChange: function(event) {
            console.log(event.html)
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
                console.log(res)
                let { data } = res;
                if (data && data.code == 200) that.tags = data.data
            }).catch(error => console.log(error));
        },
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
                console.log(datas)
                if (datas.code == 200) {
                    //that.tags = datas.data
                }
                //that.$router.push('/register');
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
                this.$alert(msg, {
                  confirmButtonText: '确定',
                  callback: action => {
                    this.$message({
                      type: 'info',
                      message: `action: ${ action }`
                    });
                  }
                });
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