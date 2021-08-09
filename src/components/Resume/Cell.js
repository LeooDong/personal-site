import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <iframe title={data.title} src={`${process.env.PUBLIC_URL}${data.pdf}`} width="100%" height="1310px">resume</iframe>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    pdf: PropTypes.string,
  }).isRequired,
};

export default Cell;
