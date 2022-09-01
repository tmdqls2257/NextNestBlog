module.exports = {
  stories: [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)",
    "../pageStories/home.stories.ts",
  ],
  /** Expose public folder to storybook as static */
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-css-modules-preset",
    // "storybook-addon-next-router",
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  // webpackFinal: async (config) => {
  //   // node_mules폴더와 styles 폴더 안의 모듈을 인식할 수 있게 함
  //   config.resolve.modules = [
  //     path.resolve(__dirname, ".."),
  //     "node_modules",
  //     "styles",
  //   ];

  //   // 절대 경로 설정
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     "@components": path.resolve(__dirname, "../components"),
  //     "@pages": path.resolve(__dirname, "../pages"),
  //     "@common": path.resolve(__dirname, "../common"),
  //   };

  //   return config;
  // },
};
