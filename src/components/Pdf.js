import React from 'react';

import {
    SectionContainer,
    SectionTitle,
    SectionSubtitle,
    SectionInfo,
    SectionText,
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

				<SectionText>
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Po otworzeniu wydania EPUB w Edytorze Calibre należy do okna „Saved searches" zaimportować
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
				</SectionText> 
				<SectionText>
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Następnie należy po kolei uruchomić je na wszystkich plikach HTML jednocześnie.
				</SectionText>
				<SectionText>
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Skonwertowane pliki można połączyć w jedną całość lub w kilka mniejszych części,
					a następnie wyeksportować i zmienić im rozszerzenie na *.xml.
				</SectionText>
			</SectionContainer>
		)
	}
}

export default Pdf;