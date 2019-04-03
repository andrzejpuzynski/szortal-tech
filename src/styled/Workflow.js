import styled from 'styled-components';

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
		"da db dc dd de"
		"ea eb ec ed ee"
		"fa fb fc fd fe"
		"ga gb gc gd ge";
	justify-content: center;

	//to remove
	padding: 10px;
	border: 1px solid black;
	background-color: black;
`

export const WorkflowStep = styled.div`
	position: relative;
	// padding: 16px;
	font-size: 1rem;
	font-weight: 300;
	font-family: 'Open Sans', sans-serif;
	line-height: normal;
	text-align: center;
	border-width: 2px;
	border-style: solid;
	border-color: ${props => props.processplace === "editor" ? "#f44" : props.processplace === "dtp" ? "#0cc" : "#0af"};
	border-radius: 8px;
	grid-area: ${props => props.area};
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
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
`