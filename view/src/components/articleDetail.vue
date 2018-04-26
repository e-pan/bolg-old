<template>
    <section id='article-detail' ref='div'>
        <nav-e></nav-e>
        <article class='wrap article-detail min-box'>
            <h2>{{ title }}</h2>
            <div class='tag'>
                <span>发布时间：{{ createTime | formatDate }}</span>
                <span v-if='tag'>标签：{{ tag }}</span>
            </div>
            <img :src='img'>
            <div v-html='content' class='content'></div>
        </article>
        <footer-e></footer-e>
    </section>
</template>
<style lang='less' src='../../static/less/e-pan.less'></style>
<script>
import nav from '@/components/common/nav'
import footer from '@/components/common/footer'
import { formatDay } from '../../static/js/e-pan'
//import articleDetail from './articleDetail.js'

export default {
    name: 'article-detail',
    data () {
        return {
            id: '',
            title: '',
            content: '',
            img: '',
            createTime: '',
            tag: ''
        }
    },
    // 通过路由传递进来的ids获取数据的id
    props: ['ids'],
    // 局部组件
    components: {
        'nav-e': nav,
        'footer-e': footer
    },
    methods: {
        getDetail: function (id) {
            let that = this
            this.$http({
                method: 'post',
                url: this.HOST + '/api/getArticleDetail',
                params: {
                    id: that.ids
                }
            }).then(function(response) {
                var datas = response.data
                if (datas.code == 200) {
                    that.title = datas.data.title
                    that.content = datas.data.content
                    that.img = datas.data.img
                    that.createTime = datas.data.createTime
                    that.tag = datas.data.tag
                }
            }).catch(function(error) {
            })
        }
    },
    watch: {
        // 用在监听到某一个数据的变化，然后执行某一个操作比较合适
        // 当data.id的值有变化时候触发(离开自动销毁)
        // id(n, o) {
        //     console.log(`${n}  :  ${o}`)
        // }
        id: {
            handler(n, o) {
                console.log(`${n}  :  ${o}`)
            },
            immediate: true, // 立即 执行
            deep: true      // 深入观察  例如监控一个对象,设置true可以监听到对象下的所有属性，性能开销大 ‘obj.a’可以用来监听
        }
    },
    filters: {
        formatDate: (value) => formatDay(Number(value), 'yyyy-MM-dd hh:mm')
    },
    computed: {
        // 计算
        // 监控的数据有变化才会执行，会缓存数据减少开销，例如v-model每次输入都输刷新dom，computed里面的方法不会执行，但是methods内的会执行。
        // 一般用在有通过几个值来计算出另外一个值的时候
        // name: {
        //     get() {},
        //     set() {}
        // }
    },
    beforeCreate() {
        // 肯定是执行的 拿不到dom节点
        console.log(this.$el, 'beforeCreate')
    },
    created:function () {
        // 肯定是执行的 拿不到dom节点
        console.log(this.$el, 'created')
    },
    beforeMount() {
        // mount 安装
        // 当含有‘el’属性或者vue实例了执行了$mount方法才执行
        // 如果是‘el’使用的是属性，this.$el显示的没挂载之前的dom，如果不是则this.$el为undefined
        console.log(this.$el, 'beforeMount')
    },
    // render(h) {
        // 提供
        // 只有在有属性‘template’时候触发，.vue文件自动做了render处理
    //     throw new TypeError('render error')
    //     //return h('div', {}, this.id)
    // },
    // renderError(h, err) {
        // 监控本组件，开发环境可以用
    //     return h('div', {}, err.stack)
    // },
    // errorCaptured() {
        // 捕获
    //     // 可以检测子组件，生产环境可以用
    // },
    mounted: function () {
        // 当含有‘el’属性或者vue实例了执行了$mount方法才执行
        console.log(this.$el, 'mounted')

        // console.log(this.ids)
        // 通过路由的props传进来的id
        if (this.ids) {
            this.getDetail()
        }
        // 设置data.id的值变化
        // setInterval(() => {
        //     this.id += 1
        // }, 1000)
        // console.log(this.$router)
        // console.log(this.$data)
        // console.log(this.$props)
        // console.log(this.$el) // html节点引用
        // console.log(this.$options)
        // console.log(this.$options.render) 
        // // 使用节点<div>dadadadadada</div>替换app
        // this.$options.render = (h) => {
        //     return h('div', {}, 'dadadadadada')
        // }
        // console.log(this.$root) // 根节点
        // console.log(this.$children)
        // console.log(this.$slots) // 插槽
        // console.log(this.$scopedSlots)
        // console.log(this.$refs)
        // console.log(this.$isServer) // 判断是否是服务端

        // 该方法等同于watch
        // this.$watch('id', (n, o)  => {
        //     console.log(`${n}: ${o}`)
        // })
        // // 销毁watch
        // const unWatch = this.$watch('id', (n, o) => {
        //     console.log(`${n}: ${o}`)
        // })
        // setTimeout(() => {
        //     unWatch()
        // }, 2000)
        // 监听事件（不冒泡）
        // this.$once 只被监听一次
        // this.$on('test',(a, b) => {
        //     console.log('on enents' + `${a}  ${b}`)
        // })
        // // 触发事件（触发事件名称必须统一）
        // this.$emit('test', 1, 2)
        // // 强制整个组件重新渲染
        // this.$forceUpdate()
        // 等同上面的forceUpdate
        //this.$set(obj, 'a', 111)
        // this.$delete() 彻底删除上面添加的属性
        // 再下次dom加载的时候之后回调
        // this.$nextTick(function () {})
        // 销毁整个组件
        // this.$destroy()
    },
    beforeUpdate() {
        // 数据更新才会执行
        console.log(this, 'beforeUpdate')
    },
    updated() {
        // 数据更新才会执行
        console.log(this, 'updated')
    },
    activated() {
        // keep-alive组件激活时调用
        console.log(this, 'activated')
    },
    deactivated() { 
        // keep-alive组件停止是调用
        console.log(this, 'deactivated')
    },
    beforeDestroy() {
        // 组件主动销毁的时候执行
        console.log(this, 'beforeDestroy')
    },
    destroyed() {
        // 组件主动销毁的时候执行
        console.log(this, 'destroyed')
    }
}
</script>