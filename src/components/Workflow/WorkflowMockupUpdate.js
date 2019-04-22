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

class WorkflowMockupUpdate extends React.Component {
	render() {
		return (
			<React.Fragment>
				<InfoBoxContainer show={this.props.show}>
					<InfoBoxCloseButton onClick={() => this.props.toggleInfoBox("workflowMockupUpdate")}/>
						<InfoBoxTitle>
							Aktualizacja pliku makiety
						</InfoBoxTitle>

					<InfoBoxText>
						Pobierz plik makiety.
						<SectionDownloadButton
            		    	 href="download/makieta.epub"
            		    	 download="makieta_Szortal na wynos (nr xx) miesiac rok"
            		    >
            		    	<FontAwesomeIcon
                	        	icon={ faDownload }
                	        	size="2x"
                	        	color="#777777"
                	        /> 
            		    </SectionDownloadButton>
					</InfoBoxText>

					<InfoBoxText>	
						Zaktualizuj nazwę pliku.
					</InfoBoxText>

					<InfoBoxText>	
						Zaktualizuj metadane pliku: numer wydania, nazwę miesiąca oraz rok.
					</InfoBoxText>

					<InfoBoxText>	
						Zaktualizuj stronę redakcyjną.
					</InfoBoxText>
				</InfoBoxContainer>
			</React.Fragment>
		)
	}
}

export default WorkflowMockupUpdate;