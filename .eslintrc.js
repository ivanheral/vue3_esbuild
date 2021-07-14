module.exports = {
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  rules: {
    'vue/no-unused-vars': 'error'
  },
  ignorePatterns: ["*.js"],
}