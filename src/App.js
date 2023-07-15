import { FilterPanel } from 'components/FilterPanel';
import { JobList } from 'components/JobList';
import { TheHeader } from 'components/TheHeader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPositionAC } from 'redux/reducers/reducerPosition';
import data from './mock/data'

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
