module.exports = {
  stories: [
    "../app/stories/**/*.stories.mdx",
    "../app/stories/**/*.stories.@(ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-dark-mode",
    //'storybook-tailwind-dark-mode'
    "storybook-addon-tw-dm-toggle",
  ],
  framework: "@storybook/react",
}
