import * as React from "react";

// COMPONENTS //
import Circle from './components/Circle';
import Square from './components/Square';

// CSS //
import "./assets/css/styles.css";


export default class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.fromChild = this.fromChild.bind(this);
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

	fromChild() {
		console.log('i am in here');
		this.setState({
			isInitialState: false,
			resetInitialState: false
		})
	}

	render() {

		return (
			<div className={'appContainer'}>
				<Circle color={'blue'} number={1} parentCallback={this.fromChild} resetState={this.state.resetInitialState}/>
				<Circle color={'red'} number={2} parentCallback={this.fromChild} resetState={this.state.resetInitialState}/>
				<Circle color={'yellow'} number={3} parentCallback={this.fromChild} resetState={this.state.resetInitialState}/>
				<Square isInitialState={this.state.resetInitialState}/>
				<button onClick={() => this.handleClick()} style={{visibility: this.state.isInitialState ? 'hidden' : 'visible'}}>Reset</button>
			</div>
		);
	}
}