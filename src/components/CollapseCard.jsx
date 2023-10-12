import React, { useState } from "react";

function CollapseCard({ title, body }) {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (isVisible === false) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	let content;
	let chevronClassName;
	if (isVisible === true) {
		chevronClassName = "fa-chevron-up";
		content = body;
	} else {
		chevronClassName = "fa-chevron-down";
		content = null;
	}

	return (
		<>
			<div className="box-information">
				<div onClick={toggleVisibility}>
					<p>{title}</p>
					<i className={`fa-solid ${chevronClassName}`}></i>
				</div>
				{content}
			</div>
		</>
	);
}

export default CollapseCard;