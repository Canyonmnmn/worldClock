/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2022-11-07 22:55:54
 * @LastEditors: jianguo
 * @LastEditTime: 2022-11-11 23:33:49
 */
import { ClickToComponent } from "click-to-react-component"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from "styled-components"
import App from './App'

const GlobalStyle = createGlobalStyle`
    body {
      display:flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      min-height: 100vh;
      background-image: linear-gradient(to bottom right,#f5f5f5,#434343);
      font-size: 1.2rem;
      text-shadow: 0 5px 8px rgb(0 0 0 / 30%);
    }

    * ,
    *::after,
    *::before{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Ubuntu', sans-serif;
      text-decoration: none;
      list-style: none;
    }
`
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <App />
    <ClickToComponent />
  </React.StrictMode>
)
