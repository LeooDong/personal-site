import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <a href={data.pdf} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    pdf: PropTypes.string,
    google_pdf: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Cell;
