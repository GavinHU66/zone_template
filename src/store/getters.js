/**
 * 暴露出store模块里常用的变量，此处需要规范唯一的全局变量命名
 */
const getters = {
  // 用户信息
  user: state => state.user
}
export default getters
