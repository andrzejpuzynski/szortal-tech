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
    SectionDownloadButton
} from '../styled/Section';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';


class Adds extends React.Component {

	render() {
		return (
			<SectionContainer>
				<SectionTitle>Specyfikacja reklam</SectionTitle>

				<SectionText>
				Podstawowe dane techniczne dla plików graficznych:
					<ul>
						<li>przestrzeń kolorystyczna: RGB</li>
						<li>format pliku: PNG-24</li>
						<li>preferowana rozdzielczość: 220 dpi</li>
					</ul>
				</SectionText>


				<SectionInfo>
					Wymiary reklamy całostronicowej
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

				<SectionText>
				W przypadku reklamy zajmującej część strony należy zachować 
				rozmiar wysokości lub szerokości.
				</SectionText> 


                <SectionText>
					    <SectionDownloadButton
            	    	 	href="Szortal na Wynos - specyfikacja reklam.pdf"
            	    	 	download="Szortal na Wynos - specyfikacja reklam.pdf"
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

export default Adds;