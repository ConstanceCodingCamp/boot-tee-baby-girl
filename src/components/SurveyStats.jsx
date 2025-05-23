import {useContext} from 'react'
import SurveyContext from '../Context/SurveyContext'

function SurveyStats() {
	const {survey} = useContext(SurveyContext)

	let average = survey.reduce((acc, cur) => {
		return acc + cur.rating
	}, 0) / survey.length

	average = average.toFixed(1).replace(/[.,]0$/, '')

return (
		<div className='survey-stats'>
			<h4>{survey.length}Reviews</h4>
			<h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
		</div>
	)

}


export default SurveyStats
