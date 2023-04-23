import React from 'react'

export default function Layout({children, className=""}) {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}>
        {children}
    </div>
  )
}
