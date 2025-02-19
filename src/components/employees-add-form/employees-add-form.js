import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			salary: ''
		}
	}
	onValueChange = (e) =>{
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	onSubmit = (e) =>{
		e.preventDefault();
		if (this.state.name.length < 3 || this.state.salary === ''){
			alert("Введите больше 3-х символов ФИО и укажите зарплату");
			return
		}
		this.props.onAdd({name: this.state.name, salary: this.state.salary})
		this.setState({
			name: '',
			salary: ''
		})
	}
	render() {
		const {name, salary} = this.state;
		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form
					onSubmit={this.onSubmit}
					className="add-form d-flex">
					<input type="text"
						className="form-control new-post-label"
						placeholder="Имя сотрудника" 
						name="name"
						value={name}
						onChange={this.onValueChange}/>
					<input type="number"
						className="form-control new-post-label"
						placeholder="ЗП в $?" 
						name="salary"
						value={salary}
						onChange={this.onValueChange}/>

					<button type="submit"
						className="btn btn-outline-light">Добавить</button>
				</form>
			</div>
		)
	}
}

export default EmployeesAddForm;