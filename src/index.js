import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './Store/configureStore'
import './App.css'

const store=configureStore()

console.log("Before Update",store.getState())

store.subscribe(()=>{
  console.log("After Update",store.getState())
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App/> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

