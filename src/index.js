import React from "react";
import ReactDOM from "react-dom/client"; // Allow for interaction with DOM in the browser
import App from "./01-App";
import Game from "./02-Game";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		<Game />
	</React.StrictMode>
);
