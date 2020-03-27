import * as React from "react";

// COMPONENTS //
import Circle from './components/Circle';
import Square from './components/Square';

// CSS //
import "./assets/css/styles.css";


export default class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.updateFromCircle = this.updateFromCircle.bind(this);
		this.state = {
			resetInitialState: false,
			isInitialState: true
		};
	}

	handleClick() {
		this.setState({
			resetInitialState: true,
			isInitialState: true
		})
	}

	updateFromCircle() {
		this.setState({
			isInitialState: false,
			resetInitialState: false
		})
	}

	render() {

		return (
			<div className={'appContainer'}>
				<Circle color={'blue'} number={1} parentCallback={this.updateFromCircle} resetState={this.state.resetInitialState}/>
				<Circle color={'red'} number={2} parentCallback={this.updateFromCircle} resetState={this.state.resetInitialState}/>
				<Circle color={'yellow'} number={3} parentCallback={this.updateFromCircle} resetState={this.state.resetInitialState}/>
				<Square isInitialState={this.state.resetInitialState}/>
				<button className="resetButton" onClick={() => this.handleClick()} style={{visibility: this.state.isInitialState ? 'hidden' : 'visible'}}>Reset Demo</button>
			</div>
		);
	}
}