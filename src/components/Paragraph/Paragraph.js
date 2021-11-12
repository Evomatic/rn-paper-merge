import React from 'react'
import PropTypes from 'prop-types'
import { Paragraph as ParagraphM } from 'react-native-paper'


function Paragraph(props) {
    return (
        <ParagraphM {...props}>{props.children}</ParagraphM>
    )
}

Paragraph.propTypes = {
    children: PropTypes.node,
}

export default Paragraph;