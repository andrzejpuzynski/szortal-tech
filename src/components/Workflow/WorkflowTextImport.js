import React from 'react';

import {
	InfoBoxCloseButton,
	InfoBoxContainer,
	InfoBoxTitle,
	InfoBoxText,
} from '../../styled/InfoBox';

import {
    SectionInfo,
    SectionCode,
} from '../../styled/Section';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

class WorkflowTextImport extends React.Component {
	render() {
		return (
			<React.Fragment>
				<InfoBoxContainer show={this.props.show}>
					<InfoBoxCloseButton onClick={() => this.props.toggleInfoBox("workflowTextImport")}/>
						<InfoBoxTitle>
							Import tekstów źródłowych do Calibre
						</InfoBoxTitle>

						<SectionInfo>
							Nazwy plików
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
		
						<InfoBoxText>
							Nazwy te nie mogą zawierać spacji oraz polskich znaków.
						</InfoBoxText>
		
						<InfoBoxText>
							<FontAwesomeIcon
                		    	icon={ faTimes }
                		    	size="1x"
                		    	color="#d66"
                		    /> 
							 &nbsp;szort_Piękny dzień.xhtml 
						</InfoBoxText>
		
						<InfoBoxText>
							<FontAwesomeIcon
                		    	icon={ faCheck }
                		    	size="1x"
                		    	color="#0b0"
                		    />
							&nbsp;szort_Piekny_dzien.xhtml
						</InfoBoxText>

						<SectionInfo>
							Import tekstów źródłowych do Calibre
						</SectionInfo>
		
						<InfoBoxText>
							Dodaj nowy dokument *.html w Calibre. Jednocześnie zaznacz automatyczne załączanie styli.
						</InfoBoxText>
						<InfoBoxText>
							Tekst źródłowy wklej pomiędzy tagami body. Następnie otaguj całość przy użyciu komendy
							Find/Replace. Sprawdź opcje podmiany (Mode: Regex; Current File; Wrap).
						</InfoBoxText>
						<InfoBoxText>Find:
							<SectionCode>^([\–\-„A-Ż].*)(\b[^\n]*)$</SectionCode>
						</InfoBoxText>
		
						<InfoBoxText>Replace (dla tekstów do sekcji Szortownia, Stusłówka, Rymowisko i Wywiad)
							<SectionCode>{`<p class="text">`}\1\2{`</p>`}</SectionCode>
						</InfoBoxText>
		
						<InfoBoxText>Replace (dla tekstów do sekcji	Subiektywnie):
							<SectionCode>{`<p class="review">`}\1\2{`</p>`}</SectionCode>
						</InfoBoxText>
		

				</InfoBoxContainer>
			</React.Fragment>
		)
	}
}

export default WorkflowTextImport;