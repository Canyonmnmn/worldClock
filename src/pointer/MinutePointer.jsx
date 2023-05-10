import React from 'react';
import BasicPointer from './BasicPointer';
import styled from 'styled-components';

const MinutePointerStyle = styled(BasicPointer).attrs((props) => ({
    rotate: props.rotate || 30,
    size: 120,
    bg_white: "#848484",
    bg_black: "#fff",
    width: 4,
}))``;

const MinutePointer = (props) => {
    return (<MinutePointerStyle rotate={props.rotate} is_white={props.is_white} />);
}

export default MinutePointer;