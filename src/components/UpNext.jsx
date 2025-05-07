import { useLocation } from 'react-router-dom';
import Card from './shared/Card';
import Footer from './shared/Footer'; 

function UpNext() {
  const location = useLocation();
  const { state } = location;

  const name = state?.name || 'Guest';
  const images = state?.images || [];

  return (
    <>
      <Card>
        <div className="upnext">
          <h2>Up Next!</h2>
          <h3>{name}</h3>

          <div className="upload-preview">
            {images.length > 0 ? (
              images.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={`Upload ${index + 1}`}
                  className="preview-thumb"
                />
              ))
            ) : (
              <p>No images were submitted.</p>
            )}
          </div>
        </div>
      </Card>

      <Footer /> 
    </>
  );
}

export default UpNext;
