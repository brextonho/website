import React from 'react';
import { NavMenu } from '../app/components/NavBar';
import { ExperienceAccordion, type ExperienceEntry } from '../app/components/ExperienceAccordion';

const experiences: ExperienceEntry[] = [
  {
    title: "NUS Endowment",
    subtitle: "Analyst",
    date: "Mar 2025 — Present",
    details: "Risk and Data Engineering",
    tools: "Python",
  },
  {
    title: "Sustainability and Green Finance Institute",
    subtitle: "Research Analyst",
    date: "Dec 2024 — Mar 2025",
    details: "Consumer Carbon Modelling",
    tools: "Python, PySpark, Stata",
  },
  {
    title: "Government of Singapore Investment Corporation (GIC)",
    subtitle: "Data Science",
    date: "Jan 2023 — Nov 2023",
    details: "PE Strats",
    tools: "Python, Plotly Dash, Bootstrap, Snowflake, SnowSQL, Tableau, Git",
  },
  {
    title: "Shopee",
    subtitle: "Data Analytics",
    date: "May 2022 — Aug 2022",
    details: "Shopee Mall, Supermarket, Supply Chain",
    tools: "PrestoSQL, SparkSQL, Google Apps Script, Excel",
  },
];

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col h-screen mx-10 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40 2xl:mx-56">
      <NavMenu/>
      <h1 className="pt-10 pb-3 text-xl" >Experience</h1>
      <ExperienceAccordion items={experiences}/>
    </div>
  );
};

export default Experience;
