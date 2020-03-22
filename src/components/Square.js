import * as React from "react";


export default class Square extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			color: 'white',
			number: 0
		};
	}

	render() {
		return (
			<div className={'square'}>
				<div className={'innerSquare'} style={{visibility: this.state.number ? 'visible' : 'hidden'}}>
					{this.state.number}
				</div>
			</div>
		);
	}
}