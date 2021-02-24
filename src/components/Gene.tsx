/** @jsxImportSource @emotion/react */
import OpenColor from 'open-color';
import { useMemo } from 'react';
import { Group, Line } from 'react-konva';
import { GENE_HEIGHT, IGene, UTR_HEIGHT } from '../utils/layout';
import Exon from './Exon';

interface GeneProps {
	x: number;
	y: number;
	gene: IGene;
	width: number;
	domain: { min: number; max: number };
}

export default function Gene({ x, y, width, domain, gene }: GeneProps) {
	const domainWidth = useMemo(() => domain.max - domain.min, [domain]);
	const unitX = useMemo(() => width / domainWidth, [width, domainWidth]);

	const getPosition = (value: number) => {
		return x + (value - domain.min) * unitX;
	};

	return (
		<Group>
			<Line
				points={[
					x,
					y + GENE_HEIGHT / 2,
					getPosition(gene.regions[gene.regions.length - 1].end),
					y + GENE_HEIGHT / 2,
				]}
				stroke={OpenColor.gray[6]}
			/>
			{gene.regions.map((region) => (
				<Exon
					x={getPosition(region.start)}
					y={
						y +
						(region.type === 'utr'
							? (GENE_HEIGHT - UTR_HEIGHT) / 2
							: 0)
					}
					width={(region.end - region.start) * unitX}
					height={region.type === 'utr' ? UTR_HEIGHT : GENE_HEIGHT}
					direction={gene.strand === '+' ? 1 : -1}
					fill={region.type === 'utr' ? OpenColor.gray[6] : undefined}
				/>
			))}
		</Group>
	);
}
