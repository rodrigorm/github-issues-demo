import React  from 'react';
import moment from 'moment';

const MomentFromNow = (props) => {
  const { date } = props;
  return (
    <span>
      {moment(date).fromNow()}
    </span>
  );
};

MomentFromNow.propTypes = {
  date : React.PropTypes.string.isRequired
};

export default MomentFromNow;
