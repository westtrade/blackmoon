/** @jsx h */
import { h, Component } from 'preact'
import Scrollable from '../Scrollable'

import style from './BMTable'

export class BMTable extends Component {
	constructor() {
		super()
	}

	render({ headers = {}, className = '', children, onSortChange }) {
		return (
			<div className={`${style.wrapper} ${className}`}>
				{Object.keys(headers).length && (
					<div className={style.header}>
						{Object.entries(headers).map(([key, label], idx) => (
							<BMTableHeader
								headerKey={key}
								key={`${key}__${idx}`}
							>
								{label}
							</BMTableHeader>
						))}
					</div>
				)}
				<Scrollable>
					<div className={style.table}>{children}</div>
				</Scrollable>
			</div>
		)
	}
}

export default BMTable

export const BMTableHeader = ({ className = '', children, headerKey = '' }) => {
	return <div className={style.headerCell}>{children}</div>
}

export const BMTableCell = ({ children }) => {
	return <div className={style.cell}>{children}</div>
}
