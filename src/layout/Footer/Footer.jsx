import React from 'react'
import { Button } from '../../ui/Button/Button'

export const Footer = () => {
    return (
        <>
            <div className="footer__selects">
                <form className="footer__selects-form">
                    <label className="footer__selects-label">color</label>
                    <div className="footer__select"></div>
                </form>
                <form className="footer__selects-form">
                    <label className="footer__selects-label">size</label>
                    <div className="footer__select"></div>
                </form>
            </div>
            <a className="footer__button" href="https://www.youtube.com"><Button children="buy now" className="footer__button" /></a>
        </>
    )
}
