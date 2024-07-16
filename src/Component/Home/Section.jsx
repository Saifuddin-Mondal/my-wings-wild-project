import React from 'react'
import "../Styles/section.css"

const Section = () => {
  return (
    <div className='section-wrapper'>
      <div className='section-container'>
        <div className='section-heading'>
          <img src="https://www.dottholidays.com/assets/images/sticky-logo.svg" alt="Vacation Planners" width="120" />
          <h3> International & Domestic Holiday Packages</h3>
        </div>
        <div className='grid-container'>
          <div className='grid-text1'>
            <h3>Elevate Your Getaway Experience with Dott Holidays</h3>
            <p>Welcome to Dott Holidays, your premier destination for curated and seamless travel experiences. Our dedicated team  is committed to turning your dream getaway into a remarkable reality.</p>
            <p>Are you seeking a hassle-free escape filled with unforgettable moments? Look no further! We are specialize in designing bespoke itineraries tailored to your preferences, ensuring every detail aligns perfectly with your desires.</p>
          </div>
          <div className='grid-image'>
            <img src="https://www.dottholidays.com/uploads/6fac4f68c83f7e415bb3b57608ae0ba8.jpg" alt="Vacation Planners" />
          </div>
          <div className='grid-text2'>
            <h3>International Holiday Packages</h3>
            <p>Our international holiday packages open doors to a world of wonder. From the iconic landmarks of Europe to the exotic allure of Southeast Asia, Dott Holidays has meticulously designed packages that cater to your travel aspirations. Whether you crave the bustling streets of Australia City, the historic charm of Europe, or the serene beaches of Bali, our packages ensure an immersive experience in every destination.</p>
          </div>
          <div className='grid-text3'>
            <h3>Domestic Holiday Packages</h3>
            <p>India's diverse tapestry is yours to explore with our thoughtfully curated domestic holiday packages. Traverse the majestic peaks of the Himalayas, relax on the pristine beaches of Kerala, or dive into the vibrant culture of Rajasthan. Our domestic offerings encompass the rich heritage and varied landscapes that make India a traveler's paradise.</p>
          </div>
        </div>
      </div>
      <div className='support-wrapper'>
        <div className='suport-container'>
          <div className='support-why'>
            <h3>Why Us?</h3>
          </div>
          <div className='support-customer'>
            <img src="https://www.dottholidays.com/uploads/7e01e3545fd2cf248422f1d6724272fe.png" alt="Domestic Tour Packages" />
            <h4>24/7 CUSTOMER<br />SUPPORT</h4>
          </div>
          <div className='support-customer item2'>
            <img src="https://www.dottholidays.com/uploads/2eb094cd7149dc28e60358b6ab6f3006.png" alt="Domestic Tour Packages" />
            <h4>TOUR MANAGER<br />ASSISTANCE</h4>
          </div>
          <div className='support-customer item3'>
            <img src="https://www.dottholidays.com/uploads/07653f0bbfde390d6547ea30b8aa2c4f.png" alt="Domestic Tour Packages" />
            <h4>CUSTOMIZED<br />TRAVEL PACKAGES</h4>
          </div>
          <div className='support-customer item4'>
            <img src="https://www.dottholidays.com/uploads/34d9a2dadbc205e3b8cf9756c11f1c72.png" alt="Domestic Tour Packages" />
            <h4>NO HIDDEN<br />CHARGES</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
