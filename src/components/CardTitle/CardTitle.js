import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-native-paper'

function CardTitle(props) {
    return (
        <Card.Title {...props} />
    )
}


CardTitle.propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
}

export default CardTitle;