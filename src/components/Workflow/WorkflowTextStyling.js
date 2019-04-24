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

class WorkflowTextStyling extends React.Component {
	render() {
		return (
			<React.Fragment>
				<InfoBoxContainer show={this.props.show}>
					<InfoBoxCloseButton onClick={() => this.props.toggleInfoBox("workflowTextStyling")}/>
						<InfoBoxTitle>
							Stylowanie tekstu w plikach HTML
						</InfoBoxTitle>

						<SectionInfo>
							Szortownia, Stusłówka, Rymowisko, Wywiad.
						</SectionInfo>

						<InfoBoxText>Tytuł (w wywiadzie - imię i nazwisko osoby,
						z którą wywiad jest przeprowadzany)
							<SectionCode>{`<h2 class="title">Tytuł tekstu</h2>`}</SectionCode>
						</InfoBoxText>
		
						<InfoBoxText>Podtytuł w wywiadzie umieszczany przed tytułem
							<SectionCode>{`<h3>"7 pytań do...", czyli gdzie diabeł nie może tam „Szortal” pośle</h3>`}</SectionCode>
						</InfoBoxText>
		
						<InfoBoxText>Autor
							<SectionCode>{`<p class="author">Autor tekstu</p>`}</SectionCode>
						</InfoBoxText>
		
						<InfoBoxText>Tekst
						<SectionCode>{`<p class="text">text dokumentu</p>`}</SectionCode>
						</InfoBoxText>
		
		
						<InfoBoxText>Gwiazdki *** rozdzielające części tekstu
							<SectionCode>{`<p class="textcenter">***</p>`}</SectionCode>
						</InfoBoxText>
		
		
						<InfoBoxText>Przypis
							<SectionCode>{`<div class="annotation">\n`}
							{`  <p class="text">linijka tekstu</p>\n`}
							{`  <p class="text">linijka tekstu</p>\n`}
							{`</div>`}</SectionCode>
						</InfoBoxText>
		
		
						<InfoBoxText>Poezja
							<SectionCode>{`<div class="poetry">\n`}
							{`  <p class="text">linijka tekstu</p>\n`}
							{`  <p class="text">linijka tekstu</p>\n`}
							{`</div>`}</SectionCode>
						</InfoBoxText>
		
						<InfoBoxText>Motto (po autorze opowiadania)
							<SectionCode>{`<div class="motto">\n`}
							{`  <p class="text">linijka tekstu</p>\n`}
							{`  <p class="text">linijka tekstu</p>\n`}
							{`</div>`}</SectionCode>
						</InfoBoxText>

						<SectionInfo>
							Subiektywnie.
						</SectionInfo>

						<InfoBoxText>Tytuł
							<SectionCode>{`<h2 class="title">Tytuł recenzji</h2>`}</SectionCode>
						</InfoBoxText>
		
						<InfoBoxText>Autor
							<SectionCode>{`<p class="author">Autor recenzji</p>`}</SectionCode>
						</InfoBoxText>
		
						<InfoBoxText>Lead (pierwszy pogrubiony akapit po autorze)
							<SectionCode>{`<p class="lead">text leadu</p>`}</SectionCode>
						</InfoBoxText>
		
						<InfoBoxText>Tekst
							<SectionCode>{`<p class="review">text recenzji</p>`}</SectionCode>
						</InfoBoxText>
		
						<InfoBoxText>ISBN (sekcja końcowa)
							<SectionCode>{`<div class="isbn">\n`}
						 	{`  <p class="review">Tytuł: </p>\n`}
							{`  <p class="review">Seria: </p>\n`}
							{`  <p class="review">Tom: </p>\n`}
							{`  <p class="review">Scenariusz: </p>\n`}
							{`  <p class="review">Rysunki: </p>\n`}
							{`  <p class="review">Kolory: </p>\n`}
							{`  <p class="review">Tłumaczenie: </p>\n`}
							{`  <p class="review">Tytuł oryginału: </p>\n`}
							{`  <p class="review">Wydawnictwo: </p>\n`}
							{`  <p class="review">Wydawca oryginału: </p>\n`}
							{`  <p class="review">Liczba stron: </p>\n`}
							{`  <p class="review">Oprawa: </p>\n`}
							{`  <p class="review">Format: </p>\n`}
							{`  <p class="review">Wydanie: </p>\n`}
							{`  <p class="review">ISBN: </p>\n`}
							{`</div>`}</SectionCode>
						</InfoBoxText>
		
						<InfoBoxText>Przypis
							<SectionCode>{`<div class="annotation">\n`}
							{`  <p class="text">linijka tekstu</p>\n`}
							{`  <p class="text">linijka tekstu</p>\n`}
							{`</div>`}</SectionCode>
						</InfoBoxText>

				</InfoBoxContainer>
			</React.Fragment>
		)
	}
}

export default WorkflowTextStyling;