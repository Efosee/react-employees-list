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
				{ name: "John", salary: 750, increase: true, rise: true, id: 1 },
				{ name: "Alex", salary: 3000, increase: false, rise: false, id: 2 },
				{ name: "Survey", salary: 4000, increase: false, rise: false, id: 3 }
			],
			term: '',
			filter: 'all'
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
	addItem = (newItem, increase = false, rise = false) => {
		newItem["id"] = this.maxId;
		this.maxId++;
		newItem["increase"] = increase;
		newItem["rise"] = rise;

		this.setState(({ data }) => {
			
			const newArr = [...data, newItem]
			return {
				data: newArr
			}
		})
	}
	/* Этот метод был объеденен с onToggleRise в onToggleProp
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
	} */

	onToggleProp = (id, prop) => {
		
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id){
					return {...item, [prop]: !item[prop]}
				}
				return item;
			})
		}));
	}
	searchEmp = (items, term) => {
		if (term === '') return items;

		return items.filter(item => {
			return item.name.indexOf(term) !== -1;
		})
	}
	onUpdateSearch = (term) => {
		this.setState({term}); //{term} -> {term: term}
	}

	filterEmp = (items, filter) => {
		switch(filter){
			case 'rise':
				return items.filter(item => item.rise);
			case 'moreThen1000':
				return items.filter(item => item.salary > 1000);
			default:
				return items;
		}
	}

	onUpdateFilter = (filter) => {
		this.setState({filter});
	}

	render() {
		const {data, term, filter} = this.state
		const employees = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase).length;
		let visibleData  = this.searchEmp(data, term);
		visibleData = this.filterEmp(visibleData, filter);

		return (
			<div className="app">
				<AppInfo employees={employees} increased={increased}/>

				<div className='search-panel'>
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter onUpdateFilter={this.onUpdateFilter} stateFilter={this.state.filter}/>

				</div>

				<EmployeesList data={visibleData}
					onDelete={this.deleteItem} 
					onToggleProp={this.onToggleProp}/>
				<EmployeesAddForm
					onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;