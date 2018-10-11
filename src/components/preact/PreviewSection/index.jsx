/** @jsx h */
import { h } from 'preact'
import style from './PreviewSection'

const PreviewSection = ({
	children,
	className = '',
	title = '',
	description = '',
}) => {
	return (
		<div className={style.previewSection}>
			<div className={style.left}>
				{title && <div className={style.title}>{title}</div>}
				{description && (
					<div className={style.description}>{description}</div>
				)}
			</div>
			<div className={style.right}>{children}</div>
		</div>
	)
}

export default PreviewSection
