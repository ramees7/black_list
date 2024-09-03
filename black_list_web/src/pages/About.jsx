import React, { useEffect } from 'react'

export default function About() {
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
    <div>About</div>
  )
}
