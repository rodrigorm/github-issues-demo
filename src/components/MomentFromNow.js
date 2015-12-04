import React  from 'react';
import moment from 'moment';

export default function(props) {
  const { date } = props;
  return (
    <span>
      {moment(date).fromNow()}
    </span>
  );
}
