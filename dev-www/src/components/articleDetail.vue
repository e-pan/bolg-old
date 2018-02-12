<template>
    <div v-cloak>
        <nav-e></nav-e>
        <div>
            <h2>{{ title }}</h2>
            <p>发布时间：{{ createTime }}</p>
            <img v-bind:src='img'>
            <div v-html='content'></div>
        </div>
        <footer-e></footer-e>
    </div>
</template>

<script>
import nav from '@/components/common/nav'
import footer from '@/components/common/footer'
import { getQueryString } from '@/js/e-pan'

export default {
    name: 'home',
    data () {
        return {
            id: '',
            title: '',
            content: '',
            img: '',
            createTime: ''
        }
    },
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
                    id: that.id
                }
            }).then(function(response) {
                var datas = response.data
                console.log(datas)
                if (datas.code == 200) {
                    that.title = datas.data.title
                    that.content = datas.data.content
                    that.img = datas.data.img
                    that.createTime = datas.data.createTime
                }
            }).catch(function(error) {
                //console.log(error)
            })
        }
    },
    created:function () {

    },
    mounted: function () {
        this.$nextTick(function () {
            this.id = getQueryString("id")
            if (this.id) {
                this.getDetail()
            }
        })
    }
}
</script>