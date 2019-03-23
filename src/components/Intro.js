import React from 'react';

import {
    SectionContainer,
    SectionTitle,
    SectionText,
} from '../styled/Section';

class Intro extends React.Component {
	render() {
		return (
			<SectionContainer>
				<SectionTitle>Strona techniczna</SectionTitle>

        <SectionText>
          Strona techniczna &bdquo;Szortalu&ldquo; to zasoby plików i informacji dotyczących miesięcznika &bdquo;Szortal na Wynos&ldquo;.
          Pismo jest wydawane w trzech formatach: EPub, Mobi i PDF. Aby uprościć proces powstawania, został stworzony 
          nietypowy Workflow. Model Docx - PDF - EPub zastąpiono modelem Makieta Epub - PDF.
          Zmiana ta wymusiła powstanie strony technicznej, opisującej sposób tworzenia Makiety Epub.
          Z czasem strona stała się miejscem gromadzącym wszelkie zasoby miesięcznika. 
        </SectionText>
        <SectionText>
          (Data aktualizacji: 23.03.2019)
        </SectionText>

      </SectionContainer>
		);
	}
}

export default Intro;


