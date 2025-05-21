import React from "react";
import CounterCard from "./components/DateCounterComponents/CounterCard";
// const messages = [
// 	"Learn React ⚛️",
// 	"Apply for jobs 💼",
// 	"Invest your new income 🤑",
// ];
// function App() {
// 	const [isOpen, setIsOpen] = useState(false);
// 	const [step, setStep] = useState(1);
// 	function handlePrevious() {
// 		if (step > 1) {
// 			setStep((c) => c - 1);
// 		}
// 	}
// 	function handleNext() {
// 		if (step < 3) {
// 			setStep((c) => c + 1);
// 		}
// 	}
// 	return (
// 		<>
// 			<button className="close" onClick={() => setIsOpen((prev) => !prev)}>
// 				{isOpen ? <span>&times;</span> : "view"}
// 			</button>
// 			{isOpen && (
// 				<div className="steps">
// 					<div className="numbers">
// 						<div className={step >= 1 ? "active" : ""}>1</div>
// 						<div className={step >= 2 ? "active" : ""}>2</div>
// 						<div className={step >= 3 ? "active" : ""}>3</div>
// 					</div>
// 					<p className="message">{`Step ${step}: ${messages[step - 1]}`}</p>
// 					<div className="buttons">
// 						<button
// 							style={{ backgroundColor: "#7950f2", color: "#fff" }}
// 							onClick={handlePrevious}>
// 							Previous
// 						</button>
// 						<button
// 							style={{ backgroundColor: "#7950f2", color: "#fff" }}
// 							onClick={handleNext}>
// 							Next
// 						</button>
// 					</div>
// 				</div>
// 			)}
// 		</>
// 	);
// }

function App() {
	return (
		<>
			<CounterCard></CounterCard>
		</>
	);
}

export default App;
