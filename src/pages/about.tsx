import React from 'react';
import { NavMenu } from '../app/components/NavBar';


const About: React.FC = () => {
  return (
    <div className="flex flex-col h-screen mx-10 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40 2xl:mx-56">
      <NavMenu/>
      <h1 className="pt-10 pb-10 text-xl" >About</h1>
      <div className='grid grid-cols-4 gap-4'>
        <div className='col-span-4 md:col-span-3 whitespace-pre-wrap'>
          <div className='whitespace-pre-line'>
            <p className='text-lg lg:text-2xl mb-6'>
                I am Brexton, a final year undergraduate at the National University of Singapore, 
                majoring in Business Analytics
            </p>

            <p className='text-lg lg:text-2xl mb-6'>
              Currently exploring fields in data science, web development and UI/UX design
              <br></br>
              Aspiring to create better experiences through tech
            </p>

            <p className='text-lg lg:text-2xl mb-6'>
              Feel free to connect with me on <a href="https://www.linkedin.com/in/brextonho/" rel="noopener noreferrer" target="_blank" className="underline hover:text-neutral-300">Linkedin</a> or <a href="mailto:jiajiinho@u.nus.edu" rel="noopener noreferrer" target="_blank" className="underline hover:text-neutral-300">email</a>
            </p>
          </div>
        </div>
        <div className='col-span-1'>

        </div>
        </div>
    </div>
  );
};

export default About;
