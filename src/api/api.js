import axios from 'axios'

const $api = axios.create({
  baseURL:'http://127.0.0.1:7001/api'
})



// 添加响应拦截器
$api.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  const { status } = response;

  // if( status === 401 ) window.location.href = '/login'

  if( status === 401) {
    // 先尝试去刷新 token
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default $api;
