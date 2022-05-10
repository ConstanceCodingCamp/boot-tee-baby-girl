import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import SurveyList from "./components/SurveyList"
import SurveyStats from "./components/SurveyStats"
import SurveyForm from "./components/SurveyForm"
import About from './pages/About'
import{SurveyProvider} from './Context/SurveyContext'
import AboutLink from './components/AboutLink'


function App() {

	return (
		<SurveyProvider>
			<Router>
				<Header />
			
				<div className='container'>
          	<Routes>
            	<Route
              		path='/'
              		element={
                <>
                  <SurveyForm />
                  <SurveyStats />
                  <SurveyList />
                </>
              }
            ></Route>

            <Route path='/about' element={<About />} />
          </Routes>

          <AboutLink />
        </div>
	</Router>
	</SurveyProvider>
	)
}

export default App