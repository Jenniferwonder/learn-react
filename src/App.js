// 01-quick-start
import AboutPage from "./01-quick-start/AboutPage";
// import Conditional from "./01-quick-start/Conditional";
// import Lists from "./01-quick-start/Lists";
// import Click from "./01-quick-start/Click";
// import UpdateClick from "./01-quick-start/UpdateClick";

// import PicBg from "./pic-bg/PicBg";
// import EditProfile from "./edit-profile/EditProfile";
// import MailClient from "./letter-highlight/MailClient";
// import MailSelect from "./letter-select/MailSelect";
// import TaskApp from "./task-app/TaskApp";
// import HeadingApp from "./heading-context/HeadingApp";
// import PostApp from "./heading-post/PostApp";

/* 01-quick-start-ShareData
Update buttons (ShareData) together */
// import { useState } from "react";
// import ShareData from "./01-quick-start/ShareData";
/* export default function App() {
	const [count, setCount] = useState(0);
	function handleClick() {
		setCount(count + 1);
	}
	return (
		<div className="App">
			<ShareData count={count} onClick={handleClick} />
			<ShareData count={count} onClick={handleClick} />
		</div>
	);
} */

export default function App() {
	return (
		<>
			<h1>Welcome to my app</h1>
			<AboutPage />
			{/* <Conditional /> */}
			{/* <Lists /> */}
			{/* <Click /> */}
			{/* <UpdateClick />
			<UpdateClick /> */}
			{/* <Game /> */}
			{/* <PicBg /> */}
			{/* <EditProfile /> */}
			{/* <MailClient /> */}
			{/* <MailSelect /> */}
			{/* <TaskApp /> */}
			{/* <HeadingApp /> */}
			{/* <PostApp /> */}
		</>
	);
}
