/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2022-11-12 00:34:58
 * @LastEditors: jianguo
 * @LastEditTime: 2022-11-12 01:09:40
 */
import styled from 'styled-components';
import BasicPointer from './BasicPointer';

const HourPointerStyle = styled(BasicPointer).attrs((props) => ({
    rotate: props.rotate || 0,
    size: 100,
    bg_white: "#848484",
    bg_black: "#ff6767",
    width: 7
}))``;

const HourPointer = (props) => {
    return (<HourPointerStyle rotate={props.rotate} is_white={props.is_white} />);
}

export default HourPointer;