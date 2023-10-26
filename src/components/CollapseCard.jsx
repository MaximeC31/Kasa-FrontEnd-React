import React, { useState, useRef, useEffect } from "react";

function CollapseCard({ title, body }) {
	const [isVisible, setIsVisible] = useState(false);
	const boxTextRef = useRef(0);

	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	useEffect(() => {
		const handleResize = () => {
			if (isVisible && boxTextRef.current) {
				boxTextRef.current.style.height = "auto";
			}
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	let chevronClass;
	let boxStyles;
	let boxHeight = boxTextRef.current.scrollHeight + 60;

	if (isVisible) {
		chevronClass = "fa-solid fa-chevron-down";
		boxStyles = {
			height: boxHeight,
			padding: "30px 15px",
			opacity: "1"
		};
	} else {
		chevronClass = "fa-solid fa-chevron-up";
		boxStyles = {
			height: "0px",
			padding: "0px 15px",
		};
	}

	return (
		<div className="box-information">
			<div onClick={toggleVisibility}>
				<p>{title}</p>
				<i className={chevronClass}></i>
			</div>
			<div className="box-text" style={boxStyles} ref={boxTextRef}>
				{body}
			</div>
		</div>
	);
}

export default CollapseCard;