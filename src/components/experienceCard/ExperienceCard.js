import React, { useState, useRef } from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({ cardInfo, isDark }) {
  const [dominantColor, setDominantColor] = useState("#ff9966");
  const imgRef = useRef();

  const getColor = () => {
    try {
      const colorThief = new ColorThief();
      const color = colorThief.getColor(imgRef.current);
      setDominantColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
    } catch (e) {
      console.log("ColorThief Error", e);
    }
  };

  return (
    <div className={`exp-card-wrapper ${isDark ? "dark-mode" : ""}`}>
      <div className="exp-card">
        <div className="exp-content">

          {/* FRONT FACE: Logo and Role */}
          <div className="exp-front">
            <div className="background-blobs">
              <div className="blob" id="left"></div>
              <div className="blob" id="right"></div>
              <div className="blob" id="bottom"></div>
            </div>

            <div className="front-inner">
              <div className="company-title-top">
                <h4 className="company-name">{cardInfo.company}</h4>
              </div>

              <div className="logo-box">
                <img
                  crossOrigin={"anonymous"}
                  ref={imgRef}
                  src={cardInfo.companylogo}
                  alt={cardInfo.company}
                  onLoad={getColor}
                  className="company-logo-img"
                />
              </div>

              <div className="exp-details-bottom">
                <p className="role-name">{cardInfo.role}</p>
                <small className="exp-badge">{cardInfo.date}</small>
              </div>
            </div>
          </div>

          {/* BACK FACE: Detailed Description */}
          <div className="exp-back" style={{ '--glow-color': dominantColor }}>
            <div className="back-inner">
              <div className="back-header">
                <strong>Responsibilities</strong>
              </div>
              <div className="scroll-area">
                <p className="exp-desc">{cardInfo.desc}</p>
                <ul className="exp-bullets">
                  {cardInfo.descBullets?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}