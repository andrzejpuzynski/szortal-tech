import React from 'react';

import {
	InfoBoxCloseButton,
	InfoBoxContainer,
	InfoBoxTitle,
	InfoBoxText,
} from '../../styled/InfoBox';

class WorkflowMockupUpdate extends React.Component {
	render() {
		return (
			<React.Fragment>
				<InfoBoxContainer show={this.props.show}>
					<InfoBoxCloseButton onClick={() => this.props.toggleInfoBox("workflowMockupUpdate")}/>
						<InfoBoxTitle>
							Aktualizacja pliku makiety
						</InfoBoxTitle>

					<InfoBoxText>	
						Zaktualizuj nazwę pliku.
					</InfoBoxText>

					<InfoBoxText>	
						Zaktualizuj metadane pliku: numer wydania, nazwę miesiąca oraz rok.
					</InfoBoxText>

					<InfoBoxText>	
						Zaktualizuj stronę redakcyjną.
					</InfoBoxText>
				</InfoBoxContainer>
			</React.Fragment>
		)
	}
}

export default WorkflowMockupUpdate;