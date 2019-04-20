import React from 'react';

import {
    WorkflowContainer,
    WorkflowStep,
    WorkflowStepArrow,
} from '../styled/Workflow';

class Workflow extends React.Component {
	render() {
		return (
			<WorkflowContainer>

				<WorkflowStep area="aa" editor
					> makieta źródłowa
					<WorkflowStepArrow editor right/>
				</WorkflowStep>

				<WorkflowStep area="ab" editor application="Calibre"
					> aktualizacja metadanych
					<WorkflowStepArrow editor bottom/>
				</WorkflowStep>

				<WorkflowStep area="ba" editor
					> teksty źródłowe
					<WorkflowStepArrow editor right/>
				</WorkflowStep>

				<WorkflowStep area="bb" editor application="Calibre"
					> Regex, stylowanie
					<WorkflowStepArrow editor bottom/>
				</WorkflowStep>

				<WorkflowStep area="ca" editor
					> grafiki źródłowe
					<WorkflowStepArrow editor right/>
				</WorkflowStep>

				<WorkflowStep area="cb" editor application="Calibre"
					> import grafik
					<WorkflowStepArrow editor bottom/>
				</WorkflowStep>

				<WorkflowStep area="db" editor application="Calibre"
					> makietowanie
					<WorkflowStepArrow editor bottom/>
				</WorkflowStep>

				<WorkflowStep area="dc" editor application="Calibre"
					> końcowe sprawdzanie
					<WorkflowStepArrow editor top/>
					<WorkflowStepArrow editor right/>
				</WorkflowStep>

				<WorkflowStep area="dd" editor application="Calibre"
					> konwersja do MOBI
					<WorkflowStepArrow editor top/>
				</WorkflowStep>

				<WorkflowStep area="de" editor application="Acrobat"
					> końcowe sprawdzanie
					<WorkflowStepArrow editor top/>
				</WorkflowStep>

				<WorkflowStep area="eb"
					> epub
					<WorkflowStepArrow bottom/>
				</WorkflowStep>

				<WorkflowStep area="ec"
					> epub
					<WorkflowStepArrow top/>
				</WorkflowStep>

				<WorkflowStep area="ee"
					> epub
					<WorkflowStepArrow top/>
				</WorkflowStep>

				<WorkflowStep area="fb" dtp application="Sigil"
					> otwórz i zapisz
					<WorkflowStepArrow bottom dtp/>
				</WorkflowStep>

				<WorkflowStep area="fc" dtp application="Calibre"
					> konwersja grafik do jpg
					<WorkflowStepArrow top dtp/>
				</WorkflowStep>

				<WorkflowStep area="fe" dtp application="Indesign"
					> skład PDF
					<WorkflowStepArrow top dtp/>
				</WorkflowStep>

				<WorkflowStep area="gb" dtp application="Calibre"
					> sprawdzenie (checklist)
					<WorkflowStepArrow right dtp/>
				</WorkflowStep>

				<WorkflowStep area="gc" dtp application="Calibre"
					> kopia makiety
					<WorkflowStepArrow right dtp/>
					<WorkflowStepArrow top dtp/>
				</WorkflowStep>

				<WorkflowStep area="gd" dtp application="Calibre"
					> konwersja HTML do XML
					<WorkflowStepArrow right dtp/>
				</WorkflowStep>

				<WorkflowStep area="ge" dtp application="Calibre"
					> export PNG i XML
					<WorkflowStepArrow top dtp/>
				</WorkflowStep>

			</WorkflowContainer>
		)
	}
}

export default Workflow;