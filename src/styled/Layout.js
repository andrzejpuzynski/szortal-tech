import styled from 'styled-components';
 
export const LayoutContainer = styled.div`
	min-height: 100vh;
	padding: 0 60px 0 60px;
`

export const LayoutTitle = styled.h1`
	display: inline-block;
	width: 100%;
	font-size: 60px;
	text-align: center;
	margin-top: 60px;
`

export const LayoutSubtitle = styled.h2`
	display: inline-block;
	width: 100%;

	font-weight: 600;
	margin-top: 100px;
	margin-bottom: 10px;
`

export const LayoutInfo = styled.p`
	font-size: 28px;
	font-weight: 100;
	letter-spacing: 1px;
	line-height: 32px;
	margin-top: 30px;
	margin-bottom: 30px;
	color: grey;
`

export const LayoutText = styled.p`
	font-size: 21px;
	line-height: 32px;
	margin-bottom: 30px;
`

export const LayoutDownloadButton = styled.a`
	display: inline-block;
	margin: 10px;
`

export const LayoutDimensionsContainer = styled.div`
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

export const LayoutDimensionsWidth = styled.div`
	position: absolute;
	width: 200px;
	font-size: 21px;	
	transform: translateY(-24px)
`

export const LayoutDimensionsHeight = styled.div`
	position: absolute
	width: 300px;
	font-size: 21px;
	transform: rotate(90deg) translateX(150px)translateY(-65px);

`

export const LayoutDimensionsDpi = styled.div`
	font-size: 32px;
	line-height: 300px;
	color: #fff;

`

