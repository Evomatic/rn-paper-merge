import React from 'react'
import { Card } from 'react-native-paper'
import PropTypes from 'prop-types'

function CardCover(props) {
    return (
        <Card.Cover {...props}>{props.children}</Card.Cover>
    )
}



export default CardCover;