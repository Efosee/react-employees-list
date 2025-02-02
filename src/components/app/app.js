import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: "John", salary: 750, increase: true, rice: true, id: 1 },
				{ name: "Alex", salary: 3000, increase: false, rice: false, id: 2 },
				{ name: "Survey", salary: 4000, increase: false, rice: false, id: 3 }
			]
		}
		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			const newArr = data.filter(item => item.id !== id);
			return {
				data: newArr
			}
		})
	}
	addItem = (newItem, increase = false, rice = false) => {
		newItem["id"] = this.maxId;
		this.maxId++;
		newItem["increase"] = increase;
		newItem["rice"] = rice;

		this.setState(({ data }) => {
			
			const newArr = [...data, newItem]
			return {
				data: newArr
			}
		})
	}
	
	onToggleIncrease = (id) => {
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);

			const old = data[index];
			const newItem = {...old, increase: !old.increase};
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

			return{
				data: newArr
			}
		})
	} 
	onToggleRice = (id) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id){
					return {...item, rice: !item.rice}
				}
				return item;
			})
		}));
	}
	render() {
		const employees = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase).length;
		return (
			<div className="app">
				<AppInfo employees={employees} increased={increased}/>

				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />

				</div>

				<EmployeesList data={this.state.data}
					onDelete={this.deleteItem} 
					onToggleIncrease={this.onToggleIncrease}
					onToggleRise={this.onToggleRice}/>
				<EmployeesAddForm
					onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;