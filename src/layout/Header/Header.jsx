import React from 'react'
import { Img } from '../../ui/Img/Img'
import logo from '../../images/logo.png'

export const Header = () => {
    return (
        <>
            <h1 className='header__title'>🇿🇦 SPECIAL OFFER + FREE DELIVERY 2-4 DAYS IN SA 🇿🇦</h1>
            <div className='header__items'>
                <Img src={logo} width="218px" height="31px" alt="Logo" />
                <svg className='header__ellipse' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#F19D2F" />
                </svg>
                <p className="header__text">orthopedic slippers</p>
            </div>
        </>
    )
}
