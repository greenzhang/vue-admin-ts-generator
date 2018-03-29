module.exports = {
  lintOnSave: false,
  parallel: require('os').cpus().length > 1,
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8081,
    https: false,
    hotOnly: false
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    // proxy: {
    //   '/sz': ''
    // },
  }
}
