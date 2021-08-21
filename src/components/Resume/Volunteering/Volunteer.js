import React from 'react';
import PropTypes from 'prop-types';

const Job = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h4><a href={data.link}>{data.company}</a></h4>
      <p className="positiontitle">{data.position}</p>
      <p className="daterange"> {data.daterange}</p>
    </header>
    <p className="roledesc">{data.roledescription}</p>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    roledescription: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Job;
