<template>
    <section class='login' > 
        <!-- v-cloak只有在html页面才有用 -->
        <!-- v-once 数据监听一次 -->
        <div class="box">
            <span>Username</span>
            <input type="text" name="userName" placeholder="登录名" v-model='userName' />
            <!-- v-model.number='' 输出的是个Number，离开之后执行一个Number()方法 -->
            <!-- v-model.lazy='' 懒惰的，相当于change -->
            <!-- v-model.trim='' 去除手尾空格 -->
            <span>Password</span>
            <input type="password" name="password" placeholder="密码" v-model='password' />
            <button :disabled='!userName || !password' @click='login'>登录</button>
        </div>
    </section>
</template>

<style lang="less" src='../../../static/less/e-pan.less'>
   
</style>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'login',
    data () {
        return {
            userName : '',
            password : '',
            msg: ''
        }
    },
    components: {
    },
    methods: {
        setPage: function () {
            var windowH = window.innerHeight
            var windwoW = document.body.scrollWidth
            document.querySelector(".login").style.height = windowH + "px"
        },
        login: function () {
            let that = this
            this.$http({
                method: 'post',
                url: this.HOST + '/api/login',
                params: {
                    userName: that.userName,
                    password: that.password
                },
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function(response) {
                var datas = response.data
                console.log(datas)
                if (datas.code == 200) {
                    // 登录成功写入 localStorage
                    localStorage.setItem('isLogin', true)
                    that.$router.push('/admin');
                }
            }).catch(function(error) {
                
            })
        }
    },
    created:function () {
    },
    mounted: function () {
        this.$nextTick(function () {
            this.setPage()
        })
    }
}
</script>