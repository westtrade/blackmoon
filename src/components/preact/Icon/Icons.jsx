/** @jsx h */
import { h } from 'preact'

import style from './Icon'

export const Coins = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixStroke}`}
		alt="Coins"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M7 0C8.65674 0 10 0.447754 10 1V2C10 2.55225 8.65674 3 7 3C5.34326 3 4 2.55225 4 2V1C4 0.447754 5.34326 0 7 0ZM7 4C8.65674 4 10 3.55225 10 3V4C10 4.55225 8.65674 5 7 5C5.34326 5 4 4.55225 4 4V3C4 3.55225 5.34326 4 7 4ZM10 5C10 5.55225 8.65674 6 7 6C5.34326 6 4 5.55225 4 5V6C4 6.55225 5.34326 7 7 7C8.65674 7 10 6.55225 10 6V5ZM7 8C8.65674 8 10 7.55225 10 7V8C10 8.55225 8.65674 9 7 9C5.34326 9 4 8.55225 4 8V7C4 7.55225 5.34326 8 7 8ZM0 4C0 4.55225 1.34326 5 3 5V2C1.34326 2 0 2.44775 0 3V4ZM0 5.00049C0 5.55273 1.34326 6.00049 3 6.00049V7.00049C1.34326 7.00049 0 6.55273 0 6.00049V5.00049ZM0 7C0 7.55225 1.34326 8 3 8V9C1.34326 9 0 8.55225 0 8V7Z"
			transform="translate(8 8)"
			fill={color}
		/>
	</svg>
)

export const Graph = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixFill}`}
		alt="Graph"
	>
		<path
			d="M0 8L4.5 3.5L8 7L15 0"
			transform="translate(5 9)"
			stroke={color}
			stroke-width="2"
		/>
	</svg>
)

export const Candles = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixStroke}`}
		alt="Candles"
	>
		<rect width="5" height="9" transform="translate(14 7)" fill={color} />
		<rect width="1" height="15" transform="translate(16 4)" fill={color} />
		<rect width="5" height="7" transform="translate(7 11)" fill={color} />
		<rect width="1" height="13" transform="translate(9 8)" fill={color} />
	</svg>
)

export const Refresh = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixFill}`}
		alt="Refresh"
	>
		<path
			d="M10 7C10 9.76142 7.76142 12 5 12C2.23858 12 0 9.76142 0 7C0 4.23858 2.23858 2 5 2M4 0L6 2L4.16667 4"
			transform="translate(7 6)"
			stroke={color}
			stroke-width="2"
			stroke-linecap="square"
		/>
	</svg>
)

export const Portfolio = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixFill}`}
		alt="Portfolio"
	>
		<path
			d="M3 3H1C0.447715 3 0 3.44772 0 4V10C0 10.5523 0.447715 11 1 11H10C10.5523 11 11 10.5523 11 10V4C11 3.44772 10.5523 3 10 3H8M3 3V0.5C3 0.223858 3.22386 0 3.5 0H7.5C7.77614 0 8 0.223858 8 0.5V3M3 3H8"
			transform="translate(7 6)"
			stroke={color}
			stroke-width="2"
		/>
	</svg>
)

export const CaretDown = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixFill}`}
		alt="Caret down"
	>
		<path
			d="M0 0L2.5 2.5L5 0"
			transform="translate(10 11)"
			stroke={color}
			stroke-width="1.5"
			stroke-linecap="square"
			stroke-linejoin="round"
		/>
	</svg>
)

export const CaretUp = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixFill}`}
		alt="Caret up"
	>
		<path
			d="M0 0L2.5 2.5L5 0"
			transform="translate(10 13) scale(1 -1)"
			stroke={color}
			stroke-width="1.5"
			stroke-linecap="square"
			stroke-linejoin="round"
		/>
	</svg>
)

export const Search = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixFill}`}
		alt="Search"
	>
		<circle
			cx="5"
			cy="5"
			r="4"
			transform="translate(7 7)"
			stroke={color}
			stroke-width="2"
		/>
		<path
			d="M3 3L0 0"
			transform="translate(15 15)"
			stroke={color}
			stroke-width="2"
		/>
	</svg>
)

