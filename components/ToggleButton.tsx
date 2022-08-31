import React from 'react';
import { useState } from 'react';
import { faMoon, faSun} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ToggleButton = () => {
    const [isDark, setIsDark] = useState(true);
    const toggle = () => {
        setIsDark(!isDark)
        let htmlEle = document.getElementsByTagName('html')[0];
        let bodyEle = document.getElementsByTagName('body')[0];
        let meta: Element | null = document.querySelector('meta[name="theme-color"]')
        if (isDark) {
            htmlEle.style.colorScheme = 'light';
            bodyEle.style.color = 'black';
            bodyEle.style.backgroundColor = '#f3f3f3';
            meta?.setAttribute("content", '#ffffff');
        }else {
            htmlEle.style.colorScheme = 'dark';
            bodyEle.style.color = '#f3f3f3';
            bodyEle.style.backgroundColor = 'rgb(43, 42, 42)';
            meta?.setAttribute("content", '#000000');
        }
    };
    return (
        <button className={`toggle-button ${isDark? 'light': 'dark'}`} onClick={toggle}>

        {isDark ? <FontAwesomeIcon className='icon2' icon={faMoon}/> : <FontAwesomeIcon className='icon2' icon={faSun}/>}

        </button>
    );
}
export default ToggleButton;
