/** @jsx h */
import { h, Component } from 'preact'

import MidPriceChart from '../MidPriceChart'
import CollapseToggler from '../CollapseToggler'
import Isle from '../Isle'
import Divider from '../Divider'
import TabSelector from '../TabSelector'
import Dropdown from '../Dropdown'
import BMTable, { BMTableCell } from '../BMTable'

import { connect } from 'unistore/preact'

import style from './MidPriceWidget'

const priceTypes = {
	all: 'All',
	ask: 'Ask',
	bid: 'Bid',
}

const tableHeaders = {
	price: 'Price',
	amount: 'Amount',
	total: 'Total',
}

export const MidPriceWidget = ({
	className = '',
	bids = [],
	asks = [],
	isVertical = false,
	onToggle,
	...other
}) => {
	return (
		<Isle className={`${style.wrapper} ${className}`} {...other}>
			<div className={style.chart}>
				<MidPriceChart
					className={style.chartElement}
					isVertical={isVertical}
				/>
				<CollapseToggler
					className={style.toggler}
					isActive={isVertical}
					onChange={onToggle}
				/>
			</div>

			{!isVertical && (
				<div className={style.ui}>
					<div className={style.space}>
						<TabSelector options={priceTypes} />

						<div className={style.groups}>
							<div className={style.groupsLabel}>Groups</div>
							<Dropdown
								className={style.groupsSelector}
								activator="6 decimals"
								isOutlined={true}
							>
								Test
							</Dropdown>
						</div>
					</div>
					<Divider />
					<BMTable headers={tableHeaders} className={style.table}>
						{asks.map(([price, amount]) => {
							return [
								<BMTableCell>{price}</BMTableCell>,
								<BMTableCell>{amount}</BMTableCell>,
								<BMTableCell>{price * amount}</BMTableCell>,
							]
						})}

						{bids.map(([price, amount]) => {
							return [
								<BMTableCell>{price}</BMTableCell>,
								<BMTableCell>{amount}</BMTableCell>,
								<BMTableCell>{price * amount}</BMTableCell>,
							]
						})}
					</BMTable>
				</div>
			)}
		</Isle>
	)
}

const mapState = ({ depth, ticker }) => {
	if (!depth || !ticker) {
		return {}
	}

	const tickerData = depth[ticker] || {}
	return { ...tickerData }
}

export default connect(mapState)(MidPriceWidget)
