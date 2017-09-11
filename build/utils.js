var os = require('os');
var IPv4, hostName;

/**
 * 获取ip地址
 */
module.exports.getIpAddress = function () {
  for (var i = 0; i < os.networkInterfaces().en0.length; i++) {
    if (os.networkInterfaces().en0[i].family == 'IPv4') {
      IPv4 = os.networkInterfaces().en0[i].address;
    }
  }

  return IPv4
}