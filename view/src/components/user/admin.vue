<template>
    <el-container>
        <user-nav></user-nav>
        欢迎进入后台管理系统！
        <user-footer></user-footer>
    </el-container>
</template>

<style lang='less'>

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
</style>
<script>
import ElementUI from 'element-ui'
import userFooter from '@/components/common/userFooter'
import userNav from '@/components/common/userNav'

export default {
    name: 'login',
    data () {
        return {

        }
    },
    components: {
        "user-nav": userNav,
        "user-footer": userFooter
    },
    mounted() {

    },
    methods: {

    },
    created:function () {
    },
    mounted: function () {
    }
}
</script>