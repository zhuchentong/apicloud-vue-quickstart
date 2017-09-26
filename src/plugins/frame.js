// import app from '../config/app.config'
/**
 * navigate扩展
 */
export default {
  install (Vue) {
    Vue.prototype.$frame = {
      /**
       * 页面跳转
       */
      open () {
        console.log(this)
      }
    }
  }
}
