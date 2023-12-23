import React from 'react';
import { NavMenu } from '../app/components/NavBar';
import { ExperienceAccordion } from '../app/components/ExperienceAccordion';

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col h-screen mx-10 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40 2xl:mx-56">
      <NavMenu/>
      <h1 className="pt-10 pb-3" >Experience</h1>
      <ExperienceAccordion/>
    </div>
  );
};

export default Experience;
