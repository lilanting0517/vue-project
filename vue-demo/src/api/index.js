import axios from 'axios';
import qs from 'qs';
import Api from '../config';
// import store from '../store';
import router from '../router'

import {
  getItem
} from '../common/js/util'

const instance = axios.create({
  baseURL: Api.baseUrl,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

// 错误信息处理函数
const handleErrorMsg = function(res) {
  if (res.Success !== true) {
    store.commit('setErrorMsg', res.ErrorMsg)
    store.commit('setRequestErr', true)
  }

  return res
}

/* 请求拦截器 */
instance.interceptors.request.use(config => {
  if (config.method === 'post') {

    // 登陆页、注册页不做拦截
    if (config.url === 'User/Login' || config.url === 'User/Region') return config

    // User 信息不完善时重定向到登录页
    if (!config.data.Token) {
      router.push({
        name: 'Login'
      })

      return false
    }

    return config;
  }
  return config;
}, err => {
  return Promise.reject(err);
});

/* 响应拦截器 */
instance.interceptors.response.use(res => {
  if (res.data.ErrorCode === 100) {
    router.push({
      name: 'Login'
    })
  }

  if (res.status != 200) {
    return Promise.reject(res);
  }
  return res;
}, err => {
  console.warn(err);
  return Promise.reject(err);
});

/* post 方法 promise 封装 */
const postWrap = (url, params) => {
  return new Promise((resolve, reject) => {
    instance.post(url, params).then(({
      data
    }) => resolve(data)).catch(err => reject(err));
  })
}

/**
 * ---------- 测试（可删除） -----------
 * login
 * User/Login（POST）
 * @param {*} params
 */
export const Login = params => {
  const url = 'User/Login';

  const Defaults = {
    UserId: '',
    Psw: '',
    LoginType: 'Card'
  }

  params = Object.assign({}, Defaults, params);
  params = {
    data: params
  }

  return postWrap(url, params).then(handleErrorMsg)
}
