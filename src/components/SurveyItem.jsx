import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from './shared/Card';

function SurveyItem({ item, deleteSurvey, editSurvey }) {
  const isAdmin = false; // Set to true if YOU (admin) want to see edit/delete

  return (
    <Card>
      <div className="survey-item">
        {isAdmin && (
          <>
            <button onClick={() => deleteSurvey(item.id)} className="close" aria-label="Delete">
              <FaTimes />
            </button>
            <button onClick={() => editSurvey(item)} className="edit" aria-label="Edit">
              <FaEdit />
            </button>
          </>
        )}
        <div className="survey-text">{item.text}</div>
        <div className="survey-rating">Rating: {item.rating}</div>
      </div>
    </Card>
  );
}

export default SurveyItem;
