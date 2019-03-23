import React from 'react';

import {
  SocialContainer,
  SocialButton
} from '../styled/Szortal';

import {
    SectionContainer,
    SectionTitle,
    SectionInfo,
    SectionText,
} from '../styled/Section';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

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

        <SectionInfo>O Szortalu</SectionInfo>
          <SectionText>
            Miejsce, gdzie opowieści krótkie i jeszcze krótsze zyskały status świętości.
              Portal literacki, publicystyczny, informacyjny. Przede wszystkim fantastyczny, lecz nie tylko,
              nie samą bowiem fantastyką żyje człowiek. Chociaż przyznać należy uczciwie, że właśnie fantastyce
              składamy hołd najbardziej uniżony. Tworzy go grupa fan(atyk)ów, opętanych myślą,
              że w pięciu tysiącach znaków, ba! w stu słowach można zamknąć pełnoprawną historię,
              z dopiętą na ostatni guzik fabułą. Robimy to na łamach naszego wyjątkowego portalu. Ale nie tylko tam.
          </SectionText>
          <SectionText>
            Raz w miesiącu, w trzech formatach, ukazuje się elektroniczne czasopismo.
              To <strong>„Szortal Na Wynos”</strong> – miesięcznik w szortach i o szortach. W grudniu 2014 dorobił się
              dziecka – wydania specjalnego, ukazującego się cztery razy w roku, którego zawartość to <i>crême de la
                  crême</i> tego, co jest do nas nadsyłane.
          </SectionText>
          <SectionText>
            Zarówno portal, jak oba pisma, tworzone są non profit. Nie otrzymujemy za to żadnego wynagrodzenia
              w formie biletów Narodowego Banku Polskiego, drogich zegarków, jeszcze droższych limuzyn czy
              apartamentów. Naszą nagrodą jest świadomość tworzenia czegoś wielkiego, złożonego z niezliczonej
              ilości mniejszych elementów.
          </SectionText>

          <SocialContainer>
            <SocialButton
              href="https://www.facebook.com/Szortal"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={ faFacebookSquare }
                size="3x"
                color="#777777"
              />
            </SocialButton>
            <SocialButton
              href="https://twitter.com/Szortal"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={ faTwitterSquare }
                size="3x"
                color="#777777"
              />
            </SocialButton>
          </SocialContainer>

      </SectionContainer>
		);
	}
}

export default Intro;


