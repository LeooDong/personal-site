import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Cell from '../components/Blog/Cell';
import data from '../data/index';

const Index = () => (
  <Main
    description={"Leo Dong's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome</Link></h2>
          <p>
            take a look around
          </p>
        </div>
      </header>
      <p> Feel free to check out my <Link to="/resume">resume</Link>, {' '}
        or look at some <Link to="/photography">photos</Link> {' '}
        and <Link to="/art">art</Link> {' '} that I have made.
        Read some of my thoughts or things that piqued my interest <Link to="/blog">here</Link>. {' '}
      </p>
    </article>

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

export default Index;
