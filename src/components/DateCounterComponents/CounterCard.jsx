import React, { useState } from "react";
import "../../countercard.css";
import Counter from "./Counter";

function CounterCard() {
	const date = new Date();

	const [dateString, setShortenedDate] = useState(date);
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(1);
	date.setDate(date.getDate() + count);
	// const dateString = date.toDateString();
	const shortenedDate = date.toLocaleDateString();
	// console.log(date, typeof date);

	function operateStep(event) {
		// console.log("clicked");
		if (event.target.textContent === "+" && step < 5) {
			setStep((prev) => prev + 1);
		} else if (event.target.textContent === "-" && step > 1) {
			setStep((prev) => prev - 1);
		}
	}
	function operateCount(event) {
		if (event.target.textContent === "+" && count + step < 30) {
			setCount((prev) => prev + step);
		} else if (event.target.textContent === "-" && count - step > 0) {
			setCount((prev) => prev - step);
		}
	}
	function operate() {
		// console.log("second click");
		setShortenedDate((prev) => {
			const newDate = new Date(prev);

			newDate.setDate(newDate.getDate() + count);
			console.log(newDate);
			return newDate;
		});
	}
	return (
		<>
			<div id="counter-card">
				<div className="counters">
					<div className="counter step-counter">
						<Counter handleIncrease={operateStep} type={"Step"} value={step} />
					</div>
					<div className="counter main-counter">
						<Counter
							handleIncrease={operateCount}
							type={"Count"}
							value={count}
						/>
					</div>
					<button onClick={operate}>increase</button>
				</div>
				<div className="display">
					{count} days from today is {date.toDateString()}
				</div>
			</div>
		</>
	);
}

export default CounterCard;
