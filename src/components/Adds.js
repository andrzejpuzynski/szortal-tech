import React from 'react';

import {
    LayoutContainer,
    LayoutTitle,
    LayoutSubtitle,
    LayoutInfo,
    LayoutText,
    LayoutDimensionsContainer,
    LayoutDimensionsWidth,
    LayoutDimensionsHeight,
    LayoutDimensionsDpi,
    LayoutDownloadButton
} from '../styled/Layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faFilePdf } from '@fortawesome/free-solid-svg-icons';


class Adds extends React.Component {
	render() {
		return (
			<LayoutContainer>
				<LayoutTitle>Reklamy</LayoutTitle>

				<LayoutText>
				Podstawowe dane techniczne dla plików graficznych:
					<ul>
						<li>przestrzeń kolorystyczna: RGB</li>
						<li>format pliku: PNG-24</li>
						<li>preferowana rozdzielczość: 220 dpi</li>
					</ul>
				</LayoutText>


				<LayoutInfo>
					Wymiary reklamy całostronicowej
				</LayoutInfo>

				<LayoutDimensionsContainer >
					<LayoutDimensionsWidth>1240 px</LayoutDimensionsWidth>
					<LayoutDimensionsHeight>1754 px</LayoutDimensionsHeight>
					<LayoutDimensionsDpi>150 dpi</LayoutDimensionsDpi>
				</LayoutDimensionsContainer>

				<LayoutDimensionsContainer >
					<LayoutDimensionsWidth>1818 px</LayoutDimensionsWidth>
					<LayoutDimensionsHeight>2572 px</LayoutDimensionsHeight>
					<LayoutDimensionsDpi>220 dpi</LayoutDimensionsDpi>
				</LayoutDimensionsContainer>

				<LayoutText>
				W przypadku reklamy zajmującej część strony należy zachować 
				rozmiar wysokości lub szerokości.
				</LayoutText> 


                <LayoutText>
                	<LayoutDownloadButton
            	    	 href="http://pdfmyurl.com/saveaspdf"
            	    >
            	    	<FontAwesomeIcon
                    	   	icon={ faFilePdf }
                    	   	size="2x"
                    	   	color="#777777"
                    	/>  
					</LayoutDownloadButton>
					Kliknij aby ściągnąć tę stronę w formacie PDF.
                </LayoutText>
				
			
			</LayoutContainer>
		)
	}
}

export default Adds;