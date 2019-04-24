import React from 'react';

import {
  SocialButton
} from '../styled/Szortal';

import {
    SectionContainer,
    SectionTitle,
    SectionText,
} from '../styled/Section';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

class Pdf extends React.Component {
	render() {
		return (
      		<SectionContainer>
        		<SectionTitle>Strona techniczna</SectionTitle>

        		<SectionText>
        		  Strona techniczna miesięcznika &bdquo;Szortal&nbsp;na&nbsp;Wynos&ldquo; to zasoby plików i&nbsp;informacji.
        		  Pismo jest wydawane w&nbsp;trzech formatach: EPub, Mobi i&nbsp;PDF. Aby uprościć proces powstawania, został stworzony 
        		  nietypowy Workflow. Model Docx - PDF - EPub zastąpiono modelem Makieta Epub - PDF.
        		  Zmiana ta wymusiła powstanie strony technicznej, opisującej sposób tworzenia Makiety Epub. 
        		</SectionText>

        		<SectionText>
        		  Wydania "Szortal na Wynos"
        		  <SocialButton
        		    href="http://szortal.com/nawynos"
        		    target="_blank"
        		    rel="noopener noreferrer">
        		    <FontAwesomeIcon
        		      icon={ faExternalLinkSquareAlt }
        		      color="#d22"
        		      size="2x"
        		    />
        		  </SocialButton>
        		</SectionText>
        	</SectionContainer>
		)
	}
}

export default Pdf;