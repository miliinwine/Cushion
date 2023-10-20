import React from 'react'

export const Timer = ({hours, minutes, seconds}) => {
    return (
        <div className="banner__timer">
            <h2 className="banner__timer-title">Limited offer</h2>
            <div className="banner__timer-time">
                <p className="banner__timer-hours">{hours}</p>
                :
                <p className="banner__timer-minutes">{minutes}</p>
                :
                <p className="banner__timer-seconds">{seconds}</p>
            </div>
        </div>
    )
}