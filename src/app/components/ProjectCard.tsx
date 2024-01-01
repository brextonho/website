import React from 'react';
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

interface CardProps {
  imgSource: string | StaticImageData;
  altTitle: string;
  title: string;
  description: string;
  tags: string[];
  githublink?: string;
  projectlink?: string;
}

const ProjectCard: React.FC<CardProps> = ({ imgSource, altTitle, title, description, tags, githublink, projectlink }) => (
  <div className="max-w-sm bg-slate-100 rounded overflow-hidden shadow-lg">
    <Image
      src={imgSource}
      // width={500}
      // height={500}
      // fill={true}
      // sizes="(max-width: 500px) 200px, (max-width: 1023px) 400px, 1000px"
      alt={altTitle}
    />
    
    <div className="px-6 py-4">
      <div className="font-bold dark:text-neutral-200 text-xl mb-2">{title}</div>
      <p className="text-neutral-900 dark:text-neutral-200 text-base">{description}</p>
    </div>
    <div className="px-6 pb-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="inline-block rounded px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-200 hover:text-neutral-800 dark:text-neutral-800 dark:hover:text-neutral-600 font-bold mr-2 mb-2"
        >
          {tag}
        </span>
      ))}
    </div>
    
    <div className="flex gap-3 md:gap-5 lg:gap-7 px-8 pb-4 text-neutral-800 dark:text-neutral-200">
      {githublink && (
        <Link href={githublink} target="_blank" className='hover:opacity-75 inline-flex items-center justify-center'>
          <FontAwesomeIcon icon={faGithub} className="text-xl lg:text-2xl" />
        </Link>
      )}
      {projectlink && (
        <Link href={projectlink} target="_blank" className='hover:opacity-75 inline-flex items-center justify-center'>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-lg lg:text-xl" />
        </Link>
      )}
    </div>
  </div>
);

export default ProjectCard;

