const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Test',
    iconPaths: {
      favicon32: '/src/assets/images/logo.png',
      favicon16: '/src/assets/images/logo.png',
      appleTouchIcon: '/src/assets/images/logo.png',
      maskIcon: '/src/assets/images/logo.png',
      msTileImage: '/src/assets/images/logo.png'
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "My Vue App";
        return args;
      })
  }
});
