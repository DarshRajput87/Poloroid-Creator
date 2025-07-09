import React, { useEffect } from 'react';

export default function Content() {
    useEffect(() => {
        const existingScript = document.querySelector('script[src*="@splinetool/viewer"]');
        if (!existingScript) {
          const script = document.createElement('script');
          script.type = 'module';
          script.src = 'https://unpkg.com/@splinetool/viewer@1.10.24/build/spline-viewer.js';
          document.body.appendChild(script);
        }
      }, []);
    
      return (
        <div className="left-container">
          <div className="left-content">
            <h1 className="heading">Polaroids</h1>
            <p className="paragraph">
              Polaroids are instant photographs that develop right before your eyes.
              They capture moments in time, allowing you to hold memories in your hand
              within minutes of taking the picture.
            </p>
            <button className="btn-learn-more">Learn More</button>
          </div>
    
          <div className="spline-viewer-wrapper">
            <spline-viewer
              url="https://prod.spline.design/XkIqD6IKpgh4olk5/scene.splinecode"
            ></spline-viewer>
          </div>
        </div>
      );
}
