import './Logo'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Logo = ({ className }) => (
	<div className={classNames('logo', className)}>1234 </div>
)

Logo.propTypes = {
	className: PropTypes.string,
}

export default Logo
