import React from 'react';
import dva from 'dva';
import { createBrowserHistory } from 'history'
import App from './App';
import models from './models';
import './styles/index.css';

//@ts-ignore
let test = dva.default || dva;
// 生成dva app
const app = test({
  history: createBrowserHistory(),
});

// 注册路由
// app.router(() => <App />);
app.router((obj: any) => (
  <App
    history={obj.history}
    match={obj.match}
    location={obj.location}
    dispatch={obj.app._store.dispatch}
  />
));

// 注册模型
models.forEach((model) => app.model(model));

// 启动
app.start('#root');

