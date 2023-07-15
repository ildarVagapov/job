import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useDispatch, useSelector } from 'react-redux';
// import { clearFilterAC } from 'redux/reducers/reducerFilter';


const FilterPanel = () => {
	const data = useSelector((state) => state.filters)
	// const dispatch = useDispatch()
	// onClick={dispatch(clearFilterAC())}

	return (
		<Card className="filter-panel">
			<div className="filter-panel-wrapper">
				<Stack >
					{
						data.length ? data.map(item => {
							return <Badge variant="clearable">{item.role}</Badge>
						}) : null
					}
				</Stack>
				<button className='link'>Clear</button>
			</div>
		</Card >
	)
}

export { FilterPanel };