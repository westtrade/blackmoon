/** @jsx h */
import { h } from 'preact'
import style from './Logo'

export const LogoImage = ({ className = '', size = 50, color = 'white' }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 50 50"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M23.5708 45C12.5258 45 3.5708 36.045 3.5708 25.001C3.5708 13.955 12.5248 5 23.5708 5C34.6168 5 43.5708 13.954 43.5708 25.001C43.5708 36.045 34.6168 45 23.5708 45ZM25 0C11.191 0 0 11.193 0 25.001C0 38.806 11.191 50 25 50C38.805 50 50 38.806 50 25.001C50 11.193 38.805 0 25 0Z"
			transform="translate(0.000976562 0.000488281)"
			fill={color}
		/>
	</svg>
)

export const LogoLabel = ({ className = '', size = 50, color = 'white' }) => (
	<svg
		width="98"
		height="25"
		viewBox="0 0 98 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M2.1387 8.70519H6.12556V10.8615H0V0H2.1387V8.70519Z"
			transform="translate(8.64746 0.362305)"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M5.94499 0L11.1687 10.8615H8.7939L5.58484 4.34398L2.40503 10.8615H0L5.22469 0H5.94499Z"
			transform="translate(16.5732 0.362793)"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M7.82442 2.88923C5.68269 1.48415 2.45547 2.79292 2.45547 5.79265C2.45547 8.93735 5.87235 10.1985 7.95053 8.6028L9.36691 10.2461C8.37524 11.0754 7.10009 11.5863 5.71498 11.5863C2.56644 11.5863 0 8.98601 0 5.79265C0 2.60233 2.56644 0 5.71498 0C7.03754 0 8.26528 0.462277 9.24081 1.22868L7.82442 2.88923Z"
			transform="translate(28.4639)"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M2.97703 5.89605L2.16191 6.74964V10.8605H0V0H2.16191V3.50661L5.2943 0H8.19466L4.43478 4.25071L8.28646 10.8605H5.72406L2.97703 5.89605Z"
			transform="translate(39.6328 0.363281)"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M8.64762 10.8615V4.21422L5.40527 7.04972L2.1619 4.21422V10.8615H0V0H0.76166L5.40527 4.12197L10.0327 0H10.8095V10.8615H8.64762Z"
			transform="translate(49.7197 0.362305)"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M2.16162 5.79252C2.16162 7.79369 3.77372 9.41267 5.76412 9.41267C7.75453 9.41267 9.36764 7.79369 9.36764 5.79252C9.36764 3.79236 7.75453 2.17236 5.76412 2.17236C3.77372 2.17236 2.16162 3.79236 2.16162 5.79252ZM11.5298 5.79265C11.5298 8.98398 8.94118 11.5863 5.76541 11.5863C2.58863 11.5863 0 8.98398 0 5.79265C0 2.60233 2.58863 0 5.76541 0C8.94118 0 11.5298 2.60233 11.5298 5.79265Z"
			transform="translate(62.3311)"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M2.16162 5.79252C2.16162 7.79369 3.77372 9.41267 5.76412 9.41267C7.75452 9.41267 9.36763 7.79369 9.36763 5.79252C9.36763 3.79236 7.75452 2.17236 5.76412 2.17236C3.77372 2.17236 2.16162 3.79236 2.16162 5.79252ZM11.5298 5.79265C11.5298 8.98398 8.94118 11.5863 5.7644 11.5863C2.58863 11.5863 0 8.98398 0 5.79265C0 2.60233 2.58863 0 5.7644 0C8.94118 0 11.5298 2.60233 11.5298 5.79265Z"
			transform="translate(75.3008)"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M8.7606 10.8615L2.1619 4.52443V10.8615H0V0H0.722316L7.20601 6.07346V0H9.36791V10.8615H8.7606Z"
			transform="translate(88.6318 0.362305)"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M3.53494 9.01759C4.26129 9.01759 4.86255 8.44279 4.86255 7.71288C4.86255 6.98499 4.26129 6.396 3.53494 6.396H1.80078V9.01759H3.53494ZM2.855 4.2996C3.45727 4.2996 4.10493 3.80387 4.10493 3.04355C4.10493 2.2812 3.45727 1.81689 2.855 1.81689H1.80078V4.2996H2.855ZM2.94677 0.00101376C4.69102 0.00101376 6.11345 1.43042 6.11345 3.18221C6.11345 3.85028 5.9127 4.45549 5.55759 4.96542C6.34548 5.57266 6.84081 6.51648 6.84081 7.57282C6.84081 9.40469 5.37197 10.8615 3.56517 10.8615H0V0H2.94677V0.00101376Z"
			transform="translate(0.000976562 0.362305)"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M2.10641 2.62101C2.45949 2.62101 2.7571 2.33208 2.7571 1.96713C2.7571 1.60521 2.45949 1.30615 2.10641 1.30615H1.29834V2.62101H2.10641ZM2.10743 0C3.18485 0 4.05748 0.88603 4.05748 1.9667C4.05748 3.05042 3.18485 3.92631 2.10743 3.92631H1.29936V6.53878H0V0H2.10743Z"
			transform="translate(0 17.7832)"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M1.30037 5.23305H3.72356V6.52966H0V0H1.30037V5.23305Z"
			transform="translate(5.12207 17.7842)"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M3.69531 0L6.76819 6.53878H5.32961L3.47236 2.56482L1.45775 6.53878H0L3.31499 0H3.69531Z"
			transform="translate(9.83594 17.7842)"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M4.91095 0V1.30573H3.10919V6.53878H1.80983V1.30573H0V0H4.91095Z"
			transform="translate(16.6357 17.7842)"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M4.33591 1.30573H1.30037V2.50907H3.80729V3.81581H1.30037V6.53878H0V0H4.33591V1.30573Z"
			transform="translate(22.5654 17.7842)"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M1.33789 3.38701C1.33789 4.51533 2.24684 5.43076 3.37067 5.43076C4.49349 5.43076 5.40345 4.51533 5.40345 3.38701C5.40345 2.25768 4.49349 1.34326 3.37067 1.34326C2.24684 1.34326 1.33789 2.25768 1.33789 3.38701ZM6.73994 3.38699C6.73994 5.25231 5.22671 6.77296 3.37047 6.77296C1.51424 6.77296 0 5.25231 0 3.38699C0 1.52065 1.51424 0 3.37047 0C5.22671 0 6.73994 1.52065 6.73994 3.38699Z"
			transform="translate(27.666 17.6616)"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M1.29932 1.30713V2.62198H2.45038C2.81255 2.62198 3.10007 2.33306 3.10007 1.96912C3.10007 1.60518 2.81255 1.30713 2.45038 1.30713H1.29932ZM3.1667 6.54892L1.95006 3.92732H1.30037V6.53979H0V0H2.45144C3.52786 0 4.4015 0.88603 4.4015 1.96873C4.4015 2.76251 3.93643 3.44173 3.2585 3.74991L4.54979 6.54892H3.1667Z"
			transform="translate(35.6641 17.7739)"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M5.03201 6.53878V2.53745L3.16569 4.24362L1.30037 2.53745V6.53878H0V0H0.4459L3.16569 2.48068L5.8774 0H6.33137V6.53878H5.03201Z"
			transform="translate(41.5869 17.7842)"
			fill="white"
		/>
	</svg>
)

const Logo = ({ className = '', size, color, isComplex = true }) => (
	<div className={`${className} ${style.wrapper}`}>
		{isComplex && (
			<LogoImage className={style.logo} size={size} color={color} />
		)}

		<LogoLabel className={style.label} />
	</div>
)

export default Logo
