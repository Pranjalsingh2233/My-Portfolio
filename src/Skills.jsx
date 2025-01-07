import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./Skills.css";

export default function Skills() {
  const { ref: myRef, inView: isVisible } = useInView();

  return (
    <section id="_skills">
      <h1>My Skills</h1>
      <div className="skills" ref={myRef}>
        <div className="box">
          <div className="outer">
            <div className="inner   ">
              <div className="percentage">
                HTML<br></br>90%
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#32b531" />
                <stop offset="100%" stopColor="#00d4ff" />
              </linearGradient>
            </defs>
            <circle
              cx="80"
              cy="80"
              r="70"
              strokeLinecap="round"
              className={` ${isVisible ? "ninety" : ""}`}
            />
          </svg>
        </div>
        <div className="box">
          <div className="outer">
            <div className="inner   ">
              <div className="percentage">
                CSS<br></br>85%
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#32b531" />
                <stop offset="100%" stopColor="#00d4ff" />
              </linearGradient>
            </defs>
            <circle
              className={` ${isVisible ? "eightyFive" : ""}`}
              cx="80"
              cy="80"
              r="70"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="box">
          <div className="outer">
            <div className="inner   ">
              <div className="percentage">
                JavaScript<br></br>80%
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#32b531" />
                <stop offset="100%" stopColor="#00d4ff" />
              </linearGradient>
            </defs>
            <circle
              className={` ${isVisible ? "eighty" : ""}`}
              cx="80"
              cy="80"
              r="70"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="box">
          <div className="outer">
            <div className="inner">
              <div className="percentage">
                React<br></br>90%
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#32b531" />
                <stop offset="100%" stopColor="#00d4ff" />
              </linearGradient>
            </defs>
            <circle
              cx="80"
              cy="80"
              r="70"
              strokeLinecap="round"
              className={` ${isVisible ? "ninety" : ""}`}
            />
          </svg>
        </div>
        <div className="box">
          <div className="outer">
            <div className="inner   ">
              <div className="percentage">
                Java<br></br>80%
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#32b531" />
                <stop offset="100%" stopColor="#00d4ff" />
              </linearGradient>
            </defs>
            <circle
              className={` ${isVisible ? "eighty" : ""}`}
              cx="80"
              cy="80"
              r="70"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
