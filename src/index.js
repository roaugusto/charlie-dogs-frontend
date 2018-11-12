import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'mobx-react'

import '../node_modules/bootstrap/dist/css/bootstrap.css'

import './index.css'
import App from './main/App'
import * as serviceWorker from './serviceWorker'

// Stores/.
import cardStore from './stores/cartStore'
import addressStore from './stores/addressStore'

const stores = {
    cardStore,
    addressStore
}

// Para debugger
window.__APP_STORE__ = stores


ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>
    , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
