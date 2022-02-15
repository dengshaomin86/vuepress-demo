module.exports = {
  base: "/",
  title: "Title",
  themeConfig: {
    nav: [
      {
        text: "测试插件",
        link: "../DEMO.md",
      },
    ],
  },
  plugins: [
    [
      "md-enhance",
      {
        demo: true,
      },
    ],
  ],
};
