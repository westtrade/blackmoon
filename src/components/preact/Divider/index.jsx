/** @jsx h */
import { h } from 'preact'

import style from './Divider'

const Divider = ({ className = '' }) => (
	<div className={`${style.divider} ${className}`} />
)

export default Divider
