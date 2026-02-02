import React from 'react'
import './companies.css'
import digimore from '../../assets/digimore.jpg'
import bacardi from '../../assets/bacardi.png'
import hilton from '../../assets/hilton.jpg'
import pepsi from '../../assets/pepsi.jpeg'
import Unilever from '../../assets/Unilever.webp'

function Companies() {
    const company = [
        digimore,
        bacardi,
        hilton,
        pepsi,
        Unilever
    ]
    // const company = [
    //     {
    //         img : {digimore}
    //     },
    //     {
    //         img: {bacardi}
    //     },
    //     {
    //         img: {hilton}
    //     }
    // ]
    
    // Object.values() converts an object into an array of its values
    // <img src={Object.values(item.img)} alt='Company logo'/>
  return (
    <>
        <div className='companies sectionPadding'>
            {
                company.map((logo, index)=>(
                    <div className='companyImg' key={index}>
                        <img src={logo} alt='Company logo'/>
                    </div>
                ))
            }
        </div>
    </>
    )
}

export default Companies