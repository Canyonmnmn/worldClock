/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2022-11-11 21:46:20
 * @LastEditors: jianguo
 * @LastEditTime: 2022-11-11 23:31:54
 */
import React from 'react'
import styled from 'styled-components'
const ClockBgcBasic = styled.div`
    width: ${props => props.size};
    height: ${props=>props.size};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(255,255,255,0.1);
    border-radius: 2rem;
    padding: 20px;
    margin: 2rem;
`

ClockBgcBasic.defaultProps = {
    size:'400px'
}

export default function ClockBgc(props) {
    return (
        <ClockBgcBasic>
            {props.children}
        </ClockBgcBasic>
    )
}
