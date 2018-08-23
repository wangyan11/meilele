import React from 'react'
import { Icon } from './components'
import {
    Cart,
    Home,
    Mall,
    Mine,
    Detail
} from './pages'


const routes = [
    {
        url: '/home',
        component: Home,
        text: '首页',
        icon: <Icon type='home' />,
        isToggleFooter:true,
        isShowHeaderAndFooter: true
    },
    {
        url: '/mall',
        component: Mall,
        text: '分类',
        icon: <Icon type='mall' />,
        isToggleFooter:true,
        isShowHeaderAndFooter:true
    },
    {
        url: '/cart',
        component: Cart,
        text: '购物车',
        icon: <Icon type='cart' />,
        isToggleFooter:true,
        isShowHeaderAndFooter:true
    },
    {
        url: '/mine',
        component: Mine,
        text: '我的',
        icon: <Icon type='mine' />,
        isToggleFooter:true, 
        isShowHeaderAndFooter:true
    },
    {
        url: '/detail/:id',
        component: Detail,
        text: '商品详情',
    },
]

export default routes