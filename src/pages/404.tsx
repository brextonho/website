// todo

/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Custom404() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    setInterval(() => {
      setShow(!show)
    }, 6000)
  }, [show])
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="absolute overflow-hidden flex flex-col items-center py-16 md:flex-row md:py-36 md:relative w-full">

        <div className="px-7 mt-8 md:px-12 lg:px-16 lg:m-0">
          <h3 className="text-secondary-text font-bold dark:text-gray-100 p-4 text-3xl md:text-4xl lg:text-5xl">Coming soon!</h3>
          <br></br>
          <Link href="/" className="bg-secondary-text text-primary-base p-4 dark:text-gray-100 rounded-xl font-medium text-xl hover:bg-transparent hover:text-secondary-text hover:ring-4 hover:ring-secondary-text hover:ring-inset duration-500">
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  )
}