export const Wallet = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixFill}`}
		alt="Wallet"
	>
		<path
			d="M0 2V11C0 12.1046 0.89543 13 2 13H12C13.1046 13 14 12.1046 14 11V5C14 3.89543 13.1046 3 12 3H1.5C0.671573 3 0 2.32843 0 1.5V1.5C0 0.671573 0.671573 0 1.5 0H14"
			transform="translate(5 6)"
			stroke={color}
			stroke-width="2"
		/>
		<circle
			cx="1"
			cy="1"
			r="0.5"
			transform="translate(14 13)"
			stroke={color}
		/>
	</svg>
)

export const Info = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixStroke}`}
		alt="Info"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M4.5 9C6.98535 9 9 6.98535 9 4.5C9 2.01465 6.98535 0 4.5 0C2.01465 0 0 2.01465 0 4.5C0 6.98535 2.01465 9 4.5 9ZM4.5 8C6.43311 8 8 6.43311 8 4.5C8 2.56689 6.43311 1 4.5 1C2.56689 1 1 2.56689 1 4.5C1 6.43311 2.56689 8 4.5 8Z"
			transform="translate(8 8)"
			fill={color}
		/>
		<circle
			cx="0.5"
			cy="0.5"
			r="0.5"
			transform="translate(12 10)"
			fill={color}
		/>
		<rect width="1" height="3" transform="translate(12 12)" fill={color} />
	</svg>
)

export const Plus = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixStroke}`}
		alt="Plus"
	>
		<path
			d="M4 6V10H6V6H10V4H6V0H4V4H0V6H4Z"
			transform="translate(8 8)"
			fill={color}
		/>
	</svg>
)

export const Minus = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixStroke}`}
		alt="Minus"
	>
		<rect width="10" height="2" transform="translate(8 12)" fill={color} />
	</svg>
)

export const Cancel = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixStroke}`}
		alt="Cancel"
	>
		<path
			d="M4 6V10H6V6H10V4H6V0H4V4H0V6H4Z"
			transform="translate(5.92871 13) rotate(-45)"
			fill={color}
		/>
	</svg>
)

export const Expand = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixFill}`}
		alt="Expand"
	>
		<path
			d="M3 0H7M7 0V4M7 0L0 7"
			transform="translate(14 6)"
			stroke={color}
			stroke-width="1.5"
		/>
		<path
			d="M3 0H7M7 0V4M7 0L0 7"
			transform="translate(12 22) rotate(-180)"
			stroke={color}
			stroke-width="1.5"
		/>
	</svg>
)

export const Collapse = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixFill}`}
		alt="Collapse"
	>
		<path
			d="M3 0H7M7 0V4M7 0L0 7"
			transform="translate(21 12) rotate(-180)"
			stroke={color}
			stroke-width="1.5"
		/>
		<path
			d="M3 0H7M7 0V4M7 0L0 7"
			transform="translate(4 15)"
			stroke={color}
			stroke-width="1.5"
		/>
	</svg>
)

export const Settings = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixStroke}`}
		alt="Settings"
	>
		<path
			d="M9.48826 4.23878L9.21057 3.56484C9.21057 3.56484 9.85664 2.07593 9.79957 2.01869L8.94409 1.16573C8.88499 1.10692 7.42674 1.78658 7.42674 1.78658L6.75418 1.5092C6.75418 1.5092 6.16008 -2.04726e-09 6.07856 -2.04726e-09H4.87151C4.78744 -2.04726e-09 4.23767 1.51232 4.23767 1.51232L3.56612 1.79075C3.56612 1.79075 2.07731 1.14439 2.02024 1.20216L1.16629 2.05616C1.10718 2.11496 1.78688 3.57369 1.78688 3.57369L1.50919 4.24658C1.50919 4.24658 0 4.84037 0 4.92052V6.12892C0 6.21323 1.51276 6.76331 1.51276 6.76331L1.79045 7.43516C1.79045 7.43516 1.14438 8.92303 1.20094 8.98027L2.05591 9.83531C2.11399 9.89308 3.57275 9.21342 3.57275 9.21342L4.24582 9.49184C4.24582 9.49184 4.83992 11 4.92195 11H6.129C6.21256 11 6.76284 9.48768 6.76284 9.48768L7.43643 9.20926C7.43643 9.20926 8.92218 9.85561 8.97976 9.79888L9.83473 8.94488C9.89434 8.88504 9.21312 7.42736 9.21312 7.42736L9.4903 6.75446C9.4903 6.75446 11 6.15963 11 6.07844V4.87108C11.0005 4.78729 9.48826 4.23878 9.48826 4.23878ZM7.2637 5.49974C7.2637 6.47135 6.47242 7.26238 5.50025 7.26238C4.52911 7.26238 3.73681 6.47135 3.73681 5.49974C3.73681 4.52813 4.52911 3.73814 5.50025 3.73814C6.47293 3.73866 7.2637 4.52813 7.2637 5.49974Z"
			transform="translate(7 7)"
			fill={color}
		/>
	</svg>
)

