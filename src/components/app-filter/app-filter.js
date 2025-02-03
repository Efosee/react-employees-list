
import './app-filter.css';

const AppFilter = ({onUpdateFilter, stateFilter}) => {

	const buttonsData = [
		{name: 'all', label: 'Все сотрудники'},
		{name: 'rise', label: 'На повышение'},
		{name: 'moreThen1000', label: 'ЗП больше 1000$'}
	];

	const buttons = buttonsData.map(({name, label}) => {
		const active = name === stateFilter;
		const clazz = active ? "btn-light" : "btn btn-outline-light";
		return (
			<button type='button'
							className={`btn ${clazz}`}
							key={name}
							onClick={() => onUpdateFilter(name)}>
							{label}
			</button>
		);
	})
	

	return (
		<div className="btn-group">
			{buttons}
		</div>
	);
}

export default AppFilter;