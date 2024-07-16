import React, { useState, useEffect, useRef } from 'react'
import Dropdown from './Dropdown'
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

const MenuItem = ({ item, mobileIcon, depthLevel }) => {
    const [isOpen, setIsOpen] = useState(false)
    let ref = useRef();
    useEffect(() => {
        const myhandler = (e) => {
            if (isOpen && ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown',myhandler)
    },[isOpen])

    const onMouseEnter=()=>{
        // setIsOpen(true)
    }
    const onMouseLeave=()=>{
        // setIsOpen(false)
    }

    return (
        <li className={`${mobileIcon ? "menu-items mobile-menu-items" :"menu-items"}`} ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {
                item.submenu ? (
                    <div>
                        <button type='button' onClick={() => setIsOpen((prev) => !prev)}>
                            {item.title}
                            {/* {depthLevel>0 ? <IoMdArrowDropdown />: < MdOutlineArrowDropUp />} */}
                            {!isOpen && depthLevel === 0 ? < MdOutlineArrowDropUp /> : depthLevel > 0 ? <IoMdArrowDropright /> : <IoMdArrowDropdown />}
                        </button>
                        <Dropdown submenu={item.submenu} isOpen={isOpen} mobileIcon={mobileIcon} depthLevel={depthLevel} />
                    </div>
                ) : (
                    <button>{item.title}</button>
                )
            }
        </li>
    )
}

export default MenuItem
