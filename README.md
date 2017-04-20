# tinper-bee-admin

基于tinper-bee组件库编写的admin实例工程。

### TODO

- 封装请求及错误处理
- draft.js文本编辑使用
- redux结合使用
- webpack打包资源使用CDN

## 1. start

```
$ npm install -g uba
$ uba init bee-boilerplate your-projectname
$ cd your-projectname
$ npm install
```
## 2. dev
### 2.1 开发调试
```
//首先运行dll预打包
$ npm run start:pre
//打包完成，启动项目
$ npm start
```

查看效果` http://127.0.0.1:9090`

### 2.2 代码检查
```
$ npm run lint
```

### 2.3 测试用例
```
$ npm run test:watch
```

### 2.4 产出资源
```
$ npm run build
```




