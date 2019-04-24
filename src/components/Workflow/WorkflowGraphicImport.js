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

class WorkflowGraphicImport extends React.Component {
	render() {
		return (
			<React.Fragment>
				<InfoBoxContainer show={this.props.show}>
					<InfoBoxCloseButton onClick={() => this.props.toggleInfoBox("workflowGraphicImport")}/>
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
							Nazwy plików html do poszczególnych działów rozpoczynamy prefixem według klucza:
                		    <ul>
                		    	<li>"szort_" - Szortownia</li>
								<li>"stu_" - Stusłówka</li>
								<li>"rym_" - Rymowisko</li>
								<li>"zagr_" - Zagraniczniak</li>
								<li>"pub_" - Publicystyka</li>
								<li>"wywiad_" - Wywiad</li>
								<li>"s_" - Subiektywnie</li>
								<li>"komiks_" - pliki do komiksu</li>
								<li>"reklama_" - reklama</li>
								<li>"patronat_" - reklama Partonat</li>
							</ul>
						</InfoBoxText>

				</InfoBoxContainer>
			</React.Fragment>
		)
	}
}

export default WorkflowGraphicImport;