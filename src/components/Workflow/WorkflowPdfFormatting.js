import React from 'react';

import {
	InfoBoxCloseButton,
	InfoBoxContainer,
	InfoBoxTitle,
	InfoBoxText,
} from '../../styled/InfoBox';

import {
    SectionInfo,
    SectionDownloadButton
} from '../../styled/Section';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

class WorkflowPdfFormatting extends React.Component {
	render() {
		return (
			<React.Fragment>
				<InfoBoxContainer show={this.props.show}>
					<InfoBoxCloseButton onClick={() => this.props.toggleInfoBox("workflowPdfFormatting")}/>
						<InfoBoxTitle>
							Skład PDFa 
						</InfoBoxTitle>

						<SectionInfo>
							Pliki konfiguracyjne 
						</SectionInfo>

				        <InfoBoxText>
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
				        </InfoBoxText> 
				
				        <InfoBoxText>
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
				        </InfoBoxText> 
				
				        <InfoBoxText>
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
				        </InfoBoxText> 
	

				</InfoBoxContainer>
			</React.Fragment>
		)
	}
}

export default WorkflowPdfFormatting;