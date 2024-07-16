import React from 'react'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Footer from "../Home/Footer"
import Header from '../Home/Header';
import Navbar from "../Home/Navbar"
import Section1 from "../Home/Section1"
import Section from "../Home/Section"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/home.css'
import Whatsapp from "../../assets/Images/whatsapp-873316_1280.png"
import Phone from "../../assets/Images/pngegg.png"
// import { useState } from 'react';

const Home1 = () => {
    const images = [
        // {src:"https://www.dottholidays.com/uploads/0184cbd27fcb9e60d79e817562bcc18e.png",alt:"International Holiday Packages"},
        { src: "https://www.dottholidays.com/uploads/b3ef8cf0d9f1bd01f7b73a46e26b98f2.jpg", alt: "International Holiday Packages" },
        { src: "https://www.dottholidays.com/uploads/6fac4f68c83f7e415bb3b57608ae0ba8.jpg", alt: "International Holiday Packages" },
        { src: "https://www.dottholidays.com/uploads/a16fd832ad6a0d989417df1394c02a80.jpg", alt: "International Holiday Packages" },
        { src: "https://www.dottholidays.com/uploads/c061fbb88ba958d93cf7331af35f88b3.jpg", alt: "International Holiday Packages" }
    ]
    const text = [
        // { text1: "Best Vacation Planners", text2: "Dott Holidays" },
        { text1: "Enjoy International & Domestic Holiday Packages", text2: "Dott Holidays" },
        { text1: "Enjoy Vacation with", text2: "Dott Holidays" },
        { text1: "Best Vacation Planners", text2: "Dott Holidays" },
        { text1: "Best Vacation Planners", text2: "Dott Holidays" }
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };
    const settings1 = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 903,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 602,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };
    const settings2 = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1210,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 802,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 602,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };
    const settings3 = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 903,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 602,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };
    const settings4 = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ]
    };
    const images1 = [
        { src: "https://www.dottholidays.com/uploads/0aedf1adc1e56d11c6e4cd27d75f7ad9.jpg", alt: "Domestic Tour package" },
        { src: "https://www.dottholidays.com/uploads/4c9fb827bc8fd5e6c6b55304e96d973e.jpg", alt: "Domestic Tour package" },
        { src: "https://www.dottholidays.com/uploads/b5864116f1148cf3fc9bce5a6179f965.jpg", alt: "Domestic Tour package" },
        { src: "https://www.dottholidays.com/uploads/b8517a2cd108f319010cd8fde78a834e.jpg", alt: "Domestic Tour package" },
        { src: "https://www.dottholidays.com/uploads/d2f6b1c3700c0b4935784b005cec798c.jpg", alt: "Domestic Tour package" },
        { src: "https://www.dottholidays.com/uploads/63356bf73fd8f8f853e87d539f6900a4.jpg", alt: "Domestic Tour package" },
        { src: "https://www.dottholidays.com/uploads/81274cbe38fe4860dca6243541406acf.jpg", alt: "Domestic Tour package" },
        { src: "https://www.dottholidays.com/uploads/e209ab237a280a64278c57e16d6d215b.jpg", alt: "Domestic Tour package" },
        { src: "https://www.dottholidays.com/uploads/414d1b82ede2d289419ee7ef4ee0760e.jpg", alt: "Domestic Tour package" },
        { src: "https://www.dottholidays.com/uploads/a5897894c0fca5df21fa7b5783022b40.jpg", alt: "Domestic Tour package" },
        { src: "https://www.dottholidays.com/uploads/7699dd15971ef4844aa71df5bee7d88d.jpg", alt: "Domestic Tour package" },
        { src: "https://www.dottholidays.com/uploads/b8517a2cd108f319010cd8fde78a834e.jpg", alt: "Domestic Tour package" }
    ]
    const text1 = [
        { link1: "https://www.dottholidays.com/tour_package_view/rajasthan-delights", link2: "https://www.dottholidays.com/tour_package_view/tamil-nadu-temple-tour", text1: "The Paradise Of South", text2: "8N 9D", btn: "Explore", link3: "https://www.dottholidays.com/tour_package_view/the-paradise-of-south", text3: "The Paradise Of South" },
        { link1: "https://www.dottholidays.com/tour_package_view/rajasthan-delights", link2: "https://www.dottholidays.com/tour_package_view/tamil-nadu-temple-tour", text1: "The Paradise Of South", text2: "8N 9D", btn: "Explore", link3: "https://www.dottholidays.com/tour_package_view/the-paradise-of-south", text3: "Discover Egypt" },
        { link1: "https://www.dottholidays.com/tour_package_view/rajasthan-delights", link2: "https://www.dottholidays.com/tour_package_view/tamil-nadu-temple-tour", text1: "The Paradise Of South", text2: "8N 9D", btn: "Explore", link3: "https://www.dottholidays.com/tour_package_view/the-paradise-of-south", text3: "Turkey Delights - Winter Special" },
        { link1: "https://www.dottholidays.com/tour_package_view/rajasthan-delights", link2: "https://www.dottholidays.com/tour_package_view/tamil-nadu-temple-tour", text1: "The Paradise Of South", text2: "8N 9D", btn: "Explore", link3: "https://www.dottholidays.com/tour_package_view/the-paradise-of-south", text3: "Chardham Yatra" },
        { link1: "https://www.dottholidays.com/tour_package_view/rajasthan-delights", link2: "https://www.dottholidays.com/tour_package_view/tamil-nadu-temple-tour", text1: "The Paradise Of South", text2: "8N 9D", btn: "Explore", link3: "https://www.dottholidays.com/tour_package_view/the-paradise-of-south", text3: "Coastal Karnataka" },
        { link1: "https://www.dottholidays.com/tour_package_view/rajasthan-delights", link2: "https://www.dottholidays.com/tour_package_view/tamil-nadu-temple-tour", text1: "The Paradise Of South", text2: "8N 9D", btn: "Explore", link3: "https://www.dottholidays.com/tour_package_view/the-paradise-of-south", text3: "Dubai" },
        { link1: "https://www.dottholidays.com/tour_package_view/rajasthan-delights", link2: "https://www.dottholidays.com/tour_package_view/tamil-nadu-temple-tour", text1: "The Paradise Of South", text2: "8N 9D", btn: "Explore", link3: "https://www.dottholidays.com/tour_package_view/the-paradise-of-south", text3: "Tamil Nadu Temple Tour" },
        { link1: "https://www.dottholidays.com/tour_package_view/rajasthan-delights", link2: "https://www.dottholidays.com/tour_package_view/tamil-nadu-temple-tour", text1: "The Paradise Of South", text2: "8N 9D", btn: "Explore", link3: "https://www.dottholidays.com/tour_package_view/the-paradise-of-south", text3: "Turkish Delights" },
        { link1: "https://www.dottholidays.com/tour_package_view/rajasthan-delights", link2: "https://www.dottholidays.com/tour_package_view/tamil-nadu-temple-tour", text1: "The Paradise Of South", text2: "8N 9D", btn: "Explore", link3: "https://www.dottholidays.com/tour_package_view/the-paradise-of-south", text3: "Rajasthan Delights" },
        { link1: "https://www.dottholidays.com/tour_package_view/rajasthan-delights", link2: "https://www.dottholidays.com/tour_package_view/tamil-nadu-temple-tour", text1: "The Paradise Of South", text2: "8N 9D", btn: "Explore", link3: "https://www.dottholidays.com/tour_package_view/the-paradise-of-south", text3: "Glimpse of Gujarat & Madhya Pradesh" },
        { link1: "https://www.dottholidays.com/tour_package_view/rajasthan-delights", link2: "https://www.dottholidays.com/tour_package_view/tamil-nadu-temple-tour", text1: "The Paradise Of South", text2: "8N 9D", btn: "Explore", link3: "https://www.dottholidays.com/tour_package_view/the-paradise-of-south", text3: "Dubai Super Saver Package" },
        { link1: "https://www.dottholidays.com/tour_package_view/rajasthan-delights", link2: "https://www.dottholidays.com/tour_package_view/tamil-nadu-temple-tour", text1: "The Paradise Of South", text2: "8N 9D", btn: "Explore", link3: "https://www.dottholidays.com/tour_package_view/the-paradise-of-south", text3: "Chardham Yatra" }
    ]
    const images2 = [
        { src: "https://www.dottholidays.com/uploads/56a52eb426f0643ce43c66f7c3497206.jpg", alt: "Vacation Planners", text1: "Piligrime Tours" },
        { src: "https://www.dottholidays.com/uploads/77ed2d671723fd3cd8ea2ed4f0f1bb04.jpg", alt: "Vacation Planners", text1: "Outstanding Tours" },
        { src: "https://www.dottholidays.com/uploads/102821cb8feffdb0a3e0a027d33d0965.jpg", alt: "Vacation Planners", text1: "Group Tours" },
        { src: "https://www.dottholidays.com/uploads/292d417d78ccfac3ff6f868a941743e1.jpg", alt: "Vacation Planners", text1: "Honeymoon Tours" },
        { src: "https://www.dottholidays.com/uploads/66128722655b588df1f633930ef2385c.jpg", alt: "Vacation Planners", text1: "Back Packing Tour" },
        { src: "https://www.dottholidays.com/uploads/2dcfb4ed87f2494358e276f50f112355.jpg", alt: "Vacation Planners", text1: "Piligrime Tours" }
    ]
    const image3 = [
        {
            active: "True", position: "row", src1: "https://www.dottholidays.com/uploads/1d55c95a99efd233478001fd4b9d4af3.jpg", alt1: "Vacation Plane", src2: "https://www.dottholidays.com/assets/images/sticky-logo.svg", alt2: "International Holiday Packages", width: "120", text1: "THE MOST POPULAR",
            text2: "DESTINATION THIS YEAR", text3: "Thailand", link: "https://www.dottholidays.com/tour_packages/thailand", text4: "EXPLORE"
        },
        {
            active: "False", position: "row-reverse", src1: "https://www.dottholidays.com/uploads/09277567da6ea8af8cf4322dc30a449f.jpg", alt1: "International Holiday Packages", src2: "https://www.dottholidays.com/assets/images/sticky-logo.svg", alt2: "Vacation Planners", width: "120", text1: "To Know",
            text2: "the Exact", text3: "Flight Fare", link: "https://www.dottholidays.com/flights", text4: "CLICK HERE"
        }
    ]
    const image4 = [
        {
            src: "https://www.dottholidays.com/uploads/090b51d3f0f153d434e1557780528602.jpg", alt: "Avatar", link1: "https://www.dottholidays.com/national_holidays/south-india-tours",
            text1: "South India Tours", text2: "&nbsp;South India is a treasure mine of tranquilly, gorgeous views, nature pleasure, and India&#39;s glorious past.As a result, it has become one of India &#39;s most popular touristsites.", link2: "https://www.dottholidays.com/national_holidays/south-india-tours", text3: "Explore"
        },
        {
            src: "https://www.dottholidays.com/uploads/f0765442ab56f2e1c9aac5f3ef0258a2.jpg", alt: "Avatar", link1: "https://www.dottholidays.com/national_holidays/south-india-tours",
            text1: "North India Tours", text2: "&nbsp;North India is a treasure mine of tranquilly, gorgeous views, nature pleasure, and India&#39;s glorious past.As a result, it has become one of India &#39;s most popular touristsites.", link2: "https://www.dottholidays.com/national_holidays/south-india-tours", text3: "Explore"
        },
        {
            src: "https://www.dottholidays.com/uploads/1778d96771ac2496542a66b02e3a7b7e.jpg", alt: "Avatar", link1: "https://www.dottholidays.com/national_holidays/south-india-tours",
            text1: "West India Tours", text2: "&nbsp;West India is a treasure mine of tranquilly, gorgeous views, nature pleasure, and India&#39;s glorious past.As a result, it has become one of India &#39;s most popular touristsites.", link2: "https://www.dottholidays.com/national_holidays/south-india-tours", text3: "Explore"
        },
        {
            src: "https://www.dottholidays.com/uploads/72ddca339a9d36164397f68ba84de11a.jpg", alt: "Avatar", link1: "https://www.dottholidays.com/national_holidays/south-india-tours",
            text1: "East India Tours", text2: "&nbsp;East India is a treasure mine of tranquilly, gorgeous views, nature pleasure, and India&#39;s glorious past.As a result, it has become one of India &#39;s most popular touristsites.", link2: "https://www.dottholidays.com/national_holidays/south-india-tours", text3: "Explore"
        },
        {
            src: "https://www.dottholidays.com/uploads/b791e930055bd15a8119e670b7957764.jpg", alt: "Avatar", link1: "https://www.dottholidays.com/national_holidays/south-india-tours",
            text1: "isLand Tours", text2: "&nbsp;island India is a treasure mine of tranquilly, gorgeous views, nature pleasure, and India&#39;s glorious past.As a result, it has become one of India &#39;s most popular touristsites.", link2: "https://www.dottholidays.com/national_holidays/south-india-tours", text3: "Explore"
        }
    ]
    const image5 = [
        { name: "Gururaj Mondal", DOR: "April 04,2022", src: "https://www.dottholidays.com/uploads/a6d4d3e809c735ae7db07791b503f064.png", alt: "International Holiday Packages", text1: "Hi, we selected this destination Maldives location for our 10th-anniversary vacation. Generally, people thought that this location is for a honeymoon couple and we are here with our kids. We have enjoyed it a lot and it is the perfect location to relax, rejuvenate, enjoy your private time, you can take out the busy schedule &amp; spend quality time with your family. During this covid situation here they followed covid 19 protocols, very hygiene, cool, no more rush and super clean. &nbsp;In this process, Dott Holidays helped us a lot they made our entire travel very smooth going and easy. I highly recommend them for any of your future vacation plans. Dott holidays means Best Vacation Planners." },
        { name: "Ankita Das", DOR: "Jan 14,2022", src: "https://www.dottholidays.com/uploads/c5cae60952370f0e1b2df870d081546e.png", alt: "International Holiday Packages", text1: "Hi, I am Ankita, C.A from Warangal. I have joined the Kashmir group tour organized by Dott Holidays. they have&nbsp;the Best Domestic Tour Packages. We traveled from Bangalore to Kashmir. This trip went well, the cost is also very reasonable and the arrangements were excellent. Their tour manager was very cooperative and he managed the entire time gap and solved it without causing any problems. I prefer Dott Holidays in the future if I want to travel to Kashmir or any other destination. Thank you, Dott." },
        { name: "Jannat Khatun", DOR: "May 24,2022", src: "https://www.dottholidays.com/uploads/c1c89adf1a8e3caa51f5f3760f1c2c05.png", alt: "International Holiday Packages", text1: "We have been to the Maldives through&nbsp;Dott Holidays in 2020. We never expected that this situation it&#39;s got to be so memorable. During our travel, we stayed at Sun Siyam Olhuveli Resort. They made it all very special for us. We were a little worried in the starting because of the Covid and after coming here we never felt worried even for once by seeing the situation, how nice all the people are, and how beautiful the resort is. They have the best International &amp; Domestic Holiday Packages. Thank you so much Dott Holidays for all this happen and for making our trip even more special." },
        { name: "Saifuddin Mondal", DOR: "Dec 23,2022", src: "https://www.dottholidays.com/uploads/3bb5a9111a5835f46cd802cecdfc7b20.png", alt: "International Holiday Packages", text1: "I am Saifuddin Auditor from Tirupathi. I and my friends in the Auditing team formed a group with 37 members and approached Dott Holidays to organize the Kashmir group. They had given us the best 9-day plan also including the places like Amritsar-Golden Temple, Dharmashala, Vaishnavi Matha Temple, Pahalgam, Gulmarg, Srinagar local site seeing and Boat stay on Dal Lake. We are happy with their services and advise them to come up with activities like this in future and we hope they grow to the best in the industry." },
        { name: "Santanu Rana", DOR: "April 07,2022", src: "https://www.dottholidays.com/uploads/3e22f305e715449e72ee430eb3116423.png", alt: "International Holiday Packages", text1: "Hi, I am Santanu. I and my wife Alekya approached Dott Holidays to design a Honeymoon package within India. They come up with Shimla, Manali and Agra plans for us. The places were amazing. During our 7 days trip, the arrangements made by them were excellent. They took care of us well from the beginning of the tour to the end. We enjoyed ourselves a lot and made many good memories. We recommend Dott Holidays to everyone for any kind of tour and trips with family and friends." }
    ]

    // const [visibleSlides, setVisibleSlides] = useState({ start: 0, end: settings1.slidesToShow - 1 });

    // const handleAfterChange = (current) => {
    //     const slidesToShow1 = settings1.slidesToShow || 1; 
    //     setVisibleSlides({ start: current, end: current + slidesToShow1 - 1 });
    //     // console.log(`oldIndex: ${oldIndex}, newIndex: ${newIndex}`);
    //     console.log('New Visible Slides:', setVisibleSlides);
    //     console.log(`Current index: ${current},end: ${setVisibleSlides.end}`);
    // };
    return (
        <div className='Wrapper'>
            <div className='wrapper-container'>
                <div className='Whatsapp-Phone'>
                    <Link to="https://wa.me/916294269047"><img src={Whatsapp} alt='whatsapp'width="50px" className='whatsapp-img'/></Link>
                    <Link to="tel: +916294269047"><img src={Phone} alt='phone'width="50px" className='phone-img'/></Link>
                </div>
                <div className='nav'>
                    <Header />
                    <Navbar />
                </div>
                <div className="swiper-container">
                    <Slider {...settings}>
                        {
                            images.map((image, index) => (
                                <div key={index} className='swiper-img'>
                                    <img src={image.src} alt={image.alt} />
                                    <div key={index} className='swiper-text'>
                                        <p>{text[index].text1}</p>
                                        <p>{text[index].text2}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
            <div className='popular-box'>
                <div className='popular-container'>
                    <div className='popular'>
                        <p>MOST POPULAR</p>
                        <h1>Upcoming Trips</h1>
                    </div>
                    <div className="popular-slide">
                        <Slider {...settings1}>
                            {
                                images1.map((image, index) => (
                                    <div key={index} className={`'popular-slide-all' ${index%2===0 ? "even-slide" : ""}`}
                                    // style={
                                    //     (index >= visibleSlides.start && index <= visibleSlides.end)
                                    //         ? { marginTop: index % 2 === 0 ? '20px' : '0' }
                                    //         : {}
                                    // }
                                    >
                                        <div className="popular-sl-image">
                                            <img className='popular-sl-image-img' src={image.src} alt={image.alt} />
                                            <div className='popular-expolor'>
                                                <h3><Link className='popular-expolor-text' to={text1[index].link1}>{text1[index].text1}</Link></h3>
                                                <p className='popular-expolor-para'>{text1[index].text2}</p>
                                                <div className='explore'>
                                                    <Link className='popular-explore-link' to={text1[index].link2}>{text1[index].btn}</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h3><Link className='popular-last-text' to="{text1[index].link3}">{text1[index].text3}</Link></h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
            <div>
                <Section />
            </div>
            <div className='budject-container'>
                <div className='budject-text'>
                    <p>Budget Friendly Vacation Destinations</p>
                    <h4>Pick Your Trail</h4>
                </div>
                <div className='budject-slide'>
                    <Slider {...settings2}>
                        {
                            images2.map((image, index) => (
                                <div className='budject-text-image'>
                                    <div key={index} className='budject-image'>
                                        <img src={image.src} alt={image.alt} />
                                        <div className='budject-text-cont'>
                                            <h3 className='budject-text-heade'>{image.text1}</h3>
                                            <Link className='budject-text-heade-link' to="https://www.dottholidays.com/national_holidays/south-india-tours">Explore</Link>
                                        </div>
                                    </div>
                                    <div className='budject-header'>
                                        <h5>{image.text1}</h5>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
            {/* <div className='vacation-container'>
                <img src='https://www.dottholidays.com/uploads/1d55c95a99efd233478001fd4b9d4af3.jpg' alt='Vacation Plane'/>
                <div className='vacation-all'>
                    <div className='vacation-image'>
                        <img src="https://www.dottholidays.com/assets/images/sticky-logo.svg" alt="International Holiday Packages" width="120" />
                    </div>
                    <div className='vacation-text'>
                        <p>THE MOST POPULAR</p>
                        <p>DESTINATION THIS YEAR</p>
                        <h3>Thailand</h3>
                    </div>
                    <div className='vacation-link'>
                        <Link className='vacation-link-explore' to="https://www.dottholidays.com/tour_packages/thailand">EXPLORE</Link>
                    </div>
                </div>
            </div > */}
            <Section1 {...image3[0]} />
            <div className='tour-container'>
                <div className='tour-header'>
                    <p>Domestic Tour Packages</p>
                    <h3>National Holidays</h3>
                </div>
                <div className='tour-slider'>
                    <Slider {...settings3}>
                        {
                            image4.map((image, index) => (
                                <div key={index} className='tour-image'>
                                    <div className='tour-image-src'>
                                        <img className='imgq' src={image.src} alt={image.alt} />
                                        <div className='tour-slider-rotate'>
                                            <h3 className='tour-slider-head'><Link to={image.link1}></Link>{image.text1}</h3>
                                            <p className='tour-slider-head'>{image.text2}</p>
                                            <Link className='tour-slider-link-exp' to={image.link2}>{image.text3}</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
            <Section1 {...image3[1]} />
            <div className='client-container'>
                <div className='client-header'>
                    <p>HAPPY STORIES FROM CLIENTS AROUND THE WORLD</p>
                    <h4>Client Feedback</h4>
                </div>
                <div className='client-slider'>
                    <Slider {...settings4}>
                        {
                            image5.map((image, index) => (
                                <div key={index} className='client-all'>
                                    <div className='client-text'>
                                        <p>{image.text1}</p>
                                    </div>
                                    <div className='client-details'>
                                        <img src={image.src} alt={image.alt} />
                                        <h6>{image.name}</h6>
                                        <p>{image.DOR}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div >
    )
}

export default Home1
