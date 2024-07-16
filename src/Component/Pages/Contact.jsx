import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../Styles/contact.css"
import {useForm} from "react-hook-form"
import Footer from "../Home/Footer"

const Contact = () => {

    const {register,reset,handleSubmit,formState:{isSubmitSuccessful,errors}}=useForm();

    const isSubmit=(data)=>{
        console.log(data)
    }

    useEffect(()=>{
        if(isSubmitSuccessful){
            reset({
                name:"",
                email:"",
                phonenumber:"",
                message:""

            })
        }

    },[reset,isSubmitSuccessful])

    return (
        <div className='contact-container'>
            <div className='contact-wrapper'>
                <div className='contact-header'>
                    <h3>Have a question , wana talk to us about travel?</h3>
                    <h3>Well give us a ring, send us an email or fill out the form below.</h3>
                </div>
                <div className='contact-all'>
                    <div className='contact-address'>
                        <h3>Write to Us</h3>
                        <p>Shop No.316,Central Park Tilak Road,Tirupathi. 517501</p>
                    </div>
                    <div className='contact-number'>
                        <h3>Call Us</h3>
                        <p> +91 6294269047</p>
                    </div>
                    <div className='contact-email'>
                        <h3>Send an email</h3>
                        <p><Link className='contact-email-link' to="mailto: contactus@dottholidays.com">saifuddinmondal4580@gmail.com</Link></p>
                    </div>
                </div>
                <div className='contact-image-container'>
                    <div className='contact-image'>
                        <img src="https://www.dottholidays.com/uploads/4af512251cbebb48eeb69aaa7acdc29f.jpg" alt="" />
                    </div>
                    <div className='contact-all-form'>
                        <form className='contact-form' onSubmit={handleSubmit(isSubmit)}>
                            <div className='contact-form-header'>
                                <h3>Enquiry</h3>
                            </div>
                            <div className='contact-form-input'>
                                <label htmlFor='name'>Name : </label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    placeholder='Name'
                                    className='form-style'
                                    {...register ("name",{required:true})}
                                />
                                {errors.name && <span><i>*Please Enter Name</i></span>}
                            </div>
                            <div className='contact-form-input'>
                                <label htmlFor='phonenumber'>Mobile No : </label>
                                <input
                                    type='number'
                                    id='phonenumber'
                                    name='phonenumber'
                                    placeholder='Mobile'
                                    className='form-style'
                                    {...register("phonenumber",{required:true})}
                                />
                                {errors.phonenumber && <span><i>*Please Enter Phone Number</i></span>}
                            </div>
                            <div className='contact-form-input'>
                                <label htmlFor='gmail'>Email : </label>
                                <input
                                    type='email'
                                    id='gmail'
                                    name='email'
                                    placeholder='Email'
                                    className='form-style'
                                    {...register("email",{required:true})}
                                />
                                {errors.email && <span><i>*Please Enter Gmail</i></span>}
                            </div>
                            <div className='contact-form-input'>
                                <label htmlFor='message'>Message : </label>
                                <textarea
                                    type='text'
                                    id='message'
                                    name='message'
                                    placeholder='message'
                                    rows="4"
                                    cols="7"
                                    className='form-style'
                                    {...register("message",{required:true})}
                                />
                                {errors.message && <span><i>*Please Enter Message</i></span>}
                            </div>
                            <div className='class-btn'>
                                <button type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact
