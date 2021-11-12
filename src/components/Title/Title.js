import React from 'react'
import PropTypes from 'prop-types'
import { Title as TitleM } from 'react-native-paper';

function Title(props) {
    return (
        <TitleM {...props}>{props.children}</TitleM>
    )
}

Title.propTypes = {
    children: PropTypes.node,
}

export default Title;