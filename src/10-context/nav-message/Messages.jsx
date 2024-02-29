import { useContext } from "react";
import { AppContext } from "./Context";

export const Messages = () => {
	const { username } = useContext(AppContext);

	return (
		<div className="messages">
			<h1>Messages</h1>
			<p>1 message for {username}</p>
			<p className="message">useContext is awesome!</p>
		</div>
	);
};
