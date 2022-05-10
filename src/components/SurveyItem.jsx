import { FaTimes,FaEdit } from 'react-icons/fa'
import {useContext} from 'react'
import Card from './shared/Card'
import SurveyContext from '../Context/SurveyContext'

function SurveyItem({ item }) {		
	const {deleteSurvey, editSurvey} = useContext(SurveyContext)


		return (
	<Card>
		<div className='num-display'>{item.rating}</div>
		<button onClick={() => deleteSurvey(item.id)}
			className="close">
			<FaTimes color='purple' />
		</button>
		<button onClick={() => editSurvey(item)} 
			className='edit'>
			<FaEdit color='red' />
		</button>
		<div className='text-display'>{item.text}</div>	
	</Card>
	
	)
}


export default SurveyItem