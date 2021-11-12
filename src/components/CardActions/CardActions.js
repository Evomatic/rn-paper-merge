import * as React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-native-paper';


function CardAction(props) {
    return (

    <Card.Actions {...props}>{props.children}</Card.Actions>

);
}

export default CardAction;