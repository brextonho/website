import React from 'react';
import { NavMenu } from '../app/components/NavBar';
import { AccordionDemo } from '../app/components/Accordion';

const Experience: React.FC = () => {
  return (
    <div className="container mx-auto max-w-7xl h-screen w-full overflow-hidden">
      <NavMenu/>
      <h1 className="pt-10 pb-4" >Experience</h1>
      <AccordionDemo/>
    </div>
  );
};

export default Experience;
