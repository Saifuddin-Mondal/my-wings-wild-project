import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Section1.css'

const Section1 = ({ active, position, src1, alt1, src2, alt2, width, text1, text2, text3, link, text4 }) => {
    const Active = active.toLowerCase() === 'true';
    // const boxStyle={
    //     top: Active ? '124px' : '', 
    //     right: Active ? '67px' : '', 
    //     bottom: Active ? '' : '64px', 
    //     left: Active ? '' : '65px',

    // }
    return (
        <div className={`vacation-container ${Active ? 'isactive' : 'isinactive'}`} >
            <img className='vacation-container-imagess' src={src1} alt={alt1} style={{ borderBottomRightRadius: Active ? '20px' : '0px', borderTopRightRadius: Active ? '20px' : '0px', borderBottomLeftRadius: Active ? '0px' : '20px', borderTopLeftRadius: Active ? '0px' : '20px' }} />
        <div className={`vacation-all ${Active ? 'active' : 'inactive'}`}
                // top: Active ? '124px' : '', right: Active ? '67px' : '', bottom: Active ? '' : '64px', left: Active ? '' : '65px',
                //         '@media and screen(max-width: 1276px)': {
                //         top:Active?'37px':'',right:Active?'4px':'',
                //         bottom:Active?'':'149px',left:Active?'':'2px'
                //   },
                // ...(window.innerWidth <= 1276 && {top: Active ? '0px' : '',
                //     right: Active ? '0px' : '',
                //     bottom: Active ? '' : '0px',
                //     left: Active ? '' : '0px',})
                
                >
                <div className='vacation-image'>
                    <img src={src2} alt={alt2} width={width} />
                </div>
                <div className='vacation-text'>
                    <p>{text1}</p>
                    <p>{text2}</p>
                    <h3>{text3}</h3>
                </div>
                <div className='vacation-link'>
                    <Link className='vacation-link-explore' to={link}>{text4}</Link>
                </div>
            </div>
        </div >
    )
}

export default Section1
