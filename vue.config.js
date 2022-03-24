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
        args[0].title = "AltsPad is a decentralized multi-chain fundraising platform enabling projects to raise capital and promise safety to early stage investors. Stake TrustPad tokens to get priority-access to promising projects.";
        return args;
      })
  }
});
