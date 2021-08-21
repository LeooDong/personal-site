import React from 'react';
import PropTypes from 'prop-types';

import Volunteer from './Volunteering/Volunteer';

const Volunteering = ({ data }) => (
  <div className="volunteering">
    <div className="link-to" id="volunteering" />
    <div className="title">
      <h3>Volunteering</h3>
    </div>
    {data.map((volunteering) => (
      <Volunteer
        data={volunteering}
        key={volunteering.company}
      />
    ))}
  </div>
);

Volunteering.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Volunteering.defaultProps = {
  data: [],
};

export default Volunteering;
