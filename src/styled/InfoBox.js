import styled from 'styled-components';

export const InfoBoxCloseButton = styled.button`
	position: fixed;
	top: 90px;
	right: 30px;
	width: 100px;
	height: 40px;
	background-color: #212121;
	border: 2px solid #888;
	border-radius: 8px;

	::before {
		content: "Zamknij";
		font-size: 1rem;
		text-transform: uppercase;
		color: #efefef ;
	}

	:hover {
		box-shadow: 0px 0px 10px #fff;
	}
`

export const InfoBoxContainer = styled.div`
	position: fixed;
	visibility: ${props => props.show ? "visible" : "hidden"};
	top: 60px;
	bottom: 0px;
	max-height: 100%;
	left: 0;
	right: 0;
	background-color: #212121;
	z-index: 100;
	color: #fff;
	font-size: 2rem;
	padding: 50px 30px;
	overflow-y: scroll;
	display: grid;
	grid-template-columns: minmax(200px, 800px);
	justify-content: center;
	align-content: start;
`

export const InfoBoxTitle = styled.h2`
	font-size: 2.6rem;
	font-weight: 700;
	margin-bottom: 20px;
	color: #d22;
	text-align: center;
`

export const InfoBoxText = styled.p`
	color: #ccc;
	font-size: 1.5rem;
	font-weight: 300;
	line-height: 2.4rem;
	margin-bottom: 0.3rem;
	margin-left: 2rem;
	
	::before {
		font-family: "Font Awesome 5 Free";
		font-weight: 700;
		content: "\f00c";
		color: #f22;
		margin-left: -2rem;
		margin-right: 9px;
	}
`






