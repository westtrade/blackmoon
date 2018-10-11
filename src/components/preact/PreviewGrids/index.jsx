/** @jsx h */
import { h } from 'preact'
import style from './PreviewGrids'

export const PreviewIconsGrid = ({ children }) => (
	<div className={style.icons}>{children}</div>
)

export const PreviewLogosGrid = ({ children }) => (
	<div className={style.logos}>{children}</div>
)
export const PreviewProductLogosGrid = ({ children }) => (
	<div className={style['product-logos']}>{children}</div>
)
