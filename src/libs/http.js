/**
 * Created by lianghj on 18/11/20.
 * http配置
 */
//返回接口状态说明
// http status 403  token未校验通过
// 200 成功
// 403 权限不足
// 101 文件过大
// 102 不支持的文件格式
// 103 HttpMediaTypeNotSupported
// 104 网络异常(一般是io异常)
// 107 请求参数绑定错误
// 108 http请求方法错误
// 109 参数无效
// 500 服务器内部错误
// 701 NLP服务异常

import axios from "axios";
import qs from "qs";

import store from "../store/index.js";

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = "";
axios.defaults.headers = {
  // 'X-Requested-With': 'XMLHttpRequest',
  "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
};

axios.interceptors.request.use(
  config => {
    // loading
    // if (store.state.token) {
    //   config.headers.Authorization = `token ${store.state.token}`
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.resolve(error.response);
  }
);

function checkStatus(response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response;
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: "网络异常"
  };
}

function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    alert(res.msg);
  }
  if (res.data && !res.data.success) {
    alert(res.data.error_msg);
  }
  return res;
}

export default {
  post(url, data) {
    return axios({
      method: "post",
      baseURL: "",
      url,
      data: qs.stringify(data),
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    })
      .then(response => {
        return checkStatus(response);
      })
      .then(res => {
        return checkCode(res);
      });
  },
  get(url, params) {
    return axios({
      method: "get",
      baseURL: "",
      url,
      params,
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    })
      .then(response => {
        return checkStatus(response);
      })
      .then(res => {
        return checkCode(res);
      });
  }
};
