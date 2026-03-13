import React, { useContext } from "react";
import "./StartupProjects.scss";
import { bigProjects, socialMediaLinks } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import Button from "../../components/button/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) return;
    var win = window.open(url, "_blank");
    win.focus();
  }

  const { isDark } = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            <Slider {...settings}>
              {bigProjects.projects.map((project, i) => {
                const descriptionPoints = (project.projectDesc || "")
                  .split(/[.?!]\s+/)
                  .map(point => point.trim())
                  .filter(Boolean);

                const githubLink = (project.footerLink || []).find(
                  l => l.name && l.name.toLowerCase() === "github"
                );
                const liveLink = (project.footerLink || []).find(
                  l => l.name && (l.name.toLowerCase() === "live" || l.name.toLowerCase() === "demo" || l.name.toLowerCase() === "live demo")
                );

                return (
                  <div key={i} className="project-card-wrapper">
                    <div
                      className={
                        isDark ? "project-card uiverse-card dark" : "project-card uiverse-card light"
                      }
                    >
                      <div
                        className="project-image image"
                        aria-hidden="true"
                        style={
                          project.image
                            ? { backgroundImage: `url(${project.image})` }
                            : undefined
                        }
                      ></div>

                      <div className="card-info">
                        <span>{project.projectName}</span>
                        <p>Featured Project</p>
                      </div>

                      <div className="project-explanation">
                        {descriptionPoints.length > 0 ? (
                          <ul className="project-explanation-list">
                            {descriptionPoints.map((point, pointIndex) => (
                              <li key={pointIndex}>{point}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>No project explanation available.</p>
                        )}
                      </div>

                      <div className="card-buttons">
                        {githubLink && (
                          <button
                            className="card-btn card-btn-github"
                            onClick={() => openUrlInNewTab(githubLink.url)}
                            aria-label="GitHub"
                          >
                            <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            GitHub
                          </button>
                        )}
                        {liveLink && (
                          <button
                            className="card-btn card-btn-live"
                            onClick={() => openUrlInNewTab(liveLink.url)}
                            aria-label="Live Demo"
                          >
                            <svg height="14" width="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                              <polyline points="15 3 21 3 21 9"/>
                              <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                            Live
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="project-button-div">
            <Button
              text="More Projects"
              newTab={true}
              href={socialMediaLinks.github}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
