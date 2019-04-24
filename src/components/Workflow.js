import React from 'react';

import WorkflowGraph from './WorkflowGraph';
import WorkflowMockupSource from './Workflow/WorkflowMockupSource';
import WorkflowMockupUpdate from './Workflow/WorkflowMockupUpdate';
import WorkflowTextImport from './Workflow/WorkflowTextImport';
import WorkflowTextStyling from './Workflow/WorkflowTextStyling';
import WorkflowGraphicImport from './Workflow/WorkflowGraphicImport';
import WorkflowGraphicStyling from './Workflow/WorkflowGraphicStyling';
import WorkflowFormatting from './Workflow/WorkflowFormatting';
import WorkflowDtpChecklist from './Workflow/WorkflowDtpChecklist';
import WorkflowConvertToMobi from './Workflow/WorkflowConvertToMobi';
import WorkflowPdfFormatting from './Workflow/WorkflowPdfFormatting';
import WorkflowHtmlToXml from './Workflow/WorkflowHtmlToXml';

import {
    SectionContainer,
    SectionTitle,
} from '../styled/Section';

class EPub extends React.Component {
	render() {
		return (
			<SectionContainer>
				<SectionTitle>„Szortal na&nbsp;Wynos” workflow</SectionTitle>

				<WorkflowGraph toggleInfoBox={this.props.toggleInfoBox}/>

				<WorkflowMockupSource
					show={this.props.showInfoBox.workflowMockupSource}
					toggleInfoBox={this.props.toggleInfoBox}
				/>

				<WorkflowMockupUpdate
					show={this.props.showInfoBox.workflowMockupUpdate}
					toggleInfoBox={this.props.toggleInfoBox}
				/>

				<WorkflowTextImport
					show={this.props.showInfoBox.workflowTextImport}
					toggleInfoBox={this.props.toggleInfoBox}
				/>

				<WorkflowTextStyling
					show={this.props.showInfoBox.workflowTextStyling}
					toggleInfoBox={this.props.toggleInfoBox}
				/>

				<WorkflowGraphicImport
					show={this.props.showInfoBox.workflowGraphicImport}
					toggleInfoBox={this.props.toggleInfoBox}
				/>				

				<WorkflowGraphicStyling
					show={this.props.showInfoBox.workflowGraphicStyling}
					toggleInfoBox={this.props.toggleInfoBox}
				/>

				<WorkflowFormatting
					show={this.props.showInfoBox.workflowFormatting}
					toggleInfoBox={this.props.toggleInfoBox}
				/>

				<WorkflowDtpChecklist
					show={this.props.showInfoBox.workflowDtpChecklist}
					toggleInfoBox={this.props.toggleInfoBox}
				/>

				<WorkflowConvertToMobi
					show={this.props.showInfoBox.workflowConvertToMobi}
					toggleInfoBox={this.props.toggleInfoBox}
				/>

				<WorkflowPdfFormatting
					show={this.props.showInfoBox.workflowPdfFormatting}
					toggleInfoBox={this.props.toggleInfoBox}
				/>

				<WorkflowHtmlToXml
					show={this.props.showInfoBox.workflowHtmlToXml}
					toggleInfoBox={this.props.toggleInfoBox}
				/>

			</SectionContainer>
		)
	}
}

export default EPub;