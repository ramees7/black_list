import React, { useEffect } from 'react'
import ContactLanding from '../components/Contact/ContactLanding';

export default function Contact() {
  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(()=>{
    handleToTop()
  },[])
  return (
    <div>
      <ContactLanding/>
    </div>
  )
}
