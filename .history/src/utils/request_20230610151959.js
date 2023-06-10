import myAxios from 'axios'
const axios = myAxios.create({
  baseURL: 'http://123.57.109.30:8000'
})
// 导出自定义函数, 参数对象解构赋值
export default ({ url, method = 'GET', params, data, headers }) => {
  return axios({
    url: url,
    method: method,
    params: params,
    data: data,
    headers: headers
  })
}
