import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function About() {
    return <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>This is React App to register as Guest for Saved N Sexy Radio</p>
            <p>Version: 1.0.0</p>

            <p>
                <Link to='/'>Back to the beginning</Link>
            </p>
        </div>
    </Card> 
}

export default About