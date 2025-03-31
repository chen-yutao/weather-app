# 天气预报应用

本项目是一个基于 React 和 TypeScript 开发的天气预报应用。用户可以输入城市名称，查询该城市未来 7 天的天气预报，数据来源于和风天气 API。

## 可用命令

在项目目录下，你可以运行以下命令：

### `npm start`

启动开发模式。\
打开 [http://localhost:3000](http://localhost:3000) 在浏览器中查看。

修改代码后页面会自动刷新，控制台会显示错误信息。

### `npm test`

以交互模式启动测试运行器。\
更多信息请查看 [运行测试](https://facebook.github.io/create-react-app/docs/running-tests)。

### `npm run build`

构建生产环境应用，生成 `build` 目录。\
React 代码会被优化，以提供最佳性能。

生成的文件经过压缩，文件名包含哈希值，可用于部署。

更多信息请查看 [部署](https://facebook.github.io/create-react-app/docs/deployment)。

### `npm run eject`

**注意：此操作不可逆！**

如果对默认的构建工具和配置不满意，你可以运行 `eject` 命令。\
此命令会将所有的配置文件（如 Webpack、Babel、ESLint 等）暴露出来，方便你进行自定义修改。

一般情况下，不建议使用 `eject`，除非你需要对构建配置进行深度定制。

## 主要功能
- 输入城市名称，查询 7 天的天气预报。
- 显示最高/最低气温及天气状况。
- 实时获取和风天气 API 数据。
- 简洁美观的用户界面，支持响应式布局。

## API 设置
要运行此项目，你需要从和风天气申请 API Key：
1. 访问 [和风天气开发者平台](https://dev.qweather.com/) 注册账号。
2. 申请 API Key。


