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








