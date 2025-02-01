import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css'
const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {
	const elements = data.map(item => {
		const {id, ...itemProps} = item;
		return (
			//...item -> name="John" salary={750}
			<EmployeesListItem 
			onDelete={() => onDelete(id)}
			key={id} 
			{...itemProps}
			onToggleIncrease={() => onToggleIncrease(id)}
			onToggleRise={() => onToggleRise(id)}/>
		);
	});
	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	);
}

export default EmployeesList;