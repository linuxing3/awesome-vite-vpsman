import React from 'react'
import dva from 'dva'
import App from './App'
import models from './models'
import './sytles/index.css'

// 生成dva app
const app = dva();

// 注册路由
app.router(() => <App />);

// 注册模型
models.forEach((model) => app.model(model))

// 启动
app.start('#root');