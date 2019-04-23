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

class WorkflowGraphicStyling extends React.Component {
	render() {
		return (
			<React.Fragment>
				<InfoBoxContainer show={this.props.show}>
					<InfoBoxCloseButton onClick={() => this.props.toggleInfoBox("workflowGraphicStyling")}/>
						<InfoBoxTitle>
							Stylowanie grafiki w plikach HTML
						</InfoBoxTitle>
		
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

export default WorkflowGraphicStyling;