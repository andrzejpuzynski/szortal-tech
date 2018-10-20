import React from 'react';

import {
    EPubContainer,
	EPubTitle,
	EPubSubtitle,
	EPubInfo,
	EPubText,
	EPubCode,
	EPubDownloadButton,
	IntroSocial,
	IntroSocialButton
} from '../styled/EPub';


import {
  Link
} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faCheck, faExclamationTriangle, faTimes } from '@fortawesome/free-solid-svg-icons';


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
				<EPubText>W polu Find należy wpisać:
					<EPubCode>(\s)^([–„A-Ż].*)(\b[^\n]*)$</EPubCode>
				</EPubText>

				<EPubText>W polu Replace dla tekstów do sekcji: 
				Szortownia, Stusłówka, Rymowisko, Wywiad - wpisujemy:
					<EPubCode>{`$1<p class="text">$2$3</p>`}</EPubCode>
				</EPubText>

				<EPubText>W polu Replace dla tekstów do sekcji:	Subiektywnie - wpisujemy:
					<EPubCode>{`$1<p class="review">$2$3</p>`}</EPubCode>
				</EPubText>

				<EPubSubtitle>
					Edycja plików HTML - stylowanie
				</EPubSubtitle>

				<EPubInfo>
					Załączanie pliku ze stylami.
				</EPubInfo>	

				<EPubText>W sekcji nagłówka dokumentu &lt;head&gt; &lt;/head&gt;
				należy załączyć zewnętrzny plik ze stylami (stylesheet.css) wpisując poniższy kod:
				<EPubCode>{`<link rel="stylesheet" href="stylesheet.css">`}</EPubCode>
					    <EPubDownloadButton
            	    	 	href="szortal.css"
            	    	 	download="stylesheet"
            	    	>
            	    		<FontAwesomeIcon
                                    icon={ faDownload }
                                    size="2x"
                                    color="#777777"
                              />
            	    	</EPubDownloadButton>
					Aktualny plik stylesheet.css do wydania.
				</EPubText>


				<EPubInfo>
					Opis stylowania działów Szortownia, Stusłówka, Rymowisko, Wywiad.
				</EPubInfo>

				<EPubText>Tytuł (w wywiadzie - imię i nazwisko osoby,
				z którą wywiad jest przeprowadzany)
					<EPubCode>{`<h2 class="title">Tytuł tekstu</h2>`}</EPubCode>
				</EPubText>

				<EPubText>Podtytuł w wywiadzie umieszczany przed tytułem
					<EPubCode>{`<h3>"7 pytań do...", czyli gdzie diabeł nie może tam „Szortal” pośle</h3>`}</EPubCode>
				</EPubText>

				<EPubText>Autor
					<EPubCode>{`<p class="author">Autor tekstu</p>`}</EPubCode>
				</EPubText>

				<EPubText>Tekst
				<EPubCode>{`<p class="text">text dokumentu</p>`}</EPubCode>
				</EPubText>


				<EPubText>Gwiazdki *** rozdzielające części tekstu
					<EPubCode>{`<p class="textcenter">***</p>`}</EPubCode>
				</EPubText>


				<EPubText>Przypis
					<EPubCode>{`<div class="annotation">\n`}
					{`  <p class="text">linijka tekstu</p>\n`}
					{`  <p class="text">linijka tekstu</p>\n`}
					{`</div>`}</EPubCode>
				</EPubText>


				<EPubText>Poezja
					<EPubCode>{`<div class="poetry">\n`}
					{`  <p class="text">linijka tekstu</p>\n`}
					{`  <p class="text">linijka tekstu</p>\n`}
					{`</div>`}</EPubCode>
				</EPubText>

				<EPubText>Motto (po autorze opowiadania)
					<EPubCode>{`<div class="motto">\n`}
					{`  <p class="text">linijka tekstu</p>\n`}
					{`  <p class="text">linijka tekstu</p>\n`}
					{`</div>`}</EPubCode>
				</EPubText>

				<EPubInfo>
					Opis stylowania działu Subiektywnie.
				</EPubInfo>

				<EPubText>Tytuł
					<EPubCode>{`<h2 class="title">Tytuł recenzji</h2>`}</EPubCode>
				</EPubText>

				<EPubText>Autor
					<EPubCode>{`<p class="author">Autor recenzji</p>`}</EPubCode>
				</EPubText>

				<EPubText>Lead (pierwszy pogrubiony akapit po autorze)
					<EPubCode>{`<p class="lead">text leadu</p>`}</EPubCode>
				</EPubText>

				<EPubText>Tekst
					<EPubCode>{`<p class="review">text recenzji</p>`}</EPubCode>
				</EPubText>

				<EPubText>ISBN (sekcja końcowa)
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
				</EPubText>

				<EPubText>Przypis
					<EPubCode>{`<div class="annotation">\n`}
					{`  <p class="text">linijka tekstu</p>\n`}
					{`  <p class="text">linijka tekstu</p>\n`}
					{`</div>`}</EPubCode>
				</EPubText>

				<EPubSubtitle>
					Nazwy plików HTML
				</EPubSubtitle>

				<EPubText>
					Nazwy plików html nie mogą zawierać spacji.
				</EPubText>

				<EPubText>
					<FontAwesomeIcon
                    	icon={ faTimes }
                    	size="1x"
                    	color="#d66"
                    /> 
					 &nbsp;patronat_Skafander i melonik.xhtml 
				</EPubText>

				<EPubText>
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#0b0"
                    />
					&nbsp;patronat_Skafander_i_melonik.xhtml
				</EPubText>


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

				<EPubSubtitle>
					Stylowanie plików graficznych
				</EPubSubtitle>

				<EPubText>Reklama całostronicowa, komiks
					<EPubCode>{`<div class="fullpage">\n`}
					{`  <img src="../Images/nazwa_pliku.jpg" alt="nazwa_pliku.jpg" />\n`}
					{`</div>`}</EPubCode>
				</EPubText>

				<EPubText>Ilustracja do tekstu
					<EPubCode>{`<div class="imagetext">\n`}
					{`  <img src="../Images/nazwa_pliku.jpg" alt="nazwa_pliku.jpg" />\n`}
					{`  <p class="author-photo">Ilustracja: Autor ilustracji</p>\n`}
					{`</div>`}</EPubCode>
				</EPubText>

				<EPubText>Okładka do recenzji
					<EPubCode>{`<p>\n`}
					{`  <img src="../Images/nazwa_pliku.jpg" alt="nazwa_pliku.jpg" />\n`}
					{`</p>`}</EPubCode>
				</EPubText>



				<EPubSubtitle>
					Makietowanie wydania w formacie EPub
				</EPubSubtitle>

				<EPubInfo>
				Import pustej makiety do Calibre
				</EPubInfo>

				<EPubText>Dobrym startem do makietowania może być ściągnięcie pustej makiety.

					<EPubDownloadButton
            	    	 href="makieta.epub"
            	    	 download="makieta_Szortal na wynos (nr 64) październik 2018"
            	    >
            	    	<FontAwesomeIcon
                        	icon={ faDownload }
                        	size="2x"
                        	color="#777777"
                        />
            	    </EPubDownloadButton>

				Po ściągnięciu nazwę pliku należy zmodyfikować o aktualny numer wydania 
				oraz miesiąca i dopiero wtedy zaimportować do Calibre.
				</EPubText>

				<EPubInfo>
				Makietowanie w Calibre
				</EPubInfo>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Przejdź do edycji ePuba (Edit book) i zaimportuj wszystkie pliki html i jpg. 
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> W oknie File browser ułóż poszczególne pliki html w takiej kolejności, 
				w jakiej mają się pojawić w ePubie.  
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> sprawdź zgodność prefiksów plików html wydania z kluczem:
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
				</EPubText>


				<EPubInfo>
				Sprawdzenie podstawowych informacji o pliku
				</EPubInfo>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> zaktualizuj metadane pliku: numer wydania, nazwa miesiąca oraz rok
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> zaktualizuj stronę redakcyjną wydania
				</EPubText>

				<EPubInfo>
				Sprawdzenie sekcji "Head"
				</EPubInfo>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> sprawdź, czy w sekcji &lt;head&gt; każdego dokumentu zastosowane są tylko tagi &lt;title&gt; i &lt;link&gt;
				</EPubText>

				<EPubInfo>
				Poprawianie i sprawdzenie linków do plików graficznych
				</EPubInfo>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> sprawdź (i popraw) ścieżki linkowania plików jpg: img src="../Images/"
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> sprawdź na stronach z reklamą i komiksem nazwę klasy (class="fullpage") w tagu div
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> sprawdź czy ilustracje do tekstów znajdują się w tym samym pliku do tekst
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> sprawdź w tekstach z ilustracją nazwę klasy 
                    dla kontenera div ilustracji (class="imagetext")
                    i uzupełnij autora ilustracji oraz uzupełnij nazwę klasy
                    dla tagu p (class="author-photo")
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> sprawdź kod okładek do recenzji
				</EPubText>
				
				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> sprawdź wyświetlanie wszystkich grafik przy przeglądaniu ePuba
				</EPubText>


				<EPubInfo>
					Poprawianie i sprawdzenie kodu w plikach
				</EPubInfo>


				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Uruchom z Menu: TOOLS: Fix HTML - all files
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Uruchom z Menu: TOOLS: Beautify all files
				</EPubText>

				<EPubInfo>
					Przygotowanie spisu treści
				</EPubInfo>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Jeśli w dokumencie znajduje się jakiś spis treśći to go usuń. 
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Uruchom z Menu: TOOLS: TABLE OF CONTENTS: Edit Table of Contents
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Wyczyść aktualny spis treści (po prawej stronie) a następnie uruchom: Generate TOC from all headings
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Przejdź na koniec spisu treści i dodaj pozycję (po prawej stronie): New entry below this entry. Z listy wybierz okładkę html komiksu. W okienku "Name of the TOC entry" wpisz "Komiks"
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Uruchom z Menu: TOOLS: TABLE OF CONTENTS: Instert inline Table of Contents. 
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Przesuń w makiecie spis treści za stronę redakcyjną. 
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Sprawdź, czy spis treści działa, i czy jest kompletny. 
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> W sekcji head spisu treści usuń całą definicję sytles i w to miejsce wstaw 
					<EPubCode>{`<link rel="stylesheet" href="OEBPS/stylesheet.css"/>`}</EPubCode>
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Zamień linijkę z tytułem na 
					<EPubCode>{`<h2 class="title">Treściospis</h2>`}</EPubCode>
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> W oknie kodu spisu treści uruchom Find / Replace 
					<EPubCode>{`Find: <li>`}</EPubCode>
					<EPubCode>{`Replace <div class=“sgc-toc-level-1”>`}</EPubCode>
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> W oknie kodu spisu treści uruchom Find / Replace 
					<EPubCode>{`Find: </li>`}</EPubCode>
					<EPubCode>{`Replace: </div>`}</EPubCode>
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Usuń z kodu linie 
					<EPubCode>{`<ul>`}</EPubCode>
					<EPubCode>{`</ul>`}</EPubCode>
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> w każdej linijce wpisz podwójną spację,
                     a następnie imię i nazwisko autora tekstu
                    pomiędzy tagami /a /div
					<EPubCode>{`</a>  Imię Nazwisko</div>`}</EPubCode> 
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Sprawdź, czy spis treści działa, i czy jest kompletny. 
				</EPubText>

				<EPubInfo>
					Okładka
				</EPubInfo>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Zaimportuj plik okładki o nazwie podobnej do wzorca: 
                    Szortal-na-wynos-(nr60)-czerwiec-2018.jpg
                     (łączniki w nazwie)
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Osadź plik jpg w pliku okładka.html
				</EPubText>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faCheck }
                    	size="1x"
                    	color="#d66"
                    /> Zaznacz plik jpg okładki, kliknij na nim prawym (lub lewym)
                    klawiszem myszy i wybierz opcję "Mark cover.jgp as cover image"
				</EPubText>


				<EPubSubtitle>
					Kowersja wydania z formatu EPub do MOBI 
				</EPubSubtitle>

				<EPubText>	
					<FontAwesomeIcon
                    	icon={ faExclamationTriangle }
                    	size="1"
                    	color="#f00"
                    /> ta część opisu jest w trakcie tworzenia
				</EPubText>



				


			</EPubContainer>


		)
	}
}

export default EPub;