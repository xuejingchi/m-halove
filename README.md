
.
├── build/               # Webpack 配置目录
├── dist/                # build 生成的生产环境下的项目
├── src/                 # 源码目录（开发都在这里进行）
│   ├── assets/            # 放置需要经由 Webpack 处理的静态文件
│   ├── components/        # 组件（COMPONENT）
│   ├── directives/        # 指令
│   ├── filters/           # 过滤器
│   ├── routes/            # 路由
│   ├── services/          # 服务（SERVICE，用于统一管理 XHR 请求）
│   ├── views/             # 路由视图基页（VIEW）
│   ├── app.js             # 启动文件
│   ├── index.html         # 静态基页
├── static/              # 放置无需经由 Webpack 处理的静态文件
├── .babelrc             # Babel 转码配置
├── .eslintignore        # （配置）ESLint 检查中需忽略的文件（夹）
├── .eslintrc            # ESLint 配置
├── .gitignore           # （配置）需被 Git 忽略的文件（夹）
├── package.json         # （这个就不用多解释了吧）
```

1、安装依赖
npm install

2、启动应用

npm run start

3、打包应用

npm run build
