/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2022-11-12 00:35:36
 * @LastEditors: jianguo
 * @LastEditTime: 2022-11-12 01:06:21
 */
import React from 'react'
import styled from 'styled-components';
import BasicPointer from './BasicPointer';

const SecondPointerStyle = styled(BasicPointer).attrs((props) => ({
    rotate: props.rotate || 60,
    size: 150,
    tail: 20,
    bg_white: "#ff6767",
    bg_black: "#69c0ff",
    width: 2
}))``;

const SecondPointer = (props) => {
    return (<SecondPointerStyle rotate={props.rotate} is_white={props.is_white} />);
}

export default SecondPointer;