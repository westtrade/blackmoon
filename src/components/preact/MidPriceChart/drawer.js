import 'core-js/fn/array/from'

const HORIZONAL_ASPECT_RATIO = 0.6667
const VERTICAL_ASPECT_RATIO = 2.6666666666666665

const CHART_TOP_PAD = 20
const DEFAULT_COLS = 6
const DEFAULT_DASH_PATTERN = [3, 2]

const canvasSize = ({ offsetWidth: width, offsetHeight: height }) => ({
	width,
	height,
})

const clearCanvas = (ctx, meta = {}) => {
	const { width, height } = canvasSize(ctx.canvas)
	ctx.clearRect(0, 0, width, height)
}

const drawMidLine = (ctx, data = {}, meta = {}) => {
	const { color = '#97A3D0' } = data || {}

	const {
		graphConstraint,
		dashPattern = DEFAULT_DASH_PATTERN,
		cols,
		cellSize = DEFAULT_CELL_SIZE,
		midCol,
		isVertical = false,
	} = meta

	const { bottom, right, top, left } = graphConstraint

	ctx.setLineDash(dashPattern)
	ctx.lineDashOffset = 0
	ctx.strokeStyle = color

	if (!isVertical) {
		const halfWidth = midCol * cellSize + 1

		ctx.beginPath()
		ctx.moveTo(halfWidth, top + cellSize)
		ctx.lineTo(halfWidth, bottom - 1)
		ctx.stroke()
		ctx.closePath()
	}

	if (isVertical) {
		const halfHeight = midCol * cellSize + 1
		const startX = cellSize * 2 + left

		ctx.beginPath()
		ctx.moveTo(startX, halfHeight)
		ctx.lineTo(right - 1, halfHeight)
		ctx.stroke()
		ctx.closePath()
	}
}

const drawGrid = (ctx, data = {}, meta = {}) => {
	const { color = 'rgba(100, 116, 173, 0.2)' } = data

	const {
		cols = 12,
		rows = 8,
		cellSize = DEFAULT_CELL_SIZE,
		isVertical = false,
		graphConstraint,
		dashPattern = DEFAULT_DASH_PATTERN,
		midCol,
	} = meta

	// console.log(meta);

	const { top, left, bottom, right } = graphConstraint
	const width = right - left
	const height = bottom - top

	ctx.setLineDash(dashPattern)
	ctx.lineDashOffset = 0
	ctx.strokeStyle = color

	ctx.beginPath()
	ctx.moveTo(left, top)
	ctx.lineTo(left, bottom)
	ctx.stroke()
	ctx.closePath()

	ctx.beginPath()
	ctx.moveTo(right, top)
	ctx.lineTo(right, bottom)
	ctx.stroke()
	ctx.closePath()

	ctx.beginPath()
	ctx.moveTo(left, top)
	ctx.lineTo(right, top)
	ctx.stroke()
	ctx.closePath()

	ctx.beginPath()
	ctx.moveTo(left, bottom)
	ctx.lineTo(right, bottom)
	ctx.stroke()
	ctx.closePath()

	const cellWidth = cellSize

	const leftPadding = left + 1 - 1

	Array.from(Array(cols - 1).keys()).forEach(col => {
		if (col === midCol - 1 && !isVertical) {
			return
		}

		const x = (col + 1) * cellWidth

		if (x >= width) {
			return
		}

		ctx.beginPath()
		ctx.moveTo(x + leftPadding, top + 1)
		ctx.lineTo(x + leftPadding, bottom - 1)
		ctx.stroke()
		ctx.closePath()
	})

	const cellHeight = cellSize
	Array.from(Array(rows - 1).keys()).forEach(row => {
		// const y = (row + 1) * (cellHeight + 1) + 1
		if (row === midCol - 1 && isVertical) {
			return
		}

		const y = (row + 1) * cellHeight
		if (y >= height) {
			return
		}

		ctx.beginPath()
		ctx.moveTo(left + 1, y + 1)
		ctx.lineTo(right - 1, y + 1)
		ctx.stroke()
		ctx.closePath()
	})
}