export const Deposit = ({ className = '', color = '#00B865', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixFill}`}
		alt="Deposit"
	>
		<path
			d="M0 5.5L2.5 8M2.5 8L5 5.5M2.5 8V0"
			transform="translate(10 5)"
			stroke={color}
			stroke-width="2"
		/>
		<line
			y1="-1"
			x2="13"
			y2="-1"
			transform="translate(6 20)"
			stroke={color}
			stroke-width="2"
		/>
	</svg>
)

export const Withdraw = ({ className = '', color = '#F34579', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixFill}`}
		alt="Withdraw"
	>
		<path
			d="M0 5.5L2.5 8M2.5 8L5 5.5M2.5 8V0"
			transform="translate(10 13) scale(1 -1)"
			stroke={color}
			stroke-width="2"
		/>
		<line
			y1="-1"
			x2="13"
			y2="-1"
			transform="translate(6 20)"
			stroke={color}
			stroke-width="2"
		/>
	</svg>
)

export const Tick = ({ className = '', color = '#00B865', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixFill}`}
		alt="Tick"
	>
		<path
			d="M0 3L2 5L7 0"
			transform="translate(9 10)"
			stroke={color}
			stroke-width="1.5"
			stroke-linecap="square"
		/>
	</svg>
)

export const Star = ({ className = '', color = '#0C72D8', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixStroke}`}
		alt="Star"
	>
		<path
			d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
			transform="translate(7 7)"
			fill={color}
		/>
	</svg>
)

export const Tool1 = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixStroke}`}
		alt="Tool1"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M1.5 2C1.77637 2 2 1.77637 2 1.5C2 1.22363 1.77637 1 1.5 1C1.22363 1 1 1.22363 1 1.5C1 1.77637 1.22363 2 1.5 2ZM1.5 0C2.15332 0 2.7085 0.41748 2.91455 1H12.0854C12.2915 0.41748 12.8467 0 13.5 0C14.3286 0 15 0.671387 15 1.5C15 2.15332 14.5825 2.7085 14 2.91455V12.0854C14.5825 12.2915 15 12.8467 15 13.5C15 14.3286 14.3286 15 13.5 15C12.8467 15 12.2915 14.5825 12.0854 14H2.91455C2.7085 14.5825 2.15332 15 1.5 15C0.671387 15 0 14.3286 0 13.5C0 12.8467 0.41748 12.2915 1 12.0854V2.91455C0.41748 2.7085 0 2.15332 0 1.5C0 0.671387 0.671387 0 1.5 0ZM2 12.0854C2.42627 12.2358 2.76416 12.5737 2.91455 13H12.0854C12.2358 12.5737 12.5737 12.2358 13 12.0854V2.91455C12.5737 2.76416 12.2358 2.42627 12.0854 2H2.91455C2.76416 2.42627 2.42627 2.76416 2 2.91455V12.0854ZM2 13.5C2 13.2236 1.77637 13 1.5 13C1.22363 13 1 13.2236 1 13.5C1 13.7764 1.22363 14 1.5 14C1.77637 14 2 13.7764 2 13.5ZM13.5 2C13.7764 2 14 1.77637 14 1.5C14 1.22363 13.7764 1 13.5 1C13.2236 1 13 1.22363 13 1.5C13 1.77637 13.2236 2 13.5 2ZM13 13.5C13 13.7764 13.2236 14 13.5 14C13.7764 14 14 13.7764 14 13.5C14 13.2236 13.7764 13 13.5 13C13.2236 13 13 13.2236 13 13.5Z"
			transform="translate(5 5)"
			fill={color}
		/>
	</svg>
)

export const Tool2 = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixFill}`}
		alt="Tool2"
	>
		<circle
			cx="1.5"
			cy="1.5"
			r="1"
			transform="translate(17 5)"
			stroke={color}
		/>
		<circle
			cx="1.5"
			cy="1.5"
			r="1"
			transform="translate(5 17)"
			stroke={color}
		/>
		<path d="M0 10L10 0" transform="translate(7.5 7.5)" stroke={color} />
	</svg>
)

