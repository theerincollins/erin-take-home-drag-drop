import * as React from "react";

function handleDrag(ev, color, number) {
	console.log('i can handle a drag', color, number);
	ev.dataTransfer.setData('color', color);
	ev.dataTransfer.setData('number', number);
}

function handleDragComplete(ev) {
	console.log('handling the drop here');
	ev.target.style.visibility = 'hidden';
}

export default class Circle extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
<<<<<<< HEAD
			<div className={'circle'} style={{background: this.props.color}} draggable="true" onDragStart={e => handleDrag(e, this.props.color, this.props.number)} onDragEnd={e => handleDragComplete(e)}>
=======
			<div className={'circle'} style={{background: this.props.color}}>
>>>>>>> f7ef13454573a38732f5ee6d5e02836c07471954
				<div className={'innerCircle'}>
					{this.props.number}
				</div>
			</div>
		);
	}
}