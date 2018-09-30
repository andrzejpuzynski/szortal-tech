import React from 'react';

import {
    LayoutContainer,
    LayoutTitle,
    LayoutSubtitle,
    LayoutInfo,
    LayoutText,
    LayoutDimensionsContainer,
    LayoutDimensionsWidth,
    LayoutDimensionsHeight,
    LayoutDimensionsDpi
} from '../styled/Layout';

class Layout extends React.Component {
	render() {
		return (
			<LayoutContainer>
				<LayoutTitle>Layout</LayoutTitle>

				<LayoutText>
				Podstawowe dane techniczne dla plików graficznych:
					<ul>
						<li>Przestrzeń kolorystyczna: RGB</li>
						<li>format pliku: PNG-24</li>
					</ul>
				</LayoutText>


				<LayoutSubtitle>
					Wymiary reklam
				</LayoutSubtitle>

				<LayoutDimensionsContainer >
					<LayoutDimensionsWidth>1240 px</LayoutDimensionsWidth>
					<LayoutDimensionsHeight>1754 px</LayoutDimensionsHeight>
					<LayoutDimensionsDpi>150 dpi</LayoutDimensionsDpi>
				</LayoutDimensionsContainer>

				<LayoutDimensionsContainer >
					<LayoutDimensionsWidth>1818 px</LayoutDimensionsWidth>
					<LayoutDimensionsHeight>2572 px</LayoutDimensionsHeight>
					<LayoutDimensionsDpi>220 dpi</LayoutDimensionsDpi>
				</LayoutDimensionsContainer>



				<LayoutSubtitle>
					Wymiary grafik
				</LayoutSubtitle>

				<LayoutInfo>
					Okładka, ilustracja całostronicowa do WS.
				</LayoutInfo>

				<LayoutDimensionsContainer >
					<LayoutDimensionsWidth>1240 px</LayoutDimensionsWidth>
					<LayoutDimensionsHeight>1754 px</LayoutDimensionsHeight>
					<LayoutDimensionsDpi>150 dpi</LayoutDimensionsDpi>
				</LayoutDimensionsContainer>

				<LayoutDimensionsContainer >
					<LayoutDimensionsWidth>1818 px</LayoutDimensionsWidth>
					<LayoutDimensionsHeight>2572 px</LayoutDimensionsHeight>
					<LayoutDimensionsDpi>220 dpi</LayoutDimensionsDpi>
				</LayoutDimensionsContainer>

				<LayoutInfo>
					Ilustracja wewnątrz tekstu
				</LayoutInfo>

				<LayoutDimensionsContainer >
					<LayoutDimensionsWidth>1093 px</LayoutDimensionsWidth>
					<LayoutDimensionsHeight>1571 px</LayoutDimensionsHeight>
					<LayoutDimensionsDpi>150 dpi</LayoutDimensionsDpi>
				</LayoutDimensionsContainer>

				<LayoutDimensionsContainer >
					<LayoutDimensionsWidth>1600 px</LayoutDimensionsWidth>
					<LayoutDimensionsHeight>max. 2300 px</LayoutDimensionsHeight>
					<LayoutDimensionsDpi>220 dpi</LayoutDimensionsDpi>
				</LayoutDimensionsContainer>


				<LayoutInfo>
					Ilustracja do Stusłówka
				</LayoutInfo>

				<LayoutDimensionsContainer >
					<LayoutDimensionsWidth>1093 px</LayoutDimensionsWidth>
					<LayoutDimensionsHeight>max. 957 px</LayoutDimensionsHeight>
					<LayoutDimensionsDpi>150 dpi</LayoutDimensionsDpi>
				</LayoutDimensionsContainer>

				<LayoutDimensionsContainer >
					<LayoutDimensionsWidth>1600 px</LayoutDimensionsWidth>
					<LayoutDimensionsHeight>max. 1400 px</LayoutDimensionsHeight>
					<LayoutDimensionsDpi>220 dpi</LayoutDimensionsDpi>
				</LayoutDimensionsContainer>

				<LayoutInfo>
					Miniaturka okładki do recenzji
				</LayoutInfo>

				<LayoutDimensionsContainer >
					<LayoutDimensionsHeight>400 px</LayoutDimensionsHeight>
					<LayoutDimensionsDpi>150 dpi</LayoutDimensionsDpi>
				</LayoutDimensionsContainer>

				<LayoutDimensionsContainer >
					<LayoutDimensionsHeight>587 px</LayoutDimensionsHeight>
					<LayoutDimensionsDpi>220 dpi</LayoutDimensionsDpi>
				</LayoutDimensionsContainer>			
			</LayoutContainer>
		)
	}
}

export default Layout;