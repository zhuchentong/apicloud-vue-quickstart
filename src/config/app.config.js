export default {
  name: 'test',
  debug: process.env.DEBUG,
  env: process.env.ENV,
  remote: `http://${process.env.IP}:${process.env.PORT}`,
  url: {
    server: process.env.SERVER_URL
  }
}
