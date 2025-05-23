import React, { useState } from "react";
import "./index.css";
import CounterCard from "./components/DateCounterComponents/CounterCard";
const messages = [
	"Learn React ⚛️",
	"Apply for jobs 💼",
	"Invest your new income 🤑",
];
function App() {
	return (
		<>
			<Step />
		</>
	);
}

function Step() {
	const [isOpen, setIsOpen] = useState(false);
	const [step, setStep] = useState(1);
	function handlePrevious() {
		if (step > 1) {
			setStep((c) => c - 1);
		}
	}
	function handleNext() {
		if (step < 3) {
			setStep((c) => c + 1);
		}
	}
	return (
		<>
			<button className="close" onClick={() => setIsOpen((prev) => !prev)}>
				{isOpen ? <span>&times;</span> : "view"}
			</button>
			{isOpen && (
				<div className="steps">
					<div className="numbers">
						<div className={step >= 1 ? "active" : ""}>1</div>
						<div className={step >= 2 ? "active" : ""}>2</div>
						<div className={step >= 3 ? "active" : ""}>3</div>
					</div>
					<StepMessage step={step}>
						{messages[step - 1]}
						<div className="buttons">
							<Button
								bgColor={"#e7e7e7"}
								textColor={"#333"}
								onClick={() => alert(`${messages[step - 1]}`)}>
								Learn how
							</Button>
						</div>
					</StepMessage>

					<div className="buttons">
						<Button
							bgColor={"#7950f2"}
							textColor={"#fff"}
							onClick={handlePrevious}>
							<span>👈</span> Previous
						</Button>
						<Button
							text={"Next"}
							bgColor={"#7950f2"}
							textColor={"#fff"}
							onClick={handleNext}>
							Next <span>👉</span>
						</Button>
					</div>
				</div>
			)}
		</>
	);
}

function StepMessage({ children, step }) {
	return (
		<>
			<div className="message">
				<h3>Step {step}:</h3>
				{children}
			</div>
		</>
	);
}

function Button({ children, onClick, bgColor, textColor }) {
	return (
		<>
			<button
				style={{ backgroundColor: bgColor, color: textColor }}
				onClick={onClick}>
				{children}
			</button>
		</>
	);
}
// function App() {
// 	return (
// 		<>
// 			<CounterCard></CounterCard>
// 		</>
// 	);
// }

export default App;
