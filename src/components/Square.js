import * as React from "react";
import {colorCombos} from '../assets/color-map/color-map.js';

function handleDrag(ev) {
	if (ev.preventDefault) {
		ev.preventDefault();
	}
	console.log('handling the Drag');
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
<<<<<<< HEAD
	}


	handleDrop(ev) {
		ev.preventDefault();
		const circleColor = ev.dataTransfer.getData('color');
		const circleNumber = Number(ev.dataTransfer.getData('number'));
		console.log(getColor(circleColor, this.state.color));
		this.setState((state) => {
			return {
				color: getColor(circleColor, state.color),
				number: circleNumber + state.number
			}
		})
=======
>>>>>>> f7ef13454573a38732f5ee6d5e02836c07471954
	}

	render() {
		return (
<<<<<<< HEAD
			<div className={'square'} onDragOver={e => handleDrag(e)} onDrop={e => this.handleDrop(e, "data")} style={{background: this.state.number >= 6 ? 'black' : this.state.color}}>
=======
			<div className={'square'}>
>>>>>>> f7ef13454573a38732f5ee6d5e02836c07471954
				<div className={'innerSquare'} style={{visibility: this.state.number ? 'visible' : 'hidden'}}>
					{this.state.number}
				</div>
			</div>
		);
	}
}