export const Tool3 = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixStroke}`}
		alt="Tool3"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M1.5 2C1.77637 2 2 1.77637 2 1.5C2 1.22363 1.77637 1 1.5 1C1.22363 1 1 1.22363 1 1.5C1 1.77637 1.22363 2 1.5 2ZM1 12.085V2.91504C0.41748 2.70898 0 2.15332 0 1.5C0 0.671875 0.671387 0 1.5 0C2.32861 0 3 0.671875 3 1.5C3 1.59277 2.9917 1.68359 2.97559 1.77148L12.5308 4.35547C12.792 4.13379 13.1304 4 13.5 4C14.3286 4 15 4.67188 15 5.5C15 6.32812 14.3286 7 13.5 7C13.4463 7 13.3936 6.99805 13.3413 6.99219L11.562 11.4404C11.8325 11.7119 12 12.0869 12 12.5C12 13.3281 11.3286 14 10.5 14C9.86572 14 9.32324 13.6064 9.104 13.0498L2.97705 13.7627C2.85303 14.4658 2.23926 15 1.5 15C0.671387 15 0 14.3281 0 13.5C0 12.8467 0.41748 12.291 1 12.085ZM2 12.085V2.91504C2.16357 2.85742 2.31445 2.77148 2.44629 2.66406L12.0205 5.25293C12.0073 5.33301 12 5.41602 12 5.5C12 5.91309 12.167 6.28711 12.4375 6.55859L10.6577 11.0078C10.606 11.002 10.5532 11 10.5 11C9.82959 11 9.26221 11.4395 9.06982 12.0459L2.81299 12.7734C2.63672 12.4551 2.34766 12.208 2 12.085ZM1.5 13C1.22363 13 1 13.2236 1 13.5C1 13.7764 1.22363 14 1.5 14C1.77637 14 2 13.7764 2 13.5C2 13.2236 1.77637 13 1.5 13ZM13.5 6C13.7764 6 14 5.77637 14 5.5C14 5.22363 13.7764 5 13.5 5C13.2236 5 13 5.22363 13 5.5C13 5.77637 13.2236 6 13.5 6ZM11 12.5C11 12.7764 10.7764 13 10.5 13C10.2236 13 10 12.7764 10 12.5C10 12.2236 10.2236 12 10.5 12C10.7764 12 11 12.2236 11 12.5Z"
			transform="translate(5 5)"
			fill={color}
		/>
	</svg>
)

export const Tool4 = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixStroke}`}
		alt="Tool4"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M7.5 2C7.77637 2 8 1.77637 8 1.5C8 1.22363 7.77637 1 7.5 1C7.22363 1 7 1.22363 7 1.5C7 1.77637 7.22363 2 7.5 2ZM7.5 3C7.56738 3 7.6333 2.99609 7.69824 2.9873L12.4106 11.4688C12.2681 11.6191 12.1562 11.7998 12.0854 12H2.91455C2.84375 11.7998 2.73193 11.6191 2.58936 11.4688L7.30176 2.9873C7.3667 2.99609 7.43262 3 7.5 3ZM1.69824 11.0127L6.41064 2.53125C6.15625 2.2627 6 1.89941 6 1.5C6 0.671875 6.67139 0 7.5 0C8.32861 0 9 0.671875 9 1.5C9 1.89941 8.84375 2.2627 8.58936 2.53125L13.3018 11.0127C13.3667 11.0039 13.4326 11 13.5 11C14.3286 11 15 11.6719 15 12.5C15 13.3281 14.3286 14 13.5 14C12.8467 14 12.2915 13.582 12.0854 13H2.91455C2.7085 13.582 2.15332 14 1.5 14C0.671387 14 0 13.3281 0 12.5C0 11.6719 0.671387 11 1.5 11C1.56738 11 1.6333 11.0039 1.69824 11.0127ZM2 12.5C2 12.2236 1.77637 12 1.5 12C1.22363 12 1 12.2236 1 12.5C1 12.7764 1.22363 13 1.5 13C1.77637 13 2 12.7764 2 12.5ZM13 12.5C13 12.7764 13.2236 13 13.5 13C13.7764 13 14 12.7764 14 12.5C14 12.2236 13.7764 12 13.5 12C13.2236 12 13 12.2236 13 12.5Z"
			transform="translate(5 5)"
			fill={color}
		/>
	</svg>
)

