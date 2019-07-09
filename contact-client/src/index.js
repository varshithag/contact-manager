import React from 'react'
import ReactDOM from 'react-dom'
import configStore from './store/configStore'
import {Provider} from 'react-redux'
import App from './App'


const store=configStore()
store.subscribe(()=>{
        console.log('redux store',store.getState())
})

const jsx = <Provider store={store} >
                <div className="head">
                <App/>
                </div>                   
            </Provider>


ReactDOM.render(jsx, document.getElementById('root'))
