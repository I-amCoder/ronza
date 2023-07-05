import React from 'react'
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb'
import ContactForm from '../Components/ContactUs'
const ContactUs = () => {
    
  return (
    <>
        <BreadCrumb links={[{title: "Home", path: "/",}, {title: "Contact Us"}]} title={"Contact Us"} />
        <ContactForm />
    </>
  )
}

export default ContactUs