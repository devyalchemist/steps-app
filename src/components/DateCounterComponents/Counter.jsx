import React from "react";

function Counter({ type, value, handleIncrease }) {
	return (
		<>
			<button onClick={(e) => handleIncrease(e)}>+</button>
			<div className="content">
				{type}: <span className="value">{value}</span>
			</div>
			<button onClick={handleIncrease}>-</button>
		</>
	);
}

export default Counter;
