import React from 'react';

import {
	InfoBoxCloseButton,
	InfoBoxContainer,
	InfoBoxTitle,
	InfoBoxText,
} from '../../styled/InfoBox';

class WorkflowConvertToMobi extends React.Component {
	render() {
		return (
			<React.Fragment>
				<InfoBoxContainer show={this.props.show}>
					<InfoBoxCloseButton onClick={() => this.props.toggleInfoBox("workflowConvertToMobi")}/>
					<InfoBoxTitle>
						Konwersja wydania z formatu EPUB do MOBI 
					</InfoBoxTitle>

					<InfoBoxText>	
						Plik EPUB w wersji "gotowy do wydania na stronie www" dodaj do Calibre.
					</InfoBoxText>

					<InfoBoxText>	
						Zaznacz na liście książek w Calibre tę, którą chcesz konwertować,
                	   	a następnie z menu wybierz "Konwertuj książkę".
					</InfoBoxText>

					<InfoBoxText>	
						Otworzy się okno dialogowe, w którym po lewej stronie na górze znajduje się
                	    rozwijalna lista z formatami wyjściowymi. Wybierz format "MOBI". Zatwierdź wybór ("OK").
					</InfoBoxText>

					<InfoBoxText>	
						Po zakończeniu konwersji pozycja na liście książek jest już dostępna
                	    w dwóch formatach. Zapisz teraz na dysku tę książkę i następnię przejdź do tego katalogu.
					</InfoBoxText>

					<InfoBoxText>	
						W katalogu znajduje się kilka plików. Skasuj je pozostawiając tylko plik MOBI.
                	    Po zmianie nazwy tego pliku na taką samą jaką ma EPUB (poza rozszerzeniem MOBI) plik 
                	    jest "gotowy do wydania na stronie www". 
					</InfoBoxText>
				</InfoBoxContainer>
			</React.Fragment>
		)
	}
}

export default WorkflowConvertToMobi;