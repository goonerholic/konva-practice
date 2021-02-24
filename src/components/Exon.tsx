/** @jsxImportSource @emotion/react */
import OpenColor from 'open-color';
import { Shape } from 'react-konva';

interface ExonProps {
	x: number;
	y: number;
	width: number;
	height: number;
	direction: number;
	size?: 'default' | 'small';
	fill?: string;
}

export default function Exon({
	x,
	y,
	width,
	height,
	direction,
	fill = OpenColor.gray[8],
}: ExonProps) {
	return (
		<Shape
			x={x}
			y={y}
			fill={fill}
			sceneFunc={(ctx, shape) => {
				ctx.beginPath();
				ctx.moveTo(direction * 5, height / 2);
				ctx.lineTo(0, 0);
				ctx.lineTo(width, 0);
				ctx.lineTo(width + direction * 5, height / 2);
				ctx.lineTo(width, height);
				ctx.lineTo(0, height);
				ctx.lineTo(direction * 5, height / 2);
				ctx.closePath();

				ctx.fillShape(shape);
			}}
		/>
	);
}
