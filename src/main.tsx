import React from 'react'
import dva from 'dva'
import App from './App'
import AppModel from './models/app'
import './index.css'

const app = dva();
app.router(() => <App />);
app.model(AppModel);
app.start('#root');