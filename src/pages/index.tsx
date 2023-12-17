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
    <div className="">
      <div className="flex flex-col justify-center h-screen mx-10 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40 2xl:mx-56">
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

          <div className="sm:flex flex-row justify-between items-end">
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-800 dark:text-neutral-200 mt-4'>
              BREXTONHO
            </h1>

            <div className='flex gap-4 md:gap-6 lg:gap-8 mt-4 text-neutral-800 dark:text-neutral-200'>
              <Link href="https://github.com/brextonho" target="_blank" className='hover:opacity-75 inline-flex items-center justify-center'><FontAwesomeIcon icon={faGithub} className="text-xl lg:text-3xl "/></Link>
              <Link href="https://www.linkedin.com/in/brextonho" target="_blank" className='hover:opacity-75 inline-flex items-center justify-center'><FontAwesomeIcon icon={faLinkedinIn} className="text-xl lg:text-3xl"/></Link>
              <ModeToggle></ModeToggle>
            </div>
          </div>

        </div>
    </div>
  );
}
