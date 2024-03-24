import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Route, {
	loader as rootLoader,
	action as rootAction,
} from "./04-routing/react-router/Route.jsx";
import ErrorPage from "./04-routing/react-router/ErrorPage.jsx";
import Contact, {
	loader as contactLoader,
} from "./04-routing/react-router/Contact.jsx";
import EditContact, {
	action as editAction,
} from "./04-routing/react-router/EditContact.jsx";

// ref: https://stackoverflow.com/questions/74566649/createbrowserrouter-how-to-nest-child-routes-inside-another-route-that-itself-is/78214668#78214668
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/route",
				element: <Route />,
				loader: rootLoader,
				action: rootAction,
				children: [
					{
						path: "/route/contacts/:contactId",
						element: <Contact />,
						loader: contactLoader,
					},
					// We want it to be rendered in the root route's outlet, so we made it a sibling to the existing child route
					{
						path: "/route/contacts/:contactId/edit",
						element: <EditContact />,
						loader: contactLoader,
						action: editAction,
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
