/* 开发环境地址配置 */
const dev = {
  baseUrl: "",
  uploadUrl: "",
  downloadUrl: ""
}

/* 生产环境地址配置 */
const prod = {
  baseUrl: "",
  uploadUrl: "",
  downloadUrl: ""
}

const env = process.env.NODE_ENV

let Api

if (env === 'development') {
  Api = dev
} else {
  Api = prod
}

export default Api
