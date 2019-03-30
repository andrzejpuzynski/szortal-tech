import React from 'react';

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
} from '../styled/Section';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

class Pdf extends React.Component {
	render() {
		return (
			<SectionContainer>
				<SectionTitle>„Szortal na&nbsp;Wynos” w&nbsp;formacie PDF</SectionTitle>

				<SectionText>
					Wydanie w formacie PDF jest przygotowywane z finalnej wersji 
					wydania w formacie EPUB. W dostarczonej do sprawdzenia makiecie EPUB
					znajdują się nieskompresowane stratnie grafiki w formacie PNG oraz teksty
					w formacie HTML. Pliki PNG są eksportowane bezpośrednio z wydania EPUB.
					Pliki HTML przed eksportem wymagają konwersji do formatu XML.
				</SectionText>

				<SectionInfo>
					Konwersja tekstów do formatu XML w edytorze Calibre
				</SectionInfo>

				<SectionTextWithCheck> 
	                Po otworzeniu wydania EPUB w Edytorze Calibre należy do okna „Saved searches" zaimportować
					plik z sekwencją kolejnych Find-Replace.
					<SectionDownloadButton
            	    	 href="download/Szortal-Calibre-scripts.json"
            	    	 download="Szortal-Calibre-scripts.json"
            	    >
            	    	<FontAwesomeIcon
                        	icon={ faDownload }
                        	size="2x"
                        	color="#777777"
                        />
            	    </SectionDownloadButton>
				</SectionTextWithCheck> 
				<SectionTextWithCheck>
                    Następnie należy po kolei uruchomić je na wszystkich plikach HTML jednocześnie. 
                    Każdy uruchamia się dotąd, dopóki liczba wyszukań Regex jest równa zero.
				</SectionTextWithCheck>
				<SectionTextWithCheck>
					Skonwertowane pliki HTML należy połączyć w jeden plik,
					następnie wyeksportować i zmienić jego rozszerzenie na *.xml.
				</SectionTextWithCheck>

				<SectionInfo>
					Pliki konfiguracyjne
				</SectionInfo>

				<SectionTextWithCheck>
					Plik konfiguracyjny dodkumentu Indesign (wymaga aktualizacji)
					<SectionDownloadButton
            	    	 href="download/Szortal-Indesign-File-Info.xmp"
            	    	 download="Szortal-Indesign-File-Info.xmp"
            	    >
            	    	<FontAwesomeIcon
                        	icon={ faDownload }
                        	size="2x"
                        	color="#777777"
                        />
            	    </SectionDownloadButton>
				</SectionTextWithCheck> 
				
				<SectionTextWithCheck>
					Plik konfiguracyjny do zapisu PDFa
					<SectionDownloadButton
            	    	 href="download/Szortal-Indesign-printPDF.joboptions"
            	    	 download="Szortal-Indesign-printPDF.joboptions"
            	    >
            	    	<FontAwesomeIcon
                        	icon={ faDownload }
                        	size="2x"
                        	color="#777777"
                        />
            	    </SectionDownloadButton>
				</SectionTextWithCheck> 
				
				<SectionTextWithCheck>
                    Plik konfiguracyjny pliku okładki wydania (wymaga aktualizacji)
					<SectionDownloadButton
            	    	 href="download/Szortal-PS-Cover-Info.xmp"
            	    	 download="Szortal-PS-Cover-Info.xmp"
            	    >
            	    	<FontAwesomeIcon
                        	icon={ faDownload }
                        	size="2x"
                        	color="#777777"
                        />
            	    </SectionDownloadButton>
				</SectionTextWithCheck> 
			</SectionContainer>
		)
	}
}

export default Pdf;