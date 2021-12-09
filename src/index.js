import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './view/App'
import { HashRouter } from 'react-router-dom'
import { DBConfig } from './data/local/db-config'
import { initDB } from 'react-indexed-db'
import registerSW from './util/register-sw'

initDB(DBConfig)
registerSW()

ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>,
  document.getElementById('root')
)
