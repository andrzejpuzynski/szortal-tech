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
    LayoutDimensionsDpi,
    LayoutSocialButton,
    LayoutDownloadButton
} from '../styled/Layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faFilePdf } from '@fortawesome/free-solid-svg-icons';

class Graphics extends React.Component {
	render() {
		return (
			<LayoutContainer>
				<LayoutTitle>Specyfikacja grafik</LayoutTitle>

				<LayoutText>
				Podstawowe dane techniczne dla plików graficznych:
					<ul>
						<li>przestrzeń kolorystyczna: RGB</li>
						<li>format pliku: PNG-24</li>
						<li>preferowana rozdzielczość: 220 dpi</li>
					</ul>
				</LayoutText>

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

				<LayoutText>
					    <LayoutDownloadButton
            	    	 	href="Grafiki - bardzo wstepnie.pdf"
            	    	 	download="Grafiki - bardzo wstepnie.pdf"
            	    	>
            	    		<FontAwesomeIcon
                                    icon={ faFilePdf }
                                    size="2x"
                                    color="#777777"
                              />
            	    	</LayoutDownloadButton>
					Kliknij aby ściągnąć tę stronę w formacie PDF.
                </LayoutText>			
			</LayoutContainer>
		)
	}
}

export default Graphics;