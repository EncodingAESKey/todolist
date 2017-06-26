import React from 'react';
import ReactDom from 'react-dom';

class Root extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			todos:[1,2,3]
		}
	}

	handleBtnClick() {
		var value = this.refs.input.value;
		this.state.todos.push(value);
		this.setState({
			todos: this.state.todos
		})
	}

	handleDelClick(index) {
		this.state.todos.splice(index,1);
		this.setState({
			todos: this.state.todos
		})
	}

	render() {
		return (
			<div>
				<input type="text" ref="input" />
				<button onClick={this.handleBtnClick.bind(this)}>数据</button>
				{
					this.state.todos.map((value, index) => {
						return (
							<div key={index+"_todolist"}>
								<div>
									{value}
								</div>
								<span onClick={this.handleDelClick.bind(this,index)}>删除</span>
							</div>
						)
					})
				}
			</div>
		)
	}

}


ReactDom.render(<Root/> , document.getElementById("root"));