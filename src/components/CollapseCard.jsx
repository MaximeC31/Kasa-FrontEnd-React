import React, { useState } from "react";

function CollapseCard({ title, body: initialBody }) {
	const [descriptionVisible, setDescriptionVisible] = useState(false);
	const [bodyContent, setBodyContent] = useState(null);

	const toggleDescription = () => {
		setDescriptionVisible(!descriptionVisible);
		if (!descriptionVisible) {
			setBodyContent(initialBody);
		} else {
			setBodyContent(null);
		}
	};

	let chevronDescriptionClassName;
	if (descriptionVisible === true) {
		chevronDescriptionClassName = "fa-chevron-up";
	} else {
		chevronDescriptionClassName = "fa-chevron-down";
	}

	return (
		<>
			<div className="box-information">
				<div onClick={toggleDescription}>
					<p>{title}</p>
					<i className={`fa-solid ${chevronDescriptionClassName}`}></i>
				</div>
				{bodyContent}
			</div>
		</>
	);
}

export default CollapseCard;