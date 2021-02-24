export interface Region {
	type: string;
	start: number;
	end: number;
}

export interface IGene {
	name: string;
	strand: '+' | '-';
	regions: Region[];
}

export const GENE_HEIGHT = 16;
export const UTR_HEIGHT = 12;
export const GENE_MARGIN = 4;

export function getGeneAreaHeight(genes: IGene[]) {
	return genes.length * GENE_HEIGHT + (genes.length - 1) * GENE_MARGIN;
}
