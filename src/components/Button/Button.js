import * as React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonM } from 'react-native-paper';

function Button(props) {
  return (
   <ButtonM {...props}>{props.children}</ButtonM>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.oneOf(['text', 'outlined', 'contained']),
  disabled: PropTypes.bool,
  
};

export { Button as default };
