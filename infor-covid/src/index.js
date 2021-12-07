import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
import { createGlobalStyle } from 'styled-components'
import store from './store'
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
    html{
        ${'' /* height: 100%; */}
        ${'' /* box-sizing: 0; */}
        
    }
    body{
      ${'' /* background-color: blue; */}
      ${'' /* box-sizing: 0; */}
      background-color: #f8f8f8;
    }
    *{
        padding:0;
        margin:0;
        color: rgba(0, 0, 0, 0.7);
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: bold; 
        box-sizing: border-box;
    }

    .popup-content {
    margin: auto;
    background: rgb(255, 255, 255);
    width: 50%;
    padding: 5px;
    }
    .popup-arrow {
    color: rgb(255, 255, 255);
    }
    [role='tooltip'].popup-content {
    width: 200px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
    }

    .popup-overlay {
    background: rgba(0, 0, 0, 0.5);
    }
    [data-popup='tooltip'].popup-overlay {
    background: transparent;
    }
`
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyle />
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
