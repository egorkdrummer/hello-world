import React from 'react';
import './Counter.css';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		}
	}

	increment = () => {
		this.setState((prevState) => {
			return {
				counter: prevState.counter + 1
			}
		})
	}

	decrement = () => {
		this.setState((prevState) => {
			return {
				counter: prevState.counter - 1
			}
		})
	}


	render() {
		const { counter } = this.state;
		return (
			<div className="Counter">
				<h1 className="Counter-result">{ counter }</h1>
				<button onClick={this.increment}>+</button>
				<button onClick={this.decrement}>-</button>
			</div>
		)
	}
}

export default Counter
