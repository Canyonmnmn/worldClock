/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2022-11-07 22:55:54
 * @LastEditors: jianguo
 * @LastEditTime: 2022-11-11 23:38:25
 */
import React from 'react'
import styled from 'styled-components'
import Clock from './clock/Clock'

const ClockGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
`

export default function App() {
  return (
    <ClockGroup>
      <Clock city={'Sydney'} timezone={11}></Clock>
      <Clock city={'China'} timezone={8}></Clock>
      <Clock city={'London'} timezone={1}></Clock>
      <Clock city={'New York'} timezone={-4}></Clock>
    </ClockGroup>
  )
}
