import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import RatingSelect from './RatingSelect';
import Card from './shared/Card';
import Button from './shared/Button';
import Footer from "./shared/Footer";
import SurveyContext from '../Context/SurveyContext';

function SurveyForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const { addSurvey, surveyEdit, updateSurvey } = useContext(SurveyContext);
  const navigate = useNavigate(); // ✅ Hook to navigate

  useEffect(() => {
    if (surveyEdit.edit === true) {
      setBtnDisabled(false);
      setText(surveyEdit.item.text);
      setRating(surveyEdit.item.rating);
    }
  }, [surveyEdit]);

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const surveyResponse = {
        text,
        rating,
      };

      if (surveyEdit.edit === true) {
        updateSurvey(surveyEdit.item.id, surveyResponse);
      } else {
        addSurvey(surveyResponse);
      }
      setText('');

      // ✅ Redirect to /register after submission
      navigate('/register');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate the importance of digital advertising pre COVID-19 and why?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled} version="secondary">
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
      <Footer />
    </Card>
  );
}

export default SurveyForm;
