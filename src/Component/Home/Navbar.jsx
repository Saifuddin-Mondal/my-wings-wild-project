import React, {useState } from 'react'
import { Link } from 'react-router-dom'
// import { IoIosArrowDown } from "react-icons/io";
import '../Styles/Navbar.css'
// import { VscGlobe } from "react-icons/vsc";
// import { GrGallery } from "react-icons/gr";
// import { LiaCcVisa } from "react-icons/lia";
// import { MdOutlineFlightTakeoff } from "react-icons/md";
// import { AiTwotoneShopping } from "react-icons/ai";
// import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoMenuSharp } from "react-icons/io5";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { MdOutlineArrowDropUp } from "react-icons/md";
// import { National } from '../Data/National';
// import { IoMdArrowDropright } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import {National} from '../Data/National'
import MenuItem from './MenuItem';

const Navbar = () => {
    // const [isopen, setIsOpen] = useState(false)
    const [mobileIcon,setMobileIcon]=useState(false);
    const [mobileCross,setMobileCross]=useState(false)
// useEffect(()=>{
//     setMobileCross(false);
// },[mobileCross])

const handlerIcon=()=>{
    setMobileIcon(prev=>!prev)
    setMobileCross(false)
}
const handlerCrossIcon=()=>{
    setMobileCross(prev=>!prev)
    setMobileIcon(false)
}

    return (
        <div className='container'>
            <div className='contain-menu' onClick={handlerIcon}>
                <IoMenuSharp />
            </div>
            <div className='contain-nav'>
                <div className='holiday-image'>
                    <Link to="https://www.dottholidays.com/">
                        <img className="image" src="https://www.dottholidays.com/assets/images/sticky-logo.svg" alt="Vacation Planners" width="120" />
                    </Link>
                </div>
                <div className={`${mobileIcon ? "main-nav mobile-main-nav" :"main-nav"} ${mobileCross ? "mobile-cross-icon" :"mobile-cross-icon1"}`}>
                    <div className={`${mobileIcon ? " main-menu mobile-menu" :"main-menu"}`}>
                        <h4>Menu</h4>
                        <button onClick={handlerCrossIcon}><RxCross1 /></button>
                    </div>
                    <ul className={`${mobileIcon ? "menus mobile-menus" :"menus"}`}>
                        {
                            /* <li>
                                <Link className='link link1' to="#" onClick={()=>setIsOpen((prev)=>!prev)}><FaMapMarkerAlt />National {!isopen ?< MdOutlineArrowDropUp /> : <IoMdArrowDropdown />}</Link>
                                {
                                    isopen && <div className='dropdown-menu'>
                                        {
                                            National[0].links.map((item,index)=>(
                                                <div key={index} className='dropdown-item'>
                                                    <p>{item.title}</p>
                                                    <IoMdArrowDropright />
                                                </div>
                                            ))
                                        }
                                    </div>
                                }
                            </li>
                            <li>
                                <Link className='link' to="#"><VscGlobe />International<IoIosArrowDown /></Link>
                            </li>
                            <li>
                                <Link className='link' to="#"><AiTwotoneShopping />Back Packing<IoIosArrowDown /></Link>
                            </li>
                            <li>
                                <Link className='link' to="#"><LiaCcVisa />Visa<IoIosArrowDown /></Link>
                            </li>
                            <li>
                                <Link className='link' to="#"><MdOutlineFlightTakeoff />Flights<IoIosArrowDown /></Link>
                            </li>
                            <li>
                                <Link className='link' to="#"><GrGallery />Gallery<IoIosArrowDown /></Link>
                            </li>
                            <li>
                                <Link className='link' to="https://www.dottholidays.com/about">About Us</Link>
                            </li>*/
                            National.map((item,index)=>{
                                const depthLevel=0;
                                return <MenuItem item={item} key={index} mobileIcon={mobileIcon} depthLevel={depthLevel}/>
                            
                            })
                        }
                    </ul>
                </div>
                <div>
                    <button className='btn'>
                        <Link className='button' to="/Contact">Get In Touch</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
