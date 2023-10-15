import Image from "next/image";
import RectangleButton from "@/app/components/Rectangle";
import Head from 'next/head';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
// import { Button } from "@/app/components/ui/button"

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center h-screen mx-4 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40">
          <div className="flex flex-col space-y-5 items-center">
            <RectangleButton onClick={() => {}}>
              about
            </RectangleButton>

            <RectangleButton onClick={() => {}}>
              projects
            </RectangleButton>

            <RectangleButton onClick={() => {}}>
              experiences
            </RectangleButton>

            <RectangleButton onClick={() => {}}>
              playground
            </RectangleButton>
          </div>

          <div className="flex flex-row justify-between items-end">
            <h1 className='text-6xl font-bold text-gray-800 mt-4'>
              BREXTONHO
            </h1>

            <div className='flex gap-4 md:gap-6 lg:gap-8 mt-4'>
              <Link href="https://github.com/brextonho" target="_blank" className='hover:opacity-75'><FontAwesomeIcon icon={faGithub} className="text-xl lg:text-3xl"/></Link>
              <Link href="https://www.linkedin.com/in/brextonho" target="_blank" className='hover:opacity-75'><FontAwesomeIcon icon={faLinkedinIn} className="text-xl text-gray-800 lg:text-3xl"/></Link>
            </div>
          </div>

        </div>
    </>
  );
}
