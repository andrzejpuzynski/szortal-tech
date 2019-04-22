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

class WorkflowFormatting extends React.Component {
	render() {
		return (
			<React.Fragment>
				<InfoBoxContainer show={this.props.show}>
					<InfoBoxCloseButton onClick={() => this.props.toggleInfoBox("workflowFormatting")}/>
						<InfoBoxTitle>
							Makietowanie wydania 
						</InfoBoxTitle>

						<InfoBoxText>
							Kolejność plików HTML w EPUBie odpowiada za wyświetlanie tekstów.
							Makietowanie polega na ustawieniu plików HTML we właściwej kolejności.
						</InfoBoxText>
					
	
						<SectionInfo>
							Korekta kodu przed przygotowaniem spisu treści
						</SectionInfo>
		
						<InfoBoxText>	
							Uruchom z Menu: TOOLS: Fix HTML (all files).
						</InfoBoxText>
		
						<InfoBoxText>	
							Uruchom z Menu: TOOLS: Beautify all files.
						</InfoBoxText>
		
						<InfoBoxText>	
							Popraw nazwy plików PNG i HTML, jeśli posiadają spacje oraz polskie znaki.
						</InfoBoxText>
		
						<InfoBoxText>	
							Popraw ścieżki linkowania plików PNG, jeśli się nie wyświetlają w oknie Preview.
						</InfoBoxText>
		
						<InfoBoxText>	
							Sprawdź czy ilustracje do tekstów znajdują się w tym samym pliku co tekst.
						</InfoBoxText>
		
						<InfoBoxText>	
							Sprawdź w tekstach z ilustracją nazwę klasy dla kontenera div ilustracji (class="imagetext")
                		    i uzupełnij autora ilustracji oraz uzupełnij nazwę klasy dla tagu p (class="author-photo").
						</InfoBoxText>
		
						<InfoBoxText>	
							Sprawdź na stronach z reklamą, patronatem i komiksem nazwę klasy (class="fullpage") w tagu div
.						</InfoBoxText>
			

						<SectionInfo>
							Przygotowanie spisu treści
						</SectionInfo>
		
						<InfoBoxText>	
							Jeśli w dokumencie znajduje się jakiś spis treści to go usuń. 
						</InfoBoxText>
		
						<InfoBoxText>	
							Uruchom z Menu: TOOLS > TABLE OF CONTENTS > Edit Table of Contents.
						</InfoBoxText>
		
						<InfoBoxText>	
							Wyczyść aktualny spis treści (po prawej stronie) a następnie uruchom: Generate TOC from all headings.
						</InfoBoxText>
		
						<InfoBoxText>	
							Przejdź na koniec spisu treści i dodaj pozycję (New entry below this entry). 
                		    Z listy wybierz okładkę html komiksu. W okienku "Name of the TOC entry" wpisz "Komiks".
						</InfoBoxText>
		
						<InfoBoxText>	
							Uruchom z Menu: TOOLS > TABLE OF CONTENTS > Instert inline Table of Contents. 
						</InfoBoxText>
		
						<InfoBoxText>	
							Przesuń w makiecie spis treści za stronę redakcyjną. 
						</InfoBoxText>
		
						<InfoBoxText>	
							Sprawdź, czy spis treści działa, i czy jest kompletny. 
						</InfoBoxText>
		
						<InfoBoxText>	
							W sekcji head spisu treści usuń całą definicję sytles i w to miejsce wstaw 
							<SectionCode>{`<link rel="stylesheet" href="OEBPS/stylesheet.css"/>`}</SectionCode>
						</InfoBoxText>
		
						<InfoBoxText>	
							Zamień linijkę z tytułem na 
							<SectionCode>{`<h2 class="title">Treściospis</h2>`}</SectionCode>
						</InfoBoxText>

						<InfoBoxText>	
							W oknie kodu spisu treści uruchom Find / Replace 
							<SectionCode>{`Find: <li>`}</SectionCode>
							<SectionCode>{`Replace <div class="sgc-toc-level-1">`}</SectionCode>
						</InfoBoxText>
		
						<InfoBoxText>	
							W oknie kodu spisu treści uruchom Find / Replace 
							<SectionCode>{`Find: </li>`}</SectionCode>
							<SectionCode>{`Replace: </div>`}</SectionCode>
						</InfoBoxText>
		
						<InfoBoxText>	
							Usuń z kodu linie 
							<SectionCode>{`<ul>`}</SectionCode>
							<SectionCode>{`</ul>`}</SectionCode>
						</InfoBoxText>
		
						<InfoBoxText>	
							w każdej linijce wpisz podwójną spację,a następnie imię i nazwisko
							autora tekstu pomiędzy tagami /a /div
							<SectionCode>{`</a>  Imię Nazwisko</div>`}</SectionCode> 
						</InfoBoxText>
		
						<InfoBoxText>	
							Sprawdź, czy spis treści działa, i czy jest kompletny. 
						</InfoBoxText>
		
						<SectionInfo>
							Przypisanie okładki
						</SectionInfo>
		
						<InfoBoxText>	
							Zaimportuj plik okładki o nazwie podobnej do wzorca: 
                		    Szortal-na-wynos-nr60-czerwiec-2018.png (łączniki w nazwie).
						</InfoBoxText>

						<InfoBoxText>	
							Osadź plik png okładki w pliku okładka.html
						</InfoBoxText>
		
						<InfoBoxText>	
							Z oryginalnego pliku okładki utwórz kopię o nazwie cover.png. Zmniejsz wymiary tego pliku
							tak, by wysokość wynosiła 500px. Następnie zaimportuj ten plik do wydania.
						</InfoBoxText>
		
						<InfoBoxText>	
							Zaznacz plik cover.png  "Mark cover.png as cover image".
						</InfoBoxText>
	

				</InfoBoxContainer>
			</React.Fragment>
		)
	}
}

export default WorkflowFormatting;