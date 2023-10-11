import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Layout from "./pages/layout";
import AllHousing from "./pages/all-housing";
import SingleRental from "./pages/single-rental";
import About from "./pages/about";
import NotFound from "./pages/404-not-found";

import "./index.css";

const baseURL = "/fiche-logement/";

const router = createBrowserRouter([
	{
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{
				path: "/",
				element: <AllHousing baseURL={baseURL} />,
			},
			{
				path: `${baseURL}:logementId`,
				element: <SingleRental />,
			},
			{
				path: "/a-propos",
				element: <About />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);

reportWebVitals();