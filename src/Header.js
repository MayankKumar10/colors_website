import React from 'react'
import { GiRocket } from "react-icons/gi";
import './App.css'



function Header() {
 

    return (
        <div>
                <div className='Header'>
                    <GiRocket className='rocket_Icon'/>
                    <ul>
                        <li><a href="#Red">Red</a></li>
                        <li><a href="#Blue">Blue</a></li>
                        <li><a href="#Green">Green</a></li>
                        <li><a href="#Yellow">Yellow</a></li>
                        <li><a href="#Pink">Pink</a></li>
                        <li><a href="#Purple">Purple</a></li>
                    </ul>
                </div>
        </div>
    )
}

export default Header
