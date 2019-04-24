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
	font-size: 3.6rem;
	font-weight: 400;
	text-align: center;
	margin-top: 110px;
	margin-bottom: 50px;
	color: #bbb;
`

export const SectionSubtitle = styled.h2`
	display: inline-block;
	width: 100%;
	font-size: 32px;
	font-weight: 600;
	margin-top: 100px;
	margin-bottom: 10px;
	color: #efefef;
`

export const SectionInfo = styled.p`
	font-size: 28px;
	font-weight: 100;
	letter-spacing: 1px;
	line-height: 32px;
	margin-top: 60px;
	margin-bottom: 30px;
	color: #f22;
`

export const SectionText = styled.p`
	font-size: 21px;
	line-height: 32px;
	margin-bottom: 30px;
	color: #efefef;
`

export const SectionTextWithCheck = styled.p`
	font-size: 21px;
	line-height: 32px;
	margin-bottom: 30px;
	margin-left: 30px;
	::before {
		font-family: "Font Awesome 5 Free";
		font-weight: 700;
		content: "\f00c";
		color: #d66;
		margin-left: -30px;
		margin-right: 9px;
	}
`

export const SectionCode = styled.pre`
	display: inline-block;
	white-spaces: normal;
	background-color: #222;
	border: 2px solid #888;
	border-radius: 8px;
	color: #ddd;
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
	color: #efefef;
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
