import React from 'react';
import PropTypes from 'prop-types';

// A point is a string, or an array of strings and { text, link } parts.
const pointText = (point) => (typeof point === 'string' ? point
  : point.map((part) => (typeof part === 'string' ? part : part.text)).join(''));

const Job = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h4><a href={data.link}>{data.company}</a></h4>
      <p className="positiontitle">{data.position}</p>
      <p className="daterange"> {data.daterange}</p>
    </header>
    {data.roledescription && <p className="roledesc">{data.roledescription}</p>}
    <ul className="points">
      {data.points.map((point) => (
        <li key={pointText(point)}>
          {typeof point === 'string' ? point : point.map((part) => (
            typeof part === 'string' ? part : <a key={part.link} href={part.link}>{part.text}</a>
          ))}
        </li>
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
    points: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({ text: PropTypes.string, link: PropTypes.string }),
      ])),
    ])),
  }).isRequired,
};

export default Job;
