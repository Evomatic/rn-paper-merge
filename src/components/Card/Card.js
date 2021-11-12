import * as React from 'react';
import PropTypes from 'prop-types';
import { Card as CardM } from 'react-native-paper';

function Card(props) {
  return (
      <CardM {...props}>{props.children}</CardM>
  )
}


Card.propTypes = {
    mode: PropTypes.oneOf(['elevated', 'outlined'])
}

export default Card;