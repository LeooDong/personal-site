import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Photography/Cell';
import data from '../data/photography';

const Photography = () => (
  <Main
    title="Photography"
    description="Learn about Leo Dong's photography."
  >
    <article className="post" id="photography">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/photography">Photography</Link></h2>
          <p>A collection of photographs from home and abroad</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Photography;
