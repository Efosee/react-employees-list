import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css'
const EmployeesList = ({data}) => {
	const elements = data.map(item => {
		const {id, ...itemProps} = item;
		return (
			//...item -> name="John" salary={750}
			<EmployeesListItem key={id} {...itemProps}/>
		);
	});
	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	);
}

export default EmployeesList;