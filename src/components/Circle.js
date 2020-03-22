import * as React from "react";


export default class Circle extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={'circle'} style={{background: this.props.color}}>
				<div className={'innerCircle'}>
					{this.props.number}
				</div>
			</div>
		);
	}
}