<template>
    <el-container>
        <user-nav></user-nav>
        <article>
            <section>
                <div class="grid-content bg-purple">已有标签：</div>
                <div style="width: 100%">
                    <ul>
                        <li v-for='item in tags'>{{ item.name }}</li>
                    </ul>
                </div>
            </section>
            <section>
                <div class="grid-content bg-purple">添加标签：</div>
                <!-- <el-input placeholder="请输入内容" v-model="articleTitle" clearable></el-input> -->
            </section>

            <section>
                <div></div>
                <!-- <el-button type="primary" plain @click='validate'>提交</el-button> -->
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
        // onEditorChange: function(event) {
        //     console.log(event.html)
        //     this.articleContent = event.html
        // },
        // upload: function (event) {
        //     let files = event.target.files[0]
        //     var formData = new FormData()
        //     formData.append('files', files)

        //     let that = this
        //     this.$http.post(this.HOST + '/api/upload', formData, {
        //       headers: {
        //         'Content-Type': 'multipart/form-data'
        //       }
        //     }).then((response) => {
        //         var datas = response.data
        //         if (datas.code == 200) {
        //             that.img = datas.data
        //         }
        //     }).catch(error => {

        //     });
        // },
        // submit: function () {
        //     let that = this
        //     this.$http({
        //         method: 'post',
        //         url: this.HOST + '/api/insertArticle',
        //         params: {
        //             title: that.articleTitle,
        //             content: that.articleContent,
        //             img: that.img
        //         },
        //         headers: {
        //           'Content-Type': 'application/x-www-form-urlencoded'
        //         }
        //     }).then(function(response) {
        //         var datas = response.data
        //         console.log(datas)
        //         if (datas.code == 200) {
        //             //that.tags = datas.data
        //         }
        //         //that.$router.push('/register');
        //     }).catch(function(error) {
        //         //console.log(error)
        //     })
        // },
        // validate() {
        //     // 验证
        //     let msg;
        //     if (!this.articleTitle) {
        //         msg = '请输入文章标题'
        //     }else if (!this.img) {
        //         msg = '请上传文章缩略图'
        //     } else {
        //         if (!this.articleContent) msg = '请输入文章内容'
        //     }
        //     if (msg) {
        //         this.$alert(msg, {
        //           confirmButtonText: '确定',
        //           callback: action => {
        //             this.$message({
        //               type: 'info',
        //               message: `action: ${ action }`
        //             });
        //           }
        //         });
        //     } else {
        //         this.submit()
        //     }
        // }

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