import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Route from "./04-routing/react-router/Route.jsx";
import ErrorPage from "./04-routing/react-router/ErrorPage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Route />,
		errorElement: <ErrorPage />,
		children: [],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
