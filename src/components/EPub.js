import React from 'react';

import {
    SectionContainer,
    SectionTitle,
    SectionSubtitle,
    SectionInfo,
    SectionText,
    SectionCode,
    SectionFullWidthImage,
    SectionDimensionsContainer,
    SectionDimensionsWidth,
    SectionDimensionsHeight,
    SectionDimensionsDpi,
    SectionDownloadButton
} from '../styled/Section';


import {
  Link
} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faCheck, faExclamationTriangle, faTimes } from '@fortawesome/free-solid-svg-icons';

import workflow from '../img/SzortalNaWynos_Workflow_20181031.svg';

class EPub extends React.Component {
	render() {
		return (
			<SectionContainer>
				<SectionTitle>„Szortal na&nbsp;Wynos” w&nbsp;formacie EPUB</SectionTitle>
				<SectionText>EPub „Szortal na&nbsp;Wynos” składany jest w edytorze Calibre.
				Proces przygotowania pliku obejmujenastępujące etapy:
				<ul>
					<li>aktualizacja pliku makiety</li>
					<li>import źródłowych tekstów do formatu HTML i ich ostylowanie</li>
					<li>importu grafik w formacie PNG i ich ostylowanie w kodzie HTML</li>
					<li>makietowanie wydania w Calibre z wstępnym sprawdzaniem kodu HTML</li>
					<li>stworzenie spisu treści</li>
					<li>przypisanie okładki</li>
					<li>sprawdzanie pliku EPUB (checklist)</li>
					<li>konwersja formatu EPUB do formatu MOBI</li>
				</ul>
				Poniżej aktualny Workflow (2018.10.31).
				<SectionFullWidthImage src={workflow} alt="workflow" />
				</SectionText>

				<SectionSubtitle>
				Aktualizacja pliku makiety
				</SectionSubtitle>

				<SectionText>
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Ściągnij pustą makietę.

					<SectionDownloadButton
            	    	 href="makieta.epub"
            	    	 download="makieta_Szortal na wynos (nr 64) październik 2018"
            	    >
            	    	<FontAwesomeIcon
                        	icon={ faDownload }
                        	size="2x"
                        	color="#777777"
                        />
            	    </SectionDownloadButton>
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Zaktualizuj metadane pliku: numer wydania, nazwę miesiąca oraz rok.
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Zaktualizuj stronę redakcyjną.
				</SectionText>

				<SectionSubtitle>
				Import źródłowych tekstów do formatu HTML i ich stylowanie
				</SectionSubtitle>

				<SectionInfo>
					Import tekstu źródłowego
				</SectionInfo>

				<SectionText>
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Dodaj nowy dokument *.html w Calibre. Jednocześnie zaznacz automatyczne załączanie styli.
				</SectionText>
				<SectionText>
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Tekst źródłowy wklej pomiędzy tagami body. Następnie otaguj całość przy użyciu komendy
				Find/Replace. Sprawdź opcje podmiany (Mode: Regex; Current File; Wrap).</SectionText>
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
					Nazwy plików HTML
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
					Nazwy plików html nie mogą zawierać spacji.
				</SectionText>

				<SectionText>
					<FontAwesomeIcon
                    	icon={ faTimes }
                    	size="1x"
                    	color="#d66"
                    /> 
					 &nbsp;patronat_Skafander i melonik.xhtml 
				</SectionText>

				<SectionText>
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#0b0"
                    />
					&nbsp;patronat_Skafander_i_melonik.xhtml
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
					Import grafik w formacie PNG i ich ostylowanie w kodzie HTML
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
					Makietowanie wydania z korektą kodu
				</SectionSubtitle>

				<SectionInfo>
					Makietowanie
				</SectionInfo>

				<SectionText>
					Kolejność plików HTML w EPUBie odpowiada za wyświetlanie tekstów.
					Makietowanie polega na ustawieniu plików HTML we właściwej kolejności.
				</SectionText>
			

				<SectionInfo>
					Sprawdzenie kodu w plikach HTML
				</SectionInfo>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Sprawdź, czy w sekcji &lt;head&gt; każdego dokumentu zastosowane są tylko tagi &lt;title&gt; i &lt;link&gt;.
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Uruchom z Menu: TOOLS: Fix HTML - all files.
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Uruchom z Menu: TOOLS: Beautify all files.
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Popraw ścieżki linkowania plików png, jeśli się nie wyświetlają w oknie Preview.
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Sprawdź na stronach z reklamą i komiksem nazwę klasy (class="fullpage") w tagu div
.				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Sprawdź czy ilustracje do tekstów znajdują się w tym samym pliku co tekst.
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                      icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Sprawdź w tekstach z ilustracją nazwę klasy dla kontenera div ilustracji (class="imagetext")
                    i uzupełnij autora ilustracji oraz uzupełnij nazwę klasy dla tagu p (class="author-photo").
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Sprawdź kod okładek do recenzji.
				</SectionText>
			

				<SectionSubtitle>
					Przygotowanie spisu treści
				</SectionSubtitle>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Jeśli w dokumencie znajduje się jakiś spis treści to go usuń. 
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Uruchom z Menu: TOOLS > TABLE OF CONTENTS > Edit Table of Contents.
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Wyczyść aktualny spis treści (po prawej stronie) a następnie uruchom: Generate TOC from all headings.
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Przejdź na koniec spisu treści i dodaj pozycję (New entry below this entry). 
                    Z listy wybierz okładkę html komiksu. W okienku "Name of the TOC entry" wpisz "Komiks".
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Uruchom z Menu: TOOLS > TABLE OF CONTENTS > Instert inline Table of Contents. 
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Przesuń w makiecie spis treści za stronę redakcyjną. 
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Sprawdź, czy spis treści działa, i czy jest kompletny. 
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> W sekcji head spisu treści usuń całą definicję sytles i w to miejsce wstaw 
					<SectionCode>{`<link rel="stylesheet" href="OEBPS/stylesheet.css"/>`}</SectionCode>
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Zamień linijkę z tytułem na 
					<SectionCode>{`<h2 class="title">Treściospis</h2>`}</SectionCode>
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> W oknie kodu spisu treści uruchom Find / Replace 
					<SectionCode>{`Find: <li>`}</SectionCode>
					<SectionCode>{`Replace <div class="sgc-toc-level-1">`}</SectionCode>
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> W oknie kodu spisu treści uruchom Find / Replace 
					<SectionCode>{`Find: </li>`}</SectionCode>
					<SectionCode>{`Replace: </div>`}</SectionCode>
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Usuń z kodu linie 
					<SectionCode>{`<ul>`}</SectionCode>
					<SectionCode>{`</ul>`}</SectionCode>
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> w każdej linijce wpisz podwójną spację,
                     a następnie imię i nazwisko autora tekstu
                    pomiędzy tagami /a /div
					<SectionCode>{`</a>  Imię Nazwisko</div>`}</SectionCode> 
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Sprawdź, czy spis treści działa, i czy jest kompletny. 
				</SectionText>

				<SectionSubtitle>
					Przypisanie okładki
				</SectionSubtitle>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Zaimportuj plik okładki o nazwie podobnej do wzorca: 
                    Szortal-na-wynos-nr60-czerwiec-2018.jpg (łączniki w nazwie).
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Osadź plik png okładki w pliku okładka.html
				</SectionText>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Zaznacz plik png okładki, kliknij na nim prawym (lub lewym)
                    klawiszem myszy i wybierz opcję "Mark ... as cover image".
				</SectionText>


				<SectionSubtitle>
					Sprawdzenie wydania (Checklist) 
				</SectionSubtitle>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faExclamationTriangle }
                    	size="1"
                    	color="#f00"
                    /> ta część opisu jest w trakcie tworzenia
				</SectionText>


				<SectionSubtitle>
					Kowersja wydania z formatu EPub do MOBI 
				</SectionSubtitle>

				<SectionText>	
					<FontAwesomeIcon
                    	icon={ faExclamationTriangle }
                    	size="1"
                    	color="#f00"
                    /> ta część opisu jest w trakcie tworzenia
				</SectionText>

			</SectionContainer>


		)
	}
}

export default EPub;