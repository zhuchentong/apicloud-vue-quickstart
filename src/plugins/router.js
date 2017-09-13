import router from '../config/router'
import app from '../config/app.config'
/**
 * navigate扩展
 */
export default {
  install (Vue) {
    Vue.prototype.$router = {
      /**
       * 页面跳转
       */
      push (target, params) {
        console.log(1, target, router, 2)
        // 目标页面对象
        let page = ''

        if (!target || typeof target !== 'string' || !router) {
          return
        }
        console.log(1, target, 2)
        // 获取目标页面
        Object.values(router).find(item => item.some(x => {
          if (x.name === target) {
            page = x
            return true
          }
        }))
        console.log(1, target, 2)
        if (!page) {
          page = {
            name: target,
            url: target
          }
        }
        console.log(1, page, 2)
        window.alert(`${app.remote}/${page.url}.html`)
        if (app.debug) {
          window.api.openWin({
            name: page.name,
            url: `${app.remote}/${page.url}.html`
          })
        }
      }
    }
  }
}
