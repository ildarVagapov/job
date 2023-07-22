import { useDispatch, useSelector } from 'react-redux';
import { JobPosition } from './JobPosition';
import { addFilterAC } from 'features/filter/filterSlice';

const JobList = () => {
	const data = useSelector((state) => state.position)
	const dispatch = useDispatch()
	const handleAddFilter = (filter) => {
		dispatch(addFilterAC(filter))
	}
	return (
		<div className='job-list'>
			{data.map(item => (
				<JobPosition handleAddFilter={handleAddFilter} key={item.id} {...item} />
			))}
		</div>
	)
}

export { JobList };