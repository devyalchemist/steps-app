import React from "react";

function Counter({ type, value, handleIncrease, handleChange }) {
	return (
		<>
			<button onClick={(e) => handleIncrease(e)}>+</button>
			<div className="content">
				{/* {type}: <span className="value">{value}</span> */}
				<input type="text" value={value} onChange={handleChange} />
			</div>
			<button onClick={handleIncrease}>-</button>
		</>
	);
}

export default Counter;
