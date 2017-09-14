const os = require('os')
let IPv4
/**
 * 获取ip地址
 */
module.exports.getIpAddress = function () {
  let networkInterfaces = os.networkInterfaces()
  let netwoek = networkInterfaces['本地连接'] | networkInterfaces['en0']

  for (var i = 0; i < netwoek.length; i++) {
    if (netwoek[i].family === 'IPv4') {
      IPv4 = netwoek[i].address
    }
  }

  return IPv4
}
