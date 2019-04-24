import styled from 'styled-components';


export const DocumentSizesIllustrationContainer = styled.div`
	position: relative;
	display: inline-block;
	width: 200px;
	height: 300px;
	background-color: #b22;
	color: #bbb;
	text-align: center;
	margin: 30px 40px;
`

export const DocumentSizesIllustrationWidth = styled.div`
	position: absolute;
	width: 200px;
	font-size: 1.4rem;
	transform: translateY(-24px)
`

export const DocumentSizesIllustrationHeight = styled.div`
	position: absolute
	width: 300px;
	font-size: 1.4rem;
	transform: rotate(90deg) translateX(138px)translateY(-62px);
`

export const DocumentSizesIllustrationDpi = styled.div`
	font-size: 32px;
	line-height: 300px;
	color: #fff;
`
