import * as d3 from 'd3';

const svg = d3
	.select('#app')
	.append('svg')
	.attr('width', window.innerWidth)
	.attr('height', window.innerHeight);