export const Tool5 = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixStroke}`}
		alt="Tool5"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M10.8354 9.88477C9.82861 11.1729 8.26123 12 6.5 12C3.4624 12 1 9.53711 1 6.5C1 3.46289 3.4624 1 6.5 1C9.5376 1 12 3.46289 12 6.5C12 7.41797 11.7754 8.28223 11.3779 9.04297L7.92432 6.97168C7.97314 6.82324 8 6.66504 8 6.5C8 5.67188 7.32861 5 6.5 5C5.67139 5 5 5.67188 5 6.5C5 7.32812 5.67139 8 6.5 8C6.79639 8 7.07227 7.91406 7.30469 7.76562L10.8354 9.88477ZM11.0083 11.1826C9.83984 12.3076 8.25049 13 6.5 13C2.91016 13 0 10.0898 0 6.5C0 2.91016 2.91016 0 6.5 0C10.0898 0 13 2.91016 13 6.5C13 7.41309 12.812 8.28223 12.4722 9.07031C12.6406 9.02441 12.8174 9 13 9C14.1045 9 15 9.89551 15 11C15 12.1045 14.1045 13 13 13C11.957 13 11.1006 12.2012 11.0083 11.1826ZM6.5 7C6.77637 7 7 6.77637 7 6.5C7 6.22363 6.77637 6 6.5 6C6.22363 6 6 6.22363 6 6.5C6 6.77637 6.22363 7 6.5 7ZM14 11C14 11.5527 13.5522 12 13 12C12.4478 12 12 11.5527 12 11C12 10.4473 12.4478 10 13 10C13.5522 10 14 10.4473 14 11Z"
			transform="translate(5 6)"
			fill={color}
		/>
	</svg>
)

export const Tool6 = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixStroke}`}
		alt="Tool6"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M13 3C13.5522 3 14 2.55273 14 2C14 1.44727 13.5522 1 13 1C12.4478 1 12 1.44727 12 2C12 2.55273 12.4478 3 13 3ZM13 4C14.1045 4 15 3.10449 15 2C15 0.895508 14.1045 0 13 0C11.8955 0 11 0.895508 11 2C11 2.59473 11.2598 3.12891 11.6719 3.49512L10.0776 6.50684C9.23877 6.17969 8.36035 6 7.5 6C4.22559 6 0.68457 8.60742 0.0874023 12C0.0302734 12.3262 0 12.6602 0 13H1H2H3H6.08545C6.2915 13.582 6.84668 14 7.5 14C8.15332 14 8.7085 13.582 8.91455 13H12H13H14H15C15 12.6602 14.9697 12.3262 14.9126 12C14.5303 9.82715 12.9404 7.97656 10.9868 6.92676L12.562 3.95215C12.7031 3.9834 12.8496 4 13 4ZM12.8735 12H13.8936C13.6357 10.7939 12.9268 9.68066 11.9321 8.79785C11.4985 8.41211 11.0205 8.08105 10.519 7.81055L10.0659 8.66699C11.4062 9.37109 12.5107 10.5752 12.8735 12ZM9.14209 8.27441L9.60645 7.39746C8.90967 7.13965 8.19189 7 7.5 7C5.98145 7 4.33643 7.6709 3.06787 8.79785C2.07324 9.68066 1.36426 10.7939 1.10645 12H2.12646C2.70752 9.71777 5.19385 8 7.5 8C8.04639 8 8.60303 8.09668 9.14209 8.27441ZM3.16943 12C3.39209 11.3447 3.82617 10.7314 4.41699 10.2207C5.30371 9.4541 6.45215 9 7.5 9C7.88135 9 8.27539 9.06055 8.66602 9.17383L7.69238 11.0127C7.62939 11.0049 7.56494 11 7.5 11C6.84668 11 6.2915 11.418 6.08545 12H3.16943ZM8.91455 12H11.8306C11.6079 11.3447 11.1738 10.7314 10.583 10.2207C10.2803 9.95898 9.94678 9.73438 9.59766 9.55078L8.58496 11.4639C8.72998 11.6162 8.84326 11.7979 8.91455 12Z"
			transform="translate(5 5)"
			fill={color}
		/>
	</svg>
)

