import React from 'react'
import MenuItem from './MenuItem';

const Dropdown = ({submenu,isOpen,mobileIcon,depthLevel}) => {
    depthLevel=depthLevel+1;
    const depthLevelClass=depthLevel>1 ? "dropDownSubMenu" : ""
  return (
    <ul className={`${isOpen ? "show" : ""} ${depthLevelClass} ${mobileIcon ? "dropdown mobile-dropdown" :"dropdown"}`}>
        {
            submenu.map((item,index)=>(
                <li key={index}>
                    <MenuItem item={item} key={index} depthLevel={depthLevel}/>
                </li>
            ))
        }
    </ul>
  )
}

export default Dropdown
