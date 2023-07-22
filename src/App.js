import { FilterPanel } from 'features/filter/FilterPanel';
import { JobList } from 'features/position/JobList';
import { TheHeader } from 'components/TheHeader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import data from './mock/data'
import { addPositionAC } from 'features/position/positionSlice';

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(addPositionAC(data))
	}, [])

	return (
		<>
			<TheHeader />
			<div className='container'>
				<FilterPanel />
				<JobList />
			</div>
		</>
	);
}

export default App;
