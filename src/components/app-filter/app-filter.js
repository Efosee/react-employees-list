
import './app-filter.css';

const AppFilter = ({updateFilter, stateFilter}) => {

	const onUpdateFilter = (e) =>{
		const filter = e.target.getAttribute('data-filter');
		updateFilter(filter);
	}
	const classNames = {
		all: "btn btn-outline-light",
		bonus: "btn btn-outline-light",
		">1000": "btn btn-outline-light",
	}
	classNames[stateFilter] = "btn btn-light";

	return (
		<div className="btn-group">
			<button 
				className={classNames["all"]}
				type="button"
				data-filter="all"
				onClick={onUpdateFilter}>
					Все сотрудники
			</button>
			<button 
				className={classNames["bonus"]}
				type="button"
				data-filter="bonus"
				onClick={onUpdateFilter}>
					На повышение
			</button>
			<button 
				className={classNames[">1000"]}
				type="button"
				data-filter=">1000"
				onClick={onUpdateFilter}>
					ЗП больше 1000$
			</button>
		</div>
	);
}

export default AppFilter;