const drawBuyChartHorizontal = (ctx, data = {}, meta = {}) => {
	const {
		color = '#00B865',
		gradientFrom = '#00B865',
		gradientTo = 'rgba(0, 184, 101, 0)',
	} = data

	const { graphConstraint, midCol, cellSize = DEFAULT_CELL_SIZE } = meta

	const halfWidth = midCol * (cellSize + 1) + 1

	const chartConstraint = {
		...graphConstraint,
		right: halfWidth - 5,
	}

	const { top, left, bottom, right } = chartConstraint

	const width = right - left
	const height = bottom - top

	const halfHeight = height / 2

	const gradient = ctx.createLinearGradient(
		right + 230,
		halfHeight,
		left - 2,
		halfHeight
	)

	gradient.addColorStop(0, gradientFrom)
	gradient.addColorStop(1, gradientTo)

	ctx.fillStyle = gradient

	ctx.beginPath()

	ctx.moveTo(left, top)

	ctx.setLineDash([1, 0])
	ctx.lineDashOffset = 0
	ctx.lineWidth = 2
	ctx.strokeStyle = color
	ctx.lineTo(right, bottom)
	ctx.stroke()

	ctx.lineTo(left, bottom)
	ctx.fill()
	ctx.closePath()
}

const drawSellChartHorizontal = (ctx, data = {}, meta = {}) => {
	const {
		color = '#F34579',
		gradientFrom = '#F34579',
		gradientTo = 'rgba(243, 69, 121, 0)',
	} = data

	const { graphConstraint, midCol, cellSize = DEFAULT_CELL_SIZE } = meta

	const halfWidth = midCol * (cellSize + 1) + 1

	const chartConstraint = {
		...graphConstraint,
		left: halfWidth + 5,
	}

	const { top, left, bottom, right } = chartConstraint

	const width = right - left
	const height = bottom - top

	const halfHeight = height / 2

	const gradient = ctx.createLinearGradient(
		left - 230,
		halfHeight,
		right + 2,
		halfHeight
	)

	gradient.addColorStop(0, gradientFrom)
	gradient.addColorStop(1, gradientTo)

	ctx.fillStyle = gradient

	ctx.beginPath()

	ctx.moveTo(left, bottom)

	ctx.setLineDash([1, 0])
	ctx.lineDashOffset = 0
	ctx.lineWidth = 2
	ctx.strokeStyle = color
	ctx.lineTo(right, top)
	ctx.stroke()

	ctx.lineTo(right, bottom)
	ctx.fill()
	ctx.closePath()
}

const draw = (canvas, data = {}, meta = {}) => {
	//Need to subtract 2 pixels, because of 1px padding between graph
	//container and graph
	const canvasWidth = canvas.parentNode.offsetWidth - 2
	const { cols = DEFAULT_COLS, isVertical = false } = meta

	const ASPECT_RATIO = isVertical
		? VERTICAL_ASPECT_RATIO
		: HORIZONAL_ASPECT_RATIO

	const { rows = Math.floor(cols * ASPECT_RATIO) } = meta

	const graphWidth = canvasWidth - 2
	// // Get stroked size of cell
	const correctedCellSize = graphWidth / cols

	const graphHeight = rows * correctedCellSize
	const canvasHeight = graphHeight + 2

	canvas.width = canvasWidth
	canvas.height = canvasHeight

	const midCol = isVertical ? rows / 2 : cols / 2

	const graphConstraint = {
		top: 1,
		left: 1,
		right: canvasWidth - 1,
		bottom: canvasHeight - 1,
	}

	meta = {
		...meta,
		graphConstraint,
		cellSize: correctedCellSize,
		cols,
		rows,
		midCol,
		dashPattern: DEFAULT_DASH_PATTERN,
	}

	const ctx = canvas.getContext('2d')
	clearCanvas(ctx)

	const { grid } = data
	drawGrid(ctx, grid, meta)

	if (!isVertical) {
		drawSellChartHorizontal(ctx, grid, meta)
		drawBuyChartHorizontal(ctx, grid, meta)
	}

	const { midLine } = data
	drawMidLine(ctx, midLine, meta)

	return meta
}

export default draw
