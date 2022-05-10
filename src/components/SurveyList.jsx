import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import SurveyItem from './SurveyItem'
import SurveyContext from '../Context/SurveyContext'

function SurveyList() {
	const {survey} = useContext(SurveyContext)

 if (!survey || survey.length === 0) {
 	return <p>No Response Reported Yet </p>
 }

 return ( 
	<div className="survey-list">
		<AnimatePresence>
		{survey.map((item) => (
		<motion.div 
			key={item.id}
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			>
			<SurveyItem 
				key={item.id} 
				item={item} 
			 />
		</motion.div>
	))}
	</AnimatePresence>
</div>

)
	// return ( 
	// 	<div className="survey-list">
	// 		{survey.map((item) => (
	// 	<SurveyItem 
	// 		key={item.id} 
	// 		item={item} 
	// 		surveyDelete={surveyDelete} />
	// 	))}
	// </div>

	// )
}

export default SurveyList