import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-native-paper'

function CardContent(props) {
    return (
        <Card.Content {...props}>{props.children}</Card.Content>
    )
}


CardContent.propTypes = {
    children: PropTypes.node,
}

export default CardContent;