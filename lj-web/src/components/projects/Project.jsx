// Project.js
import React from 'react';
import ProjectCard from './ProjectCard';
import byljcImg from '../../assets/by-ljc.JPG';
import dripImg from '../../assets/dripdrop.jpg';
import mediaimg from '../../assets/media2.jpg'
import './project.css'; // Include some basic CSS for styling

const projects = [
  {
    image: byljcImg,
    title: 'by-ljc',
    description: `Photography is one of my passions, and I wanted a website 
    that I could use in order to store some of my favorite moments and photos! 
    In my previous project DevMatch, we used Firebase as our database, and I thought 
    it would be perfect for this project as well. The website is hosted through vercel 
    and is made with React.js `,
    github: 'https://github.com/cheelingjet/photoGallery',
    demo: 'https://by-ljc.vercel.app/',
  },
  {
    image: dripImg,
    title: 'DripDrop',
    description: `DripDrop was the Senior Software Engineering project I developed with my friendgroup (pictured above).
    It is a social media web application focused on daily outfit uploads, user ratings, and
    tournament-style outfit competitions. The demo below is a beta version.`,
    github: 'https://github.com/TaewoooK/dripdrop407/tree/dev',
    demo: 'https://dev.d35lredcdzbakc.amplifyapp.com/home',
  },
  {
    image: mediaimg,
    title: `PCN Media`,
    description: `PCN stands for Philipine Cultural Night, a large performance put on by the Purdue Filipino Association annually.
    I was a member of the Media team for two years, taking on leadership as a Media co-head my second year.`,
    github: 'https://www.instagram.com/purduefilipino/',
    demo: 'https://www.youtube.com/watch?v=RV52a16KTa4&t=8s&ab_channel=PurdueFilipino',
  },
  // {
  //   image: 'path/to/image2.jpg',
  //   title: 'DevMatch',
  //   description: 'This is a brief description of Project Two.',
  //   github: 'https://github.com/BobbyHealy/DevMatch',
  //   demo: 'https://project-two.demo',
  // },
  // Add more projects as needed
];
const numCols = Math.ceil(projects.length / 2);

const Project = () => {
  return (
    <section className="project_section" id="projects">
      <h2 className="section__title">My Projects</h2>
      <span className="section__subtitle">Creative and Technical</span>
      <div className='grid_container'>
        <div className="project__grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Project;
