/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import OpenColor from 'open-color';
import { arch } from 'process';
import { useEffect, useMemo, useRef } from 'react';
import { Arc, Circle, Group, Layer, Rect, Stage } from 'react-konva';
import Konva from 'konva';
import Gene from './Gene';
import { GENE_HEIGHT, GENE_MARGIN, IGene } from '../utils/layout';

interface TutorialProps {
	genes: IGene[];
}

const style = css`
	width: 1200px;
	height: 800px;
`;

export default function Tutorial({ genes }: TutorialProps) {
	const height = useMemo(
		() => genes.length * GENE_HEIGHT + (genes.length - 1) * GENE_MARGIN,
		[genes],
	);

	return (
		<div css={style}>
			<Stage width={800} height={height + 20}>
				<Layer draggable>
					{genes.map((gene, index) => (
						<Gene
							x={5}
							y={20 + index * (GENE_HEIGHT + GENE_MARGIN)}
							gene={gene}
							width={800}
							domain={{ min: 0, max: 200 }}
						/>
					))}
				</Layer>
			</Stage>
		</div>
	);
}
