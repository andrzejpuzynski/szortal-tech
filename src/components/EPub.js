import React from 'react';

import Workflow from './Workflow';
import WorkflowMockupUpdate from './Workflow/WorkflowMockupUpdate';
import WorkflowPngImport from './Workflow/WorkflowPngImport';
import WorkflowFormatting from './Workflow/WorkflowFormatting';
import WorkflowDtpChecklist from './Workflow/WorkflowDtpChecklist';
import WorkflowConvertToMobi from './Workflow/WorkflowConvertToMobi';

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
} from '../styled/Section';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

class EPub extends React.Component {
	render() {
		return (
			<SectionContainer>
				<SectionTitle>„Szortal na&nbsp;Wynos” w&nbsp;formacie EPUB</SectionTitle>

				<Workflow toggleInfoBox={this.props.toggleInfoBox}/>

				<WorkflowMockupUpdate
					show={this.props.showInfoBox.workflowMockupUpdate}
					toggleInfoBox={this.props.toggleInfoBox}
				/>

				<WorkflowPngImport
					show={this.props.showInfoBox.workflowPngImport}
					toggleInfoBox={this.props.toggleInfoBox}
				/>

				<WorkflowFormatting
					show={this.props.showInfoBox.workflowFormatting}
					toggleInfoBox={this.props.toggleInfoBox}
				/>

				<WorkflowDtpChecklist
					show={this.props.showInfoBox.workflowDtpChecklist}
					toggleInfoBox={this.props.toggleInfoBox}
				/>

				<WorkflowConvertToMobi
					show={this.props.showInfoBox.workflowConvertToMobi}
					toggleInfoBox={this.props.toggleInfoBox}
				/>
				
				<SectionSubtitle>
					Pliki HTML
				</SectionSubtitle>

				<SectionInfo>
					Nazwy plików
				</SectionInfo>

				<SectionText>	
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
				</SectionText>

				<SectionText>
					Nazwy te nie mogą zawierać spacji oraz polskich znaków.
				</SectionText>

				<SectionText>
					<FontAwesomeIcon
                    	icon={ faTimes }
                    	size="1x"
                    	color="#d66"
                    /> 
					 &nbsp;szort_Piękny dzień.xhtml 
				</SectionText>

				<SectionText>
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#0b0"
                    />
					&nbsp;szort_Piekny_dzien.xhtml
				</SectionText>

				<SectionInfo>
					Import tekstów źródłowych do Calibre
				</SectionInfo>

				<SectionTextWithCheck>
					Dodaj nowy dokument *.html w Calibre. Jednocześnie zaznacz automatyczne załączanie styli.
				</SectionTextWithCheck>
				<SectionTextWithCheck>
					Tekst źródłowy wklej pomiędzy tagami body. Następnie otaguj całość przy użyciu komendy
					Find/Replace. Sprawdź opcje podmiany (Mode: Regex; Current File; Wrap).
				</SectionTextWithCheck>
				<SectionText>Find:
					<SectionCode>^([\–\-„A-Ż].*)(\b[^\n]*)$</SectionCode>
				</SectionText>

				<SectionText>Replace (dla tekstów do sekcji Szortownia, Stusłówka, Rymowisko i Wywiad)
					<SectionCode>{`<p class="text">`}\1\2{`</p>`}</SectionCode>
				</SectionText>

				<SectionText>Replace (dla tekstów do sekcji	Subiektywnie):
					<SectionCode>{`<p class="review">`}\1\2{`</p>`}</SectionCode>
				</SectionText>	

				<SectionInfo>
					Stylowanie plików HTML do działów Szortownia, Stusłówka, Rymowisko, Wywiad.
				</SectionInfo>

				<SectionText>Tytuł (w wywiadzie - imię i nazwisko osoby,
				z którą wywiad jest przeprowadzany)
					<SectionCode>{`<h2 class="title">Tytuł tekstu</h2>`}</SectionCode>
				</SectionText>

				<SectionText>Podtytuł w wywiadzie umieszczany przed tytułem
					<SectionCode>{`<h3>"7 pytań do...", czyli gdzie diabeł nie może tam „Szortal” pośle</h3>`}</SectionCode>
				</SectionText>

				<SectionText>Autor
					<SectionCode>{`<p class="author">Autor tekstu</p>`}</SectionCode>
				</SectionText>

				<SectionText>Tekst
				<SectionCode>{`<p class="text">text dokumentu</p>`}</SectionCode>
				</SectionText>


				<SectionText>Gwiazdki *** rozdzielające części tekstu
					<SectionCode>{`<p class="textcenter">***</p>`}</SectionCode>
				</SectionText>


				<SectionText>Przypis
					<SectionCode>{`<div class="annotation">\n`}
					{`  <p class="text">linijka tekstu</p>\n`}
					{`  <p class="text">linijka tekstu</p>\n`}
					{`</div>`}</SectionCode>
				</SectionText>


				<SectionText>Poezja
					<SectionCode>{`<div class="poetry">\n`}
					{`  <p class="text">linijka tekstu</p>\n`}
					{`  <p class="text">linijka tekstu</p>\n`}
					{`</div>`}</SectionCode>
				</SectionText>

				<SectionText>Motto (po autorze opowiadania)
					<SectionCode>{`<div class="motto">\n`}
					{`  <p class="text">linijka tekstu</p>\n`}
					{`  <p class="text">linijka tekstu</p>\n`}
					{`</div>`}</SectionCode>
				</SectionText>

				<SectionInfo>
					Stylowanie plików HTML do działu Subiektywnie.
				</SectionInfo>

				<SectionText>Tytuł
					<SectionCode>{`<h2 class="title">Tytuł recenzji</h2>`}</SectionCode>
				</SectionText>

				<SectionText>Autor
					<SectionCode>{`<p class="author">Autor recenzji</p>`}</SectionCode>
				</SectionText>

				<SectionText>Lead (pierwszy pogrubiony akapit po autorze)
					<SectionCode>{`<p class="lead">text leadu</p>`}</SectionCode>
				</SectionText>

				<SectionText>Tekst
					<SectionCode>{`<p class="review">text recenzji</p>`}</SectionCode>
				</SectionText>

				<SectionText>ISBN (sekcja końcowa)
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
				</SectionText>

				<SectionText>Przypis
					<SectionCode>{`<div class="annotation">\n`}
					{`  <p class="text">linijka tekstu</p>\n`}
					{`  <p class="text">linijka tekstu</p>\n`}
					{`</div>`}</SectionCode>
				</SectionText>


			</SectionContainer>


		)
	}
}

export default EPub;