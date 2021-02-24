import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tutorial from './components/Tutorial';
import { IGene } from './utils/layout';

const genes: IGene[] = [
	{
		name: 'geneA',
		strand: '+',
		regions: [
			{
				type: 'exon',
				start: 0,
				end: 20,
			},
			{
				type: 'exon',
				start: 22,
				end: 30,
			},
			{
				type: 'exon',
				start: 35,
				end: 44,
			},
			{
				type: 'utr',
				start: 44,
				end: 46,
			},
		],
	},
	{
		name: 'geneB',
		strand: '+',
		regions: [
			{
				type: 'exon',
				start: 20,
				end: 40,
			},
			{
				type: 'exon',
				start: 50,
				end: 70,
			},
			{
				type: 'exon',
				start: 88,
				end: 92,
			},
		],
	},
	{
		name: 'geneC',
		strand: '-',
		regions: [
			{
				type: 'exon',
				start: 12,
				end: 14,
			},
			{
				type: 'exon',
				start: 16,
				end: 18,
			},
			{
				type: 'exon',
				start: 20,
				end: 22,
			},
			{
				type: 'exon',
				start: 24,
				end: 26,
			},
			{
				type: 'exon',
				start: 28,
				end: 30,
			},
			{
				type: 'utr',
				start: 30,
				end: 32,
			},
			{
				type: 'exon',
				start: 40,
				end: 50,
			},
			{
				type: 'utr',
				start: 50,
				end: 55,
			},
		],
	},
];

function App() {
	return (
		<div className="App">
			<Tutorial genes={genes} />
		</div>
	);
}

export default App;
