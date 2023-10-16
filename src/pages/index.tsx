import Image from "next/image";
import RectangleButton from "@/app/components/Rectangle";
import { ModeToggle } from "@/app/components/ModeToggle";
import Head from 'next/head';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Button } from "@/app/components/ui/button"

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center h-screen mx-4 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40">
          <div className="flex flex-col space-y-5 items-center">
            <RectangleButton onClick={() => {window.location.href = '/about'}}>
              about
            </RectangleButton>

            <RectangleButton onClick={() => {window.location.href = '/projects'}}>
              projects
            </RectangleButton>

            <RectangleButton onClick={() => {window.location.href = '/experiences'}}>
              experiences
            </RectangleButton>

            <RectangleButton onClick={() => {window.location.href = '/playground'}}>
              playground
            </RectangleButton>
          </div>

          <div className="flex flex-row justify-between items-end">
            <h1 className='text-6xl font-bold text-gray-800 dark:text-gray-100 mt-4'>
              BREXTONHO
            </h1>

            <div className='flex gap-4 md:gap-6 lg:gap-8 mt-4 dark:text-gray-100'>
              <Link href="https://github.com/brextonho" target="_blank" className='hover:opacity-75 inline-flex items-center justify-center'><FontAwesomeIcon icon={faGithub} className="text-xl lg:text-3xl "/></Link>
              <Link href="https://www.linkedin.com/in/brextonho" target="_blank" className='hover:opacity-75 inline-flex items-center justify-center'><FontAwesomeIcon icon={faLinkedinIn} className="text-xl lg:text-3xl"/></Link>
              <ModeToggle></ModeToggle>
            </div>
          </div>

        </div>
    </>
  );
}
