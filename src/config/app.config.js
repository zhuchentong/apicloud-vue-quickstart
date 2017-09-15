export default {
  name: 'test',
  debug: process.env.DEBUG,
  remote: `http://${process.env.IP}:${process.env.PORT}/dist`,
  url: {
    server: process.env.SERVER_URL
  }
}
