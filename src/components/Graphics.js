import React from 'react';
import DocumentSizesIllustration from './DocumentSizesIllustration';

import {
    SectionContainer,
    SectionTitle,
    SectionInfo,
    SectionText,
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
					Okładka.
				</SectionInfo>


				<DocumentSizesIllustration
					width="1240"
					height="1754"
					dpi="150"
				/>

				<DocumentSizesIllustration
					width="1818"
					height="2572"
					dpi="220"
				/>

				<SectionInfo>
					Ilustracja wewnątrz tekstu
				</SectionInfo>

				<DocumentSizesIllustration
					width="1093"
					height="max. 1571"
					dpi="150"
				/>

				<DocumentSizesIllustration
					width="1600"
					height="max. 2300"
					dpi="220"
				/>

				<SectionInfo>
					Ilustracja do Stusłówka
				</SectionInfo>

				<DocumentSizesIllustration
					width="1093"
					height="max. 957"
					dpi="150"
				/>

				<DocumentSizesIllustration
					width="1600"
					height="max. 1400"
					dpi="220"
				/>

				<SectionInfo>
					Miniaturka okładki do recenzji
				</SectionInfo>

				<DocumentSizesIllustration
					height="400"
					dpi="150"
				/>

				<DocumentSizesIllustration
					height="587"
					dpi="220"
				/>

				<SectionText>
					    <SectionDownloadButton
            	    	 	href="download/Szortal na Wynos - specyfikacja grafik - 2019.pdf"
            	    	 	download="Szortal na Wynos - specyfikacja grafik - 2019.pdf"
            	    	>
            	    		<FontAwesomeIcon
                                    icon={ faFilePdf }
                                    size="2x"
                                    color="#d22"
                              />
            	    	</SectionDownloadButton>
					Kliknij, aby ściągnąć specyfikację grafik w formacie PDF.
                </SectionText>			
			</SectionContainer>
		)
	}
}

export default Graphics;