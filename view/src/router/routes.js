// 路由映射关系
import Home 					from '@/view/Home'
import Article 				from '@/view/Article'
import ArticleDetail 	from '@/view/ArticleDetail'
import About 					from '@/view/About'
import Arter 					from '@/view/Arter'
import Coder 					from '@/view/Coder' 
import Login 					from '@/view/Login'

import Admin 					from '@/view/admin/Admin'
import AdminArticle 	from '@/view/admin/Article'
import AdminTag 			from '@/view/admin/Tag'


export default [
	{
		// 重定向到home下
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		compontent: Home
	},
	{
		path: '/article',
		compontent: Article
	},
	{
		path: '/article/:id',
		compontent: ArticleDetail
	},
	{
		path: '/about',
		compontent: About
	},
	{
		path: '/arter',
		compontent: Arter
	},
	{
		path: '/login',
		compontent: Login
	},
	{
		path: '/admin',
		compontent: Admin,
		children: [
			{
				path: 'article',
				compontent: AdminArticle
			},
			{
				path: 'tag',
				compontent: AdminTag
			},
		]
	}
]