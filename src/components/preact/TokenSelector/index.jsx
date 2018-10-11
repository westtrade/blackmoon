/** @jsx h */
import { h } from 'preact'

import TabSelector from '../TabSelector'
import Input from '../Input'
import Icon from '../Icon'
import Isle from '../Isle'
import Divider from '../Divider'
import IconToggler from '../IconToggler'
import Scrollable from '../Scrollable'
import SortDirection from '../SortDirection'

import { connect } from 'unistore/preact'

import style from './TokenSelector'

const defaultTabs = {
	btc: 'BTC',
	eth: 'ETH',
	usdt: 'USDT',
}

export const TokenSelector = ({
	className = '',
	fromFilter = 'btc',
	onlyFavorited = false,
	onToggleFavoritedFilter,
	onChangeFromFilter,
	onSearch,
	searchString = '',
	children,
	orderBy = '',
	orderDirection = false,
	onOrderChange,
	...other
}) => {
	return (
		<Isle className={`${style.wrapper} ${className}`} {...other}>
			<div className={style.header}>
				<TabSelector
					options={defaultTabs}
					className={style.tabs}
					theme="outlined"
					active={fromFilter}
					onChange={onChangeFromFilter}
				/>

				<Input
					className={style.search}
					addon={<Icon type="search" />}
					onChange={onSearch}
					value={searchString}
				/>
			</div>

			<Divider />

			<div className={style.panel}>
				<IconToggler
					type="star"
					isActive={onlyFavorited}
					className={style.panelItem}
					onToggle={onToggleFavoritedFilter}
				/>
				<SortDirection
					orderByKey="ticker"
					orderBy={orderBy}
					orderDirection={orderDirection}
					className={style.panelItem}
					onOrderChange={onOrderChange}
				>
					Ticker
				</SortDirection>
				<SortDirection
					orderByKey="volume"
					orderBy={orderBy}
					orderDirection={orderDirection}
					className={style.panelItem}
					onOrderChange={onOrderChange}
				>
					VOL
				</SortDirection>
				<SortDirection
					orderByKey="change"
					orderBy={orderBy}
					orderDirection={orderDirection}
					className={style.panelItem}
					onOrderChange={onOrderChange}
				>
					chg
				</SortDirection>
			</div>
			<Divider />
			<Scrollable className={style.list}>{children}</Scrollable>
		</Isle>
	)
}

export default connect()(TokenSelector)
