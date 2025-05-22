import React, { useState } from "react";
import "../../countercard.css";
import Counter from "./Counter";

function CounterCard() {
	const date = new Date();

	// const [dateString, setShortenedDate] = useState(date);
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);
	date.setDate(date.getDate() + count);

	function operateStep(event) {
		// console.log("clicked");
		if (event.target.textContent === "+" && step < 5) {
			setStep((prev) => prev + 1);
		} else if (event.target.textContent === "-" && step > 1) {
			setStep((prev) => prev - 1);
		}
	}

	function setRange(e) {
		const value = e.target.value;
		setStep(Number(value));
	}

	function operateCount(event) {
		if (event.target.textContent === "+" && count + step < 30) {
			setCount((prev) => prev + step);
		} else if (event.target.textContent === "-" && count - step > 0) {
			setCount((prev) => prev - step);
		}
	}

	function handleChange(e) {
		const value = e.target.value;
		setCount(Number(value));
	}
	function reset() {
		setCount(0);
		setStep(1);
	}
	// function operate() {
	// 	// console.log("second click");
	// 	setShortenedDate((prev) => {
	// 		const newDate = new Date(prev);

	// 		newDate.setDate(newDate.getDate() + count);
	// 		console.log(newDate);
	// 		return newDate;
	// 	});
	// }
	return (
		<>
			<div id="counter-card">
				<div className="counters">
					<div className="counter step-counter">
						{/* <Counter handleIncrease={operateStep} type={"Step"} value={step} /> */}
						<input
							type="range"
							value={step}
							onChange={setRange}
							min={1}
							max={10}
						/>
						<span>{step}</span>
					</div>
					<div className="counter main-counter">
						<Counter
							handleIncrease={operateCount}
							type={"Count"}
							value={count}
							handleChange={handleChange}
						/>
					</div>
					{/* <button onClick={operate}>increase</button> */}
					{step !== 1 || count !== 0 ? (
						<button className="reset-btn" onClick={reset}>
							Reset
						</button>
					) : null}
				</div>
				<div className="display">
					{count === 0
						? `Today is ${date.toDateString()}`
						: ` ${count} days from today is ${date.toDateString()}`}
				</div>
			</div>
		</>
	);
}

export default CounterCard;
