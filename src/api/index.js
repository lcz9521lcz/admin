// 项目中所有的接口请求都应该定义在这个文件中,其他组件中需要用到某个请求时只导入自己需要的函数即可
import axios from 'axios'

// 登录
export function fetch_login(params) {
  return axios.post('http://www.lovegf.cn:8888/api/private/v1/login', params)
}
