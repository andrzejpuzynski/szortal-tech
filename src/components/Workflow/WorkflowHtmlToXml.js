import React from 'react';

import {
	InfoBoxCloseButton,
	InfoBoxContainer,
	InfoBoxTitle,
	InfoBoxText,
} from '../../styled/InfoBox';

import {
    SectionDownloadButton
} from '../../styled/Section';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

class WorkflowHtmlToXml extends React.Component {
	render() {
		return (
			<React.Fragment>
				<InfoBoxContainer show={this.props.show}>
					<InfoBoxCloseButton onClick={() => this.props.toggleInfoBox("workflowHtmlToXml")}/>
						<InfoBoxTitle>
                            Konwersja plików HTML do formatu XML
						</InfoBoxTitle>
        
                        <InfoBoxText> 
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
                        </InfoBoxText> 
                        <InfoBoxText>
                            Następnie należy po kolei uruchomić je na wszystkich plikach HTML jednocześnie. 
                            Każdy uruchamia się dotąd, dopóki liczba wyszukań Regex jest równa zero.
                        </InfoBoxText>
                        <InfoBoxText>
                            Skonwertowane pliki HTML należy połączyć w jeden plik,
                            następnie wyeksportować i zmienić jego rozszerzenie na *.xml.
                        </InfoBoxText>

				</InfoBoxContainer>
			</React.Fragment>
		)
	}
}

export default WorkflowHtmlToXml;