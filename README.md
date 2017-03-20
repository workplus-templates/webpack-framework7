# webpack-framework7

>A starter project for using Framework7 with Webpack via Babel!

### 技术栈

* Framework7
* Less
* ES6
* Cordova
* Webpack
* Babel

### 安装

确保已经安装workplus-cli

```bash
$ npm install workplus-cli -g
```

然后执行以下命令：

```bash
$ workplus start webpack-framework7 my-project
```

安装完成后，进入项目目录，执行`npm install`

### 开发

#### a. 开发模式

```bash
$ npm run dev
```

默认端口为8080，可通过配置package.jso文件的scripts属性来修改端口。

#### b. 设置代理

在webpack.config.js中设置[devServer](http://webpack.github.io/docs/webpack-dev-server.html)，大概配置如下：

```js
var config = {
  ...
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.example.com'
      }
    }
  }
}
```

切记：若使用该代理，访问接口应该为相对路径，既接口为`http://some.example.com/topics`，应写成`/topics`。

#### c. 发布

```bash
$ npm run build
```

代码将会打包到`dist`文件夹，可以使用workplus进入dist文件夹并启动server进行测试。

### 警告

在安卓的workplus下，此段代码会报错，请直接注释掉：**12811行-12821行**

```js
// OS classes
// if (device.os) {
//     classNames.push(device.os, device.os + '-' + device.osVersion.split('.')[0], device.os + '-' + device.osVersion.replace(/\./g, '-'));
//     if (device.os === 'ios') {
//         var major = parseInt(device.osVersion.split('.')[0], 10);
//         for (var i = major - 1; i >= 6; i--) {
//             classNames.push('ios-gt-' + i);
//         }
//     }

// }
```

### Author

[Hejx](https://github.com/Alex-fun)

