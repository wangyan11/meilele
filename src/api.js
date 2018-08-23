import axios from 'axios';
 import {Toast}from 'antd-mobile';


const isDev = process.env.NODE_ENV === 'development';
const ajax = axios.create({
  baseURL: isDev ? 'http://rap2api.taobao.org/app/mock/25778/api/v1/':'http://rap2api.taobao.org/app/mock/25778/api/v1/'
});

ajax.interceptors.request.use(config=>{
  Toast.loading("加载中..",0);
  return config;
})
ajax.interceptors.response.use(res=>{
  Toast.hide();
  return res;
})
// 请求焦点图

export const getSwiper = () => {   
  return ajax.get('/group-swiper');
}



export const getRoomCenter = () =>{
  return ajax.get('/RoomCenter');
}



export const getDetail = (id) => {
  return ajax.get(`/getDetail/${id}`);
}

export const axiosDetailAddToCart = (id) => {
  return ajax.get(`/addtocart/${id}`);
}  
//列表页面
export const getMallListItem = (id) => {
  return ajax.get(`/mall/${id}`);
}
//登录
export const postLogin = (params) => {
  return ajax.post(`/login`,{params});
}
//验证token
export const getCheckToken = (token) => {
  return ajax.get(`/checkToken/${token}`);
}
