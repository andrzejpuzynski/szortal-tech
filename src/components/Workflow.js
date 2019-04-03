import React from 'react';

import {
    WorkflowContainer,
    WorkflowStep
} from '../styled/Workflow';

class Workflow extends React.Component {
	render() {
		return (
			<WorkflowContainer>
				<WorkflowStep
					area="aa"
					application="Calibre"
					processplace="editor"
					> Makieta źródłowa</WorkflowStep>

			</WorkflowContainer>
		)
	}
}

export default Workflow;