export const Tool7 = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixStroke}`}
		alt="Tool7"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M9.90723 0.582031L2.77148 10.5723L11.8589 5.93359L12.3135 6.82422L3.56104 11.292H12.0854C12.2915 10.71 12.8467 10.292 13.5 10.292C14.3286 10.292 15 10.9639 15 11.792C15 12.6201 14.3286 13.292 13.5 13.292C12.8467 13.292 12.2915 12.874 12.0854 12.292H2.91455C2.7085 12.874 2.15332 13.292 1.5 13.292C0.671387 13.292 0 12.6201 0 11.792C0 11.1172 0.446289 10.5459 1.05957 10.3574L2.50537 0.717773L3.49463 0.866211L2.1709 9.69238L9.09326 0L9.90723 0.582031ZM13.5 12.292C13.7764 12.292 14 12.0684 14 11.792C14 11.5156 13.7764 11.292 13.5 11.292C13.2236 11.292 13 11.5156 13 11.792C13 12.0684 13.2236 12.292 13.5 12.292ZM2 11.792C2 12.0684 1.77637 12.292 1.5 12.292C1.22363 12.292 1 12.0684 1 11.792C1 11.5156 1.22363 11.292 1.5 11.292C1.77637 11.292 2 11.5156 2 11.792Z"
			transform="translate(5 5.70801)"
			fill={color}
		/>
	</svg>
)

export const Tool8 = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixStroke}`}
		alt="Tool8"
	>
		<path
			d="M0 14H10V13H0V14ZM0 9H15V8H0V9ZM0 5H15V4H0V5ZM0 2H3V1H0V2ZM6 2H15V1H6V2ZM13 14H15V13H13V14ZM5.5 1.5C5.5 2.05228 5.05228 2.5 4.5 2.5V3.5C5.60457 3.5 6.5 2.60457 6.5 1.5H5.5ZM4.5 2.5C3.94772 2.5 3.5 2.05228 3.5 1.5H2.5C2.5 2.60457 3.39543 3.5 4.5 3.5V2.5ZM3.5 1.5C3.5 0.947715 3.94772 0.5 4.5 0.5V-0.5C3.39543 -0.5 2.5 0.39543 2.5 1.5H3.5ZM4.5 0.5C5.05228 0.5 5.5 0.947715 5.5 1.5H6.5C6.5 0.39543 5.60457 -0.5 4.5 -0.5V0.5ZM12.5 13.5C12.5 14.0523 12.0523 14.5 11.5 14.5V15.5C12.6046 15.5 13.5 14.6046 13.5 13.5H12.5ZM11.5 14.5C10.9477 14.5 10.5 14.0523 10.5 13.5H9.5C9.5 14.6046 10.3954 15.5 11.5 15.5V14.5ZM10.5 13.5C10.5 12.9477 10.9477 12.5 11.5 12.5V11.5C10.3954 11.5 9.5 12.3954 9.5 13.5H10.5ZM11.5 12.5C12.0523 12.5 12.5 12.9477 12.5 13.5H13.5C13.5 12.3954 12.6046 11.5 11.5 11.5V12.5ZM10.9327 11.7495L5.43247 2.24893L4.56704 2.74996L10.0673 12.2505L10.9327 11.7495Z"
			transform="translate(5 5)"
			fill={color}
		/>
	</svg>
)

export const Tool9 = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixStroke}`}
		alt="Tool9"
	>
		<path
			d="M0 7.5H15V6.5H0V7.5ZM0 0.5H15V-0.5H0V0.5Z"
			transform="translate(5 8.5)"
			fill={color}
		/>
	</svg>
)

export const Tool10 = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixFill}`}
		alt="Tool10"
	>
		<circle
			cx="1.5"
			cy="1.5"
			r="1"
			transform="translate(17 10)"
			stroke={color}
		/>
		<circle
			cx="1.5"
			cy="1.5"
			r="1"
			transform="translate(5 10)"
			stroke={color}
		/>
		<line
			y1="-0.5"
			x2="10"
			y2="-0.5"
			transform="translate(8 12)"
			stroke={color}
		/>
	</svg>
)

export const Tool11 = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixFill}`}
		alt="Tool11"
	>
		<circle
			cx="1.5"
			cy="1.5"
			r="1"
			transform="translate(11 8) rotate(-90)"
			stroke={color}
		/>
		<circle
			cx="1.5"
			cy="1.5"
			r="1"
			transform="translate(11 20) rotate(-90)"
			stroke={color}
		/>
		<line
			y1="-0.5"
			x2="10"
			y2="-0.5"
			transform="translate(13 17) rotate(-90)"
			stroke={color}
		/>
	</svg>
)

export const Tool12 = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixFill}`}
		alt="Tool12"
	>
		<circle
			cx="1.5"
			cy="1.5"
			r="1"
			transform="translate(17 13)"
			stroke={color}
		/>
		<circle
			cx="1.5"
			cy="1.5"
			r="1"
			transform="translate(5 15)"
			stroke={color}
		/>
		<path d="M0 2L11 0" transform="translate(7 14.5)" stroke={color} />
		<circle
			cx="1.5"
			cy="1.5"
			r="1"
			transform="translate(17 8)"
			stroke={color}
		/>
		<circle
			cx="1.5"
			cy="1.5"
			r="1"
			transform="translate(5 10)"
			stroke={color}
		/>
		<path d="M0 2L11 0" transform="translate(7 9.5)" stroke={color} />
	</svg>
)

