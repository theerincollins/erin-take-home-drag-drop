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
			<div className={'circle'} style={{background: this.props.color}} draggable="true" onDragStart={e => handleDrag(e, this.props.color, this.props.number)} onDragEnd={e => handleDragComplete(e)}>
				<div className={'innerCircle'}>
					{this.props.number}
				</div>
			</div>
		);
	}
}