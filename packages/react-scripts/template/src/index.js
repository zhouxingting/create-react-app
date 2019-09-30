import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import React, { Suspense } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
// antd-related import begin
import 'moment/locale/zh-cn';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
// antd-related import end

import configureStore from './configureStore'
import * as serviceWorker from './serviceWorker'

import App from './components/app'
import Spinner from './components/spinner'

export const history = createBrowserHistory()

export const store = configureStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LocaleProvider locale={zh_CN}>
        <Suspense fallback={Spinner}>
          <App />
        </Suspense>
      </LocaleProvider>
    </ConnectedRouter>
  </Provider>,

  document.getElementById('root')
)

// If you want your App to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
