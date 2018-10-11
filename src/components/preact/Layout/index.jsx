/** @jsx h */
import { h } from 'preact'

import Navbar from '../Navbar'

import style from './Layout'

const Layout = ({ className = '', children }) => {
	return (
		<div className={`${style.layout} ${className}`}>
			<Navbar className={style.navbar} />
			<div className={style.content}>{children}</div>
		</div>
	)
}

export default Layout
