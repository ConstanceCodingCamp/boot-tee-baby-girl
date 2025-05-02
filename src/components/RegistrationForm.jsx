import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "./shared/Card";
import Button from "./shared/Button";

function RegistrationForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    yearsInBusiness: "",
    description: "",
  });

  const [uploadedImages, setUploadedImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
    }));
    setUploadedImages((prev) => [...prev, ...newImages]);
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (uploadedImages.length < 3) {
      setMessage("Upload at least 3 marketable images before submitting.");
      return;
    }

    console.log("Submitted:", { ...formData, uploadedImages });
    toast.success(
      "✅ Registration submitted! We will be in touch within 3 business days. Ex: submission on Friday = follow up on Wednesday!"
    );

    navigate("/upnext", {
      state: { images: uploadedImages, name: formData.name },
    });
  };

  const openModal = (index) => setCurrentImageIndex(index);
  const closeModal = () => setCurrentImageIndex(null);

  const showNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % uploadedImages.length);
  };

  const showPrev = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + uploadedImages.length) % uploadedImages.length
    );
  };

  const handleBackdropClick = (e) => {
    if (e.target.className === "modal-backdrop") closeModal();
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Register as Guest or Sponsor</h2>

        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            name="businessName"
            placeholder="Business Name (if applicable)"
            value={formData.businessName}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <input
            type="number"
            name="yearsInBusiness"
            placeholder="Years in Business"
            value={formData.yearsInBusiness}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <textarea
            name="description"
            placeholder="Describe your request (pitch, topic, sponsorship details). Minimum 20 characters."
            rows="4"
            value={formData.description}
            onChange={handleChange}
            minLength={20}
            required
          />
        </div>

        <div className="input-group">
          <label>
            Upload at least 3 high-quality, market-ready images (avoid selfies,
            cluttered backgrounds):
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />
        </div>

        <div className="upload-preview">
          {uploadedImages.map((img, index) => (
            <img
              key={index}
              src={img.url}
              alt={`Upload ${index + 1}`}
              onClick={() => openModal(index)}
              className="preview-thumb"
            />
          ))}
        </div>

        {message && <div className="message">{message}</div>}

        <Button type="submit" version="primary">
          Submit
        </Button>
      </form>

      {currentImageIndex !== null && (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
          <div className="modal-content fade-in">
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <img
              src={uploadedImages[currentImageIndex].url}
              alt={`Upload ${currentImageIndex + 1}`}
              className="modal-image"
            />
            <p className="modal-caption">
              {uploadedImages[currentImageIndex].name}
            </p>
            <button className="modal-prev" onClick={showPrev}>
              &#8592;
            </button>
            <button className="modal-next" onClick={showNext}>
              &#8594;
            </button>
          </div>
        </div>
      )}
    </Card>
  );
}

export default RegistrationForm;
