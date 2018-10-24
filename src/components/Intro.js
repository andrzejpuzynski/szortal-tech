import React from 'react';

import {
	IntroSocial,
	IntroSocialButton
} from '../styled/Intro';

import {
    LayoutContainer,
    LayoutTitle,
    LayoutText,
} from '../styled/Layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';


class Intro extends React.Component {
	render() {
		return (
			<LayoutContainer>
				<LayoutTitle>Szortal</LayoutTitle>
            	<LayoutText>
            		Miejsce, gdzie opowieści krótkie i jeszcze krótsze zyskały status świętości.
            	    Portal literacki, publicystyczny, informacyjny. Przede wszystkim fantastyczny, lecz nie tylko,
            	    nie samą bowiem fantastyką żyje człowiek. Chociaż przyznać należy uczciwie, że właśnie fantastyce
            	    składamy hołd najbardziej uniżony. Tworzy go grupa fan(atyk)ów, opętanych myślą,
            	    że w pięciu tysiącach znaków, ba! w stu słowach można zamknąć pełnoprawną historię,
            	    z dopiętą na ostatni guzik fabułą. Robimy to na łamach naszego wyjątkowego portalu. Ale nie tylko tam.
            	</LayoutText>
            	<LayoutText>
            		Raz w miesiącu, w trzech formatach, ukazuje się elektroniczne czasopismo.
            	    To <strong>„Szortal Na Wynos”</strong> – miesięcznik w szortach i o szortach. W grudniu 2014 dorobił się
            	    dziecka – wydania specjalnego, ukazującego się cztery razy w roku, którego zawartość to <i>crême de la
            	        crême</i> tego, co jest do nas nadsyłane.
            	</LayoutText>
            	<LayoutText>
            		Zarówno portal, jak oba pisma, tworzone są non profit. Nie otrzymujemy za to żadnego wynagrodzenia
            	    w formie biletów Narodowego Banku Polskiego, drogich zegarków, jeszcze droższych limuzyn czy
            	    apartamentów. Naszą nagrodą jest świadomość tworzenia czegoś wielkiego, złożonego z niezliczonej
            	    ilości mniejszych elementów.
            	</LayoutText>

            	<IntroSocial>
            	    	<IntroSocialButton
            	    	 	href="https://www.facebook.com/Szortal"
            	    	 	target="_blank"
            	    	 	rel="noopener noreferrer">
            	    		<FontAwesomeIcon
                                    icon={ faFacebookSquare }
                                    size="3x"
                                    color="#777777"
                              />
            	    	</IntroSocialButton>
            	    	<IntroSocialButton
            	    	 	href="https://www.youtube.com/channel/UC9suqwLhztAA0wqSJgml-dQ"
            	    	 	target="_blank"
            	    	 	rel="noopener noreferrer">
            	    		<FontAwesomeIcon
                                    icon={ faYoutubeSquare }
                                    size="3x"
                                    color="#777777"
                              />
            	    	</IntroSocialButton>
            	    	<IntroSocialButton
            	    	 	href="https://twitter.com/Szortal"
            	    	 	target="_blank"
            	    	 	rel="noopener noreferrer">
            	    		<FontAwesomeIcon
                                    icon={ faTwitterSquare }
                                    size="3x"
                                    color="#777777"
                              />
            	    	</IntroSocialButton>
            	</IntroSocial>
                  </LayoutContainer>
		);
	}
}

export default Intro;


