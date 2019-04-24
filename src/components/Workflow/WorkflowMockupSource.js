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

class WorkflowMockupSource extends React.Component {
	render() {
		return (
			<React.Fragment>
				<InfoBoxContainer show={this.props.show}>
					<InfoBoxCloseButton onClick={() => this.props.toggleInfoBox("workflowMockupSource")}/>
						<InfoBoxTitle>
							Plik źródłowy makiety
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

				</InfoBoxContainer>
			</React.Fragment>
		)
	}
}

export default WorkflowMockupSource;