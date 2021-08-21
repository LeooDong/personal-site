import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Volunteer from '../components/Resume/Volunteering';
// import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';
// add this to const Resume if you want to add it back in
// <References />

// import courses from '../data/resume/courses';
// <Courses data={courses} />
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import volunteering from '../data/resume/volunteering';
// import { skills, categories } from '../data/resume/skills';
// <Skills skills={skills} categories={categories} />

const sections = [
  'Education',
  'Experience',
  'Volunteering',
  // 'Skills',
  // 'Courses',
  // 'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Leo Dong's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container"> |
            {sections.map((sec) => (
              <h4 key={sec}>
                &nbsp;&nbsp;
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                &nbsp;&nbsp;|
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Volunteer data={volunteering} />

    </article>
  </Main>
);

export default Resume;
