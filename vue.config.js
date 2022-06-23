module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/assets/animations.scss";`,
      },
    },
  },
};
