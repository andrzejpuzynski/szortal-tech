import React from 'react';

import Workflow from './Workflow';
import WorkflowConvertToMobi from './Workflow/WorkflowConvertToMobi';
import WorkflowMockupUpdate from './Workflow/WorkflowMockupUpdate';

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

				<SectionSubtitle>
					Pliki graficzne
				</SectionSubtitle>

				<SectionInfo>
					Konwersja źródłowych grafik do formatu PNG
				</SectionInfo>

				<SectionText>Niezależnie od tego w jakim formacie dostarczony jest źródłowy
				plik grafiki (ilustracja, zdjęcie, reklama, okładka książki), pierwszym krokiem
				jest konwersja tego pliku do formatu PNG. W trakcie tej konwersji można jednocześnie
				zmienić docelowy wymiar grafiki (szerokość, wysokość).</SectionText>
				<SectionText>Docelowe wymiary:
					<ul>
						<li>Reklama, okładka główna: szerokość (width) 1818px</li>
						<li>Okładki do recenzji: wysokość (height) 587px</li>
						<li>Pozostałe ilustracje: szerokość (width) 1200px</li>
					</ul>
				Pliki można konwertować wraz z jednoczesną zmianą rozmiarów 
				na stronie <a href="https://imageresize.org/" target="blank">
				Imageresize.</a> przy ustawieniu - Quality: Best.
				</SectionText>

				<SectionInfo>
					Import plików PNG do Calibre
				</SectionInfo>

				<SectionText>
					Wybierz z menu komendę: Import files into book.
				</SectionText>

				<SectionInfo>
					Nazwy plików PNG
				</SectionInfo>

				<SectionText>
					Dla plików graficznych stosujemy te same zasady nazewnictwa, jak w przypadku plików HTML.
				</SectionText>


				<SectionInfo>
					Stylowanie plików graficznych
				</SectionInfo>

				<SectionText>Reklama całostronicowa, komiks
					<SectionCode>{`<div class="fullpage">\n`}
					{`  <img src="../Images/nazwa_pliku.jpg" alt="nazwa_pliku.jpg" />\n`}
					{`</div>`}</SectionCode>
				</SectionText>

				<SectionText>Ilustracja do tekstu
					<SectionCode>{`<div class="imagetext">\n`}
					{`  <img src="../Images/nazwa_pliku.jpg" alt="nazwa_pliku.jpg" />\n`}
					{`  <p class="author-photo">Ilustracja: Autor ilustracji</p>\n`}
					{`</div>`}</SectionCode>
				</SectionText>

				<SectionText>Okładka do recenzji
					<SectionCode>{`<p>\n`}
					{`  <img src="../Images/nazwa_pliku.jpg" alt="nazwa_pliku.jpg" />\n`}
					{`</p>`}</SectionCode>
				</SectionText>



				<SectionSubtitle>
					Makietowanie wydania
				</SectionSubtitle>

				<SectionText>
					Kolejność plików HTML w EPUBie odpowiada za wyświetlanie tekstów.
					Makietowanie polega na ustawieniu plików HTML we właściwej kolejności.
				</SectionText>
			

				<SectionInfo>
					Korekta kodu przed przygotowaniem spisu treści
				</SectionInfo>

				<SectionTextWithCheck>	
					Uruchom z Menu: TOOLS: Fix HTML (all files).
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					Uruchom z Menu: TOOLS: Beautify all files.
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					Popraw nazwy plików PNG i HTML, jeśli posiadają spacje oraz polskie znaki.
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					Popraw ścieżki linkowania plików PNG, jeśli się nie wyświetlają w oknie Preview.
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					Sprawdź czy ilustracje do tekstów znajdują się w tym samym pliku co tekst.
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					Sprawdź w tekstach z ilustracją nazwę klasy dla kontenera div ilustracji (class="imagetext")
                    i uzupełnij autora ilustracji oraz uzupełnij nazwę klasy dla tagu p (class="author-photo").
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					Sprawdź na stronach z reklamą, patronatem i komiksem nazwę klasy (class="fullpage") w tagu div
.				</SectionTextWithCheck>
			

				<SectionInfo>
					Przygotowanie spisu treści
				</SectionInfo>

				<SectionTextWithCheck>	
					Jeśli w dokumencie znajduje się jakiś spis treści to go usuń. 
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					Uruchom z Menu: TOOLS > TABLE OF CONTENTS > Edit Table of Contents.
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					Wyczyść aktualny spis treści (po prawej stronie) a następnie uruchom: Generate TOC from all headings.
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					Przejdź na koniec spisu treści i dodaj pozycję (New entry below this entry). 
                    Z listy wybierz okładkę html komiksu. W okienku "Name of the TOC entry" wpisz "Komiks".
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					Uruchom z Menu: TOOLS > TABLE OF CONTENTS > Instert inline Table of Contents. 
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					Przesuń w makiecie spis treści za stronę redakcyjną. 
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					Sprawdź, czy spis treści działa, i czy jest kompletny. 
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					W sekcji head spisu treści usuń całą definicję sytles i w to miejsce wstaw 
					<SectionCode>{`<link rel="stylesheet" href="OEBPS/stylesheet.css"/>`}</SectionCode>
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					Zamień linijkę z tytułem na 
					<SectionCode>{`<h2 class="title">Treściospis</h2>`}</SectionCode>
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					W oknie kodu spisu treści uruchom Find / Replace 
					<SectionCode>{`Find: <li>`}</SectionCode>
					<SectionCode>{`Replace <div class="sgc-toc-level-1">`}</SectionCode>
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					W oknie kodu spisu treści uruchom Find / Replace 
					<SectionCode>{`Find: </li>`}</SectionCode>
					<SectionCode>{`Replace: </div>`}</SectionCode>
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					Usuń z kodu linie 
					<SectionCode>{`<ul>`}</SectionCode>
					<SectionCode>{`</ul>`}</SectionCode>
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					w każdej linijce wpisz podwójną spację,a następnie imię i nazwisko
					autora tekstu pomiędzy tagami /a /div
					<SectionCode>{`</a>  Imię Nazwisko</div>`}</SectionCode> 
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					Sprawdź, czy spis treści działa, i czy jest kompletny. 
				</SectionTextWithCheck>

				<SectionInfo>
					Przypisanie okładki
				</SectionInfo>

				<SectionTextWithCheck>	
					Zaimportuj plik okładki o nazwie podobnej do wzorca: 
                    Szortal-na-wynos-nr60-czerwiec-2018.png (łączniki w nazwie).
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					Osadź plik png okładki w pliku okładka.html
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					Z oryginalnego pliku okładki utwórz kopię o nazwie cover.png. Zmniejsz wymiary tego pliku
					tak, by wysokość wynosiła 500px. Następnie zaimportuj ten plik do wydania.
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					Zaznacz plik cover.png  "Mark cover.png as cover image".
				</SectionTextWithCheck>


				<SectionSubtitle>
					Sprawdzenie wydania (Checklist) 
				</SectionSubtitle>

				<SectionInfo>
				1. Pliki i struktura EPUBa.
				</SectionInfo>

				<SectionTextWithCheck>	
					Metadane pliku EPUB.
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					Nazwy plików *.html (*.xhtml) bez polskich znaków i spacji.
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					Nazwy plików *.jpg bez polskich znaków i spacji.
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					Spis treści - panel w Calibre.
				</SectionTextWithCheck>

				<SectionTextWithCheck>	
					Sekcja "title" i "head" każdego pliku.
				</SectionTextWithCheck>

				<SectionInfo>
				2. Style tekstowe
				</SectionInfo>

				<SectionTextWithCheck>	
					Wywiad: Imię i nazwisko bohatera wywiadu jako tytuł.
				</SectionTextWithCheck> 

				<SectionTextWithCheck>	
					Przypisy: spacja po gwiazdkach na początku linijki.
				</SectionTextWithCheck> 

				<SectionInfo>
				3. Strona wizualna
				</SectionInfo>

				<SectionTextWithCheck>	
					Formatowanie tekstu
				</SectionTextWithCheck> 

				<SectionTextWithCheck>	
					Wyświetlanie grafiki (podpisy do ilustracji)
				</SectionTextWithCheck> 

				<SectionTextWithCheck>	
					Linki.
				</SectionTextWithCheck> 

				<SectionTextWithCheck>	
					Spis treści na stronie ze spisem i w panelu spisu treści.
				</SectionTextWithCheck> 

			</SectionContainer>


		)
	}
}

export default EPub;