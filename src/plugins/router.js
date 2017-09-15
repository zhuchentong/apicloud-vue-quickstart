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
        // 目标页面对象
        let page = ''

        if (!target || typeof target !== 'string' || !router) {
          return
        }

        // 获取目标页面
        Object.values(router).find(item => item.some(x => {
          if (x.name === target) {
            page = x
            return true
          }
        }))

        if (!page) {
          page = {
            name: target,
            url: target
          }
        }

        if (app.debug) {
          window.api.openWin({
            name: page.name,
            url: `${app.remote}/${page.url}.html`
          })
        } else {
          window.api.openWin({
            name: page.name,
            url: `widget://dist/${page.url}.html`
          })
        }
      }
    }
  }
}
