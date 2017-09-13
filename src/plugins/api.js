/**
 * 安装api扩展
 */
export default {
  install (Vue) {
    Vue.prototype.$api = window.api
  }
}
