import React from 'react';
import { NavMenu } from '../app/components/NavBar';
import ProjectCard from '../app/components/ProjectCard';
import EconFoodPic from 'public/images/econfood.png'
import LibappPic from 'public/images/books.png'
import BacktestPic from 'public/images/backtest.png'


const Projects: React.FC = () => {
  return (
    <div className="flex flex-col h-screen mx-10 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40 2xl:mx-56">
      <NavMenu/>
      <h1 className="pt-10 pb-12 text-xl">Projects</h1>
      <div className='group flex flex-col lg:flex-row list-none space-x-5'>
        <ProjectCard
            imgSource={EconFoodPic}
            altTitle="econfood"
            title="Econfood"
            description="Marketplace web app to tackle food waste problem by connecting food vendors and customers"
            tags={['Vue.js','Javascript','Firebase']}
            githublink="https://github.com/BT3103AppDev1/l2-final-project-group-4-1"
            projectlink="https://econfood-9aa79.web.app/"
        />
        <ProjectCard
            imgSource={BacktestPic}
            altTitle="pythonbacktest"
            title="Portfolio Backtesting"
            description="Class-based backtesting system to simplify testing and reporting of various strategies and indicators"
            tags={['Python', 'pandas']}
        />
        <ProjectCard
            imgSource={LibappPic}
            altTitle="libapp"
            title="Library Management System"
            description="Python app to simulate library database, with CRUD functions for memberships,
            search, borrow and return books, and pay fines"
            tags={['Python', 'Tkinter', 'MySQL']}
            githublink="https://github.com/brextonho/lib-app"
        />
      </div>
      
    </div>
  );
};

export default Projects;
