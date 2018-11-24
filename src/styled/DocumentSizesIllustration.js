import styled from 'styled-components';


export const DocumentSizesIllustrationContainer = styled.div`
	position: relative;
	display: inline-block;
	width: 200px;
	height: 300px;
	background-color: #d66;
	font-size: 32px;
	color: #000;
	text-align: center;
	margin: 30px 40px;
`

export const DocumentSizesIllustrationWidth = styled.div`
	position: absolute;
	width: 200px;
	font-size: 21px;	
	transform: translateY(-24px)
`

export const DocumentSizesIllustrationHeight = styled.div`
	position: absolute
	width: 300px;
	font-size: 21px;
	transform: rotate(90deg) translateX(138px)translateY(-62px);
`

export const DocumentSizesIllustrationDpi = styled.div`
	font-size: 32px;
	line-height: 300px;
	color: #fff;
`
