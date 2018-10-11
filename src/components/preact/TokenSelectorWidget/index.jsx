import { h } from 'preact' /** @jsx h */
import TokenSelector from '../TokenSelector'
import Token from '../Token'

import { Link } from 'preact-router/match'

import { connect } from 'unistore/preact'

import style from './TokenSelectorWidget'

export const TokenSelectorWidget = ({
	className = '',
	filteredPairs = [],
	tokenSelectorFilter,
	changeFromFilter,
	toggleFavorite,
	toggleFavoriteFilter,
	favoritePairs = [],
	ticker = '',
}) => {
	return (
		<TokenSelector
			className={`${className}`}
			{...tokenSelectorFilter}
			onChangeFromFilter={changeFromFilter}
			onToggleFavoritedFilter={toggleFavoriteFilter}
		>
			{filteredPairs.map(({ pair, ...other }) => {
				const pairInFavorites = !!~favoritePairs.indexOf(pair)
				return (
					<Link className={style.link} href={`/${pair}/`}>
						<Token
							isFavorite={pairInFavorites}
							onFavorite={toggleFavorite}
							favoriteValue={pair}
							isActive={pair === ticker}
							{...other}
						/>
					</Link>
				)
			})}
		</TokenSelector>
	)
}

const mapProps = ({
	filteredPairs,
	tokenSelectorFilter,
	favoritePairs,
	ticker,
}) => {
	return {
		filteredPairs,
		tokenSelectorFilter,
		favoritePairs,
		ticker,
	}
}

const mapDispatch = dispatch => ({
	changeFromFilter(payload) {
		return {
			type: 'changeFromFilter',
			payload,
		}
	},

	toggleFavoriteFilter(payload) {
		return {
			type: 'toggleFavoriteFilter',
			payload,
		}
	},

	toggleFavorite(payload) {
		return {
			type: 'toggleFavoritePair',
			payload,
		}
	},
})

export default connect(
	mapProps,
	mapDispatch
)(TokenSelectorWidget)
