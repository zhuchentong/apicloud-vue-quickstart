import app from './src/config/app.config'
var launchPage = 'home.html'

var ready = function () {
  // 设置状态条
  window.api.setStatusBarStyle({
    style: 'light'
  })
  // 打开页面
  window.api.openFrame({
    name: 'index',
    url: app.debug ? `${app.remote}/${launchPage}` : `./${launchPage}`, // 调试时使用
    rect: {
      x: 0,
      y: 45,
      w: 'auto',
      h: 'auto'
    },
    bounces: false,
    vScrollBarEnabled: true,
    hScrollBarEnabled: true
  })
}

window.apiready = ready
