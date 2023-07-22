import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilterAC, removeFilterAC } from './filterSlice';


const FilterPanel = () => {
	const data = useSelector((state) => state.filters)
	const dispatch = useDispatch()

	return (
		<Card className="filter-panel">
			<div className="filter-panel-wrapper">
				<Stack >
					{
						data.map(item => {
							return <Badge onClear={() => dispatch(removeFilterAC(item))} variant="clearable">{item}</Badge>
						})
					}
				</Stack>
				<button onClick={() => dispatch(clearFilterAC())} className='link'>Clear</button>
			</div>
		</Card >
	)
}

export { FilterPanel };