module.exports = {
  assetsDir: "assets",
  outputDir: "docs",
  pwa: {
    name: "Basic",
    themeColor: "#BD1C2B",
    msTileColor: "#BD1C2B",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black translucent"
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/css/variables.scss";`
      }
    }
  }
};
