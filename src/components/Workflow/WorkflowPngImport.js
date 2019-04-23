import React from 'react';

import {
	InfoBoxCloseButton,
	InfoBoxContainer,
	InfoBoxTitle,
	InfoBoxText,
} from '../../styled/InfoBox';

import {
    SectionContainer,
    SectionTitle,
    SectionSubtitle,
    SectionInfo,
    SectionText,
    SectionTextWithCheck,
    SectionCode,
    SectionFullWidthImage,
    SectionDownloadButton
} from '../../styled/Section';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

class WorkflowPngImport extends React.Component {
	render() {
		return (
			<React.Fragment>
				<InfoBoxContainer show={this.props.show}>
					<InfoBoxCloseButton onClick={() => this.props.toggleInfoBox("workflowPngImport")}/>
						<InfoBoxTitle>
							Pliki graficzne
						</InfoBoxTitle>

						<SectionInfo>
							Konwersja źródłowych grafik do formatu PNG
						</SectionInfo>
		
						<InfoBoxText>Niezależnie od tego w jakim formacie dostarczony jest źródłowy
						plik grafiki (ilustracja, zdjęcie, reklama, okładka książki), pierwszym krokiem
						jest konwersja tego pliku do formatu PNG. W trakcie tej konwersji można jednocześnie
						zmienić docelowy wymiar grafiki (szerokość, wysokość).
						</InfoBoxText>
						<InfoBoxText>Docelowe wymiary:
							<ul>
								<li>Reklama, okładka główna: szerokość (width) 1818px</li>
								<li>Okładki do recenzji: wysokość (height) 587px</li>
								<li>Pozostałe ilustracje: szerokość (width) 1200px</li>
							</ul>
						Pliki można konwertować wraz z jednoczesną zmianą rozmiarów 
						na stronie <a href="https://imageresize.org/" target="blank">
						Imageresize.</a> przy ustawieniu - Quality: Best.
						</InfoBoxText>
		
						<SectionInfo>
							Import plików PNG do Calibre
						</SectionInfo>
		
						<InfoBoxText>
							Wybierz z menu komendę: Import files into book.
						</InfoBoxText>
		
						<SectionInfo>
							Nazwy plików PNG
						</SectionInfo>
		
						<InfoBoxText>
							Dla plików graficznych stosujemy te same zasady nazewnictwa, jak w przypadku plików HTML.
						</InfoBoxText>
		
		
						<SectionInfo>
							Stylowanie plików graficznych
						</SectionInfo>
		
						<InfoBoxText>Reklama całostronicowa, komiks
							<SectionCode>{`<div class="fullpage">\n`}
							{`  <img src="../Images/nazwa_pliku.jpg" alt="nazwa_pliku.jpg" />\n`}
							{`</div>`}</SectionCode>
						</InfoBoxText>
		
						<InfoBoxText>Ilustracja do tekstu
							<SectionCode>{`<div class="imagetext">\n`}
							{`  <img src="../Images/nazwa_pliku.jpg" alt="nazwa_pliku.jpg" />\n`}
							{`  <p class="author-photo">Ilustracja: Autor ilustracji</p>\n`}
							{`</div>`}</SectionCode>
						</InfoBoxText>
		
						<InfoBoxText>Okładka do recenzji
							<SectionCode>{`<p>\n`}
							{`  <img src="../Images/nazwa_pliku.jpg" alt="nazwa_pliku.jpg" />\n`}
							{`</p>`}</SectionCode>
						</InfoBoxText>

				</InfoBoxContainer>
			</React.Fragment>
		)
	}
}

export default WorkflowPngImport;