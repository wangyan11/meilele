import React from 'react'
import PropTypes from 'prop-types'
import './index.less'

const Icon = (props) => {
    return <i className={`iconfont icon-${props.type} icon-size`}/>
}

Icon.propTypes = {
    type: PropTypes.oneOf([
        'home',
        'cart',
        'mine',
        'mall',
        "username",
        "password"
    ])
}

export default Icon
