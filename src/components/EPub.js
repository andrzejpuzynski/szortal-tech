import React from 'react';

import {
    EPubContainer,
	EPubTitle,
	EPubSubtitle,
	EPubInfo,
	EPubText,
	EPubCode,
	IntroSocial,
	IntroSocialButton
} from '../styled/EPub';

import {
  Link
} from 'react-router-dom';


class EPub extends React.Component {
	render() {
		return (
			<EPubContainer>
				<EPubTitle>„Szortal na&nbsp;Wynos” w&nbsp;formacie EPUB</EPubTitle>
				<EPubInfo>Ta podstrona zawiera opis przygotowania pliku w formacie EPUB.</EPubInfo>
				<EPubText>EPub „Szortal na&nbsp;Wynos” składany jest w edytorze Calibre.
				Cały proces przygotowania pliku obejmuje etapy:
				<ul>
					<li>konwersji źródłowych tekstów do formatu HTML</li>
					<li>edycji plików HTML (stylowanie)</li>
					<li>konwersji plików do formatu DOCX</li>
					<li>konwersji źródłowych grafik do formatu PNG z korektą rozmiaru (resize)</li>
					<li>konwersji plików PNG do formatu JPG</li>
					<li>makietowania wydania w formacie EPUB</li>
					<li>sprawdzania pliku EPUB i przygotowania wersji finalnej</li>
					<li>konwersji formatu EPUB do formatu MOBI</li>
				</ul>
				</EPubText>

				
				<EPubSubtitle>
					Konwersja źródłowych tekstów do formatu HTML
				</EPubSubtitle>

				
				<EPubText>Tekst źródłowy należy wkleić do okna edycji czystego dokumentu
				HTML w edytorze Brackets. Następnie tagujemy całość przy użyciu komendy
				Find/Replace.</EPubText>
				<EPubText>W polu Find należy wpisać:</EPubText>
				<EPubCode>(\s)^([–„A-Ż].*)(\b[^\n]*)$</EPubCode>

				<EPubText>W polu Replace dla tekstów do sekcji: 
				Szortownia, Stusłówka, Rymowisko, Wywiad - wpisujemy:
				</EPubText>
				<EPubCode>{`$1<p class="text">$2$3</p>`}</EPubCode>

				<EPubText>W polu Replace dla tekstów do sekcji:	Subiektywnie - wpisujemy:
				</EPubText>
				<EPubCode>{`$1<p class="review">$2$3</p>`}</EPubCode>

				<EPubSubtitle>
					Edycja plików HTML - stylowanie
				</EPubSubtitle>

				<EPubInfo>
					Załączanie pliku ze stylami.
				</EPubInfo>	

				<EPubText>W sekcji nagłówka dokumentu &lt;head&gt; &lt;/head&gt;
				należy załączyć zewnętrzny plik ze stylami (stylesheet.css) wpisując poniższy kod:</EPubText>
				<EPubCode>{`<link rel="stylesheet" href="stylesheet.css">`}</EPubCode>

				<EPubInfo>
					Opis stylowania działów Szortownia, Stusłówka, Rymowisko, Wywiad.
				</EPubInfo>

				<EPubText>Tytuł (w Wywiadzie - imię i nazwisko osoby,
				z którą wywiad jest przeprowadzany)</EPubText>
				<EPubCode>{`<h2 class="title">Tytuł tekstu</h2>`}</EPubCode>

				<EPubText>Podtytuł w wywiadzie umieszczany przed tytułem</EPubText>
				<EPubCode>{`<h3>"7 pytań do...", czyli gdzie diabeł nie może tam „Szortal” pośle</h3>`}</EPubCode>

				<EPubText>Autor</EPubText>
				<EPubCode>{`<p class="author">Autor tekstu</p>`}</EPubCode>

				<EPubText>Tekst</EPubText>
				<EPubCode>{`<p class="text">text dokumentu</p>`}</EPubCode>


				<EPubText>Gwiazdki *** rozdzielające części tekstu</EPubText>
				<EPubCode>{`<p class="textcenter">***</p>`}</EPubCode>


				<EPubText>Przypis</EPubText>
				<EPubCode>{`<div class="annotation">\n`}
				{`  <p class="text">linijka tekstu</p>\n`}
				{`  <p class="text">linijka tekstu</p>\n`}
				{`</div>`}</EPubCode>


				<EPubText>Poezja</EPubText>
				<EPubCode>{`<div class="poetry">\n`}
				{`  <p class="text">linijka tekstu</p>\n`}
				{`  <p class="text">linijka tekstu</p>\n`}
				{`</div>`}</EPubCode>

				<EPubText>Motto (po autorze opowiadania)</EPubText>
				<EPubCode>{`<div class="motto">\n`}
				{`  <p class="text">linijka tekstu</p>\n`}
				{`  <p class="text">linijka tekstu</p>\n`}
				{`</div>`}</EPubCode>

				<EPubInfo>
					Opis stylowania działu Subiektywnie.
				</EPubInfo>

				<EPubText>Tytuł</EPubText>
				<EPubCode>{`<h2 class="title">Tytuł recenzji</h2>`}</EPubCode>

				<EPubText>Autor</EPubText>
				<EPubCode>{`<p class="author">Autor recenzji</p>`}</EPubCode>

				<EPubText>Lead (pierwszy pogrubiony akapit po autorze)</EPubText>
				<EPubCode>{`<p class="lead">text leadu</p>`}</EPubCode>

				<EPubText>Tekst</EPubText>
				<EPubCode>{`<p class="review">text recenzji</p>`}</EPubCode>

				<EPubText>ISBN (sekcja końcowa)</EPubText>
				<EPubCode>{`<div class="isbn">\n`}
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
				{`</div>`}</EPubCode>

				<EPubText>Przypis</EPubText>
				<EPubCode>{`<div class="annotation">\n`}
				{`  <p class="text">linijka tekstu</p>\n`}
				{`  <p class="text">linijka tekstu</p>\n`}
				{`</div>`}</EPubCode>


				<EPubSubtitle>
					Konwersja plików do formatu DOCX
				</EPubSubtitle>

				<EPubText>Ostylowane pliki HTML są plikami źródłowymi do stworzenia EPuba
				w Calibre. Aby stały się plikami źródłowymi do stworzenia PDFa
				należy przekonwertować je do formatu DOCX. Konwersję można wykonać 
				na stronie <a href="https://cloudconvert.com/html-to-docx" target="blank">
				Cloudconvert.</a>
				</EPubText>

				<EPubSubtitle>
					Konwersja źródłowych grafik do formatu PNG
				</EPubSubtitle>

				<EPubText>Niezależnie od tego w jakim formacie dostarczony jest źródłowy
				plik grafiki (ilustracja, zdjęcie, reklama, okładka książki), pierwszym krokiem
				jest konwersja tego pliku do formatu PNG. W trakcie tej konwersji można jednocześnie
				zmienić docelowy wymiar grafiki (szerokość, wysokość).</EPubText>
				<EPubText>Docelowe wymiary:
					<ul>
						<li>Reklama, okładka główna: szerokość (width) 1818px</li>
						<li>Okładki do recenzji: wysokość (height) 587px</li>
						<li>Pozostałe ilustracje: szerokość (width) 1200px</li>
					</ul>
				Pliki można konwertować wraz z jednoczesną zmianą rozmiarów 
				na stronie <a href="https://imageresize.org/" target="blank">
				Imageresize.</a> przy ustawieniu - Quality: Best.
				</EPubText>


				<EPubSubtitle>
					Konwersja plików PNG do formatu JPG
				</EPubSubtitle>


				<EPubText>Pliki PNG ze względu na bezstratność są plikami źródłowymi 
				do stworzenia wydania w formacie PDF. Aby stały się plikami źródłowymi 
				do stworzenia EPuba należy przekonwertować je do formatu JPG. 
				Konwersję można wykonać 
				na stronie <a href="https://cloudconvert.com/png-to-jpg" target="blank">
				Cloudconvert.</a>
				</EPubText>

			</EPubContainer>


		)
	}
}

export default EPub;