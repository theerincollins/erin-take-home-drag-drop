import * as React from "react";

// COMPONENTS //
import Circle from './components/Circle';
import Square from './components/Square';

// CSS //
import "./assets/css/styles.css";


export default class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const circleStyle = {
			backgroundColor: 'blue'
		};

		return (
			<div className={'appContainer'}>
				<Circle color={'blue'} number={1} />
				<Circle color={'red'} number={2} />
				<Circle color={'yellow'} number={3} />
				<Square />
			</div>
		);
	}
}