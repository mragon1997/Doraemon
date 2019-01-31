'use strict'

module.exports = appInfo => {
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1548918146219_6566'

  // add your config here
  config.middleware = []

  // 数据库设置
  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '970428',
      database: 'doraemon'
    },
    app: true,
    agent: false
  }

  // 关闭csrf
  config.security = {
    csrf: {
      enable: false
    }
  }

  return config
}
