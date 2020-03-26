import * as React from "react";
import {colorCombos} from '../assets/color-map/color-map.js';

function handleDrag(ev) {
	if (ev.preventDefault) {
		ev.preventDefault();
	}
}

function getColor(circleColor, squareColor) {
	const finalColorCombo = colorCombos.filter(colorCombo =>
		(colorCombo.color1 === circleColor || colorCombo.color2 === circleColor) && 
		(colorCombo.color1 === squareColor || colorCombo.color2 === squareColor))
	return finalColorCombo[0].finalColor;
}

export default class Square extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			color: 'white',
			number: 0
		};
	}

	shouldComponentUpdate(nextProps) {
		if (nextProps.isInitialState !== this.props.isInitialState && nextProps.isInitialState === true) {
			this.setState({
				color: 'white',
				number: 0
			})
		}
		return true;
	}

	handleDrop(ev) {
		ev.preventDefault();
		const circleColor = ev.dataTransfer.getData('color');
		const circleNumber = Number(ev.dataTransfer.getData('number'));
		this.setState((state) => 
			({
				color: getColor(circleColor, state.color),
				number: circleNumber + state.number
			}))
	}

	render() {
		return (
			<div className={'square'} onDragOver={e => handleDrag(e)} onDrop={e => this.handleDrop(e)} 
			style={{background: this.state.number >= 6 ? 'black' : this.state.color}}>
				<div className={'innerSquare'} style={{visibility: this.state.number ? 'visible' : 'hidden'}}>
					{this.state.number}
				</div>
			</div>
		);
	}
}