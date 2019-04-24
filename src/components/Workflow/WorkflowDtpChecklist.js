import React from 'react';

import {
	InfoBoxCloseButton,
	InfoBoxContainer,
	InfoBoxTitle,
	InfoBoxText,
} from '../../styled/InfoBox';

import {
    SectionInfo,
} from '../../styled/Section';

class WorkflowDtpChecklist extends React.Component {
	render() {
		return (
			<React.Fragment>
				<InfoBoxContainer show={this.props.show}>
					<InfoBoxCloseButton onClick={() => this.props.toggleInfoBox("workflowDtpChecklist")}/>
						<InfoBoxTitle>
							Sprawdzenie wydania (Checklist) 
						</InfoBoxTitle>

					<SectionInfo>
					1. Pliki i struktura EPUBa.
					</SectionInfo>
	
					<InfoBoxText>	
						Metadane pliku EPUB.
					</InfoBoxText>
	
					<InfoBoxText>	
						Nazwy plików *.html (*.xhtml) bez polskich znaków i spacji.
					</InfoBoxText>
	
					<InfoBoxText>	
						Nazwy plików *.jpg bez polskich znaków i spacji.
					</InfoBoxText>
	
					<InfoBoxText>	
						Spis treści - panel w Calibre.
					</InfoBoxText>
	
					<InfoBoxText>	
						Sekcja "title" i "head" każdego pliku.
					</InfoBoxText>
	
					<SectionInfo>
					2. Style tekstowe
					</SectionInfo>
	
					<InfoBoxText>	
						Wywiad: Imię i nazwisko bohatera wywiadu jako tytuł.
					</InfoBoxText> 
	
					<InfoBoxText>	
						Przypisy: spacja po gwiazdkach na początku linijki.
					</InfoBoxText> 
	
					<SectionInfo>
					3. Strona wizualna
					</SectionInfo>
	
					<InfoBoxText>	
						Formatowanie tekstu
					</InfoBoxText> 
	
					<InfoBoxText>	
						Wyświetlanie grafiki (podpisy do ilustracji)
					</InfoBoxText> 
	
					<InfoBoxText>	
						Linki.
					</InfoBoxText> 
	
					<InfoBoxText>	
						Spis treści na stronie ze spisem i w panelu spisu treści.
					</InfoBoxText> 

				</InfoBoxContainer>
			</React.Fragment>
		)
	}
}

export default WorkflowDtpChecklist;