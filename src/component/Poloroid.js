import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';

export default function Poloroid() {
  const [tagline, setTagline] = useState('');
  const [image, setImage] = useState(null);
  const [generated, setGenerated] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('original');
  const currentDate = new Date().toLocaleDateString();
  const captureRef = useRef();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleGenerate = () => {
    setGenerated(true);
  };

  const handleDownload = async () => {
    if (!captureRef.current) return;

    const canvas = await html2canvas(captureRef.current);
    const dataURL = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = dataURL;
    link.download = `polaroid-${Date.now()}.png`;
    link.click();
  };

  // Optional cartoon filter style simulation
//   const cartoonStyle = {
//     filter: 'contrast(150%) brightness(110%) saturate(150%)',
//   };

  return (
    <div className="polaroid-container">
      <h2>Design Your Poloroid</h2>

      {/* Input + Dropdown Wrapper */}
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Input tagline ....."
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
          className="tagline-input"
        />

        <select
          value={selectedStyle}
          onChange={(e) => setSelectedStyle(e.target.value)}
          className="tagline-input"
          style={{ width: '200px' }}
        >
          <option value="original">Original</option>
          <option value="cartoon">Gibble Cartoon</option>
        </select>
      </div>

      {/* Card Section */}
      <div className="card-wrapper">
        {/* Upload Card */}
        <div className="card upload-card">
          <label htmlFor="image-upload" className="image-placeholder">
            {image ? (
              <img
                src={image}
                alt="uploaded"
                className="preview-image"
                
              />
            ) : (
              <span>Add image</span>
            )}
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
          <p className="caption">
          </p>
        </div>

        {/* Display Card */}
        <div className="card display-card" ref={captureRef}>
          {generated && image ? (
            <>
              <img
                src={image}
                alt="generated"
                className="preview-image"
               
              />
              <p className="caption">Date - {currentDate}</p>
              <p className="caption">{tagline ? ` ${tagline}` : ' '}</p>
            </>
          ) : (
            <>
              <div className="image-placeholder"></div>
              <p className="caption">Date - </p>
            </>
          )}
        </div>
      </div>

      <button className="generate-btn" onClick={handleGenerate}>Generate</button>

      {generated && image && (
        <button className="generate-btn" onClick={handleDownload} style={{ marginTop: '20px' }}>
          Download Polaroid
        </button>
      )}
    </div>
  );
}
