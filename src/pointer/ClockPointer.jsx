/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2022-11-11 23:20:24
 * @LastEditors: jianguo
 * @LastEditTime: 2022-11-12 01:02:50
 */
import React,{useState} from 'react'
import ClockPointerStyle from './ClockPointerStyle'
import HourPointer from './HourPointer'
import MinutePointer from './MinutePointer'
import SecondPointer from './SecondPointer'
import ClockCenter from './ClockCenter'
import BasicPointer from './BasicPointer'

export default function ClockPointer(props) {

    return (
        <ClockPointerStyle is_white={props.is_white}>
            <HourPointer
            is_white={props.is_white}
            rotate={props.hourDeg}
            ></HourPointer>
            <MinutePointer
            is_white={props.is_white}
            rotate={props.minuteDeg}
            ></MinutePointer>
            <SecondPointer
            is_white={props.is_white}
            rotate={props.secondDeg}
            ></SecondPointer>
            <ClockCenter></ClockCenter>
        </ClockPointerStyle>
    )
}
