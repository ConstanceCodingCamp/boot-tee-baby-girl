import {createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

const SurveyContext = createContext()

export const SurveyProvider= ({children}) => {
	const[survey, setSurvey] = useState([
	
	{
		id: 1,
		text:  "This item is from context",
		rating: 10
	},
	{
		id: 2,
		text:  "This item is from context",
		rating: 5
	},
	{
		id: 3,
		text:  "This item is from context",
		rating: 3
	},

])

	const [surveyEdit, setSurveyEdit] = useState({
		item: {},
		edit: false,
	})

	const addSurvey = (surveyResponse) => {
		surveyResponse.id = uuidv4()
		setSurvey([surveyResponse, ...survey])
	}

	const deleteSurvey = (id) => {
		if(window.confirm('Are you sure you want to delete?')) {
		setSurvey(survey.filter((item) => item.id !== id))
		}
	}

	const updateSurvey = (id, updItem) => {
		setSurvey(survey.map((item) => item.id === id ? { 
			...item, ...updItem } : item))
	}

	const editSurvey = (item) => {
		setSurveyEdit({
			item,
			edit: true,
		})
	}

	return ( 
		<SurveyContext.Provider 
		value={{
		survey,
		surveyEdit,
		deleteSurvey,
		addSurvey,
		editSurvey,
		updateSurvey,
	}}


	>
		{children}
		</SurveyContext.Provider>
	)
}

export default SurveyContext
