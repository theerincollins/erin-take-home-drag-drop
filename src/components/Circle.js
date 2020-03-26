import * as React from "react";

function handleDrag(ev, color, number) {
	ev.dataTransfer.setData('color', color);
	ev.dataTransfer.setData('number', number);
}

export default class Circle extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			initialState: true
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('ba ba bing state', nextState, this.state.initialState, 'ba ba bing props', nextProps, this.props.resetState);
		if (nextState.initialState !== this.state.initialState) {
			return true;
		} else if (nextProps.resetState !== this.props.resetState) {
			this.setState({
				initialState: true
			})
			return true;
		}
		return false;
	}

	handleDragComplete(ev) {
		ev.target.style.visibility = 'hidden';
		this.props.parentCallback();
		this.setState({
			initialState: false
		})
	}

	render() {
		return (
			<div className={'circle'} style={{background: this.props.color, visibility: this.state.initialState || this.props.resetState ? 'visible' : 'hidden'}} draggable="true" 
				onDragStart={e => handleDrag(e, this.props.color, this.props.number)} onDragEnd={e => this.handleDragComplete(e)}>
					<div className={'innerCircle'}>
						{this.props.number}
					</div>
			</div>
		);
	}
}