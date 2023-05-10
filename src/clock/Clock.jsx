/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2022-11-1 21:45:38
 * @LastEditors: jianguo
 * @LastEditTime: 2022-11-11 23:59:27
 */
import React, { useState, useEffect } from 'react'
import ClockBgc from './ClockBgc'
import City from '../text/City'
import Time from '../text/Time'
import ClockPointer from '../pointer/ClockPointer'

export default function Clock(props) {
    const { timezone,city} = props
    //根据现实时间控制时钟颜色
    const [light, setLight] = useState(true)

    //年 月 日 小时 分钟 秒
    const [year, setYear] = useState()
    const [mouth, setMouth] = useState()
    const [newDay, setDay] = useState()
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [second, setSecond] = useState()

    //小时 分钟 秒的旋转角度
    const [hourDeg, setHourDeg] = useState()
    const [minuteDeg, setMinuteDeg] = useState()
    const [secondDeg, setSecondDeg] = useState()

    //1s的角度
    const basicDeg = 6
    const timezonePara = timezone * 3600000

    const setTime = () => {
        //获取当前的时间
        let nowTime = new Date()
        //将时间转成毫秒(开始时间为1970.01.01 0.00)
        let day = new Date(nowTime.getTime() + timezonePara)
        let hour = day.getUTCHours() * basicDeg * 5
        let min = day.getUTCMinutes() * basicDeg
        let sec = day.getUTCSeconds() * basicDeg

        setSecondDeg(sec)
        setMinuteDeg(min + sec / 60)
        setHourDeg(hour + (min / 60) * 5)

        setYear(day.getUTCFullYear())
        setMouth(day.getUTCMonth() + 1)
        setDay(day.getUTCDate())
        setHour(day.getUTCHours())
        setMinute(day.getUTCMinutes())
        setSecond(day.getUTCSeconds())
    }

    useEffect(() => {
        if (+hour >= 18 || +hour < 7) {
            setLight(false)
        }
    }, [hour])

    useEffect(() => {
        setTime()
        const interval = setInterval(() => {
            setTime()
        }, 500);

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <ClockBgc>
            <City 
            is_white={light}
            >{city}</City>

            <ClockPointer 
            is_white={light}
            hourDeg={hourDeg}
            minuteDeg={minuteDeg}
            secondDeg={secondDeg}
            ></ClockPointer>
            <Time is_white={light}>
                {year}-{mouth}-{newDay} {hour}:{minute}:{second}
            </Time>
        </ClockBgc>
    )
}
