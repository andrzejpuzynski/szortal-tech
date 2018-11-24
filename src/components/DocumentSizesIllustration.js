import React from 'react';

import {
	  DocumentSizesIllustrationContainer,
    DocumentSizesIllustrationWidth,
    DocumentSizesIllustrationHeight,
    DocumentSizesIllustrationDpi
} from '../styled/DocumentSizesIllustration';


class DocumentSizesIllustration extends React.Component {

	render() {
		return (
				<DocumentSizesIllustrationContainer >
					{this.props.width ?
							<DocumentSizesIllustrationWidth>
								{`${this.props.width} px`}
							</DocumentSizesIllustrationWidth>
							: null
					}

					<DocumentSizesIllustrationHeight>
						{`${this.props.height} px`}
					</DocumentSizesIllustrationHeight>
					<DocumentSizesIllustrationDpi>
						{`${this.props.dpi} dpi`}
					</DocumentSizesIllustrationDpi>
				</DocumentSizesIllustrationContainer>
		)
	}
}

export default DocumentSizesIllustration;