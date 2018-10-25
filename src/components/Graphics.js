import React from 'react';

import {
    SectionContainer,
    SectionTitle,
    SectionSubtitle,
    SectionInfo,
    SectionText,
    SectionDimensionsContainer,
    SectionDimensionsWidth,
    SectionDimensionsHeight,
    SectionDimensionsDpi,
    SectionSocialButton,
    SectionDownloadButton
} from '../styled/Section';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

class Graphics extends React.Component {
	render() {
		return (
			<SectionContainer>
				<SectionTitle>Specyfikacja grafik</SectionTitle>

				<SectionText>
				Podstawowe dane techniczne dla plików graficznych:
					<ul>
						<li>przestrzeń kolorystyczna: RGB</li>
						<li>format pliku: PNG-24</li>
						<li>preferowana rozdzielczość: 220 dpi</li>
					</ul>
				</SectionText>

				<SectionInfo>
					Okładka, ilustracja całostronicowa do WS.
				</SectionInfo>

				<SectionDimensionsContainer >
					<SectionDimensionsWidth>1240 px</SectionDimensionsWidth>
					<SectionDimensionsHeight>1754 px</SectionDimensionsHeight>
					<SectionDimensionsDpi>150 dpi</SectionDimensionsDpi>
				</SectionDimensionsContainer>

				<SectionDimensionsContainer >
					<SectionDimensionsWidth>1818 px</SectionDimensionsWidth>
					<SectionDimensionsHeight>2572 px</SectionDimensionsHeight>
					<SectionDimensionsDpi>220 dpi</SectionDimensionsDpi>
				</SectionDimensionsContainer>

				<SectionInfo>
					Ilustracja wewnątrz tekstu
				</SectionInfo>

				<SectionDimensionsContainer >
					<SectionDimensionsWidth>1093 px</SectionDimensionsWidth>
					<SectionDimensionsHeight>1571 px</SectionDimensionsHeight>
					<SectionDimensionsDpi>150 dpi</SectionDimensionsDpi>
				</SectionDimensionsContainer>

				<SectionDimensionsContainer >
					<SectionDimensionsWidth>1600 px</SectionDimensionsWidth>
					<SectionDimensionsHeight>max. 2300 px</SectionDimensionsHeight>
					<SectionDimensionsDpi>220 dpi</SectionDimensionsDpi>
				</SectionDimensionsContainer>


				<SectionInfo>
					Ilustracja do Stusłówka
				</SectionInfo>

				<SectionDimensionsContainer >
					<SectionDimensionsWidth>1093 px</SectionDimensionsWidth>
					<SectionDimensionsHeight>max. 957 px</SectionDimensionsHeight>
					<SectionDimensionsDpi>150 dpi</SectionDimensionsDpi>
				</SectionDimensionsContainer>

				<SectionDimensionsContainer >
					<SectionDimensionsWidth>1600 px</SectionDimensionsWidth>
					<SectionDimensionsHeight>max. 1400 px</SectionDimensionsHeight>
					<SectionDimensionsDpi>220 dpi</SectionDimensionsDpi>
				</SectionDimensionsContainer>

				<SectionInfo>
					Miniaturka okładki do recenzji
				</SectionInfo>

				<SectionDimensionsContainer >
					<SectionDimensionsHeight>400 px</SectionDimensionsHeight>
					<SectionDimensionsDpi>150 dpi</SectionDimensionsDpi>
				</SectionDimensionsContainer>

				<SectionDimensionsContainer >
					<SectionDimensionsHeight>587 px</SectionDimensionsHeight>
					<SectionDimensionsDpi>220 dpi</SectionDimensionsDpi>
				</SectionDimensionsContainer>

				<SectionText>
					    <SectionDownloadButton
            	    	 	href="Grafiki - bardzo wstepnie.pdf"
            	    	 	download="Grafiki - bardzo wstepnie.pdf"
            	    	>
            	    		<FontAwesomeIcon
                                    icon={ faFilePdf }
                                    size="2x"
                                    color="#777777"
                              />
            	    	</SectionDownloadButton>
					Kliknij aby ściągnąć tę stronę w formacie PDF.
                </SectionText>			
			</SectionContainer>
		)
	}
}

export default Graphics;