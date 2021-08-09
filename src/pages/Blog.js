import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Blog/Cell';
import data from '../data/blog';

const Blog = () => (
  <Main
    title="Blog"
    description="Learn about Leo Dong's blog."
  >
    <article className="post" id="blog">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/blog">Blog</Link></h2>
          <p>A selection of musings that might interest you</p>
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

export default Blog;
