import React from 'react';
import { NavMenu } from '../app/components/NavBar';
import ProjectCard from '../app/components/ProjectCard';
import AssetAllocPic from 'public/images/assetalloc.jpg'
import EconFoodPic from 'public/images/econfood-card.jpg'
import LibappPic from 'public/images/books-card.jpg'
import BacktestPic from 'public/images/backtest-card.jpg'


const Projects: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen pb-10 mx-10 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40 2xl:mx-56">
      <NavMenu/>
      <h1 className="pt-10 pb-12 text-xl">Projects</h1>
      <div className='group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none gap-5'>
        <ProjectCard
            imgSource={AssetAllocPic}
            altTitle="ibkr-port-analytics"
            title="IBKR Portfolio Analytics"
            description="Marketplace web app to tackle food waste problem by connecting food vendors and customers"
            tags={['React','FastAPI','pandas','SQLite']}
            githublink="https://github.com/brextonho/ibkr-port-analytics"
        />
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
            altTitle="fixclient"
            title="FIX Client"
            description="Class-based backtesting system to simplify testing and reporting of various strategies and indicators"
            githublink="https://github.com/brextonho/fix_client"
            tags={['Python']}
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
