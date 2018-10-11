/** @jsx h */
import { h, Component } from 'preact'
import Match, { Link } from 'preact-router/match'
import { connect } from 'unistore/preact'

import Icon from '../Icon'
import Logo from '../Logo'
import Hamburger from '../Hamburger'
import UserAvatar from '../UserAvatar'
import NavbarNotifications from '../NavbarNotifications'
import NavbarToken from '../NavbarToken'
import NavbarPrice from '../NavbarPrice'

import style from './Navbar'

export class Navbar extends Component {
	constructor({ menuIsOpen = false }) {
		super()
		this.state = {
			menuIsOpen,
		}

		this.toggleMenu = this.toggleMenu.bind(this)
	}

	toggleMenu() {
		const { menuIsOpen } = this.state
		this.setState({
			menuIsOpen: !menuIsOpen,
		})
	}

	componentWillReceiveProps({ menuIsOpen }) {
		this.setState({ menuIsOpen })
	}

	render(
		{
			className = '',
			children,
			toggleMenu,
			notificationsCount = 0,
			tickerData = {},
			ticker,
			user = {},
			tickerTitle = '',
			tokenTitle = '',
		},
		{ menuIsOpen = false }
	) {
		const openClassName = (menuIsOpen && style.isOpen) || ''

		return (
			<div className={`${style.navbar} ${className} ${openClassName}`}>
				<Hamburger
					onClick={toggleMenu || this.toggleMenu}
					isOpen={menuIsOpen}
					className={style.menuToggler}
				/>
				<div className={style.divider} />
				<Link className={style.logoWrapper} href="/">
					<Logo isComplex className={style.logoFull} />
					<Logo isComplex={false} className={style.logoShort} />
				</Link>

				{!menuIsOpen && (
					<div className={style.priceIndicators}>
						<div className={style.divider} />

						<NavbarToken tokenTitle={tokenTitle} ticker={ticker} />
						<div className={style.divider} />
						<NavbarPrice
							label="last price"
							value={tickerData.last}
							changed="+10.25%"
						/>
						<div className={style.divider} />
						<NavbarPrice
							label="24h change"
							changed="-10.25%"
							value="0.0078511"
						/>
						<div className={style.divider} />
						<NavbarPrice label="High" value={tickerData.high} />
						<div className={style.divider} />
						<NavbarPrice
							label="24H Volume"
							value={tickerData.vol}
						/>
					</div>
				)}

				{menuIsOpen && (
					<div className={style.menu}>
						<Link
							activeClassName={style.activeLink}
							href="/products"
							className={style.link}
						>
							Products
						</Link>
						<Link
							activeClassName={style.activeLink}
							href="/"
							className={`${style.link} ${ticker &&
								style.activeLink}`}
						>
							Market
						</Link>

						<Link
							activeClassName={style.activeLink}
							href="/portfolio"
							className={style.link}
						>
							Portfolio
						</Link>
						<Link
							activeClassName={style.activeLink}
							href="/parnership"
							className={style.link}
						>
							Partnership
						</Link>
						<Link
							activeClassName={style.activeLink}
							href="/support"
							className={style.link}
						>
							Support
						</Link>
						<Link
							activeClassName={style.activeLink}
							href="/develop"
							className={style.link}
						>
							DEVELOP
						</Link>
					</div>
				)}
				<div className={style.space} />
				<div className={style.userMenu}>
					<NavbarNotifications
						className={style.userMenuItem}
						count={notificationsCount}
					/>
					<UserAvatar
						className={style.userMenuItem}
						userName={user.fullName}
					/>

					<Link className={style.userMenuItem} href="/logout">
						<Icon type="logout" />
					</Link>
				</div>
			</div>
		)
	}
}

export default connect(
	({ navbar = {}, tickerData = {}, ticker, user = {} }) => ({
		...navbar,
		tickerData: tickerData[ticker],
		ticker,
		user,
	}),
	dispatch => ({
		toggleMenu: () => ({ type: 'toggleNavbarMenu' }),
	})
)(Navbar)
