import React from 'react';

const ImageComponent = ({ src, alt, width, height }) => {
	return (
		<div>
			<img src={src} alt={alt} width={width} height={height} />
		</div>
	);
};

// Define default props for the component
ImageComponent.defaultProps = {
	src: 'default-image-url.jpg',  // Default image source
	alt: 'Default Alt Text',       // Default alt text
	width: '100%',                 // Default width
	height: 'auto'                 // Default height
};

export default ImageComponent;