export const Tool13 = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixFill}`}
		alt="Tool13"
	>
		<circle
			cx="1.5"
			cy="1.5"
			r="1"
			transform="translate(16 7)"
			stroke={color}
		/>
		<path
			d="M3.18374 3.0025C3.18374 1.06951 1.933 0 0 0"
			transform="translate(11.9297 13.415) rotate(25.6567)"
			stroke={color}
		/>
		<circle
			cx="1.5"
			cy="1.5"
			r="1"
			transform="translate(5 16)"
			stroke={color}
		/>
		<circle
			cx="1.5"
			cy="1.5"
			r="1"
			transform="translate(17 16)"
			stroke={color}
		/>
		<path d="M0 8L9.5 0" transform="translate(7.5 9)" stroke={color} />
		<path d="M0 0H10.5" transform="translate(7.5 17.5)" stroke={color} />
	</svg>
)

export const Tool14 = ({ className = '', color = '#656E8D', size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixFill}`}
		alt="Tool14"
	>
		<circle
			cx="1.5"
			cy="1.5"
			r="1"
			transform="translate(6 16)"
			stroke={color}
		/>
		<path d="M0 10L10 0" transform="translate(8.5 6.5)" stroke={color} />
		<path
			d="M0 1L3.5 0L2.5 3.5"
			transform="translate(15.5 6)"
			stroke={color}
		/>
	</svg>
)

export const Bell = ({ className = '', color = 'white', size = 17 }) => (
	<svg
		width={parseInt(17 * 0.7058824)}
		height={size}
		viewBox="0 0 12 17"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixStroke}`}
		alt="Bell"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M0.0599398 9.21639C0.02004 9.47174 0 9.72981 0 9.98827L0 11C0 11.5523 0.447715 12 1 12H11C11.5523 12 12 11.5523 12 11V9.98827C12 9.72981 11.98 9.47174 11.9401 9.21639L11.1947 4.44605C10.7948 1.88672 8.59038 0 6 0C3.40962 0 1.2052 1.88672 0.805304 4.44605L0.0599398 9.21639Z"
			transform="translate(0 2)"
			fill={color}
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1V5C2 5.55228 1.55228 6 1 6C0.447715 6 0 5.55228 0 5V1Z"
			transform="translate(5)"
			fill={color}
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M2 2C3.10457 2 4 1.10457 4 0C4 0 0 0 0 0C0 1.10457 0.89543 2 2 2Z"
			transform="translate(4 15)"
			fill={color}
		/>
	</svg>
)

export const Logout = ({ className = '', color = 'white', size = 30 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 30 30"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixFill}`}
		alt="Logout"
	>
		<path
			d="M0 0L4 4L0 8"
			transform="translate(17 11)"
			stroke={color}
			stroke-width="2"
		/>
		<path
			d="M0.5 0.5H8.5V1.5H0.5V0.5Z"
			transform="translate(12 14)"
			stroke={color}
		/>
		<path
			d="M7 0H0V12H7"
			transform="translate(8 9)"
			stroke={color}
			stroke-width="2"
		/>
	</svg>
)

