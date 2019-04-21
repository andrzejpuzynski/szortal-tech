import styled from 'styled-components';
import { css } from 'styled-components';

export const InfoBoxCloseButton = styled.button`
	position: fixed;
	top: 80px;
	right: 30px;
	width: 100px;
	height: 40px;
	background-color: #fff;
	border: 2px solid #888;
	border-radius: 8px;

	::before {
		content: "Zamknij";
		font-size: 1rem;
		text-transform: uppercase;
		color: #444;
	}

	:hover {
		background-color: #000;
		border-width: 0;
		
		::before {
			color: #fff;
		}
	}
`

export const InfoBoxContainer = styled.div`
	position: fixed;
	visibility: ${props => props.show ? "visible" : "hidden"};
	top: 60px;
	height: 100vh;
	left: 0;
	right: 0;
	background-color: #fff;
	z-index: 100;
	color: #fff;
	font-size: 2rem;
	padding: 50px 30px;
	overflow: inherit;
	display: grid;
	grid-template-columns: minmax(200px, 800px);
	justify-content: center;
	align-content: start;
`

export const InfoBoxTitle = styled.h2`
	font-size: 2rem;
	margin-bottom: 10px;
	color: #000;
	text-align: center;
`

export const InfoBoxText = styled.p`
	color: #000;
	font-size: 1.2rem;
	line-height: 1.8rem;
	margin-bottom: 0.5rem;
	margin-left: 2rem;
	
	::before {
		font-family: "Font Awesome 5 Free";
		font-weight: 700;
		content: "\f00c";
		color: #d66;
		margin-left: -2rem;
		margin-right: 9px;
	}
`






