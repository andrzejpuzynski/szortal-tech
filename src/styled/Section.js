import styled from 'styled-components';
 
export const SectionContainer = styled.div`
	max-width: 1000px;
	min-height: 100vh;
	padding: 0 60px 20px 60px;
	margin: 0 auto;
`

export const SectionTitle = styled.h1`
	display: inline-block;
	width: 100%;
	font-size: 54px;
	text-align: center;
	margin-top: 100px;
`

export const SectionSubtitle = styled.h2`
	display: inline-block;
	width: 100%;
	font-size: 32px;
	font-weight: 600;
	margin-top: 100px;
	margin-bottom: 10px;
`

export const SectionInfo = styled.p`
	font-size: 28px;
	font-weight: 100;
	letter-spacing: 1px;
	line-height: 32px;
	margin-top: 80px;
	margin-bottom: 30px;
	color: grey;
`

export const SectionText = styled.p`
	font-size: 21px;
	line-height: 32px;
	margin-bottom: 30px;
`

export const SectionCode = styled.pre`
	display: inline-block;
	white-spaces: normal;
	background-color: #edd;
	border-radius: 8px;
	color: #d66;
	width: 100%;
	padding: 10px;
	font-size: 21px;
	margin: 8px 0 0 0;
	overflow: auto;
`

export const SectionDownloadButton = styled.a`
	display: inline-block;
	margin: 10px;
`

export const SectionFullWidthImage = styled.img`
  display: block;
  max-width: 1200px;
`

export const SectionDimensionsContainer = styled.div`
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

export const SectionDimensionsWidth = styled.div`
	position: absolute;
	width: 200px;
	font-size: 21px;	
	transform: translateY(-24px)
`

export const SectionDimensionsHeight = styled.div`
	position: absolute
	width: 300px;
	font-size: 21px;
	transform: rotate(90deg) translateX(138px)translateY(-62px);
`

export const SectionDimensionsDpi = styled.div`
	font-size: 32px;
	line-height: 300px;
	color: #fff;
`