export const Menu = ({ className = '', color = 'white', size = 30 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 30 30"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixStroke}`}
		alt="Menu"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M0 0H20V2H0V0ZM0 6H20V8H0V6ZM20 12H0V14H20V12Z"
			transform="translate(5 8)"
			fill={color}
		/>
	</svg>
)

export const Close = ({ className = '', color = 'white', size = 30 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 30 30"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className} ${style.fixStroke}`}
		alt="Close"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M6.36377 7.77832L0 14.1421L1.41406 15.5562L7.77783 9.19238L14.1421 15.5566L15.5562 14.1426L9.19189 7.77832L15.5562 1.41406L14.1421 0L7.77783 6.36426L1.41406 0.000488281L0 1.41455L6.36377 7.77832Z"
			transform="translate(7.22168 7.22168)"
			fill={color}
		/>
	</svg>
)
export const Back = ({ className = '', color = 'white', size = 30 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 30 30"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		alt="Back"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M3.82812 6.77832L9.19238 1.41406L7.77832 0L1.41309 6.36426L0 7.77783L1.41406 9.19238L7.77734 15.5566L9.19141 14.1426L3.82715 8.77832H16V6.77832H3.82812Z"
			transform="translate(7 7.22168)"
			fill={color}
		/>
	</svg>
)

export const Rejected = ({ className = '', color = '#656E8D', size = 14 }) => {
	return (
		<svg
			width={size}
			height={size * 0.857}
			viewBox="0 0 14 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${className} ${style.fixFill}`}
			alt="Rejected"
		>
			<path
				d="M2 0H9C10.1046 0 11 0.895431 11 2V5C11 6.10457 10.1046 7 9 7H0M0 7L3 10M0 7L3 4"
				transform="translate(2 11) scale(1 -1)"
				stroke={color}
				stroke-width="2"
			/>
		</svg>
	)
}

export const Hide = ({ className = '', color = '#656E8D', size = 25 }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 25 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${className} ${style.fixFill}`}
			alt="Hide"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M1.7832 8.84143C1.4834 9.10657 1.4834 9.53625 1.7832 9.80139C2.08203 10.0665 2.56738 10.0665 2.86621 9.80139L3.76562 9.00403C3.81836 9.03284 3.87207 9.06165 3.92578 9.08948L5.16113 7.88977C5.13672 7.87073 5.1123 7.8512 5.08887 7.83118L12.6162 1.1593C12.915 0.894165 12.915 0.463989 12.6162 0.198853C12.3174 -0.0662842 11.832 -0.0662842 11.5332 0.198853L9.51562 1.98743C8.71094 1.63391 7.85938 1.40442 7.00879 1.40442C4.22461 1.40442 1.44043 3.8678 0.260742 5.05334C-0.0869141 5.40344 -0.0869141 5.95081 0.260742 6.3009C0.759766 6.80237 1.54492 7.53235 2.49707 8.20813L1.7832 8.84143ZM4.25195 6.65295L8.25977 3.10022C7.87988 2.9259 7.45605 2.82874 7.00879 2.82874C5.38867 2.82874 4.0752 4.10413 4.0752 5.67737C4.0752 6.02014 4.1377 6.34875 4.25195 6.65295ZM7.00879 9.94983C6.46094 9.94983 5.91309 9.85461 5.37793 9.6925L6.60742 8.49915C6.73828 8.51672 6.87305 8.52551 7.00879 8.52551C8.62891 8.52551 9.94238 7.25012 9.94238 5.67737C9.94238 5.54504 9.93262 5.41516 9.91504 5.28772L11.8623 3.39661C12.6602 3.99719 13.3193 4.6134 13.7568 5.05334C14.1055 5.40344 14.1055 5.95081 13.7568 6.3009C12.5781 7.48645 9.79297 9.94983 7.00879 9.94983Z"
				transform="translate(5 7)"
				fill={color}
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M1.7832 8.84143C1.4834 9.10657 1.4834 9.53625 1.7832 9.80139C2.08203 10.0665 2.56738 10.0665 2.86621 9.80139L3.76562 9.00403C3.81836 9.03284 3.87207 9.06165 3.92578 9.08948L5.16113 7.88977C5.13672 7.87073 5.1123 7.8512 5.08887 7.83118L12.6162 1.1593C12.915 0.894165 12.915 0.463989 12.6162 0.198853C12.3174 -0.0662842 11.832 -0.0662842 11.5332 0.198853L9.51562 1.98743C8.71094 1.63391 7.85938 1.40442 7.00879 1.40442C4.22461 1.40442 1.44043 3.8678 0.260742 5.05334C-0.0869141 5.40344 -0.0869141 5.95081 0.260742 6.3009C0.759766 6.80237 1.54492 7.53235 2.49707 8.20813L1.7832 8.84143ZM4.25195 6.65295L8.25977 3.10022C7.87988 2.9259 7.45605 2.82874 7.00879 2.82874C5.38867 2.82874 4.0752 4.10413 4.0752 5.67737C4.0752 6.02014 4.1377 6.34875 4.25195 6.65295ZM7.00879 9.94983C6.46094 9.94983 5.91309 9.85461 5.37793 9.6925L6.60742 8.49915C6.73828 8.51672 6.87305 8.52551 7.00879 8.52551C8.62891 8.52551 9.94238 7.25012 9.94238 5.67737C9.94238 5.54504 9.93262 5.41516 9.91504 5.28772L11.8623 3.39661C12.6602 3.99719 13.3193 4.6134 13.7568 5.05334C14.1055 5.40344 14.1055 5.95081 13.7568 6.3009C12.5781 7.48645 9.79297 9.94983 7.00879 9.94983Z"
				transform="translate(5 7)"
				fill={color}
			/>
		</svg>
	)
}
