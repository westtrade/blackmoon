/** @jsx h */
import { h, Component } from 'preact'
// import FontFaceObserver from 'fontfaceobserver'

import Helmet from 'preact-helmet'

// const ptSans = new FontFaceObserver("PT Sans", {});
//
// ptSans
// 	.load()
// 	.then(() => {
// 		console.log("LOaded");
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});

export default class GoogleFonts extends Component {
	constructor() {
		super()

		this.state = {
			media: {
				ptsans: 'none',
				montserrat: 'none',
			},
		}
	}

	componentWillMount() {
		document.head.addEventListener(
			'load',
			({ target }) => {
				const { tagName } = target

				const { media } = this.state
				const fontName = target.getAttribute('font')
				const isFont =
					tagName === 'LINK' && fontName && media[fontName] !== 'all'

				if (isFont) {
					this.setState({ media: { ...media, [fontName]: 'all' } })
				}
			},
			true
		)
	}

	render({}, { media }) {
		const styles = [
			{
				href:
					'https://fonts.googleapis.com/css?family=PT+Sans:400,600,700',
				rel: 'stylesheet',
				media: media.ptsans,
				font: 'ptsans',
			},
			{
				href:
					'https://fonts.googleapis.com/css?family=Montserrat:400,700',
				rel: 'stylesheet',
				media: media.montserrat,
				font: 'montserrat',
			},
		]

		return <Helmet link={styles} />
	}
}
