import React from 'react';
import ThreeComponent from '../app/components/ThreeCube';
import { NavMenu } from '../app/components/NavBar';

const Playground: React.FC = () => {
  return (
    <div className="container mx-auto max-w-7xl overflow-hidden flex flex-col items-center justify-center h-screen">
      <NavMenu/>
      <h1 className="pt-5" >Hello there</h1>
      <ThreeComponent />
    </div>
  );
};

export default Playground;
