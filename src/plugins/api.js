/**
 * 安装api扩展
 */
export default {
  install (Vue) {
    console.log('asdasd')
    Vue.prototype.$api = window.api
  }
}
