import React, { useEffect } from 'react'

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
    <div>Contact</div>
  )
}
