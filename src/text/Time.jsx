/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2022-11-11 23:19:02
 * @LastEditors: jianguo
 * @LastEditTime: 2022-11-12 00:26:38
 */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const TimeStyle = styled.div`
    margin-top:${props => props.margin_top} ;
    color:${props => props.color};

`
TimeStyle.defaultProps = {
    color: 'black',
    margin_top:'10px'
}

export default function Time(props) {
    const [color, setColor] = useState('black')

    useEffect(() => {
        setColor(props.is_white ? 'white' : 'black')
    }, [props.is_white])

    return (
        <TimeStyle
        color={color}
        margin_top={props.margin_top}
        >{props.children}</TimeStyle>
    )
}
