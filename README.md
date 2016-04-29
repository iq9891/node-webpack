# node-webpack
webpack demo


1. first 我第一个webpack的demo
  a: `npm run build` 运行其命令，则只编译一次
  b: `npm run watch` 运行其命令，则只要js文件有改动自动编译
  c: `npm run p` 运行其命令，则编译一次并压缩

2. server webpack服务器环境，自动编译改变文件
  `npm run dev` 运行其命令，自动编译改动文件，打开[http://localhost:8080](http://localhost:8080)

3. autoRefresh 自动刷新,若改端口，则在package里的config.port中修改，默认端口是9000
  `npm run dev` 运行其命令，自动编译改动文件，打开[http://localhost:9000](http://localhost:9000)


  指令的意思

  webpack-dev-server - 在 localhost:8080 建立一个 Web 服务器
  --devtool eval - 为你的代码创建源地址。当有任何报错的时候可以让你更加精确地定位到文件和行号
  --progress - 显示合并代码进度
  --colors - Yay，命令行中显示颜色！
  --content-base build - 指向设置的输出目录
