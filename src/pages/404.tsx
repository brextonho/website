// todo

/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { NavMenu } from '../app/components/NavBar';

export default function Custom404() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    setInterval(() => {
      setShow(!show)
    }, 6000)
  }, [show])
  return (
    <div className="container mx-auto max-w-7xl h-screen w-full overflow-hidden">
      <NavMenu />
      <div className="flex flex-col items-center justify-center h-screen w-full">

        <div className="flex flex-col items-center px-7 mt-8 pb-16 md:px-12 lg:px-16 lg:m-0">
          <h3 className="font-bold dark:text-neutral-200 text-3xl md:text-4xl lg:text-5xl">coming soon</h3>
          <br></br>
          <Link href="/" className="p-6 dark:text-neutral-200 rounded-xl text-xl hover:ring-4 hover:ring-secondary-text hover:ring-inset duration-500">
            back to homepage
          </Link>
        </div>
      </div>
    </div>
  )
}