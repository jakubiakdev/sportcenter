import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * @typedef {Object} NavbarElement
 * @property {string} content
 * @property {string} url
 */

/**
 * @typedef {Object} NavbarProps
 * @property {NavbarElement[]} elements
 */

/**
 * @param {NavbarProps} navbarProps
 */
export default function Navbar(navbarProps) {
    return (
        <nav>
            <ul className='flex flex-row justify-around'>
                {navbarProps.elements.map((element, index) => (
                    <li className='flex-1' key={index}><NavLink to={element.url} className="block aria-[current=page]:border-b-4 border-b-blue-300">{element.content}</NavLink></li>
                ))}
                {/* aria-[current=page]: React router adds an aria attribute when link is active, which works great with tailwind */}
            </ul>
        </nav>
    )
}