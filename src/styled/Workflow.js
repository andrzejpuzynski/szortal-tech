import styled, { keyframes } from 'styled-components';
import { css } from 'styled-components';

export const WorkflowContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, minmax(100px, 200px));
	grid-template-rows: repeat(7, 100px);
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	grid-template-areas:
		"aa ab ac ad ae"
		"ba bb bc bd be"
		"ca cb cc cd ce"
		"legend db dc dd de"
		"legend eb ec ed ee"
		"legend fb fc fd fe"
		"legend gb gc gd ge";
	justify-content: center;

	//to remove
	padding: 10px;
	border: 1px solid black;
	background-color: black;
`

export const WorkflowStep = styled.div`
	position: relative;
	padding: 12px;
	font-size: 1rem;
	font-weight: 300;
	font-family: 'Open Sans', sans-serif;
	line-height: normal;
	text-align: center;
	border-width: 2px;
	border-style: solid;
	border-color: ${props =>
		props.editor ? "#f44" :
		props.dtp ? "#0cc" :
		"#0af"};
	border-radius: 8px;
	grid-area: ${props => props.area};
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 2;

	::after {
		content: "${props => props.application}";
		position: absolute;
		left: 4px;
		bottom: 4px;
		z-index: 200;
		font-size: 1rem;
		line-height: 1rem;
		color: #888;
	}

	:hover {
		cursor: pointer;
		box-shadow: 0px 0px 20px ${props => props.editor ? "#f44" :
									props.dtp ? "#0cc" :
									"#0af"};
		transform: scale(1.01);
	}
`

export const WorkflowStepArrow = styled.div`
	position: absolute;
	border: 12px solid transparent;
	${props => props.top && `
		border-bottom: 20px solid ${props.editor ? "#f44" :
									props.dtp ? "#0cc" :
									"#0af"};
		top: 0;
		transform: translate(0, -100%);
	`}
	${props => props.right && `
		border-left: 20px solid ${props.editor ? "#f44" :
									props.dtp ? "#0cc" :
									"#0af"};
		right: 0;
		transform: translate(100%, 0);
	`}
		${props => props.bottom && `
		border-top: 20px solid ${props.editor ? "#f44" :
									props.dtp ? "#0cc" :
									"#0af"};
		bottom: 0;
		transform: translate(0, 100%);
	`}
`

export const WorkflowLegend = styled.div`
	grid-area: ${props => props.area};
	font-size: 1rem;
	line-height: 1rem;
	align-self: end;
	color: #888;
`

export const WorkflowLegendItem = styled.p`
	line-height: .5rem;
	margin-bottom: 3px;

	::before {
		content: "";
		display: inline-block;
		width: 10px;
		height: 10px;
		margin-right: 5px;
		border-radius: 20%;
		background-color: ${props =>
							props.editor ? "#f44" :
							props.dtp ? "#0cc" :
							"#0af"};
	}
`

export const WorkflowWwwItem = styled.div`
 	grid-column: 3 / span 3;
 	grid-row: 2 / span 2;
 	position: relative;
	border: 2px solid #888;
	border-radius: 8px;
	background-color: #333;

	::before {
		content: "http://www.szortal.com/nawynos";
		position: absolute;
  		left: 5px;
  		right: 5px;
  		height: 1rem;
  		padding: 4px 10px;
  		top: 8px;
  		text-align: left;
  		font-size: 1rem;
  		line-height: 1rem;
  		color: #000;
  		background-color: #fff;
  		border-radius: 10px;
	}
`

export const WorkflowWwwIcon = styled.div`
	grid-area: ${props => props.area};
	background-image: url(${props =>
		props.epub ? "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/99337071/original/51afaa5b6b8b3582d66941c1783b8752c252f5d9/convert-your-word-document-to-epub.png" :
		props.mobi ? "https://i2.wp.com/bezwarunkowawartosc.pl/wp-content/uploads/2018/06/mobi_icon.png?fit=300%2C388&ssl=1" :
		"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png"
	});
	background-size: contain;
  	background-repeat: no-repeat;
  	background-position: center;
	z-index: 10;
	transform: translateY(-20px);
`








