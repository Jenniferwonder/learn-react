---
Title: React Bundle Issue
Topic:
  - React
Type: D
tags:
  - React
DateStarted: 2024-03-06
DateModified: 2024-03-06
DateDo: 
DateDone: 
DateDue: 
DateReviewed: 
Reviewed: 
Difficulty: 
status: 
Comment: 
aliases:
  - React Bundle Issue
---
# React Bundle Issue
不只是域名，这种问题针对的是不同环境的个性化环境变量如何设置的问题。
如果是CRA的项目的话，可以使用`.env` `.env.development` `.env.production`文件来区分不同的环境；  
比如生产环境域名`http://www.prod.com`，开发环境域名`http://www.deve.com`，  
则可以分别设置`REACT_APP_BASE_URL = 'http://www.prod.com'`和`REACT_APP_BASE_URL = 'http://www.deve.com'`，  
然后在程序中使用`process.env.REACT_APP_BASE_URL`来获取基础路径，此时打包的时候会根据不同的环境打包不同的域名

## Questions
#### [React根据不同的环境打包不同的域名？](https://github.com/haizlin/fe-interview/issues/882)
#### [使用webpack打包React项目，怎么减小生成的js大小？](https://github.com/haizlin/fe-interview/issues/881)
#### [在React中如何去除生产环境上的sourcemap？](https://github.com/haizlin/fe-interview/issues/842)
#### [React的应用如何打包发布？它的步骤是什么？](https://github.com/haizlin/fe-interview/issues/827)
#### [怎样在React中开启生产模式？](https://github.com/haizlin/fe-interview/issues/793)



