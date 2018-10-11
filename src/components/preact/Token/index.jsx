/** @jsx h */
import { h } from 'preact'

import IconToggler from '../IconToggler'
import ProductLogo from '../ProductLogo'
import GrowthColor from '../GrowthColor'
import Divider from '../Divider'
import FormatPrice from '../FormatPrice'

import style from './Token'

const Token = ({
	className = '',
	isFavorite = false,
	onFavorite,
	favoriteValue,
	isActive = false,
	product = null,
	productLabel = '',
	onSelect,
	growthPercent = 0,
	price = 0,
	volume = 0,
}) => {
	return (
		<div
			className={`${style.item} ${(isActive && style.itemActive) || ''}`}
		>
			<div className={style.content}>
				<IconToggler
					type="star"
					className={style.favorite}
					isActive={isFavorite}
					onToggle={onFavorite}
					value={favoriteValue}
				/>
				<div className={style.product}>
					<ProductLogo logo={product} className={style.productLogo} />
					<div className={style.productLabel}>{productLabel}</div>
				</div>
				<div className={style.stats}>
					<GrowthColor className={style.growth} value={growthPercent}>
						{growthPercent}
					</GrowthColor>
					<FormatPrice className={style.price} value={price} />
					<div className={style.volume}>
						<div className={style.volumeLabel}>Vol. </div>{' '}
						<FormatPrice
							className={style.volumeValue}
							value={volume}
						/>
					</div>
				</div>
			</div>
			<Divider className={style.divider} />
		</div>
	)
}

export default Token
