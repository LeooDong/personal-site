import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Art/Cell';
import data from '../data/art';

const Art = () => (
  <Main
    title="Art"
    description="Learn about Leo's art."
  >
    <article className="post" id="art">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/art">Art</Link></h2>
          <p>The paintings that turned out well</p>
        </div>
      </header>
      {data.map((art) => (
        <Cell
          data={art}
          key={art.title}
        />
      ))}
    </article>
  </Main>
);

export default Art;
