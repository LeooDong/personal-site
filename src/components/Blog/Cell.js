import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <a href={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
    desc: PropTypes.string,
  }).isRequired,
};

export default Cell;
