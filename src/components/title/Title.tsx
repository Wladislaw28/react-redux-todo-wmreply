import React from 'react';

import './Title.css';

interface TitleProps {
    title: string;
}

const Title: React.SFC<TitleProps> = ({title}) => (
	<h1 className="link link--kukuri">{title}</h1>
);

Title.defaultProps = {
	title: 'Simple title'
};

export default Title;
