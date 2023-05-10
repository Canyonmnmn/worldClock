/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2022-11-07 22:55:54
 * @LastEditors: jianguo
 * @LastEditTime: 2022-11-08 10:19:12
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel:{
      plugins:[
        [
          "babel-plugin-styled-components",
          {
            displayName:true,
            fileName:true
          }
        ]
      ]
    }
  })],
  build:{
    outDir:"dist"
  }
})
