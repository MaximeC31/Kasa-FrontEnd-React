import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Layout from "./pages/layout";
import Home from "./pages/home";
import FicheLogements from "./pages/fiche-logements";
import APropos from "./pages/a-propos";
import NotFound from "./pages/404";

import "./index.css";

import reportWebVitals from "./reportWebVitals";

const baseURL = "/fiche-logement/";

const router = createBrowserRouter([
	{
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{
				path: "/",
				element: <Home baseURL={baseURL}/>,
			},
			{
				path: `${baseURL}:logementId`,
				element: <FicheLogements />,
			},
			{
				path: "/a-propos",
				element: <APropos />,
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