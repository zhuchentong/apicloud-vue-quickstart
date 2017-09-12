const ready = function () {
  // 设置状态条
  window.api.setStatusBarStyle({
    style: 'light'
  })
  // 打开页面
  window.api.openFrame({
    name: 'index',
    // url: 'dist/html/index.html', //上传打包时使用
    url: 'http://192.168.3.89:8010/home.html', // 调试时使用
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
