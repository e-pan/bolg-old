<template>
    <section class='login' v-cloak> 
        <div class="box">
            <span>Username</span>
            <input type="text" name="userName" placeholder="登录名" v-model='userName' />
            <span>Password</span>
            <input type="text" name="password" placeholder="密码" v-model='password' />
            <button :disabled='!userName || !password' @click='login'>登录</button>
        </div>
    </section>
</template>

<style lang="less">
    html {
        min-height: 100%;
        background: #dce1e4;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .login .box {
        background: #ebf0f3;
        border: 1px solid #b8bcbd;
        padding: 30px;
        width: 300px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        span {
            text-align: left;
            width: 100%;
            color: #494d50;
            font-size: 12px;
        }
        input {
            width: 98%;
            background: #f1f5f6;
            border: 1px solid #b8bcbd;
            height: 30px;
            line-height: 30px;
            border-radius: 3px;
            margin: 5px 0 10px 0;
            padding-left: 2%;
        }
        button {
            background: #f1f5f6;
            border: 1px solid #b8bcbd;
            height: 30px;
            line-height: 30px;
            border-radius: 3px;
            width: 100px;
            margin-top: 10px;
        }
        button[disabled] {
            cursor: not-allowed;
        }
    }
</style>
<script>
export default {
    name: 'login',
    data () {
        return {
            userName : '',
            password : '',
            centerDialogVisible: false,
            msg: ''
        }
    },
    components: {
    },
    methods: {
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
                    that.$router.push('/admin');
                }

            }).catch(function(error) {
                that.centerDialogVisible = true
            })
        }
    },
    created:function () {
    },
    mounted: function () {
        this.$nextTick(function () {
        })
    }
}
</script>