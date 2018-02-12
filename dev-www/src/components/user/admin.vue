<template>
    <el-container>
        <user-nav></user-nav>
        <el-main>
            <el-row>
                <el-col :span="6">
                    <div class="grid-content bg-purple">文章标题：</div>
                </el-col>
                <el-col :span="18">
                    <div class="grid-content bg-purple-light">
                        <input type="text" placeholder="请输入标题" v-model='articleTitle' />
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <div class="grid-content bg-purple">文章缩略图：</div>
                </el-col>
                <el-col :span="18">
                    <div class="grid-content bg-purple-light">
                        <input type="file" placeholder="请输入标题" @change='upload' />
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <div class="grid-content bg-purple">文章内容：</div>
                </el-col>
                <el-col :span="18">
                    <div class="grid-content bg-purple-light">
                        <quill-editor ref="myTextEditor" :content="content" :config="editorOption" @change="onEditorChange($event)"></quill-editor>
                    </div>
                </el-col>
            </el-row>
            <button @click='submit'>发布</button>
        </el-main>
        <user-footer></user-footer>
    </el-container>
</template>

<style>
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
    min-height: 400px;
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
            content: '<h2>请输入内容</h2>',
            articleTitle: '',
            articleContent: '',
            editorOption: {}
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
            //console.log('onEditorChange')
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
                console.log(datas)
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
                    img: "img"
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
        }
    },
    created:function () {
    },
    mounted: function () {
        this.$nextTick(function () {
            //this.upload()
        })
    }
}
</script>