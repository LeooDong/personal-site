import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

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
  </Main>
);

export default Index;
