import React from 'react'
import PropTypes from 'prop-types'
import { Avatar } from 'react-native-paper'

function AvatarIcon(props) {
    return (
        <Avatar.Icon {...props}>{props.children}</Avatar.Icon>
    )
}

AvatarIcon.propTypes = {
    icon: PropTypes.string,
}

export default AvatarIcon;