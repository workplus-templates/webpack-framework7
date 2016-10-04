#webpack-framework7

>A starter project for using Framework7 with Webpack via Babel!

### 技术栈

* Framework7
* Less
* ES6
* Cordova
* webpack
* babel

### 安装

```bash
workplus start webpack-framework7 my-project
```

安装完成后，进入项目目录，执行`npm install`

### 开发

#### 1. 开发模式

```bash
npm run dev
```

默认端口为8080，可通过配置package.jso文件的scripts属性来修改端口。

#### 2. 设置代理

在webpack.config.js中设置[devServer](http://webpack.github.io/docs/webpack-dev-server.html)，大概配置如下：

```js
var config = {
  ...
  devServer: {
    '/api': {
      target: 'http://api.example.com'
    }
  }
}
```

切记：若使用该代理，访问接口应该为相对路径，既接口为`http://some.example.com/topics`，应写成`/topics`。

#### 3. 发布

```bash
npm run build
```

代码将会打包到`dist`文件夹，可以使用workplus进入dist文件夹并启动server进行测试。

### 制作者

[Hejx](https://github.com/Alex-fun)

