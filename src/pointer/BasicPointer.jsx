/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2022-11-12 00:39:47
 * @LastEditors: jianguo
 * @LastEditTime: 2022-11-12 01:12:11
 */
import styled from "styled-components";

const BasicPointer = styled.div.attrs(props => ({
    style: {
        transform: `rotateZ(${props.rotate}deg)`
    },
    size: 100,
    tail: 0,
    is_white: true,
    bg_white: "#ff6767",
    bg_black: "#69c0ff",
    bg_radius: "6px 6px 3px 3px",
    z_index: 0,
    width: 4,

}))`
    display: flex;
    justify-content: center;
    position: absolute;
    /* background-color: red; */
    border-radius: 50%;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    ::before{
        content:'';
        width:${props=>props.width}px;
        height:${props=>`calc( ${props.size / 2}px + ${props.tail}px )`};
    border-radius: ${(props) => props.bg_radius};
        background: ${props=>props.is_white? props.bg_white:props.bg_balck};
    }
    
`

export default BasicPointer