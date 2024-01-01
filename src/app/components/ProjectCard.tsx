import React from 'react';
import Image, { StaticImageData } from 'next/image'

interface CardProps {
  imgSource: string | StaticImageData;
  altTitle: string;
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard: React.FC<CardProps> = ({ imgSource, altTitle, title, description, tags }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <Image
      src={imgSource}
      // width={500}
      // height={500}
      // fill={true}
      // sizes="(max-width: 500px) 200px, (max-width: 1023px) 400px, 1000px"
      alt={altTitle}
    />
    
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectCard;

{/* <Link href="https://github.com/brextonho" target="_blank" className='hover:opacity-75 inline-flex items-center justify-center'><FontAwesomeIcon icon={faGithub} className="text-xl lg:text-3xl "/></Link> */}