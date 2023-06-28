import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPlay, faPause, faSync } from "@fortawesome/free-solid-svg-icons";

function SecondsCounter() {
	const [counting, setCounting] = useState(false);
	const [elapsedSeconds, setElapsedSeconds] = useState(0);
  
	useEffect(() => {
	  let interval = null;
  
	  if (counting) {
		interval = setInterval(() => {
		  setElapsedSeconds((prevSeconds) => prevSeconds + 1);
		}, 1000);
	  }
  
	  return () => {
		clearInterval(interval);
	  };
	}, [counting]);
  
	const handleStart = () => {
	  setCounting(true);
	};
  
	const handlePause = () => {
	  setCounting(false);
	};
  
	const handleReset = () => {
	  setCounting(false);
	  setElapsedSeconds(0);
	};
  
	const formatTime = (time) => {
	  const hours = Math.floor(time / 3600);
	  const minutes = Math.floor((time % 3600) / 60);
	  const seconds = time % 60;
	  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	};
  
	return (
	  <div className="seconds-counter-container">
		<div className="seconds-counter">
		  <FontAwesomeIcon icon={faClock} className="clock-icon" />
		  <div className="counter">
			{formatTime(elapsedSeconds).split('').map((digit, index) => (
			  <div key={index} className="digit-box">
				{digit}
			  </div>
			))}
		  </div>
		  <div className="buttons">
			{!counting ? (
			  <button onClick={handleStart}>
				<FontAwesomeIcon icon={faPlay} />
			  </button>
			) : (
			  <button onClick={handlePause}>
				<FontAwesomeIcon icon={faPause} />
			  </button>
			)}
			<button onClick={handleReset}>
			  <FontAwesomeIcon icon={faSync} />
			</button>
		  </div>
		</div>
	  </div>
	);
  }
  
  export default SecondsCounter;

